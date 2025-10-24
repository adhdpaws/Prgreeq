# Copilot Instructions - Agency Website (Next.js 16)

## Project Stack & Tools
- **Package Manager**: `bun` (not npm/yarn/pnpm)
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui with MCP server (`bunx --bun shadcn@latest mcp init --client vscode`)
- **Dev Server**: Always run on port 9222 for DevTools MCP integration
- **MCP Docs**: https://nextjs.org/docs/app/guides/mcp

## Core Principles
1. **Do exactly what's asked** - No extra features, hallucinations, or assumptions beyond the explicit request
2. **Accessibility first** - Target 100% accessibility compliance, semantic HTML always
3. **Central configuration** - Colors, spacing, typography from central config to minimize file changes
4. **Consistent styling** - Follow established patterns, no one-off styles

## Development Commands
```bash
# Install dependencies
bun install

# Dev server (ALWAYS use port 9222)
bun dev --port 9222

# Build
bun run build

# Add shadcn components via MCP
# Use shadcn MCP tools, or fallback:
bunx --bun shadcn@latest add <component>
```

## Accessibility Requirements (100% Target)
- **Semantic HTML**: Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` - never `<div>` for structural elements
- **ARIA labels**: Add to interactive elements without visible text
- **Alt text**: Descriptive, context-aware for all images; use `alt=""` for decorative only
- **Keyboard navigation**: All interactive elements accessible via Tab, Enter, Space
- **Focus indicators**: Clear, visible focus states (use `focus-visible:` utilities)
- **Color contrast**: WCAG AAA (7:1 for normal text, 4.5:1 for large text)
- **Motion**: Respect `prefers-reduced-motion` for all animations
- **Skip links**: Include skip-to-content link on every page
- **Landmarks**: Proper ARIA landmarks and heading hierarchy (h1→h2→h3, no skips)

Reference: `/accessibility-guide/` for comprehensive guidelines

## Styling Configuration
Create and use central config files:
- `app/config/colors.ts` - All color tokens
- `app/config/typography.ts` - Font sizes, weights, line heights
- `app/config/spacing.ts` - Spacing scale
- `tailwind.config.ts` - Extend with custom tokens from config files

Example pattern:
```ts
// app/config/colors.ts
export const colors = {
  brand: { primary: '#...', secondary: '#...' },
  neutral: { ... },
  semantic: { success: '#...', error: '#...', warning: '#...' }
}
```

## Component Structure
```
app/
├── components/
│   ├── ui/           # shadcn components (managed via MCP)
│   ├── layout/       # Header, Footer, Navigation
│   ├── sections/     # Homepage sections, service blocks
│   └── common/       # Reusable components (Button, Card, etc.)
├── config/           # Central configs (colors, typography, spacing)
├── (routes)/         # App Router pages
└── lib/              # Utilities, helpers
```

## Code Quality Rules
- **TypeScript**: Always use TypeScript, strict mode
- **Props**: Define explicit interfaces for all component props
- **Server/Client**: Default to Server Components; use `"use client"` only when needed
- **Imports**: Absolute imports with `@/` prefix configured in `tsconfig.json`
- **Naming**: kebab-case for files, PascalCase for components, camelCase for functions
- **Comments**: Only for complex logic; code should be self-documenting

## MCP Server Usage
Actively use available MCP servers:
- **shadcn MCP**: Component installation, examples, documentation
- **GitHub MCP**: Repository operations if available
- **DevTools MCP**: Requires port 9222 for debugging
- Check available MCPs with workspace context before making assumptions

## Common Patterns
### Responsive Images (Next.js Image)
```tsx
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Team collaborating on design strategy" // Descriptive, not generic
  width={1200}
  height={600}
  priority // For above-fold images
/>
```

### Accessible Buttons
```tsx
<button
  type="button"
  className="focus-visible:ring-2 focus-visible:ring-offset-2"
  aria-label="Open navigation menu" // When text insufficient
>
  {/* Content */}
</button>
```

### Motion with Accessibility
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="motion-reduce:transition-none motion-reduce:transform-none"
/>
```

## What NOT to Do
- ❌ Use npm/yarn/pnpm (use `bun`)
- ❌ Run dev server on any port except 9222
- ❌ Use `<div>` for semantic structural elements
- ❌ Skip alt text or use generic descriptions ("image", "photo")
- ❌ Implement features not explicitly requested
- ❌ Hardcode colors/spacing instead of using central config
- ❌ Create one-off styles that break consistency
- ❌ Ignore keyboard accessibility
- ❌ Use animations without reduced-motion alternatives

## Before Starting Any Task
1. Confirm exact requirements - ask if unclear
2. Check existing components/patterns for consistency
3. Verify color/typography from central config
4. Test keyboard navigation after implementation
5. Validate accessibility with semantic HTML

## Questions to Ask User When Needed
- Design specifics (colors, spacing, layouts) if not provided
- Content details (copy, images, alt text) when missing
- Priority/order of implementation for multi-part requests
- Accessibility exceptions (if any non-standard pattern required)
