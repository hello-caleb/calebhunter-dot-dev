/**
 * Tailwind v4 ships with CSS-first configuration via the @theme directive in globals.css.
 * This file exists for tooling compatibility and documents the design token values.
 * The authoritative token definitions live in src/styles/globals.css.
 *
 * Design tokens (mirrored from globals.css @theme):
 *
 * Colors:
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
 * Fonts (via next/font/google CSS variables):
 *   serif: Instrument Serif  → var(--font-instrument-serif)
 *   sans:  DM Sans           → var(--font-dm-sans)
 *   mono:  JetBrains Mono    → var(--font-jetbrains-mono)
 *
 * Max-width:
 *   content: 1200px          → max-w-content
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  // In Tailwind v4, content auto-detection is built-in.
  // The @theme config in globals.css is the primary configuration mechanism.
}

export default config
