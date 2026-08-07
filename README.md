# A2 Gold Ghee — Premium Landing Page

A fully responsive, animation-rich one-page landing website for a fictional
luxury ghee brand, built as a Frontend Developer interview assignment.

## Tech Stack

- **React 18 + Vite** — component architecture & fast dev server
- **Plain CSS** — CSS variables, Grid, Flexbox, `clamp()`, no framework
- **GSAP + ScrollTrigger** — scroll-driven reveals, timelines, counters
- **Framer Motion** — micro-interactions, hover/tap states, accordions
- **Lenis** — buttery smooth scrolling synced with GSAP
- **React Icons** — lightweight iconography (Heroicons, Game Icons, Font Awesome sets)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

The dev server runs at `http://localhost:5173`.

## Project Structure

```
src/
  components/
    Navbar/         Sticky glassmorphism nav with active-link tracking
    Hero/            Full-screen hero: gradient aura, particles, counters
    About/           Two-column brand story with a clip-path reveal
    Benefits/        Six-card grid of product benefits
    Process/         Animated Bilona-method timeline (7 steps)
    Gallery/         Three-tier product showcase (250ml / 500ml / 1L)
    Testimonials/    Customer review cards
    FAQ/             Accordion built with Framer Motion height animation
    CTA/             Full-width dark conversion band
    Contact/         Front-end-only contact form with success state
    Footer/          Site-wide footer
    Loader/          Branded intro screen
    ScrollProgress/  Top-of-page scroll progress hairline
    ScrollTop/       Floating "back to top" button
  assets/
    images/          GheeJar.jsx — a hand-built SVG jar illustration
  hooks/
    useLenis.js      Initializes Lenis and syncs it with GSAP ScrollTrigger
  App.jsx
  main.jsx
  index.css          Design tokens (colors, type scale, spacing) + resets
```

Every component follows a `Component.jsx` + `Component.css` pairing with
scoped class names (BEM-influenced), so each piece can be explained and
modified independently.

## Design Tokens

| Token | Value |
| --- | --- |
| Primary Gold | `#D4AF37` |
| Cream White | `#FFF9F2` |
| Warm Beige | `#F5E9D8` |
| Dark Charcoal | `#2B2B2B` |
| Soft Brown | `#8B6B4A` |
| Natural Green | `#4F7A4A` |
| Background | `#FCFAF7` |
| Headings | Playfair Display |
| Body | Poppins |

## Notes

- No product photography was supplied, so the "jar" visual is a hand-built,
  reusable SVG component (`GheeJar.jsx`) rather than a raster placeholder —
  this keeps every viewport crisp and lets CSS/GSAP animate it directly.
- The contact form is front-end only (no backend), per the assignment brief.
- Reduced-motion preferences are respected globally via a media query in
  `index.css`.
