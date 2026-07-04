# Design Foundation

Status: working foundation  
Last updated: 2026-07-04

## Direction

runlocal.tools should feel like a warm local tool atelier: editorial, calm, precise, open, and trustworthy. The visual system should avoid generic AI futurism, crypto-first signals, neon palettes, and heavy dashboard styling.

The product promise is practical and quiet:

> Run tools locally. Keep your files with you.

## Brand Signals

- Warm paper canvas instead of cold SaaS white.
- Black-brown ink for readability and craft.
- Red-orange as the primary brand accent.
- Sparse secondary color use: blue for technical metadata, sage for calm support states, butter and clay for warmth.
- Hand-drawn or lightly imperfect tool imagery when illustration is useful.
- Compact utility layouts over marketing-heavy composition.

## Logo System

Primary mark: red rounded app tile with a small browser tool window.

Rules:

- Use the mark for favicon, app icons, small headers, and tool chrome.
- Use the wordmark when there is enough horizontal space.
- Keep the mark on warm paper, ink, or neutral backgrounds.
- Do not place the mark inside another decorative card or badge.
- Do not use green as the brand accent.

## Tokens

Canonical token source: `assets/design-tokens.css`.

Core color tokens:

```css
--rlt-color-canvas: #f5efe5;
--rlt-color-paper: #fffaf1;
--rlt-color-ink: #16110d;
--rlt-color-ink-soft: #342820;
--rlt-color-muted: #6f6257;
--rlt-color-line: rgba(54, 42, 32, 0.16);
--rlt-color-accent: #e8441d;
--rlt-color-accent-dark: #b83116;
--rlt-color-accent-soft: #fff0e8;
--rlt-color-blue: #245b6b;
--rlt-color-blue-soft: #e4eef1;
--rlt-color-sage: #dfe6d7;
--rlt-color-butter: #f2e4bd;
--rlt-color-clay: #d4b094;
```

Radius tokens:

```css
--rlt-radius-xs: 4px;
--rlt-radius-sm: 6px;
--rlt-radius-md: 8px;
--rlt-radius-lg: 10px;
```

Typography tokens:

```css
--rlt-font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
--rlt-font-serif: Georgia, "Times New Roman", Times, serif;
```

## Typography

- Use the serif face for large editorial headings on brand and overview surfaces.
- Use the sans face for navigation, buttons, tool controls, forms, data, and status text.
- Keep letter spacing at `0` for normal text. Uppercase labels may use small positive spacing.
- Do not scale type directly with viewport width.

## Components

Buttons:

- Primary buttons use `--rlt-color-accent` with `--rlt-color-accent-dark` border.
- Secondary buttons use warm paper with a visible line.
- Buttons use `--rlt-radius-md`.
- Use direct command labels such as "Open Image Merge" or "Export JSON".

Cards and panels:

- Repeated cards use `--rlt-radius-md`.
- Tool surfaces may be framed, but page sections should mostly be unframed bands or simple grids.
- Avoid nested cards.

Tool headers:

- Every tool route should show a visible local-only/privacy cue above the working surface.
- Tool states should be legible: idle, ready, processing, done, error.
- Export and copy actions must be visible once output exists.

Hero and brand surfaces:

- First viewport should clearly show the product name or category.
- Use real tool imagery, hand-drawn workbench imagery, or screenshots of product surfaces.
- Do not use abstract gradient-only heroes.

## Accessibility

- Maintain WCAG AA contrast for body text and controls.
- Keep interactive targets at least 40px tall.
- Preserve visible focus states.
- Do not rely on color alone for success, warning, or error states.
- Keep local-only claims near the relevant tool interaction, not only in marketing copy.

## Implementation Notes

- New HTML pages should load `/assets/design-tokens.css`.
- Existing pages may keep local fallback variables, but the shared token file should be the final override.
- New icons should use the current ink, accent, blue, and warm paper palette.
- New illustrations should be useful and product-related, not decorative filler.
