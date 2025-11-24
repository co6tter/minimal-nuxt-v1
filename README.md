# minimal-nuxt-v1

## Overview

This is a minimal Nuxt 3 application built with Vue 3 and TypeScript. The project includes basic page routing, reusable components, and a default layout structure.

## Tech Stack

- **Framework**: Nuxt 3 (v3.16.2)
- **Language**: TypeScript
- **Frontend**: Vue 3 (v3.5.13)
- **Routing**: Vue Router (v4.5.0)
- **Dev Tools**: Nuxt DevTools enabled

## Setup

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd minimal-nuxt-v1
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Usage

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

### Development

The app uses Nuxt 3's auto-import feature, so you don't need to manually import Vue components or composables.

## Directory Structure

```
minimal-nuxt-v1/
├── assets/           # Static assets (CSS, images, etc.)
├── components/       # Vue components
│   ├── Header.vue
│   └── Footer.vue
├── layouts/          # Layout components
│   └── default.vue
├── pages/            # Page components (auto-routed)
│   ├── index.vue
│   ├── about.vue
│   └── products/
│       └── [id].vue  # Dynamic route
├── public/           # Public static files
├── server/           # Server API routes
├── app.vue           # Root component
├── nuxt.config.ts    # Nuxt configuration
└── types.ts          # TypeScript type definitions
```

## License

This repository is for personal/private use only.
