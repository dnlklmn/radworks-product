<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import guideContent from "../content/desktop-app-guide.md?raw";

  export let activeSection: string = "";

  const dispatch = createEventDispatcher();

  interface HeadingItem {
    id: string;
    title: string;
    level: number;
  }

  let headings: HeadingItem[] = [];

  // Parse the markdown content to extract headings
  onMount(() => {
    headings = extractHeadingsFromMarkdown(guideContent);
    
    // Set the first heading as active if none is set
    if (headings.length > 0 && !activeSection) {
      activeSection = headings[0].id;
    }
  });

  // Function to extract all headings from markdown
  function extractHeadingsFromMarkdown(markdown: string): HeadingItem[] {
    const lines = markdown.split('\n');
    const extractedHeadings: HeadingItem[] = [];
    
    // Regular expressions for headings
    const h1Regex = /^# (.+)$/;
    const h2Regex = /^## (.+)$/;
    const h3Regex = /^### (.+)$/;
    
    lines.forEach(line => {
      let match;
      let level = 0;
      let title = '';
      
      if ((match = h1Regex.exec(line))) {
        level = 1;
        title = match[1];
      } else if ((match = h2Regex.exec(line))) {
        level = 2;
        title = match[1];
      } else if ((match = h3Regex.exec(line))) {
        level = 3;
        title = match[1];
      }
      
      if (level > 0 && title) {
        // Create ID from title
        const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        
        extractedHeadings.push({
          id,
          title,
          level
        });
      }
    });
    
    return extractedHeadings;
  }

  function handleClick(sectionId: string) {
    activeSection = sectionId;
    
    // Try to find the target element
    const targetElement = findTargetElement(sectionId);
    
    // If found, scroll to it
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  // Helper function to find the target element
  function findTargetElement(sectionId: string): HTMLElement | null {
    // Try by direct ID
    let element = document.getElementById(sectionId);
    if (element) return element;
    
    // Try by section with matching ID
    element = document.querySelector(`section[id="${sectionId}"]`);
    if (element) return element;
    
    // Try by heading with matching ID
    element = document.querySelector(`h1[id="${sectionId}"], h2[id="${sectionId}"], h3[id="${sectionId}"]`);
    if (element) return element;
    
    // Try by heading text
    const allHeadings = document.querySelectorAll('h1, h2, h3');
    for (const heading of Array.from(allHeadings)) {
      const text = heading.textContent || '';
      const generatedId = text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      
      if (generatedId === sectionId) {
        return heading as HTMLElement;
      }
    }
    
    return null;
  }
</script>

<style>
  .sidebar {
    width: 280px;
    background-color: var(--color-background-float);
    padding: 1.5rem 0;
    overflow-y: auto;
    height: 100%;
    border-right: 1px solid var(--color-fill-separator);
  }

  .sidebar-title {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0 1.5rem 1rem;
    color: var(--color-foreground-emphasized);
    border-bottom: 1px solid var(--color-fill-separator);
    margin-bottom: 1rem;
  }

  .toc-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .toc-item {
    width: 100%;
  }

  .toc-link {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.875rem;
    color: var(--color-foreground-contrast);
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
    border-left: 3px solid transparent;
  }

  .toc-link:hover {
    background-color: var(--color-background-hover);
    color: var(--color-foreground-emphasized);
    transform: translateX(2px);
  }

  .toc-link.active {
    color: var(--color-foreground-emphasized);
    background-color: var(--color-background-active);
    font-weight: 500;
    border-left: 3px solid var(--color-fill-primary);
  }

  .level-1 {
    font-size: 1rem;
    font-weight: 600;
  }

  .level-2 {
    font-size: 0.9rem;
    padding-left: 1.5rem;
  }

  .level-3 {
    padding-left: 2.5rem;
    font-size: 0.8125rem;
  }
</style>

<div class="sidebar">
  <ul class="toc-list">
    {#each headings as heading}
      <li class="toc-item">
        <div 
          class="toc-link {activeSection === heading.id ? 'active' : ''}"
          class:level-1={heading.level === 1}
          class:level-2={heading.level === 2}
          class:level-3={heading.level === 3}
          on:click={() => handleClick(heading.id)}>
          {heading.title}
        </div>
      </li>
    {/each}
  </ul>
</div>