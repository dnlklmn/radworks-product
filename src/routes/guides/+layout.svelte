<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { setContext } from "svelte";

  const showMobileSidebar = writable(false);

  // Make the showMobileSidebar store available to child components
  setContext("showMobileSidebar", showMobileSidebar);

  function toggleMobileSidebar() {
    $showMobileSidebar = !$showMobileSidebar;
  }

  // Close sidebar when clicking outside on mobile
  function handleDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      $showMobileSidebar &&
      target &&
      !target.closest(".guides-sidebar") &&
      !target.closest(".mobile-toggle")
    ) {
      $showMobileSidebar = false;
    }
  }

  onMount(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  });
</script>

<style>
  .mobile-toggle {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--color-fill-primary);
    color: var(--color-foreground-contrast);
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    z-index: 50;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: none;
    transition:
      transform 0.2s,
      background-color 0.2s;
  }

  .mobile-toggle:hover,
  .mobile-toggle:focus {
    background-color: var(--color-fill-primary-hover);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .mobile-toggle {
      display: flex;
    }
  }
</style>

<slot />

<button
  class="mobile-toggle"
  on:click={toggleMobileSidebar}
  aria-label="Toggle sidebar">
  {#if $showMobileSidebar}
    <span class="close-icon">✕</span>
  {:else}
    <span class="menu-icon">☰</span>
  {/if}
</button>
