<script>
  import { page } from "$app/stores";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";

  // Stores for tracking which section and subsection are active in the viewport
  export let activeSection = writable("");
  export let activeSubSection = writable("");

  // Props
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let onNavigate = undefined;

  const navigationStore = writable([]);

  const expandedSections = writable({});

  // Set the guides navigation structure directly
  const sections = [
    {
      title: "Getting Started",
      href: "desktop-guide",
      items: [
        { title: "Overview", id: "getting-started", href: "desktop-guide" },
        { title: "Installation", id: "installation", href: "desktop-guide" },
        {
          title: "Build from Source",
          id: "build-from-source",
          href: "desktop-guide",
        },
        { title: "Prerequisites", id: "prerequisites", href: "desktop-guide" },
      ],
    },
    {
      title: "Desktop App",
      href: "desktop-guide",
      items: [
        {
          title: "First Steps",
          id: "first-steps",
          href: "desktop-guide",
        },
        { title: "Issues", id: "features", href: "desktop-guide" },
        { title: "Patches", id: "patches", href: "desktop-guide" },
        { title: "Code Review", id: "code-review", href: "desktop-guide" },
        { title: "Inbox", id: "inbox", href: "desktop-guide" },
      ],
    },
    {
      title: "Radicle CLI",
      href: "desktop-guide",
      items: [
        {
          title: "First Steps",
          id: "first-steps",
          href: "desktop-guide",
        },
        { title: "Radicle Node", id: "radicle-node", href: "desktop-guide" },
        {
          title: "Radicle Storage",
          id: "radicle-storage",
          href: "desktop-guide",
        },
      ],
    },
    {
      title: "FAQ",
      href: "desktop-guide",
      items: [
        { title: "Comparison with GitHub", id: "faq", href: "desktop-guide" },
        { title: "Offline Usage", id: "faq", href: "desktop-guide" },
        { title: "Open Source Status", id: "faq", href: "desktop-guide" },
        { title: "Finding Repositories", id: "faq", href: "desktop-guide" },
      ],
    },
  ];

  // Initialize expanded state
  const initialExpandedState = {};
  sections.forEach(section => {
    initialExpandedState[section.title] = true;
  });

  expandedSections.set(initialExpandedState);
  navigationStore.set(sections);

  function toggleSection(sectionTitle) {
    expandedSections.update(state => ({
      ...state,
      [sectionTitle]: !state[sectionTitle],
    }));
  }

  function handleItemClick(href, title, event, sectionId) {
    event.preventDefault();

    // Always set activeSection to desktop-guide
    $activeSection = "desktop-guide";
    if (sectionId) {
      $activeSubSection = sectionId;
    }

    // We only care about the hash fragment now
    const fullPath = sectionId ? `desktop-guide#${sectionId}` : "desktop-guide";

    // Dispatch the navigate event
    if (onNavigate) {
      onNavigate(fullPath, title);
    } else {
      dispatch("navigate", { path: fullPath, title });
    }

    // Dispatch a separate custom event for scrolling to the section
    if (sectionId) {
      // Custom event to trigger scrolling
      dispatch("scrollToSection", { sectionId });
    }
  }

  $: currentPath = $page.url.pathname;

  // Navigation is already initialized directly
</script>

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
  }
  .nav-link.active:hover {
    background-color: var(--color-fill-separator);
  }
</style>

<nav class="guides-sidebar">
  <div class="navigation">
    {#each $navigationStore as section}
      <div class="section">
        <div class="section-header-container">
          <button
            class="section-header"
            on:click={e => {
              // Navigate to the section
              handleItemClick(section.href, section.title, e);
              // Also toggle the section's expanded state
              toggleSection(section.title);
            }}
            class:active={section.href === $activeSection}
            aria-expanded={$expandedSections[section.title] ? "true" : "false"}>
            <span>{section.title}</span>
            <span class="toggle-icon">
              {$expandedSections[section.title] ? "−" : "+"}
            </span>
          </button>
        </div>

        {#if $expandedSections[section.title]}
          <ul>
            {#each section.items as item}
              <li>
                <a
                  href={item.href}
                  class="nav-link"
                  class:active={section.href === $activeSection &&
                    item.id === $activeSubSection}
                  on:click={e =>
                    handleItemClick(
                      section.href,
                      item.title,
                      e,
                      item.id ||
                        item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                    )}>
                  {item.title}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </div>
</nav>
