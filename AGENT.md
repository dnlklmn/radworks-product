# Agent Guidelines for Radworks Product

## Build & Test Commands
- Development: `pnpm dev` - Starts dev server
- Build: `pnpm build` - Builds for production
- Check: `pnpm check` - Type checks, Svelte checks
- Format: `pnpm format` - Formats all files with Prettier

## Code Style
- **Formatting**: Use Prettier with project config
- **Types**: TypeScript with strict mode enabled
- **Components**: Svelte 5 with $state and $effect for reactivity
- **Imports**: Group by external/internal, alphabetically sorted
- **Naming**: camelCase for variables/functions, PascalCase for components
- **CSS**: Scoped component styles with descriptive class names
- **Error Handling**: Explicit error checks with appropriate user feedback

## Architecture
- SvelteKit application with TypeScript
- File-based routing under src/routes
- Reusable components in src/components
- Shared functionality in src/lib