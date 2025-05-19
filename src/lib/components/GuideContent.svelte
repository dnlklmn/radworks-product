<script lang="ts">
  import { onMount, afterUpdate } from 'svelte';
  import { writable } from 'svelte/store';
  

  
  // Props for the active section tracking
  export let activeSection = writable<string>('');
  export let activeSubSection = writable<string>('');

  export let section: string = '';

  const content = writable('');
  const isLoading = writable(true);
  const loadingError = writable<string | null>(null);

  let contentElement: HTMLElement;

  async function fetchGuideContent() {
    isLoading.set(true);
    // Update active section as soon as we start loading content
    $activeSection = section;
    try {
      let contentToDisplay = '';
      let sectionId = section;
      // Normalize section ID by removing # prefix if present
      if (sectionId && sectionId.startsWith('#')) {
        sectionId = sectionId.substring(1);
      }
      // Check which section to display based on the section parameter
      console.log('Loading content for normalized section:', sectionId);
      if (sectionId === 'radicle-protocol') {
        contentToDisplay = `
          <div class="guide-section">
            <h1>Radicle Protocol</h1>
            
            <section id="protocol-overview">
              <h2>What is the Radicle Protocol?</h2>
              <p>The Radicle Protocol is a peer-to-peer stack for code collaboration built on Git. It enables developers to collaborate without relying on centralized platforms.</p>
              
              <p>Key aspects of the Radicle Protocol:</p>
              <ul>
                <li><strong>Git-compatible:</strong> Built on Git, extending its functionality for distributed collaboration</li>
                <li><strong>Peer-to-peer architecture:</strong> No central servers, all data is stored on your device and shared directly</li>
                <li><strong>Cryptographic identities:</strong> Uses public-key cryptography for secure, verifiable identities</li>
                <li><strong>Replication:</strong> Data gets replicated across the network for resilience and availability</li>
              </ul>
            </section>
            
            <section id="protocol-architecture">
              <h2>Protocol Architecture</h2>
              <p>The Radicle Protocol consists of several layers:</p>
              
              <h3>Storage Layer</h3>
              <p>At its core, Radicle uses Git's content-addressable storage model, extending it with:</p>
              <ul>
                <li>Signed Git references for identity verification</li>
                <li>Gossip-based replication to share repository data</li>
                <li>Merkle DAG structures for content integrity</li>
              </ul>
              
              <h3>Identity Layer</h3>
              <p>Radicle identities are:</p>
              <ul>
                <li>Based on Ed25519 cryptographic key pairs</li>
                <li>Self-sovereign - you control your identity</li>
                <li>Portable across devices</li>
                <li>Linked to Git commits and repository actions</li>
              </ul>
              
              <h3>Networking Layer</h3>
              <p>Communication in Radicle happens through:</p>
              <ul>
                <li>Direct peer connections</li>
                <li>Gossip protocols for data propagation</li>
                <li>Seed nodes for discovery and availability</li>
              </ul>
            </section>
            
            <section id="protocol-security">
              <h2>Security Model</h2>
              <p>Radicle's security is built on:</p>
              <ul>
                <li><strong>Cryptographic verification:</strong> All operations are signed and verified</li>
                <li><strong>Local-first approach:</strong> Your data remains on your device first</li>
                <li><strong>Trust through connectivity:</strong> You choose which peers to connect with</li>
                <li><strong>Content addressability:</strong> Data integrity is ensured through cryptographic hashing</li>
              </ul>
            </section>
          </div>
        `;
      } else if (sectionId === 'radicle-network') {
        contentToDisplay = `
          <div class="guide-section">
            <h1>Radicle Network</h1>
            
            <section id="network-overview">
              <h2>Understanding the Radicle Network</h2>
              <p>The Radicle Network is a peer-to-peer network of nodes that collectively store, validate, and share code repositories and collaboration data. Unlike centralized platforms, there is no single point of control or failure.</p>
              
              <p>The network is designed to be:</p>
              <ul>
                <li><strong>Resilient:</strong> Data is replicated across multiple nodes</li>
                <li><strong>Censorship-resistant:</strong> No central authority can remove or block content</li>
                <li><strong>Self-sovereign:</strong> Users maintain full control over their identities and data</li>
                <li><strong>Open:</strong> Anyone can join and participate in the network</li>
              </ul>
            </section>
            
            <section id="network-participants">
              <h2>Network Participants</h2>
              
              <h3>Nodes</h3>
              <p>Every Radicle Desktop user runs a node that:</p>
              <ul>
                <li>Stores their own repositories and data they're interested in</li>
                <li>Connects to other nodes to share and receive updates</li>
                <li>Verifies the integrity and authenticity of data</li>
              </ul>
              
              <h3>Seeds</h3>
              <p>Seeds are special nodes that:</p>
              <ul>
                <li>Maintain high availability</li>
                <li>Help with discovery of other peers</li>
                <li>Improve network connectivity</li>
                <li>Replicate repositories for availability</li>
              </ul>
              <p>Anyone can run a seed to support the network.</p>
            </section>
            
            <section id="network-interactions">
              <h2>Network Interactions</h2>
              <p>When using Radicle, these network interactions happen:</p>
              <ol>
                <li><strong>Publishing:</strong> When you push to Radicle, your changes are stored locally and made available to peers</li>
                <li><strong>Discovery:</strong> Other users can find your repositories through seeds or by exchanging repository IDs</li>
                <li><strong>Replication:</strong> When someone is interested in your repository, they replicate it to their node</li>
                <li><strong>Collaboration:</strong> Others can propose changes that you can review and incorporate</li>
              </ol>
              <p>All these interactions happen without a central server in between.</p>
            </section>
          </div>
        `;
      } else if (sectionId === 'getting-started-guide') {
        contentToDisplay = `
          <div class="guide-section">
            <h1>Getting Started with Radicle</h1>
            
            <section id="prerequisites">
              <h2>Prerequisites</h2>
              <p>Before you begin using Radicle, make sure you have:</p>
              <ul>
                <li>Git installed on your system</li>
                <li>Basic familiarity with Git commands</li>
                <li>A project you want to collaborate on</li>
              </ul>
            </section>
            
            <section id="installation-steps">
              <h2>Installation Steps</h2>
              <ol>
                <li><strong>Download Radicle Desktop:</strong>
                  <ul>
                    <li>Visit <a href="https://radworks.garden" target="_blank">radworks.garden</a></li>
                    <li>Download the appropriate version for your operating system</li>
                    <li>Run the installer and follow the prompts</li>
                  </ul>
                </li>
                
                <li><strong>Create Your Identity:</strong>
                  <ul>
                    <li>Launch Radicle Desktop</li>
                    <li>Follow the onboarding process to create your cryptographic identity</li>
                    <li>Set your display name and other profile information</li>
                  </ul>
                </li>
              </ol>
            </section>
            
            <section id="first-steps">
              <h2>Your First Steps</h2>
              
              <h3>Creating a New Repository</h3>
              <ol>
                <li>In Radicle Desktop, click "New Repository"</li>
                <li>Choose a name and description for your repository</li>
                <li>Initialize with a README or import an existing Git repository</li>
                <li>Your repository is now available on the Radicle network</li>
              </ol>
              
              <h3>Exploring Existing Projects</h3>
              <ol>
                <li>Use the "Explore" section to discover projects</li>
                <li>Search by name or browse featured projects</li>
                <li>When you find an interesting project, click "Clone" to replicate it to your node</li>
                <li>You now have a local copy you can browse and contribute to</li>
              </ol>
            </section>
            
            <section id="collaboration">
              <h2>Collaborating with Others</h2>
              
              <h3>Sharing Your Repository</h3>
              <ol>
                <li>Find your repository's Radicle ID in its overview page</li>
                <li>Share this ID with collaborators</li>
                <li>They can use this ID to find and clone your repository</li>
              </ol>
              
              <h3>Contributing to Projects</h3>
              <ol>
                <li>Clone the repository you want to contribute to</li>
                <li>Create a branch for your changes</li>
                <li>Commit your changes locally</li>
                <li>Create a patch (similar to a pull request) in Radicle Desktop</li>
                <li>The project maintainer will be notified and can review your contribution</li>
              </ol>
            </section>
          </div>
        `;
      } else {
        // Default desktop app guide content or fallback for unknown sections
        if (sectionId === 'desktop-guide' || !sectionId) {
          console.log('Loading default desktop guide content');
        } else {
          console.log('Unknown section:', sectionId, '- loading default content');
        }
        contentToDisplay = `
          <div id="desktop-guide" class="desktop-app-guide">
            <h1>Radicle Desktop App Guide</h1>
            
            <section id="introduction">
              <h2>Introduction to Radicle Desktop</h2>
              <p>The Radicle Desktop app provides a user-friendly interface for interacting with the Radicle network. 
              It allows you to host and sync code with others just by running the app, without relying on centralized services.</p>
              
              <p>With Radicle Desktop, you can:</p>
              <ul>
                <li>Manage repositories in a peer-to-peer network</li>
                <li>Track issues and review code</li>
                <li>Work offline and sync when connected</li>
                <li>Maintain full ownership of your data</li>
              </ul>
            </section>
            
            <section id="installation">
              <h2>Installation</h2>
              <p>To get started with Radicle Desktop:</p>
              <ol>
                <li>Visit <a href="https://radworks.garden" target="_blank">radworks.garden</a> to download the latest version</li>
                <li>Choose the appropriate installer for your operating system (Windows, macOS, or Linux)</li>
                <li>Run the installer and follow the on-screen instructions</li>
                <li>Launch the app once installation is complete</li>
              </ol>
            </section>
            
            <section id="getting-started">
              <h2>Getting Started</h2>
              <p>When you first open Radicle Desktop, you'll need to:</p>
              <ol>
                <li><strong>Create your identity</strong> - This is how you'll be known on the network</li>
                <li><strong>Set up your profile</strong> - Add details about yourself that will be visible to others</li>
                <li><strong>Create or import repositories</strong> - Start with your own Git repositories or clone from the network</li>
              </ol>
            </section>
            
            <section id="features">
              <h2>Key Features</h2>
              
              <h3>Repository Management</h3>
              <p>Radicle Desktop provides a complete interface for managing Git repositories:</p>
              <ul>
                <li>Create and clone repositories</li>
                <li>Browse code and commit history</li>
                <li>Manage branches and tags</li>
                <li>Connect with remote peers to share and collaborate</li>
              </ul>
              
              <h3>Issue Tracking</h3>
              <p>Track and manage issues directly within the app:</p>
              <ul>
                <li>Create and assign issues</li>
                <li>Add labels and priorities</li>
                <li>Comment and collaborate on solutions</li>
                <li>Track progress and resolution</li>
              </ul>
              
              <h3>Code Reviews</h3>
              <p>Collaborate on code changes with integrated review tools:</p>
              <ul>
                <li>Create and review patches</li>
                <li>Comment on specific lines of code</li>
                <li>Suggest changes</li>
                <li>Approve and merge contributions</li>
              </ul>
            </section>
            
            <section id="faq">
              <h2>Frequently Asked Questions</h2>
              
              <h3>How is Radicle different from GitHub or GitLab?</h3>
              <p>Radicle is fundamentally different because it's built on a peer-to-peer architecture. There is no central server or company controlling your data. Your repositories exist on your device and are shared directly with collaborators.</p>
              
              <h3>Do I need an internet connection to use Radicle?</h3>
              <p>No, you can work completely offline. When you connect to the internet, you can sync with your peers to share updates.</p>
              
              <h3>Is Radicle Desktop open source?</h3>
              <p>Yes, Radicle Desktop is entirely open source. You can find the source code on the Radicle network itself or on GitHub.</p>
              
              <h3>How do I find other users and repositories?</h3>
              <p>Radicle provides discovery mechanisms through seeds (public nodes) and through direct sharing of repository IDs and node addresses.</p>
            </section>
          </div>
        `;
      }
      
      // Set the content
      content.set(contentToDisplay);
      
      // Update the active section
      $activeSection = section;
    } catch (error: unknown) {
      console.error('Error setting guide content:', error);
      if (error instanceof Error) {
        loadingError.set(error.message);
      } else {
        loadingError.set('An unknown error occurred');
      }
    } finally {
      isLoading.set(false);
    }
  }

  function findSectionByHeading(doc: Document, headingText: string) {
    // Find all headings
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    for (const heading of headings) {
      const text = heading.textContent || '';
      if (text.trim() === headingText) {
        return heading;
      }
    }
    
    return null;
  }

  function extractSectionContent(sectionElement: Element) {
    let content = '';
    let current = sectionElement;
    
    // Get the tag name to know what level of heading we're starting with
    const headingLevel = sectionElement.tagName[1]; // e.g., '1' from 'H1'
    
    // Include the starting section heading
    content += sectionElement.outerHTML;
    
    // Get all subsequent elements until we hit a heading of same or higher level
    while (current.nextElementSibling) {
      current = current.nextElementSibling;
      
      // Check if this is a heading of same or higher level
      if (current.tagName && current.tagName.startsWith('H') && 
          current.tagName[1] <= headingLevel) {
        break;
      }
      
      content += current.outerHTML;
    }
    
    return content;
  }

  function extractMainContent(doc: Document) {
    // Try to find the main content
    const mainContent = doc.querySelector('main') || 
                       doc.querySelector('article') || 
                       doc.querySelector('.content') ||
                       doc.body;
    
    // Return its HTML content
    return mainContent.innerHTML;
  }

  function handleContentUpdate() {
    if (contentElement && $content) {
      // Process any links in the content to prevent default navigation
      const links = contentElement.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          // You could emit an event here to be handled by the parent
          console.log('Link clicked:', link.href);
        });
      });
      
      // Check if we need to scroll to a specific section
      if (typeof window !== 'undefined') {
        setTimeout(() => {
          const fragment = window.sessionStorage.getItem('scrollToFragment');
          if (fragment) {
            const targetElement = document.getElementById(fragment);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // Remove fragment from session storage after handling
            window.sessionStorage.removeItem('scrollToFragment');
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
  export function scrollToSection(sectionId: string) {
    if (contentElement && sectionId) {
      console.log('Attempting to scroll to section:', sectionId, 'Current active section:', $activeSection);
      
      // Start by inventorying all available sections for debugging
      const allSections = contentElement.querySelectorAll('section');
      console.log('Available sections:', Array.from(allSections).map(s => `${s.id} (${s.querySelector('h2, h3')?.textContent || 'no heading'})`))
      
      // First try exact ID match
      let targetElement = document.getElementById(sectionId);
      console.log('Direct ID match:', targetElement ? 'found' : 'not found');
      
      // If not found, try section-specific searching
      if (!targetElement) {
        // Special handling for different guide sections
        if ($activeSection === 'desktop-guide' || !$activeSection) {
          // Look for sections within desktop guide
          if (sectionId === 'features' || sectionId === 'faq') {
            // These are top-level sections in desktop guide
            targetElement = contentElement.querySelector(`section#${sectionId}`) as HTMLElement;
            console.log(`Looking for #${sectionId} in desktop guide:`, targetElement ? 'found' : 'not found');
          }
        }
      }
      
      // If still not found, try more aggressive searching
      if (!targetElement) {
        // Get all headings in the document
        const headings = contentElement.querySelectorAll('h1, h2, h3, h4');
        console.log('Searching through', headings.length, 'headings');
        
        // Try to find a heading with text matching the section ID
        const normalizedSectionId = sectionId.replace(/-/g, ' ').toLowerCase();
        
        for (const heading of Array.from(headings)) {
          const headingText = heading.textContent?.toLowerCase() || '';
          console.log(`Comparing heading: "${headingText}" with target: "${normalizedSectionId}"`);
          
          if (headingText.includes(normalizedSectionId) || 
              normalizedSectionId.includes(headingText)) {
            targetElement = heading as HTMLElement;
            console.log('Found matching heading:', headingText);
            break;
          }
        }
        
        // If still not found, try finding by content that contains the keywords
        if (!targetElement) {
          // Look for any content with matching text
          const allContentElements = contentElement.querySelectorAll('p, li, div');
          for (const element of Array.from(allContentElements)) {
            const content = element.textContent?.toLowerCase() || '';
            if (content.includes(normalizedSectionId) && 
                element.closest('section')) {
              targetElement = element.closest('section') as HTMLElement;
              console.log('Found by content match in section');
              break;
            }
          }
        }
      }
      
      // Last resort - try to find by exact ID in the HTML string
      if (!targetElement && $content) {
        // Extract section IDs from the content string
        const idMatch = $content.match(new RegExp(`id=['"]${sectionId}['"]`, 'i'));
        if (idMatch) {
          console.log('Found ID match in content string, trying to refresh element lookup');
          // Wait for a moment and try again - the DOM might need to update
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              $activeSubSection = sectionId;
            }
          }, 100);
        }
      }
      
      // If found, scroll to it
      if (targetElement) {
        console.log('Found target element, scrolling to:', targetElement);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update active subsection
        $activeSubSection = sectionId;
      } else {
        console.warn(`Section with ID "${sectionId}" not found in content`);
        // Fallback: try to at least jump to the main section
        if ($activeSection) {
          const mainSection = document.querySelector(`.guide-section, .desktop-app-guide`);
          if (mainSection) {
            (mainSection as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    }
  }
  


  // Watch for URL or section changes
  $: {
    console.log('Section changed to:', section);
    if (section) fetchGuideContent();
  }

  // Process links and update section tracking after content updates
  $: if($content) {
    setTimeout(handleContentUpdate, 0);
    // Make sure the active section is updated when content changes
    $activeSection = section;
  }

  // Store a reference to the intersection observer
  let observer: IntersectionObserver | null = null;

  // Set up the intersection observer to track which sections are in view
  function setupIntersectionObserver() {
    if (typeof window === 'undefined' || !contentElement) return;
    
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
      const sections = contentElement.querySelectorAll('section');
      if (sections.length === 0) return;
      
      const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.3 // 30% of the section visible
      };
      
      // Create observer to track which section is in view
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            $activeSubSection = id;
            $activeSection = section; // Ensure active section stays updated
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
    fetchGuideContent();
    
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

<div class="guide-content">
  {#if $isLoading}
    <div class="loading">Loading content...</div>
  {:else if $loadingError}
    <div class="error">Error loading content: {$loadingError}</div>
  {:else}
    <div class="content" bind:this={contentElement}>
      {@html $content}
    </div>
  {/if}
</div>

<style>
  .guide-content {
    max-width: 900px;
    margin: 0 auto;
  }

  .loading, .error {
    padding: 2rem;
    text-align: center;
    color: var(--color-foreground-contrast);
  }

  .error {
    color: #ef4444;
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
  
  .content :global(.desktop-app-guide),
  .content :global(.guide-section) {
    padding-left: 2rem;
    margin: 0 auto;
  }
  
  .content :global(.desktop-app-guide section),
  .content :global(.guide-section section) {
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--color-fill-separator);
  }
  
  .content :global(.desktop-app-guide section:last-child),
  .content :global(.guide-section section:last-child) {
    border-bottom: none;
  }

  .content :global(h2) {
    font-size: 2rem;
    font-weight: 600;
    margin: 2rem 0 1rem;
    color: var(--color-foreground-contrast);
  }

  .content :global(h3) {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1.5rem 0 1rem;
    color: var(--color-foreground-contrast);
  }

  .content :global(p) {
    margin: 1rem 0;
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
    margin: 1.5rem 0;
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