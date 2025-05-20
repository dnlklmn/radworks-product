<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  // Redirect to home page if not found
  onMount(() => {
    if ($page.status === 404) {
      goto('/', { replaceState: true });
    }
  });
</script>

<svelte:head>
  <title>Redirecting...</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="error-container">
  <h1>Redirecting to home page...</h1>
</div>

<style>
  .error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  }
</style>