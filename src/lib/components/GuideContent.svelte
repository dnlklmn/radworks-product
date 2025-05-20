<script>
  import { onMount, afterUpdate } from "svelte";
  import { writable } from "svelte/store";
  import DesktopAppGuide from "./DesktopAppGuide.svelte";

  // Props passed from parent
  export let activeSection;
  export let activeSubSection = null;
  export let section;

  // Store for section tracking

  let contentElement;


  function handleContentUpdate() {
    if (contentElement) {
      // Check if we need to scroll to a specific section
      if (typeof window !== "undefined") {
        setTimeout(() => {
          const fragment = window.sessionStorage.getItem("scrollToFragment");
          if (fragment) {
            const targetElement = document.getElementById(fragment);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
              // Update active subsection
              $activeSubSection = fragment;
            }
            // Remove fragment from session storage after handling
            window.sessionStorage.removeItem("scrollToFragment");
          }

          // Update active section with current section
          $activeSection = section;

          // Re-setup intersection observer to track the new content
          setupIntersectionObserver();
        }, 100); // Small delay to ensure content is rendered
      }
    }
  }

  // Function to scroll to a specific section by ID
  export function scrollToSection(sectionId) {
    if (contentElement && sectionId) {
      // Simple direct ID match
      let targetElement = document.getElementById(sectionId);
      
      // If found, scroll to it
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        // Update active subsection
        $activeSubSection = sectionId;
      } else {
        console.warn(`Section with ID "${sectionId}" not found in content`);
        // Fallback: try to jump to the main section
        const mainSection = document.querySelector(`.desktop-app-guide`);
        if (mainSection) {
          mainSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }
  }

  // Watch for URL or section changes
  $: {
    // Make sure the active section is updated when the section changes
    $activeSection = section;
    setTimeout(handleContentUpdate, 0);
  }

  // Store a reference to the intersection observer
  let observer = null;

  // Set up the intersection observer to track which sections are in view
  function setupIntersectionObserver() {
    if (typeof window === "undefined" || !contentElement) return;

    // Clear any previous observer
    if (observer) {
      observer.disconnect();
      observer = null;
    }

    // Initialize new observer after content is loaded
    setTimeout(() => {
      // Set the current section based on the route
      $activeSection = section;

      // Find all section elements in the content
      const sections = contentElement.querySelectorAll("section");
      if (sections.length === 0) return;

      const options = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.3, // 30% of the section visible
      };

      // Create observer to track which section is in view
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              $activeSubSection = id;
              $activeSection = section; // Ensure active section stays updated
            }
          }
        });
      }, options);

      // Observe all sections
      sections.forEach(section => {
        if (section.id && observer) {
          observer.observe(section);
        }
      });
    }, 200); // Delay to ensure content is fully rendered
  }

  onMount(() => {
    setupIntersectionObserver();
    setTimeout(handleContentUpdate, 0);
    
    // Clean up observer on component destroy
    return () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    };
  });

  // Re-setup observer whenever content changes
  afterUpdate(() => {
    setupIntersectionObserver();
  });
</script>

<style>
  .guide-content {
    max-width: 900px;
    margin: 0 auto;
  }



  .content {
    font-size: 1rem;
    line-height: 1.75;
    color: var(--color-foreground-contrast);
  }

  .content :global(h1) {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 1rem 0 1.5rem;
    color: var(--color-foreground-contrast);
  }

  .content :global(.desktop-app-guide) {
    padding-left: 2rem;
    margin: 0 auto;
  }

  .content :global(.code-block) {
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .content :global(code) {
    font-family: var(--font-family-monospace);
    font-size: var(--font-size-small);
    line-height: 1.5;
  }

  .content :global(.desktop-app-guide section) {
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--color-fill-separator);
  }

  .content :global(.desktop-app-guide section:last-child) {
    border-bottom: none;
  }

  .content :global(h2) {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    color: var(--color-foreground-contrast);
  }

  .content :global(h3) {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1.5rem 0 1rem;
    color: var(--color-foreground-contrast);
  }

  .content :global(p) {
    margin: 0.25rem 0;
  }

  .content :global(ul),
  .content :global(ol) {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  .content :global(li) {
    margin: 0.5rem 0;
  }

  .content :global(a) {
    color: var(--color-foreground-emphasized);
    text-decoration: none;
  }

  .content :global(a:hover) {
    color: var(--color-foreground-emphasized-hover);
    text-decoration: underline;
  }

  .content :global(code) {
    background-color: var(--color-fill-separator);
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-size: 0.875em;
    font-family: ui-monospace, monospace;
    color: var(--color-foreground-contrast);
  }

  .content :global(pre) {
    background-color: var(--color-fill-float);
    color: var(--color-foreground-contrast);
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
  }

  .content :global(pre code) {
    background-color: transparent;
    padding: 0;
    color: inherit;
  }

  .content :global(blockquote) {
    border-left: 4px solid var(--color-fill-separator);
    margin: 1.5rem 0;
    padding-left: 1rem;
    color: var(--color-foreground-contrast);
    font-style: italic;
  }

  .content :global(hr) {
    border: 0;
    border-top: 1px solid var(--color-fill-separator);
    margin: 2rem 0;
  }

  .content :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
  }

  .content :global(th),
  .content :global(td) {
    padding: 0.75rem;
    border: 1px solid var(--color-fill-separator);
  }

  .content :global(th) {
    background-color: var(--color-fill-separator);
    font-weight: 600;
    color: var(--color-foreground-contrast);
  }
</style>

<div class="guide-content">
  <div class="content" bind:this={contentElement}>
    <DesktopAppGuide 
      {activeSection} 
      {activeSubSection} 
      on:scrollToSection={(e) => scrollToSection(e.detail.sectionId)} 
    />
  </div>
</div>
