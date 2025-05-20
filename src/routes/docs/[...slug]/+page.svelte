<script>
  import DocsPage from '../+page.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  
  // Get hash fragment if present
  const hash = $page.url.hash;
  const fragment = hash ? hash.substring(1) : null;

  // On mount, store the fragment to be used by the main docs component
  onMount(() => {
    if (typeof window !== 'undefined' && fragment) {
      window.sessionStorage.setItem('scrollToFragment', fragment);
    }
  });
</script>

<!-- We render the main docs page component -->
<DocsPage />