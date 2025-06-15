# Angular V10 With Tailwind CSS v1.9

A modern Angular application built with Tailwind CSS for rapid UI development and beautiful, responsive design.

## 🚀 Tech Stack

- **Angular**: v10.1.6
- **Tailwind CSS**: v1.9.4
- **Node.js**: v12.22.12 (managed by Volta)
- **TypeScript**: v4.0.2
- **Angular CLI**: v10.1.7

## 📦 Volta Configuration

This project uses [Volta](https://volta.sh/) for Node.js version management:

```json
{
  "volta": {
    "node": "12.22.12"
  }
}
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── app-shells/           # Application shell components
│   ├── elements/             # Reusable UI elements
│   │   ├── blue-button/      # Blue button component
│   │   ├── header-banner/    # Header banner component
│   │   └── select-menu/      # Select menu component
│   ├── floating-key-btn/     # Floating action button
│   ├── forms/                # Form components
│   │   └── signin-and-register/  # Authentication forms
│   ├── headers/              # Header components
│   │   ├── centered-with-bottom-border/  # Centered header with border
│   │   └── teal-back-nav/    # Teal navigation header
│   ├── page-sections/        # Page section components
│   │   ├── corat-coret/      # Custom section component
│   │   ├── cta-sections/     # Call-to-action sections
│   │   ├── feature-sections/ # Feature showcase sections
│   │   └── hero-section/     # Hero banner sections
│   ├── app.component.*       # Root component
│   ├── app.module.ts         # Root module
│   └── app-routing.module.ts # Routing configuration
├── assets/                   # Static assets
├── environments/             # Environment configurations
├── favicon files             # SEO-optimized favicon set
├── site.webmanifest         # PWA manifest
├── index.html               # Main HTML file
├── main.ts                  # Application bootstrap
├── polyfills.ts             # Browser polyfills
└── styles.scss              # Global styles
```

## 🎨 Tailwind CSS Configuration

The project includes a custom Tailwind configuration (`tailwind.config.js`):

```javascript
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.ts'],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      }
    },
  },
  variants: {
    display: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [],
}
```

### Key Features:
- **Purge Configuration**: Optimized for Angular files (HTML and TypeScript)
- **Extended Theme**: Custom z-index utilities
- **Enhanced Variants**: Group hover/focus states for interactive components
- **Custom Forms Plugin**: `@tailwindcss/custom-forms` for better form styling

## 🛠️ Development

### Prerequisites
- Node.js v12.22.12 (automatically managed by Volta)
- Angular CLI v10.1.7

### Development Server
```bash
npm start
# or
ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload when you change source files.

### Build
```bash
# Development build
npm run build
# or
ng build

# Production build
npm run build:prod
# or
ng build --prod
```

Build artifacts will be stored in the `dist/` directory.

## 📱 PWA & SEO Features

This project includes comprehensive SEO and PWA optimizations:

- **Multiple Favicon Formats**: 16x16, 32x32, Apple Touch Icon, Android Chrome icons
- **Web App Manifest**: PWA-ready configuration
- **Meta Tags**: Optimized for search engines and social sharing
- **Theme Color**: Browser UI theming support

## 🔧 Code Scaffolding

Generate new components using Angular CLI:

```bash
ng generate component component-name
ng generate directive|pipe|service|class|guard|interface|enum|module
```

## 📚 Component Architecture

The project follows a modular component architecture:

- **Elements**: Reusable UI components (buttons, menus, banners)
- **Forms**: Authentication and form-related components
- **Headers**: Navigation and header components
- **Page Sections**: Large content sections (hero, CTA, features)
- **App Shells**: Layout and shell components

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Start development server**: `npm start`
4. **Open browser**: Navigate to `http://localhost:4200/`

## 🌐 Deployment & Compatibility Fixes

### Vercel Deployment Configuration

This project has been optimized for deployment on Vercel with specific fixes for Angular 10 + Node.js 18+ compatibility:

#### OpenSSL Legacy Provider Fix
Angular 10 uses Webpack 4, which has compatibility issues with Node.js 17+ due to stricter OpenSSL requirements. We resolved this with:

**1. Build Script Configuration (`package.json`)**
```json
{
  "scripts": {
    "vercel-build": "NODE_OPTIONS=--openssl-legacy-provider ng build --prod"
  }
}
```

**2. Vercel Build Environment (`vercel.json`)**
```json
{
  "build": {
    "env": {
      "NODE_OPTIONS": "--openssl-legacy-provider"
    }
  }
}
```

#### PostCSS Configuration
Separated PostCSS configuration into dedicated `postcss.config.js` file to avoid module conflicts:

```javascript
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
```

#### Static Asset Routing
Configured proper static asset serving in `vercel.json` to prevent HTML being served instead of JS/CSS files:

```json
{
  "routes": [
    {
      "src": "/(.*\\.(js|css|ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot))$",
      "dest": "/$1"
    },
    {
      "src": "/site.webmanifest",
      "dest": "/site.webmanifest",
      "headers": {
        "Content-Type": "application/manifest+json"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Key Compatibility Solutions

1. **Node.js 18+ Support**: Added OpenSSL legacy provider flags for Webpack 4 compatibility
2. **PostCSS Module Resolution**: Separated PostCSS config to prevent build-time conflicts
3. **Static Build Configuration**: Optimized for SPA routing and proper asset serving
4. **Environment Variable Management**: Dual-layer environment configuration for build reliability

These fixes ensure successful deployment on modern Node.js versions while maintaining Angular 10's build requirements.

## 📄 Additional Information

For more help on Angular CLI, use `ng help` or check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

For Tailwind CSS documentation, visit [tailwindcss.com](https://tailwindcss.com/).
