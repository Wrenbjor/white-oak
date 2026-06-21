# White Oak Residential

Next.js (App Router) + React port of the imported **"Pixel perfect HTML layout"**
design (`index.html` / `styles.css`) from Claude Design.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Responsive model

The layout uses a **fixed-width stage** with three **static tiers** separated by
hard breakpoints. Nothing scales or slides between breakpoints — resizing the
window only **trims (or pads) the outer edges**; the centered core is untouched
until a breakpoint is crossed, where the whole layout snaps to the next tier.

| Tier    | Viewport        | Stage width |
| ------- | --------------- | ----------- |
| Desktop | ≥ 992px         | `1920px`    |
| Tablet  | 426px – 991px   | `991px`     |
| Mobile  | ≤ 425px         | `425px`     |

Implementation (`app/globals.css`):

- `.stage` is a fixed-width canvas centered with `left:50%; transform:translateX(-50%)`,
  so the centre stays pinned to the viewport centre and edges trim symmetrically.
- `html, body { overflow-x: hidden }` clips the trimmed edges (no horizontal scroll).
- Two media queries (`max-width: 991px`, `max-width: 425px`) swap the stage width
  and the per-tier (fixed-pixel) layout — grids, type sizes, spacing.

## Structure

- `app/layout.tsx` — fonts (Playfair Display / EB Garamond / Montserrat via `next/font`) + metadata
- `app/page.tsx` — full page (server component)
- `app/ContactForm.tsx` — the contact form (client component)
- `app/globals.css` — reset, stage/breakpoint system, all section styles
- `public/assets/` — images, served at `/assets/*`

## Assets

All assets are the exact locked files from the Claude Design project's
`assets/` folder (the versions `index.html` references) — no substitutions or
guesses. The logo, dividers, card background, the four card icons
(Buyers = laptop, Sellers = key, About = people, Contact = phone), the agent
background, agent photos, and the Buyers (family) / Sellers (SOLD home) photos
all match `layout1.jpg`.

**One asset is still missing: `Hero_BG.png`** (the hero background photo). The
real file is larger than the design API's 256 KiB transfer cap, so it can only
be retrieved truncated/corrupt, and it wasn't among the files copied locally.
Drop the real `Hero_BG.png` into `public/assets/` and the hero renders exactly
like the reference — nothing else needs to change.
