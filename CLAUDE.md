# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run export   # Static export (for GitHub Pages)
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

**Next.js 15 App Router** static site deployed to GitHub Pages at `datathinker.de`. German is the default locale; English routes are prefixed with `/en/`.

### Internationalization

All user-facing text lives in `src/messages/en.ts` and `src/messages/de.ts` as nested objects with dot-notation keys (`home.headline`, `nav.home`, etc.). Use `getTranslation(locale, key)` from `src/lib/i18n.ts` in server components and `useLocale()` from `src/hooks/useLocale.ts` in client components. When adding new text, add keys to **both** translation files.

### Routing

Pages exist at two levels:
- `src/app/[page]/page.tsx` — German (default)
- `src/app/en/[page]/page.tsx` — English

Both locale variants render the same component but pass a different locale string. The `Navigation.tsx` language toggle switches between these URL trees.

### Blog

Blog posts are Markdown files in `content/blog/` with YAML front matter (`title`, `date`, `excerpt`, `tags`). `src/lib/blog.ts` provides `getAllPosts()` and `getPostBySlug()` — posts are read from the filesystem at build time. Dynamic route: `src/app/blog/[slug]/page.tsx`.

### Key components

- `Navigation.tsx` — top nav with mobile menu and language toggle
- `Timeline.tsx` — professional history rendered from inline data
- `ContactContent.tsx` — Formspree contact form (ID: mzzronla)
- `EmailSignup.tsx` — Resend-backed subscription via `src/app/actions/subscribe.ts`
- `BookCall.tsx` — Calendly embed

### Styling

Tailwind CSS v4 (PostCSS plugin, not `@tailwind` directives). `src/app/globals.css` holds base styles. Image optimization is disabled (`unoptimized: true`) for static export compatibility.

## Coding guidelines (from `.cursor/rules/`)

- **Think before coding**: State assumptions explicitly; surface tradeoffs; ask when confused rather than guessing.
- **Simplicity first**: Minimum code that solves the problem. No speculative features, no abstractions for single-use code.
- **Surgical changes**: Touch only what the request requires. Match existing style. Mention unrelated dead code rather than deleting it.
- **Goal-driven**: For multi-step tasks, state a brief plan with verifiable success criteria before implementing.
