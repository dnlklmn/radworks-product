# Radworks Product Site

This repository contains the code for the Radworks product site, which showcases Radicle - a peer-to-peer code collaboration platform.

## Features

- Modern UI with responsive design
- Built with SvelteKit and Vite
- Static site generation for fast loading
- Single Page Application (SPA) architecture

## Development

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The site will be available at http://localhost:5173/

### Building

To build the site for production:

```bash
npm run build
```

This generates static files in the `build` directory.

To preview the production build:

```bash
npm run preview
```

## Deployment

### Deploying to Vercel

This project is configured for seamless deployment to Vercel.

1. Push your changes to your repository
2. Connect your repository to Vercel
3. Vercel will automatically detect the SvelteKit project
4. Make sure the following settings are configured in your Vercel project:
   - Framework Preset: `Other`
   - Build Command: `npm run vercel-build`
   - Output Directory: `public`

The deployment will use the custom `vercel-build` script that ensures all assets are properly built and placed in the correct directories.

## Project Structure

```
/
├── public/           # Generated deployment files (not committed)
├── build/            # Generated build files (not committed)
├── scripts/          # Build and deployment scripts
├── src/              # Source code
│   ├── components/   # Reusable UI components
│   ├── lib/          # Utility functions and stores
│   ├── routes/       # SvelteKit pages and layouts
│   └── assets/       # Static assets like images
├── static/           # Static files to be copied to build
└── ...               # Configuration files
```

## Adding New Features

To add a new feature to the home page, edit `src/components/Features.svelte` and add your feature to the features array.

## Troubleshooting

If you encounter issues with deployment:

1. Make sure the `vercel.json` file is correctly configured
2. Ensure `scripts/prepare-for-vercel.sh` is executable: `chmod +x scripts/prepare-for-vercel.sh`
3. Run `npm run clean` and then try building again
4. Check for any errors in the build logs

## License

Copyright © Radworks, Inc. All rights reserved.