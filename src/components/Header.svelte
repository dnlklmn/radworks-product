<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { writable } from "svelte/store";
  import NakedButton from "./NakedButton.svelte";
  import Icon from "./Icon.svelte";
  import { theme } from "../lib/theme";
  import { scrolled } from "../lib/stores";
  import { onMount } from "svelte";

  // Store for mobile menu state
  const showMobileMenu = writable(false);

  function toggleTheme() {
    theme.set($theme === "dark" ? "light" : "dark");
  }

  function navigateTo(path: string) {
    // Close mobile menu immediately
    $showMobileMenu = false;
    
    // For navigation to root from docs page, we need special handling
    if (path === '/' && isDocsPage) {
      // Use window.location.href for a full page reload to avoid SPA navigation issues
      window.location.href = path;
      return;
    }
    
    // For other navigations, use goto with invalidateAll
    goto(path, {
      invalidateAll: true,
      replaceState: false
    });
    
    // Update the state after navigation
    if (path === "/docs") {
      isDocsPage = true;
      isHomePage = false;
    } else if (path === "/") {
      isDocsPage = false;
      isHomePage = true;
    }
  }

  function toggleMobileMenu(event: MouseEvent) {
    // Prevent event propagation to avoid the document click handler from immediately closing it
    event.stopPropagation();
    $showMobileMenu = !$showMobileMenu;
  }

  // Close menu when clicking outside
  function handleDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      $showMobileMenu &&
      target &&
      !target.closest(".mobile-menu") &&
      !target.closest(".mobile-toggle")
    ) {
      $showMobileMenu = false;
    }
  }

  onMount(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  });

  $: isDocsPage = $page.url.pathname.startsWith("/docs");
  $: isHomePage = $page.url.pathname === "/";
  
  // Force re-evaluation when the URL changes
  $: {
    $page.url.pathname;
    isDocsPage = $page.url.pathname.startsWith("/docs");
    isHomePage = $page.url.pathname === "/";
  }
</script>

<style>
  .header {
    z-index: 50;
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.5rem;
    background-color: var(--color-background-default);
    transition: box-shadow 0.325s;
    /* Ensure the header stays on top */
    z-index: 100;
  }
  
  .title {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-foreground-contrast);
  }
  
  .header-right {
    gap: 0.5rem;
    display: none;
    justify-content: space-between;
    align-items: center;
  }

  .mobile-toggle {
    display: none;
    position: relative;
    width: 40px;
    height: 40px;
    color: var(--color-foreground-contrast);
    font-size: 24px;
    cursor: pointer;
    border: none;
    background: transparent;
    padding: 0;
  }

  .mobile-toggle:hover,
  .mobile-toggle:focus {
    color: var(--color-foreground-emphasized);
  }

  .menu-icon,
  .close-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1;
  }

  .mobile-menu {
    display: flex;
    position: fixed;
    top: 56px;
    right: 0;
    width: 280px;
    bottom: 0;
    background-color: var(--color-background-default);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 40;
    box-shadow: 0 -4px 15px var(--color-shadow-light);
    flex-direction: column;
    padding: 1rem 0;
    border-left: 1px solid var(--color-fill-separator);
  }

  .mobile-menu.show {
    transform: translateX(0);
  }

  .mobile-menu-item {
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-foreground-contrast);
    background-color: transparent;
    border: none;
    text-align: left;
    font-size: var(--font-size-small);
    font-family: var(--font-family-sans);
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .mobile-menu-item:hover {
    background-color: var(--color-background-hover);
    color: var(--color-foreground-emphasized);
  }

  @media (min-width: 719.98px) {
    .header-right {
      display: flex;
    }
  }

  @media (max-width: 719.98px) {
    .mobile-toggle {
      display: flex;
    }
  }
</style>

<div
  class="header"
  style:box-shadow={`${$scrolled ? "0 4px 8px 0 rgba(0,0,0,0.075)" : "0 4px 8px 0 rgba(0,0,0,0)"}`}>
  <button 
    class="title" 
    on:click={() => navigateTo("/")} 
    style="cursor: pointer; background: none; border: none; padding: 0;"
    aria-label="Go to homepage">
    {#if isDocsPage}
      <span class="docs-title">← Desktop App Docs</span>
    {:else}
      RADWORKS
    {/if}
  </button>
  
  <!-- Desktop navigation menu -->
  <div class="header-right">
    <NakedButton variant="ghost" onclick={toggleTheme}>
      <Icon name={$theme === "dark" ? "moon" : "sun"}></Icon>
    </NakedButton>
    
    {#if !isDocsPage}
      <NakedButton
        onclick={() => window.open("https://radicle.xyz")}
        variant="ghost">
        <Icon size="16" name="seedling" />
        Radicle
      </NakedButton>
      <NakedButton
        variant="ghost"
        onclick={() => window.open("https://bsky.app/profile/radicle.xyz")}>
        <Icon size="16" name="bluesky" />
        Bluesky
      </NakedButton>
      <NakedButton
        onclick={() =>
          window.open(
            "https://radicle.zulipchat.com/#narrow/channel/369873-support",
          )}
        variant="ghost">
        <Icon size="16" name="zulip" />
        Support
      </NakedButton>
      <NakedButton
        onclick={() => navigateTo("/docs")}
        variant="ghost"
        active={isDocsPage}>
        <Icon size="16" name="docs" />
        Docs
      </NakedButton>
    {/if}
  </div>
  
  <!-- Mobile menu toggle button - only on home page -->
  {#if isHomePage}
    <button
      class="mobile-toggle"
      on:click={toggleMobileMenu}
      aria-label="Toggle mobile menu"
      aria-expanded={$showMobileMenu}>
      {#if $showMobileMenu}
        <span class="close-icon">✕</span>
      {:else}
        <span class="menu-icon">☰</span>
      {/if}
    </button>
  {/if}
</div>

<!-- Mobile navigation menu - only on home page -->
{#if isHomePage}
  <div class="mobile-menu" class:show={$showMobileMenu}>
    <button class="mobile-menu-item" on:click={() => navigateTo("/docs")}>
      <Icon size="16" name="docs" />
      Docs
    </button>
    <button class="mobile-menu-item" on:click={() => window.open("https://radicle.zulipchat.com/#narrow/channel/369873-support")}>
      <Icon size="16" name="zulip" />
      Support
    </button>
    <button class="mobile-menu-item" on:click={() => window.open("https://bsky.app/profile/radicle.xyz")}>
      <Icon size="16" name="bluesky" />
      Bluesky
    </button>
    <button class="mobile-menu-item" on:click={() => window.open("https://radicle.xyz")}>
      <Icon size="16" name="seedling" />
      Radicle
    </button>
    <button class="mobile-menu-item" on:click={() => toggleTheme()}>
      <Icon name={$theme === "dark" ? "moon" : "sun"} size="16" />
      {$theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  </div>
{/if}
