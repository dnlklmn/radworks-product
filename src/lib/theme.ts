import { writable } from 'svelte/store';
import { literal, union, z } from "zod";

const themeSchema = union([literal("dark"), literal("light")]);
type Theme = z.infer<typeof themeSchema>;

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function loadTheme(): Theme {
  if (!isBrowser()) return 'light';
  
  const stored = localStorage.getItem('theme');
  if (stored && themeSchema.safeParse(stored).success) {
    return stored as Theme;
  }

  const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
  return matches ? "dark" : "light";
}

function createThemeStore() {
  // Initialize with a default value that will be updated immediately on client-side
  const { subscribe, set, update } = writable<Theme>(loadTheme());

  // If in browser, ensure we load from localStorage on initialization and apply it immediately
  if (isBrowser()) {
    // Apply theme immediately to prevent flash of wrong theme
    const storedTheme = loadTheme();
    document.documentElement.setAttribute('data-theme', storedTheme);
    
    // Use setTimeout to ensure this runs after the component is mounted
    setTimeout(() => {
      const currentTheme = loadTheme();
      set(currentTheme);
      // Dispatch a custom event that components can listen for
      window.dispatchEvent(new CustomEvent('themechange', { detail: currentTheme }));
    }, 0);
  }

  return {
    subscribe,
    set: (value: Theme) => {
      if (isBrowser()) {
        localStorage.setItem('theme', value);
        document.documentElement.setAttribute('data-theme', value);
        // Dispatch a custom event that components can listen for
        window.dispatchEvent(new CustomEvent('themechange', { detail: value }));
      }
      set(value);
    },
    initialize: () => {
      if (isBrowser()) {
        const storedTheme = loadTheme();
        document.documentElement.setAttribute('data-theme', storedTheme);
        set(storedTheme);
        // Dispatch a custom event that components can listen for
        window.dispatchEvent(new CustomEvent('themechange', { detail: storedTheme }));
      }
    }
  };
}

export const theme = createThemeStore();
