/**
 * Tailwind v4 ships with CSS-first configuration via the @theme directive in globals.css.
 * This file exists for tooling compatibility and documents the design token values.
 * The authoritative token definitions live in src/styles/globals.css.
 *
 * Dark mode: 'class' strategy — .dark on <html> activates dark tokens.
 * Dark mode variant is defined via @custom-variant dark in globals.css.
 * Token overrides for dark mode live in the .dark selector block in globals.css.
 *
 * Light mode colors (default):
 *   background:        #FAFAF8
 *   background-subtle: #F3F2EE
 *   surface:           #FFFFFF
 *   text-primary:      #1A1A1A
 *   text-secondary:    #6B6B6B
 *   text-tertiary:     #9B9B9B
 *   accent:            #D4763C
 *   accent-hover:      #BE6832
 *   accent-light:      #FDF0E7
 *   border:            #E8E6E1
 *   border-hover:      #D1CFC9
 *   code-bg:           #F6F5F2
 *   chat-bg:           #1A1A1A
 *   chat-text:         #FAFAF8
 *
 * Dark mode colors (.dark on <html>):
 *   background:        #111111
 *   background-subtle: #1A1A1A
 *   surface:           #222222
 *   text-primary:      #FAFAF8
 *   text-secondary:    #A0A09A
 *   text-tertiary:     #6B6B68
 *   accent:            #D4763C
 *   accent-hover:      #E8874D
 *   accent-light:      #2A1A0F
 *   border:            #2E2E2C
 *   border-hover:      #3D3D3A
 *   code-bg:           #1E1E1C
 *   chat-bg:           #0D0D0D
 *   chat-text:         #FAFAF8
 *
 * Fonts (via next/font/google CSS variables):
 *   display / serif: Bricolage Grotesque → var(--font-bricolage-grotesque)
 *   sans    / body:  DM Sans             → var(--font-dm-sans)
 *   mono:            JetBrains Mono      → var(--font-jetbrains-mono)
 *
 * Tailwind utilities: font-display, font-serif (alias), font-sans, font-body (alias), font-mono
 *
 * Max-width:
 *   content: 1200px          → max-w-content
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  // Dark mode via .dark class on <html> — toggle implemented in KAN-33.
  // @custom-variant dark in globals.css is the authoritative v4 configuration.
  darkMode: 'class',
}

export default config
