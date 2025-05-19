import { writable, get } from 'svelte/store';

export const currentDocPath = writable<string>('/docs');

// This will hold all our doc content fetched client-side
export const docsContent = writable<Map<string, string>>(new Map());

// Function to load content without page navigation
export async function loadDocContent(path: string): Promise<void> {
  currentDocPath.set(path);
  
  // If we already have this content cached, no need to fetch again
  const cached = get(docsContent);
  if (cached.has(path)) return;
  
  try {
    // This is a client-side fetch of the content
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to load content for ${path}`);
    
    const html = await response.text();
    
    // Extract just the main content from the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    // Find the main content section - adjust selector based on your actual HTML structure
    const mainContent = tempDiv.querySelector('main');
    const contentDiv = mainContent?.querySelector('.content') || mainContent;
    const content = contentDiv?.innerHTML || '<p>Content not found</p>';
    
    // Update our store with the new content
    const updatedContent = new Map(cached);
    updatedContent.set(path, content);
    docsContent.set(updatedContent);
  } catch (error) {
    console.error('Error loading doc content:', error);
    // Set some error content
    const updatedContent = new Map(cached);
    updatedContent.set(path, '<p>Error loading content</p>');
    docsContent.set(updatedContent);
  }
}