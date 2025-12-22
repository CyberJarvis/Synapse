# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 16 event landing page for "Synapse 2026" - an AI ethics competition hosted by CSI SIESGST.

### Stack
- Next.js 16 with App Router
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4
- Geist fonts (sans and mono)

### Structure
- `src/app/page.tsx` - Single-page application with all components inline (Starfield, CountdownTimer, Navigation, FeatureCard, TimelineItem, Home)
- `src/app/globals.css` - Custom CSS with Tailwind, defining CSS variables, animations (twinkle, shoot, pulse-glow, float), and glassmorphism effects
- `src/app/layout.tsx` - Root layout with metadata and dark theme setup

### Design System
- Primary color: Red (#ef4444) with CSS variables `--primary`, `--primary-light`, `--primary-dark`
- Dark background (#050505 / #030303)
- Custom utility classes: `.glass`, `.glass-red`, `.glow-text`, `.pulse-glow`, `.synapse-title`, `.card-hover`
- Red beam effect with layered gradients for hero section

### Path Aliases
- `@/*` maps to `./src/*`
