# AGENTS.md

Coding agent instructions for this repository.

## Project Overview

This is a Next.js 16 web application with Tailwind CSS v4 and Shadcn UI components.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn UI (new-york style) with Radix UI primitives
- **Icons:** Lucide React
- **Package Manager:** pnpm (v10.30.3)
- **React:** 19

## Build/Lint/Test Commands

```bash
pnpm dev              # Development server (with Turbopack)
pnpm build            # Production build
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm lint <file-path> # Run ESLint on specific files
pnpm tsc --noEmit     # Type checking (no dedicated script)
```

## Shadcn UI

- Components are in `components/ui/`
- Use the CLI to add new components: `pnpm dlx shadcn@latest add <component>`
- Configuration in `components.json`
- Style: "new-york" variant, base color: neutral

## Adding New Components

1. For Shadcn components, use the CLI
2. For custom components, create in `components/` directory and follow existing patterns