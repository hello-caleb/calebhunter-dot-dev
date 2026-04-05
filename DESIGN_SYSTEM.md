# Design System — calebhunter.dev

Reference for typography, color tokens, and Tailwind utilities used across the V2 site.

---

## Typography

### Fonts

| Role | Family | CSS Variable | Tailwind Class | Source |
|------|--------|-------------|----------------|--------|
| Display / Headings | Bricolage Grotesque | `--font-bricolage-grotesque` | `font-display` or `font-serif` | Google Fonts (variable) |
| Body | DM Sans | `--font-dm-sans` | `font-sans` or `font-body` | Google Fonts |
| Mono / Code | JetBrains Mono | `--font-jetbrains-mono` | `font-mono` | Google Fonts |

All fonts load via `next/font/google` — self-hosted at build time, zero CDN requests.

`font-serif` is a backward-compatible alias for `font-display` (both resolve to Bricolage Grotesque). Prefer `font-display` in new code.

### Type Scale

| Element | Size | Weight | Class |
|---------|------|--------|-------|
| Hero h1 | `text-5xl` → `text-7xl` | 700 | `font-display text-5xl md:text-6xl lg:text-7xl` |
| Page h1 | `text-5xl` → `text-6xl` | 700 | `font-display text-5xl md:text-6xl` |
| Section h2 | `text-4xl` → `text-5xl` | 600 | `font-display text-4xl md:text-5xl` |
| Card h2 / h3 | `text-2xl` | 600 | `font-display text-2xl` |
| Small heading h3 | `text-xl` | 500 | `font-display text-xl` |
| Body | `text-base` (1rem) | 400 | `font-sans` |
| Caption / secondary | `text-sm` (0.875rem) | 400 | `font-sans text-text-secondary` |
| Mono / code | `text-sm` (0.875em) | 400 | `font-mono` |

### Prose (Blog) Headings

Blog post body typography uses the `.prose` CSS component. Heading families:

- `h2` — Bricolage Grotesque, `text-2xl`, margin-top `2.5em`
- `h3` — Bricolage Grotesque, `text-xl`, margin-top `2em`

---

## Color Tokens

Design tokens live in `src/styles/globals.css` under `@theme`. They generate Tailwind utilities automatically.

### Light Mode (default)

| Token | Value | Tailwind Utility |
|-------|-------|-----------------|
| `--color-background` | `#FAFAF8` | `bg-background` |
| `--color-background-subtle` | `#F3F2EE` | `bg-background-subtle` |
| `--color-surface` | `#FFFFFF` | `bg-surface` |
| `--color-text-primary` | `#1A1A1A` | `text-text-primary` |
| `--color-text-secondary` | `#6B6B6B` | `text-text-secondary` |
| `--color-text-tertiary` | `#9B9B9B` | `text-text-tertiary` |
| `--color-accent` | `#D4763C` | `bg-accent`, `text-accent` |
| `--color-accent-hover` | `#BE6832` | `text-accent-hover` |
| `--color-accent-light` | `#FDF0E7` | `bg-accent-light` |
| `--color-border` | `#E8E6E1` | `border-border` |
| `--color-border-hover` | `#D1CFC9` | `border-border-hover` |
| `--color-code-bg` | `#F6F5F2` | `bg-code-bg` |

### Dark Mode (.dark on `<html>`)

| Token | Value |
|-------|-------|
| `--color-background` | `#111111` |
| `--color-background-subtle` | `#1A1A1A` |
| `--color-surface` | `#222222` |
| `--color-text-primary` | `#FAFAF8` |
| `--color-text-secondary` | `#A0A09A` |
| `--color-text-tertiary` | `#6B6B68` |
| `--color-accent` | `#D4763C` (unchanged) |
| `--color-accent-hover` | `#E8874D` |
| `--color-accent-light` | `#2A1A0F` |
| `--color-border` | `#2E2E2C` |
| `--color-border-hover` | `#3D3D3A` |
| `--color-code-bg` | `#1E1E1C` |

Dark mode activates via `.dark` class on `<html>` (toggle built in KAN-33). No `dark:` prefixes needed on components — tokens override automatically.

---

## Layout

| Token | Value | Tailwind Utility |
|-------|-------|-----------------|
| `--max-width-content` | `1200px` | `max-w-content` |
