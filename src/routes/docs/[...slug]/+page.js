// Simple catch-all route handler for /docs/[anything] paths
// This ensures all routes like /docs/desktop-guide#section work properly

export function load() {
  // No need to return any data, we'll just render the docs page
  return {};
}

// Client-side rendering only - keep everything in the browser
export const ssr = false;
export const csr = true;

// Don't prerender dynamic routes
export const prerender = false;

// Use 'never' for trailing slash to ensure consistency
export const trailingSlash = 'never';