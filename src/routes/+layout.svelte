<script lang="ts">
  import '../app.css';
  import '../colors.css';
  import '../typography.css';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import { theme } from '../lib/theme';
  import { scrolled } from '../lib/stores';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  
  // Check if we're on the docs page
  const isDocsPage = $derived($page.url.pathname.startsWith('/docs'));

  onMount(() => {
    // Initialize theme from localStorage
    if (typeof theme.initialize === 'function') {
      theme.initialize();
    }
    
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', () => {
        scrolled.set(mainElement.scrollTop > 40);
      });
    }
    
    // Add a listener for theme changes to ensure the theme is properly applied
    const handleThemeChange = () => {
      if ($theme) {
        document.documentElement.setAttribute('data-theme', $theme);
      }
    };
    
    window.addEventListener('themechange', handleThemeChange);
    
    return () => {
      window.removeEventListener('themechange', handleThemeChange);
    };
  });

  $effect(() => {
    if ($theme) {
      document.documentElement.setAttribute('data-theme', $theme);
    }
  });
</script>

<style>
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
  }
  
  /* Only apply overflow hidden to body on docs page */
  :global(body.docs-page) {
    overflow: hidden;
  }
</style>

<svelte:body class:docs-page={isDocsPage} />
<main>
  <Header />
  <slot />
  {#if !$page.url.pathname.startsWith('/guides') && !$page.url.pathname.startsWith('/docs')}
    <Footer />
  {/if}
</main>