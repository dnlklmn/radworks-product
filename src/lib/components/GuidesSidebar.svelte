<script lang="ts">
  import { page } from '$app/stores';
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  
  // Stores for tracking which section and subsection are active in the viewport
  export let activeSection = writable<string>('');
  export let activeSubSection = writable<string>('');

  // Props
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher<{
    navigate: {path: string, title: string};
    scrollToSection: {sectionId: string};
  }>();
  
  export let onNavigate: ((path: string, title: string) => void) | undefined = undefined;

  // Define types for our navigation structure
  type NavItem = {
    title: string;
    href: string;
    id?: string; // Optional ID for scrolling to specific sections
  };

  type NavSection = {
    title: string;
    href: string;
    items: NavItem[];
  };

  const navigationStore = writable<NavSection[]>([]);
  const loadingError = writable<string | null>(null);
  const isLoading = writable(true);

  // This will hold the expanded state of menu sections
  const expandedSections = writable<Record<string, boolean>>({});
  


  // Set the guides navigation structure
  function fetchGuidesContent() {
    isLoading.set(true);
    try {
      // Create a predefined navigation structure for all guides
      const sections = [
        {
          title: 'Getting Started',
          href: '#getting-started-guide',
          items: [
            { title: 'Prerequisites', href: '#getting-started-guide', id: 'prerequisites' },
            { title: 'Installation Steps', href: '#getting-started-guide', id: 'installation-steps' },
            { title: 'First Steps', href: '#getting-started-guide', id: 'first-steps' },
            { title: 'Collaboration', href: '#getting-started-guide', id: 'collaboration' }
          ] as NavItem[]
        },
        {
          title: 'Desktop App Guide',
          href: '#desktop-guide',
          items: [
            { title: 'Introduction', href: '#desktop-guide', id: 'introduction' },
            { title: 'Installation', href: '#desktop-guide', id: 'installation' },
            { title: 'Getting Started', href: '#desktop-guide', id: 'getting-started' }
          ] as NavItem[]
        },
        {
          title: 'Radicle Protocol',
          href: '#radicle-protocol',
          items: [
            { title: 'Protocol Overview', href: '#radicle-protocol', id: 'protocol-overview' },
            { title: 'Architecture', href: '#radicle-protocol', id: 'protocol-architecture' },
            { title: 'Security Model', href: '#radicle-protocol', id: 'protocol-security' }
          ] as NavItem[]
        },
        {
          title: 'Radicle Network',
          href: '#radicle-network',
          items: [
            { title: 'Network Overview', href: '#radicle-network', id: 'network-overview' },
            { title: 'Network Participants', href: '#radicle-network', id: 'network-participants' },
            { title: 'Network Interactions', href: '#radicle-network', id: 'network-interactions' }
          ] as NavItem[]
        },
        {
          title: 'Features',
          href: '#desktop-guide',
          items: [
            { title: 'Repository Management', href: '#desktop-guide', id: 'features' },
            { title: 'Issue Tracking', href: '#desktop-guide', id: 'features' },
            { title: 'Code Reviews', href: '#desktop-guide', id: 'features' }
          ] as NavItem[]
        },
        {
          title: 'FAQ',
          href: '#desktop-guide',
          items: [
            { title: 'Comparison with GitHub', href: '#desktop-guide', id: 'faq' },
            { title: 'Offline Usage', href: '#desktop-guide', id: 'faq' },
            { title: 'Open Source Status', href: '#desktop-guide', id: 'faq' },
            { title: 'Finding Repositories', href: '#desktop-guide', id: 'faq' }
          ] as NavItem[]
        }
      ];
      
      // Set up initial expanded states
      const initialExpandedState: Record<string, boolean> = {};
      sections.forEach(section => {
        initialExpandedState[section.title] = true;
      });
      
      expandedSections.set(initialExpandedState);
      navigationStore.set(sections);
    } catch (error: unknown) {
      console.error('Error setting guides content:', error);
      if (error instanceof Error) {
        loadingError.set(error.message);
      } else {
        loadingError.set('An unknown error occurred');
      }
    } finally {
      isLoading.set(false);
    }
  }

  function toggleSection(sectionTitle: string) {
    expandedSections.update(state => ({
      ...state,
      [sectionTitle]: !state[sectionTitle]
    }));
  }

  function handleItemClick(href: string, title: string, event: MouseEvent, sectionId?: string) {
    event.preventDefault();
    
    // Update the active section immediately for better user feedback
    $activeSection = href.startsWith('#') ? href.substring(1) : href;
    if (sectionId) {
      $activeSubSection = sectionId;
    }
    
    // If sectionId is provided, append it to the href for scrolling to specific section
    const fullPath = sectionId ? `${href}#${sectionId}` : href;
    
    // Dispatch the navigate event
    if (onNavigate) {
      onNavigate(fullPath, title);
    } else {
      dispatch('navigate', { path: fullPath, title });
    }
    
    // Dispatch a separate custom event for scrolling to the section
    if (sectionId) {
      // Custom event to trigger scrolling
      dispatch('scrollToSection', { sectionId });
    }
  }

  $: currentPath = $page.url.pathname;

  onMount(() => {
    fetchGuidesContent();
  });
</script>

<nav class="guides-sidebar">
  {#if $isLoading}
    <div class="loading">Loading guide navigation...</div>
  {:else if $loadingError}
    <div class="error">Error loading guide: {$loadingError}</div>
  {:else}
    <div class="navigation">
      {#each $navigationStore as section}
        <div class="section">
          <div class="section-header-container">
            <button 
              class="section-header" 
              on:click={(e) => {
                // Navigate to the section
                handleItemClick(section.href, section.title, e);
                // Also toggle the section's expanded state
                toggleSection(section.title);
              }}
              class:active={section.href === $activeSection}
              aria-expanded={$expandedSections[section.title] ? 'true' : 'false'}
            >
              <span>{section.title}</span>
              <span class="toggle-icon">{$expandedSections[section.title] ? '−' : '+'}</span>
            </button>
          </div>
          
          {#if $expandedSections[section.title]}
            <ul>
              {#each section.items as item}
                <li>
                  <a 
                    href={item.href}
                    class="nav-link"
                    class:active={(section.href === $activeSection) && (item.id === $activeSubSection)}
                    on:click={(e) => handleItemClick(section.href, item.title, e, item.id || item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}
                  >
                    {item.title}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</nav>

<style>
  .guides-sidebar {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    padding: 1.5rem 0;
    /* Ensure smooth scrolling */
    scroll-behavior: smooth;
  }
  


  /* Main styles for the sidebar content */

  .loading, .error {
    padding: 1rem 1.5rem;
    color: var(--color-foreground-contrast);
  }

  .error {
    color: #ef4444;
  }

  .navigation {
    padding: 0 0.5rem;
  }

  .section {
    margin-bottom: 1rem;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 0.375rem;
    transition: background-color 0.2s;
    width: 100%;
    text-align: left;
    border: none;
    background: none;
    font-size: inherit;
    color: var(--color-foreground-contrast);
  }

  .section-header:hover {
    background-color: var(--color-fill-separator);
  }

  .section-header.active {
    background-color: var(--color-fill-separator);
    color: var(--color-foreground-contrast);
  }

  .toggle-icon {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--color-foreground-contrast);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0.25rem 0 0.75rem 1rem;
  }

  .nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: var(--color-foreground-contrast);
    text-decoration: none;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    transition: all 0.2s ease;
  }

  .nav-link:hover {
    background-color: var(--color-fill-separator);
  }

  .nav-link.active {
    background-color: var(--color-fill-separator);
    color: var(--color-foreground-contrast);
    font-weight: 500;
    border-left: 3px solid var(--color-foreground-contrast);
  }
</style>