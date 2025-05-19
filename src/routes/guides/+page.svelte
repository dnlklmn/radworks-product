<script lang="ts">
  import { writable } from 'svelte/store';
  import GuidesSidebar from '$lib/components/GuidesSidebar.svelte';
  import GuideContent from '$lib/components/GuideContent.svelte';
  import { page } from '$app/stores';

  // Get the showMobileSidebar store from the parent layout
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  const showMobileSidebar = getContext<Writable<boolean>>('showMobileSidebar');

  // Store the currently selected guide content
  const currentUrl = writable('https://radicle.xyz/guides/user');
  const currentSection = writable('');
  const currentTitle = writable('Radicle Desktop App Guide');
  
  // Stores for tracking active section and subsection in viewport
  const activeSection = writable('');
  const activeSubSection = writable('');
  
  // Reference to the GuideContent component for calling its methods
  let guideContentRef: GuideContent | undefined;

  // Handle navigation from the sidebar
  function handleNavigation(url: string, title: string) {
    // Check if the URL contains a hash fragment for scrolling
    const [baseUrl, fragment] = url.split('#');
    
    // Set the section ID for content selection (without the # prefix)
    currentSection.set(baseUrl.startsWith('#') ? baseUrl.substring(1) : baseUrl);
    currentTitle.set(title);
    
    // Store the fragment for scrolling after content loads
    if (fragment) {
      window.sessionStorage.setItem('scrollToFragment', fragment);
    } else {
      window.sessionStorage.removeItem('scrollToFragment');
    }
    
    // Update the URL without page refresh
    const newUrl = `/guides?section=${encodeURIComponent(baseUrl)}&title=${encodeURIComponent(title)}${fragment ? '#' + fragment : ''}`;
    window.history.pushState({ url: baseUrl, title, fragment }, title, newUrl);
  }

  // Handle browser back/forward navigation
  function handlePopState(event: PopStateEvent) {
    if (event.state) {
      const url = event.state.url || '';
      currentSection.set(url.startsWith('#') ? url.substring(1) : url);
      currentTitle.set(event.state.title || 'Radicle Guide');
      
      // Handle fragment scroll if present
      if (event.state.fragment) {
        window.sessionStorage.setItem('scrollToFragment', event.state.fragment);
      } else {
        window.sessionStorage.removeItem('scrollToFragment');
      }
    }
  }

  // Get initial section from URL if present
  function initFromQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section');
    const title = urlParams.get('title');
    
    if (section) {
      currentSection.set(section.startsWith('#') ? section.substring(1) : section);
    }
    
    if (title) {
      currentTitle.set(title);
    }
    
    // Check for hash fragment in URL
    if (window.location.hash) {
      const fragment = window.location.hash.substring(1); // Remove the # character
      if (fragment) {
        window.sessionStorage.setItem('scrollToFragment', fragment);
      }
    }
  }

  // Initialize from URL and set up popstate handler
  if (typeof window !== 'undefined') {
    initFromQueryParams();
    window.addEventListener('popstate', handlePopState);
  }
</script>

<svelte:head>
  <title>{$currentTitle} | Radworks</title>
</svelte:head>

<div class="guides-container">
  <aside class="guides-sidebar" class:show-mobile={$showMobileSidebar}>
    <GuidesSidebar 
      onNavigate={handleNavigation} 
      activeSection={activeSection}
      activeSubSection={activeSubSection}
      on:navigate={e => handleNavigation(e.detail.path, e.detail.title)}
      on:scrollToSection={e => guideContentRef?.scrollToSection(e.detail.sectionId)}
    />
  </aside>
  
  <main class="guides-content">
    <GuideContent 
      bind:this={guideContentRef}
      section={$currentSection}
      activeSection={activeSection}
      activeSubSection={activeSubSection}
    />
  </main>
</div>

<style>
  .guides-container {
    display: grid;
    padding-right: 2rem;
    grid-template-columns: 280px 1fr;
    width: 100%;
    /* Fix height issue with vertical scrolling */
    height: calc(100vh - 56px);
    overflow: hidden; /* Prevent container scrolling, let children scroll */
    background-color: var(--color-background-default);
  }

  .guides-sidebar {
    background-color: var(--color-background-default);
    border-right: 1px solid var(--color-fill-separator);
    height: calc(100vh - 56px); /* Full viewport height minus header */
    position: sticky;
    top: 56px; /* Header height */
    overflow-y: auto;
    z-index: 10;
  }

  .guides-content {
    overflow-y: auto;
    height: calc(100vh - 56px); /* Full viewport height minus header */
    background-color: var(--color-background-default);
    color: var(--color-foreground-contrast);
  }

  @media (max-width: 768px) {
    .guides-container {
      grid-template-columns: 1fr;
    }

    .guides-sidebar {
      position: fixed;
      top: 56px;
      left: 0;
      right: 0;
      bottom: 0;
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      z-index: 40;
    }

    .guides-sidebar.show-mobile {
      transform: translateX(0);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }
  }
</style>