<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { mount } from "svelte";
  import Command from "../../components/Command.svelte";
  import Download from "../../components/Download.svelte";
  import guideContent from "../content/desktop-app-guide.md?raw";
  
  // Import images from the static directory for Vercel compatibility
  import { base } from '$app/paths';
  
  // We'll use the $lib/content directory for images and access them through the static asset handling
  
  const dispatch = createEventDispatcher();
  
  export let activeSection: string = '';
  let renderedContent: string = '';
  
  // Store bash commands for rendering as components
  let bashCommands: string[] = [];
  
  // Function to scroll to a specific section
  export function navigateToSection(sectionId: string) {
    console.log(`DesktopAppGuide: Navigating to section: ${sectionId}`);
    
    // Wait for the DOM to be ready
    setTimeout(() => {
      // Try to find the section with the given ID
      let targetElement = document.getElementById(sectionId);
      
      if (!targetElement) {
        // Try to find a section that contains the ID
        targetElement = document.querySelector(`section[id="${sectionId}"]`);
      }
      
      if (!targetElement) {
        // Try to find a heading that would generate this ID
        const headings = document.querySelectorAll('h1, h2, h3');
        for (const heading of headings) {
          const text = heading.textContent || '';
          const generatedId = text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
          
          if (generatedId === sectionId) {
            // Find the parent section if possible
            let parent = heading.parentElement;
            while (parent && parent.tagName !== 'SECTION' && parent !== document.body) {
              parent = parent.parentElement;
            }
            
            if (parent && parent.tagName === 'SECTION') {
              targetElement = parent;
            } else {
              targetElement = heading;
            }
            break;
          }
        }
      }
      
      if (targetElement) {
        console.log('Found target element:', targetElement);
        // Scroll the element into view
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.warn(`Could not find section with ID: ${sectionId}`);
        // Dispatch the event anyway in case a parent component wants to handle it
        dispatch("scrollToSection", { sectionId });
      }
    }, 50);
  }
  
  // Direct HTML rendering of markdown content
  function renderMarkdown() {
    // Store bash commands for later insertion
    bashCommands = [];
    
    // Create a placeholder for the Download component
    const downloadPlaceholderId = 'download-component-placeholder';
    
    // Replace the download component comment with a placeholder div
    let html = guideContent.replace('<!-- Download component will be inserted here -->', `<div id="${downloadPlaceholderId}"></div>`);
    
    // Process headings with IDs for navigation
    html = html.replace(/^(#{1,6})\s+(.+)$/gm, (match, hashes, content) => {
      const level = hashes.length;
      const id = content.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      return `<h${level} id="${id}">${content}</h${level}>`;
    });
    
    // Process bash code blocks - extract commands and replace with placeholder
    html = html.replace(/```bash\n([\s\S]*?)```/g, (match, codeContent) => {
      const commands = codeContent.trim().split('\n');
      const placeholderId = `bash-commands-${bashCommands.length}`;
      
      // Store commands for later rendering as actual Svelte components
      bashCommands.push(...commands);
      
      // Return a placeholder div that we'll replace with actual components later
      return `<div id="${placeholderId}" class="commands-placeholder" data-start-index="${bashCommands.length - commands.length}" data-end-index="${bashCommands.length}"></div>`;
    });
    
    // Process other code blocks
    html = html.replace(/```([a-z]*)\n([\s\S]*?)```/g, (match, language, code) => {
      // Skip bash blocks as they're already handled
      if (language === 'bash') return match;
      
      // Escape HTML in the code content
      const escapedCode = code.trim()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      
      return `<div class="code-block">
        <pre><code class="language-${language}">${escapedCode}</code></pre>
      </div>`;
    });
    
    // Process bold text
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    
    // Process lists
    html = html.replace(/^\s*-\s+(.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*?<\/li>\s*)+/gs, '<ul>$&</ul>');
    
    // Process paragraphs (lines that aren't already HTML)
    html = html.replace(/^(?!<h|<ul|<li|<div|<pre|<code|<strong)[^\n]+$/gm, '<p>$&</p>');
    
    // Process images - replace relative paths with proper URLs that work in production and development
    html = html.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, (match, alt, src) => {
      // Handle both full paths and relative paths
      if (!src.startsWith('http://') && !src.startsWith('https://')) {
        // If it's already a full path starting with src/lib/content, extract just the filename
        if (src.startsWith('src/lib/content/')) {
          const filename = src.split('/').pop();
          return `<img src="${base}/images/${filename}" alt="${alt}" class="guide-image" />`;
        } else {
          // Otherwise, assume it's a relative path to an image in the content directory
          return `<img src="${base}/images/${src}" alt="${alt}" class="guide-image" />`;
        }
      }
      // For external URLs, return as is
      return `<img src="${src}" alt="${alt}" class="guide-image" />`;
    });
    
    // Process links (after images to avoid conflicts)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    
    // Wrap sections
    html = addSectionTags(html);
    
    return html;
  }
  
  // Function to wrap content in section tags based on headings
  function addSectionTags(html: string): string {
    // Create a temporary div to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    // Get all headings
    const headings = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    // Process each heading to create sections
    headings.forEach((heading) => {
      // Get the heading level (1-6)
      const level = parseInt(heading.tagName.substring(1));
      
      // Create a section element
      const section = document.createElement('section');
      
      // Set id from heading for navigation
      section.id = heading.id || '';
      
      // Add appropriate classes
      if (level === 2) {
        section.classList.add('paragraph');
      }
      
      // Get all elements that should be in this section (until the next heading of same or higher level)
      let nextSibling = heading.nextElementSibling;
      const elementsToMove = [];
      
      while (nextSibling) {
        const isHeading = nextSibling.tagName.match(/^H(\d)$/);
        if (isHeading) {
          const nextLevel = parseInt(nextSibling.tagName.substring(1));
          if (nextLevel <= level) break; // Stop if we hit a heading of same or higher level
        }
        elementsToMove.push(nextSibling);
        nextSibling = nextSibling.nextElementSibling;
      }
      
      // Move the heading and its content to the section
      section.appendChild(heading.cloneNode(true));
      elementsToMove.forEach(el => section.appendChild(el.cloneNode(true)));
      
      // Replace the original heading with the section
      if (heading.parentNode) {
        heading.parentNode.insertBefore(section, heading);
        heading.remove();
        elementsToMove.forEach(el => el.remove());
      }
    });
    
    return tempDiv.innerHTML;
  }
  
  // Function to handle theme changes
  function handleThemeChange() {
    // Re-apply styles to dynamically created elements
    const guideElement = document.getElementById('desktop-guide');
    if (guideElement) {
      // Update command styling
      const commandWrappers = guideElement.querySelectorAll('.command-wrapper');
      commandWrappers.forEach(wrapper => {
        const htmlWrapper = wrapper as HTMLElement;
        htmlWrapper.style.backgroundColor = 'var(--color-background-float, #f5f5f5)';
        htmlWrapper.style.color = 'var(--color-foreground-contrast, #333)';
        htmlWrapper.style.border = '1px solid var(--color-fill-separator, #e0e0e0)';
      });
      
      // Update copy button styling
      const copyButtons = guideElement.querySelectorAll('.copy-button');
      copyButtons.forEach(button => {
        const htmlButton = button as HTMLElement;
        htmlButton.style.backgroundColor = 'var(--color-fill-ghost, #0066cc)';
        htmlButton.style.color = 'var(--color-foreground-contrast, #fff)';
      });
      
      // Update code block styling
      const codeBlocks = guideElement.querySelectorAll('.code-block');
      codeBlocks.forEach(block => {
        const htmlBlock = block as HTMLElement;
        htmlBlock.style.backgroundColor = 'var(--color-fill-subtle, #f5f5f5)';
        htmlBlock.style.border = '2px solid var(--color-fill-separator, #e0e0e0)';
      });
    }
  }
  
  onMount(() => {
    // Render the markdown content directly
    renderedContent = renderMarkdown();
    
    // Listen for theme changes
    window.addEventListener('themechange', handleThemeChange);
    
    // Cleanup function to remove event listener when component is destroyed
    return () => {
      window.removeEventListener('themechange', handleThemeChange);
    };
  });
  
  // After rendering, insert components and ensure code blocks are visible
  onMount(() => {
    setTimeout(() => {
      const guideElement = document.getElementById('desktop-guide');
      if (guideElement) {
        console.log('Checking for code blocks in the DOM');
        
        // Find all code blocks and ensure they're visible
        const codeBlocks = guideElement.querySelectorAll('.code-block');
        console.log(`Found ${codeBlocks.length} code blocks in the DOM`);
        
        // Insert the Download component
        const downloadPlaceholder = guideElement.querySelector('#download-component-placeholder');
        if (downloadPlaceholder) {
          console.log('Found download component placeholder');
          
          // Create the Download component using Svelte 5's mount function
          mount(Download, {
            target: downloadPlaceholder,
            props: {
              hidesourcecode: true
            }
          });
        }
        
        // Find all bash command placeholders and insert actual Command components
        const commandPlaceholders = guideElement.querySelectorAll('.commands-placeholder');
        console.log(`Found ${commandPlaceholders.length} command placeholders`);
        
        commandPlaceholders.forEach(placeholder => {
          // Get the command indices from data attributes
          const startIndex = parseInt(placeholder.getAttribute('data-start-index') || '0');
          const endIndex = parseInt(placeholder.getAttribute('data-end-index') || '0');
          
          // Create a container for the commands
          const commandsContainer = document.createElement('div');
          commandsContainer.className = 'commands';
          
          // Get the commands for this placeholder
          const commands = bashCommands.slice(startIndex, endIndex);
          
          // For each command, create a Command component manually
          commands.forEach(cmd => {
            // Create a container for the Command component
            const commandContainer = document.createElement('div');
            commandContainer.style.width = '100%';
            commandContainer.style.margin = '0.5rem 0';
            
            // Mount the Command component
            mount(Command, {
              target: commandContainer,
              props: {
                command: cmd,
                fullWidth: true
              }
            });
            
            // Add to container
            commandsContainer.appendChild(commandContainer);
          });
          
          // Replace the placeholder with the commands container
          placeholder.parentNode?.replaceChild(commandsContainer, placeholder);
        });
      }
    }, 100);
  });
</script>

<style>
  /* These styles will apply to the rendered markdown content */
  :global(.desktop-app-guide) {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 0;
    line-height: 1.8;
  }

  :global(.desktop-app-guide h1) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    margin-top: 2.5rem;
  }

  :global(.desktop-app-guide h2) {
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  :global(.desktop-app-guide h3) {
    font-size: 1.5rem;
    margin-top: 2.5rem;
    margin-bottom: 1.2rem;
  }

  :global(.desktop-app-guide p) {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }

  :global(.desktop-app-guide ul),
  :global(.desktop-app-guide ol) {
    margin: 1rem 0 2rem 2rem;
    line-height: 1.8;
  }

  :global(.desktop-app-guide li) {
    margin-bottom: 0.8rem;
  }

  :global(.desktop-app-guide section) {
    margin-bottom: 4rem;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid var(--color-fill-separator);
  }

  :global(.desktop-app-guide section:last-child) {
    border-bottom: none;
  }

  :global(.desktop-app-guide .commands) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    margin: 1rem 0 1.5rem;
  }
  
  :global(.desktop-app-guide pre) {
    background-color: #f5f5f5;
    border-radius: 4px;
    padding: 1rem;
    overflow-x: auto;
    margin: 1rem 0;
  }
  
  :global(.desktop-app-guide code) {
    font-family: monospace;
    font-size: 0.9em;
  }
  
  :global(.desktop-app-guide .code-block) {
    margin: 1.5rem 0;
    border: 2px solid var(--color-fill-separator, #e0e0e0);
    border-radius: 4px;
    display: block !important;
    visibility: visible !important;
    background-color: var(--color-fill-subtle, #f5f5f5) !important;
  }
  
  :global(.desktop-app-guide .visible-code-block) {
    display: block !important;
    visibility: visible !important;
    background-color: var(--color-fill-subtle, #f5f5f5) !important;
  }
  
  :global(.desktop-app-guide strong) {
    font-weight: bold;
  }
  
  :global(.desktop-app-guide pre) {
    margin: 0;
    padding: 1rem;
    overflow-x: auto;
    background-color: var(--color-fill-subtle, #f5f5f5) !important;
    color: var(--color-foreground-contrast, #333) !important;
  }
  
  :global(.desktop-app-guide code) {
    font-family: monospace;
    font-size: 0.9em;
    display: block !important;
    visibility: visible !important;
    color: var(--color-foreground-contrast, #333) !important;
  }
  
  :global(.desktop-app-guide .command-wrapper) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
    padding: 0.75rem 1rem;
    background-color: var(--color-background-float, #f5f5f5);
    color: var(--color-foreground-contrast, #333);
    border-radius: 4px;
    font-family: monospace;
    border: 1px solid var(--color-fill-separator, #e0e0e0);
  }
  
  :global(.desktop-app-guide .command-text) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    min-width: 0;
  }
  
  :global(.desktop-app-guide .copy-button) {
    background-color: var(--color-fill-ghost, #0066cc);
    color: var(--color-foreground-inverse, #fff);
    border: none;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    margin-left: 0.5rem;
    cursor: pointer;
    font-size: 0.8rem;
    transition: background-color 0.2s ease;
    min-width: 60px;
  }
  
  :global(.desktop-app-guide .copy-button:hover) {
    background-color: var(--color-fill-ghost-hover, #0055aa);
  }
  
  :global(.desktop-app-guide .guide-image) {
    max-width: 100%;
    border: 1px solid var(--color-border-hint);
    height: auto;
    border-radius: 8px;
    margin: 1.5rem 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: block;
  }
</style>

<div id="desktop-guide" class="desktop-app-guide">
  {#if renderedContent}
    {@html renderedContent}
  {:else}
    <p>Loading content...</p>
  {/if}
</div>
