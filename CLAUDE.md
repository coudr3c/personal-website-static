# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Vite dev server with hot reload
- **Build**: `npm run build` - TypeScript compilation and Vite production build
- **Lint**: `npm run lint` - Run ESLint on TypeScript/TSX files
- **Preview**: `npm run preview` - Preview production build locally

## Architecture Overview

This is a personal portfolio website built as a static React application deployed to GitHub Pages.

### Core Technologies
- **React 19** with TypeScript for UI components
- **React Router 7** for client-side routing with basename `/personal-website-static/`
- **Vite** as build tool and dev server
- **Tailwind CSS v4** for styling with class-based dark mode support
- **Framer Motion** for animations

### Application Structure

**Routing**: Single-page application with routes defined in `src/pages/main.tsx`:
- `/` - Home page
- `/about`, `/cv`, `/gsoc`, `/projects`, `/skills` - Portfolio sections
- `*` - 404 not found page

**Layout System**: 
- `Layout` component provides dark mode detection and theming
- `PageTemplate` component provides consistent page structure
- `Header` component with responsive navigation (desktop/mobile variants)
- `ErrorBoundary` wraps the entire application

**Component Patterns**:
- Pages are in `src/pages/` and use the `PageTemplate` wrapper
- Reusable components in `src/components/` with React.memo optimization
- Shared base components: `BaseBlock` (used by `EducationBlock` and `ExperienceBlock`)
- Modular UI components: `NavigationLink`, `LanguageToggle`, `ThemeToggle`, `SkillCard`, `ProjectCard`
- Performance optimized with `useMemo`, `useCallback`, and component memoization
- Navigation uses both internal React Router `Link` and external `<a>` tags

### Styling & Theming
- Tailwind CSS with custom configuration in `tailwind.config.js`
- Theme-aware CSS variables for consistent light/dark mode implementation
- True theme override system that ignores browser/system preferences
- Color scheme: zinc/gray palette with blue accents, optimized contrast ratios
- Responsive design with `sm:` breakpoints for mobile/desktop variants
- Performance-optimized CSS without universal selectors

### Build Configuration
- **Base URL**: `/personal-website-static/` for GitHub Pages deployment
- **Bundle analysis**: Rollup visualizer generates `dist/stats.html`
- **TypeScript**: Strict configuration with separate app/node configs
- **ESLint**: React Hooks and React Refresh plugins configured

### Internationalization (i18n)
- **Languages**: English (default) and French
- **Implementation**: Custom React Context-based solution in `src/i18n/`
- **Language Detection**: Browser preference detection with localStorage persistence
- **Components**: 
  - `LanguageProvider` wraps the entire app
  - `useTranslation()` hook for accessing translations
  - Flag-based language toggle (🇬🇧/🇫🇷) in header
- **SEO**: Dynamic meta tags and document title updates per language
- **Translation Coverage**: Navigation, page content, error messages, and meta tags

### Performance & Accessibility
- **React Performance**: Components optimized with `React.memo`, `useMemo`, and `useCallback`
- **Bundle Optimization**: Lazy loading for pages, memoized expensive computations
- **Image Optimization**: Proper `alt` attributes, dimensions, and lazy loading
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Loading States**: Accessible loading indicators with proper announcements
- **CSS Performance**: Targeted transitions, optimized selectors, reduced specificity

### Deployment Context
- Deployed to GitHub Pages at `https://coudr3c.github.io/personal-website-static/`
- Static assets (images, PDF) served from `public/` directory
- SEO optimized with meta tags and Open Graph data in `index.html`
- Multi-language SEO support with dynamic meta tag updates

## Git
- Do not add mentions of claude or AI generation to commits
- Do not add CLAUDE.md