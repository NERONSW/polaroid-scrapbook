# 60th Birthday Archival Scrapbook — Claude Code Guidelines

## 1. Primary Commands

- **Dev Server:** `pnpm dev`
- **Build:** `pnpm build`
- **Start Production:** `pnpm start`

## 2. Protected Foundation Rules & Design System

- **Design System Rules:** Strictly adhere to `reference/DESIGN.md` (Variant 2: Polaroid Scrapbook Keepsake) for all styling, color tokens, and typography. Do not introduce arbitrary inline hex colors or custom utility classes outside those defined in `DESIGN.md`.
- **Source of Truth (`code.html`):** Always reference `reference/code.html` as the master source for content and structure. Extract all 24 tributes (`tributes.ts`) and 22 archival photos (`photos.ts`) verbatim from it without dropping or abbreviating any text.
- **Tactile Craft Metaphors:** Maintain authentic physical scrapbook aesthetics. This includes warm rag paper canvases, translucent washi tape badges (`rgba(217, 119, 87, 0.45)`, `rgba(255, 202, 152, 0.65)`), vintage darkroom photo mounting corners (`#2c2724`), and Polaroid micro-rotations (`-1.5deg` to `+2.0deg`).
- **Dependencies & Package Manager:** Exclusively use `pnpm` for all script execution. Do not run `pnpm add` or modify `package.json` without explicit permission.

## 3. Directory Architecture & Conventions

Always adhere strictly to this standard Next.js App Router tree inside `src/`:

polaroid-scrapbook/
├── src/
│ ├── app/
│ │ ├── globals.css # Protected design tokens & base utilities
│ │ ├── layout.tsx # Root layout loading Google Fonts
│ │ └── page.tsx # Main assembly page
│ ├── components/
│ │ ├── layout/ # Header.tsx, Footer.tsx
│ │ ├── sections/ # Hero.tsx, WishesSection.tsx, PhotoGallery.tsx
│ │ └── ui/ # PolaroidCard.tsx, LightboxModal.tsx, WashiTape.tsx
│ ├── data/ # Decoupled CMS content (typed TS objects & interfaces)
│ │ ├── tributes.ts # Complete array of all 24 well-wishes
│ │ └── photos.ts # Complete array of all 22 curated photos
│ ├── styles/ # SCSS Styling Architecture
│ │ ├── \_mixins.scss # Responsive & flex/grid mixins
│ │ ├── \_animations.scss # Keyframe animations
│ │ └── components/ # Modular component SCSS files
│ └── lib/ # utils.ts (helper functions)
├── reference/ # Master reference files (code.html, DESIGN.md)
├── public/ # Static assets (images, fonts)
├── CLAUDE.md # Project guidelines
├── tsconfig.json # Path alias "@/_": ["./src/_"]
└── package.json

## 4. Styling Strategy: Tailwind CSS + Component SCSS

- **Foundational Styling:** Use Tailwind CSS utility classes for grid systems, flexbox alignments, responsive padding/margin, and design-token colors (`bg-surface-canvas`, `bg-white`, `border-outline-hairline`, `text-primary`).
- **Complex Custom Styling (SCSS):** Store custom CSS/SCSS effects, specialized multi-layer paper shadows, complex pseudo-elements, or organic card rotation helpers separately in `src/styles/components/` using modular named files (e.g., `src/styles/components/_Scrapbook.module.scss`).
- **CSS Variables & Tokens:** `src/app/globals.css` contains established design tokens and `.paper-texture` background utilities. Do NOT edit CSS variables or design tokens without asking for explicit permission first.

## 5. Animation & Motion System (`framer-motion`)

- **Framer Motion Integration:** Use `framer-motion` for page transitions, smooth modal open/close animations for the lightbox, and element entry animations (`whileInView`, `viewport={{ once: true }}`).
- **Organic Motion Parity:** Keep animations subtle, warm, and natural to match the physical scrapbook feel (e.g., gentle fade-in reveals for the "Reveal All 24 Tributes" toggle and smooth scaling for polaroid hover states).
- **Smooth Scrolling:** Enable smooth scroll behavior globally (`html { scroll-behavior: smooth; }`) and support seamless anchor linking from the header navigation.

## 6. Responsiveness & Multilingual Support

- **Mobile-First Priority:** Build mobile viewports as the primary target centered around a 390px fluid width. Ensure touch-friendly targets with a minimum size of 44x44px.
- **Desktop Expansion:** Scale up gracefully using Tailwind breakpoints (`md:`, `lg:`) to a 1440px grid width featuring a 3-column masonry layout for 24+ wishes and a 4-column polaroid spread for 22+ photos.
- **Multilingual Unicode & Sinhala Integration:** Strictly enforce UTF-8 file encoding across all templates and data files. Support multi-generational wishes in Sinhala by integrating `'Noto Serif Sinhala'` alongside `'Newsreader'` with proper line-height spacing (`1.75` to `1.85`) for complex diacritics and ligatures.

## 7. Typography Hierarchy & Font Stack

- **High-Editorial Display:** Use `'Playfair Display'` (weights 600, 700, 900 italic) for mastheads, celebratory hero banners, and chapter roman numerals (`Chapter I`).
- **Narrative Reading & Letters:** Use `'Newsreader'` (weights 400, 400 italic, 500) for long-form family tributes, personal reflections, pull quotes, and opening welcome letters.
- **UI & Metadata Badges:** Use `'Plus Jakarta Sans'` (weights 600, 700) with uppercase tracking (`0.08em` to `0.15em`) for small labels, stamps, and quick-jump navigation.
- **Handwritten Script:** Use `'Caveat'` (`.font-cursive`) for intimate handwritten signatures, polaroid handwriting captions, and personal annotations.

## 8. Design System Color Tokens (`reference/DESIGN.md`)

- **Canvas Background (`surface-canvas`):** `#fdf9f3` (master antique linen ivory background).
- **Polaroid Stock (`surface-container-lowest`):** `#ffffff` (pure white polaroid photo stock and letter paper).
- **Primary Accent (`primary`):** `#99462a` (deep terracotta clay for primary CTAs, wax seal base, and active nav states).
- **Secondary Accent (`secondary`):** `#7d562d` (vintage honey gold and aged saddle leather).
- **Tertiary Accent (`tertiary`):** `#7d5546` (warm dusty rosewood for familial warmth and anniversary tags).
- **Ink Typography:** Deep espresso ink (`#1c1c18`) for headlines and high-contrast text; narrative umber (`#55433d`) for body letters and quotes; muted umber/sepia (`#88726c`) for dates, locations, and timestamps.

## 9. Component Architecture & Code Standards

- **Clean Component Split:**
  - `components/layout/`: Global framing (`Header.tsx`, `Footer.tsx`).
  - `components/sections/`: High-level landing sections (`Hero.tsx`, `WishesSection.tsx`, `PhotoGallery.tsx`).
  - `components/ui/`: Reusable, atomic primitives (`PolaroidCard.tsx`, `LightboxModal.tsx`, `WashiTape.tsx`).
- **Interactivity & State Requirements:**
  - **Progressive Disclosure:** Render the initial 6 core tributes by default, managed via a `'use client'` toggle ("Reveal All 24 Tributes & Letters ♡") that expands the remaining 18 letters.
  - **Darkroom Lightbox:** Implement a full-screen modal over a `surface-darkroom` backdrop (`rgba(22, 20, 19, 0.94)`) supporting keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`), backdrop click close, and a "Photo X of 22" counter.
- **Code Standards & Brevity:** Write modern React / Next.js TypeScript code. Keep logic concise, modular, and DRY without bloated helper functions or unnecessary verbosity.
- **Documentation & Comments:** Include clear, meaningful inline comments for non-obvious state transitions (such as the accordion toggle or lightbox keyboard navigation), dynamic metadata logic, or complex animation calculations.
- **Imports:** Always use path aliases starting with `@/` matching `tsconfig.json` (e.g., `@/components/ui/PolaroidCard`, `@/data/tributes`, `@/styles/components/...`).
