# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Habitus is a cross-platform habits/goals tracking mobile app built with React Native, Expo SDK 54, and React 19 (with experimental React Compiler). It targets iOS, Android, and Web.

## Commands

- **Start dev server:** `pnpm start` (or `npx expo start`)
- **Run on iOS:** `pnpm ios`
- **Run on Android:** `pnpm android`
- **Run on Web:** `pnpm web`
- **Lint:** `pnpm lint` (uses eslint-config-expo with flat config)

Package manager is **pnpm** (hoisted node-linker). No test framework is configured yet.

## Architecture

### Routing (Expo Router - file-based)

Routes live in `app/`. Expo Router uses file-system conventions:
- `app/_layout.tsx` — Root layout (Stack navigator, ThemeProvider wrapper)
- `app/(tabs)/_layout.tsx` — Bottom tab navigator (Dashboard, Habits, Goals, Profile)
- `app/(tabs)/index.tsx` — Dashboard (home tab)
- `app/auth/index.tsx` — Auth screen

Typed routes are enabled (`experiments.typedRoutes` in app.json).

### Feature Modules

Business logic is organized by domain in `features/`:
- `dashboard/`, `habits/`, `goals/`, `profiles/`, `settings/`, `subscription/`, `users/`

These are currently scaffolded (`.gitkeep` only) and intended to hold feature-specific components, hooks, and services.

### Shared Code

`shared/` contains cross-cutting concerns:
- `components/` — Reusable UI components
- `hooks/` — Custom React hooks
- `theme/` — Theme configuration
- `utils/` — Utility functions
- `i18n/` — Internationalization

### Third-Party Integrations

`lib/` is reserved for external service integrations (currently empty).

## Key Technical Decisions

- **TypeScript strict mode** with `@/*` path alias mapping to root
- **React 19 + React Compiler** (experimental, enabled in app.json)
- **Expo New Architecture** enabled
- **Portrait-only** orientation
- **Icons:** `@expo/vector-icons` (Ionicons)
- **No state management library yet** — only React context via ThemeProvider
- **No testing framework yet**

## Styling

Uses React Native's `StyleSheet` API directly. Theme system is prepared in `shared/theme/` but not yet implemented.
