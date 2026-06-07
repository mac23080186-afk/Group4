# PRD — Spider-Marketers × Thai Cong Interior Design
## Premium One-Page Portfolio Website

**Document Version:** 1.1  
**Date:** 2026-06-06  
**Status:** Specification Complete — Real Team Data Applied — Ready for Implementation  
**Target Stack:** HTML5 · CSS3 · Vanilla JavaScript · No Frameworks

---

## TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Brand Story](#2-brand-story)
3. [Design Philosophy](#3-design-philosophy)
4. [Color Palette](#4-color-palette)
5. [Typography System](#5-typography-system)
6. [Layout Specifications](#6-layout-specifications)
7. [Component Specifications](#7-component-specifications)
8. [Section-by-Section Architecture](#8-section-by-section-architecture)
   - 8.1 Navigation
   - 8.2 Hero
   - 8.3 Story Introduction
   - 8.4 Team Members
   - 8.5 Brand Collaboration
   - 8.6 Services
   - 8.7 Contact
   - 8.8 Footer
9. [Team Member Data Structure](#9-team-member-data-structure)
10. [Responsive Behavior](#10-responsive-behavior)
11. [Animation Requirements](#11-animation-requirements)
12. [Accessibility Requirements](#12-accessibility-requirements)
13. [Visual Effects Catalog](#13-visual-effects-catalog)
14. [Asset & Media Specifications](#14-asset--media-specifications)
15. [Implementation Checklist](#15-implementation-checklist)

---

## 1. PROJECT OVERVIEW

### 1.1 Project Identity

| Field | Value |
|---|---|
| Project Name | Spider-Marketers × Thai Cong Interior Design |
| Website Type | One-page luxury portfolio |
| Primary Audience | High-net-worth individuals, interior design clients, brand partners |
| Secondary Audience | Potential recruits, press, industry peers |
| Tone | Authoritative, intimate, editorial, aspirational |
| Language | English (primary), subtle Vietnamese cultural nuance |
| Scroll Direction | Vertical single-page |

### 1.2 Core Narrative

This website tells two interwoven stories:

**Story A — The Brand:** Thai Cong Interior Design is Vietnam's most celebrated luxury interior design house, founded by master designer Thai Cong. The brand philosophy: every space is a biography of its owner — architecture and emotion are inseparable.

**Story B — The Team:** Spider-Marketers is the creative marketing collective behind Thai Cong's digital presence. Each member has a distinct "Spider Alias" — a poetic codename reflecting their unique strength in the web of creative strategy.

The site does not merely list team members. It introduces them as characters in a luxury editorial story — the way Vogue introduces a creative house's team, or the way a Hermès campaign introduces its artisans.

### 1.3 Project Goals

- Establish immediate premium authority within 3 seconds of landing
- Communicate the brand's editorial luxury identity without text overload
- Showcase the Spider-Marketers team in a dignified, aspirational editorial format
- Drive contact conversions for high-value projects
- Demonstrate web craft that matches the quality of Thai Cong's physical designs

### 1.4 Success Criteria

- First Contentful Paint < 1.8s
- Cumulative Layout Shift < 0.1
- Lighthouse Accessibility Score ≥ 95
- Fully responsive from 320px to 2560px viewport width
- All animations respect `prefers-reduced-motion`

---

## 2. BRAND STORY

### 2.1 Thai Cong — The Designer

Thai Cong is Vietnam's preeminent luxury interior designer, known internationally for spaces that carry the weight of memory, culture, and refinement. His work synthesizes Eastern sensibility with Western editorial clarity. He does not decorate rooms — he composes atmospheres.

**Brand Voice:** Quiet confidence. Never loud, never ordinary. Every word chosen as deliberately as every material in his spaces.

**Design DNA:**
- Natural materials: marble, aged brass, raw silk, warm oak
- Restraint as luxury: what is removed matters as much as what remains
- Light as architecture: spaces live differently at dawn, noon, and midnight
- Cultural layering: Vietnamese heritage visible in proportion, not decoration

### 2.2 Spider-Marketers — The Collective

Spider-Marketers is a student-founded creative marketing team operating as Thai Cong's digital storytellers. The name is deliberate: spiders weave intricate, invisible structures that hold everything together. The web is the work — strategic, precise, beautiful in its architecture.

Each member holds a Spider Alias: a codename that captures their role in the web.

**Team Philosophy:** "We do not market a brand. We translate a vision into language the world can feel."

### 2.3 The Collaboration

This portfolio documents the first chapter of Spider-Marketers × Thai Cong — a collaboration where young creative strategy meets master craftsmanship. The website is itself a proof of concept: can digital design honor the same values as physical luxury?

---

## 3. DESIGN PHILOSOPHY

### 3.1 The Editorial Luxury Framework

The site draws from three aesthetic references:

**1. High-End Print Editorial** (Architectural Digest, Wallpaper*, Vogue Living)
- Generous negative space — breathing room IS the luxury
- Typography as a design element, not just information delivery
- Horizontal rules and thin lines as architectural elements
- Portrait photography with editorial composition

**2. Japanese Ma (間) Principle**
- Ma = "negative space" or "pause" — the space between things
- Sections breathe. Margins are wide. Copy is sparse but resonant.
- Visual tension created by precise asymmetry

**3. Parisian Atelier Aesthetic**
- Monogram usage (TC for Thai Cong, SM for Spider-Marketers)
- Gold as a material, not a color — used sparingly, purposefully
- Hand-drawn details as texture (thin lines, subtle borders)
- The feeling of a private showroom, not a public storefront

### 3.2 Visual Hierarchy Principles

```
LEVEL 1 — ARCHITECTURAL  : Full-viewport hero images, section dividers
LEVEL 2 — EDITORIAL      : Large display headlines (80–120px)
LEVEL 3 — CHAPTER        : Section titles (40–60px), medium weight serif
LEVEL 4 — CONTENT        : Body copy (16–18px), generous line-height (1.8)
LEVEL 5 — METADATA       : Labels, roles, categories (11–13px, tracked caps)
```

### 3.3 The Luxury Grid

The page uses a 12-column grid with asymmetric section layouts:
- Hero: Full bleed (no grid)
- Story: 2-column (60/40 split, image left, text right)
- Team: 3-column card grid (desktop), 1-column (mobile)
- Services: Alternating full-width and 2-column layouts
- Contact: Centered single column (max 680px)

---

## 4. COLOR PALETTE

### 4.1 Primary Palette

```
┌─────────────────────────────────────────────────────────────────┐
│  DEEP NOIR         #0A0A0A   ████  Base background, primary text │
│  CHARCOAL DEPTH    #1A1A1A   ████  Cards, nav background          │
│  GRAPHITE          #2D2D2D   ████  Secondary surfaces             │
│  WARM GOLD         #C9A96E   ████  PRIMARY ACCENT — use sparingly │
│  PALE GOLD         #E8D5B0   ████  Gold on dark backgrounds       │
│  ANTIQUE GOLD      #B8962E   ████  Gold hover states              │
│  IVORY CREAM       #F5F0E8   ████  Primary text on dark bg        │
│  WARM WHITE        #FDFAF5   ████  Light section backgrounds      │
│  PURE WHITE        #FFFFFF   ████  Card text, high contrast       │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Secondary / Functional Palette

```
┌─────────────────────────────────────────────────────────────────┐
│  MUTED SAGE        #8B9E8A   ████  Nature/organic accents         │
│  WARM TERRACOTTA   #C4836A   ████  Warmth accent (use rarely)     │
│  COOL STONE        #9B9EA4   ████  Borders, dividers              │
│  NEAR-BLACK TEXT   #1C1C1C   ████  Body text on light backgrounds │
│  SMOKE             #F0EAE0   ████  Section alternation            │
└─────────────────────────────────────────────────────────────────┘
```

### 4.3 Color Application Rules

| Context | Color |
|---|---|
| Dark section background | #0A0A0A |
| Dark section text | #F5F0E8 (Ivory) |
| Light section background | #FDFAF5 (Warm White) |
| Light section text | #1C1C1C |
| Gold accent elements | #C9A96E |
| Gold accent text on dark | #E8D5B0 |
| Divider lines (dark bg) | rgba(201, 169, 110, 0.3) |
| Divider lines (light bg) | rgba(28, 28, 28, 0.15) |
| Button primary bg | #C9A96E |
| Button primary text | #0A0A0A |
| Glassmorphism card bg | rgba(255, 255, 255, 0.04) |
| Glassmorphism border | rgba(201, 169, 110, 0.15) |
| Overlay (hero) | rgba(10, 10, 10, 0.55) |

### 4.4 Dark/Light Section Alternation

```
Section 1 — Navigation   : Dark   (#0A0A0A, transparent → #0A0A0A on scroll)
Section 2 — Hero         : Dark   (full-bleed image with dark overlay)
Section 3 — Story Intro  : Dark   (#1A1A1A)
Section 4 — Team         : Light  (#FDFAF5)
Section 5 — Collaboration: Dark   (#0A0A0A)
Section 6 — Services     : Light  (#F5F0E8)
Section 7 — Contact      : Dark   (#1A1A1A)
Section 8 — Footer       : Deep   (#0A0A0A)
```

---

## 5. TYPOGRAPHY SYSTEM

### 5.1 Font Families

```
DISPLAY     : "Playfair Display"  — Google Fonts — serif
              Weight: 400 (Regular), 700 (Bold), 900 (Black)
              Use: Hero headline, section display titles

EDITORIAL   : "Cormorant Garamond" — Google Fonts — serif
              Weight: 300 (Light), 400 (Regular), 500 (Medium)
              Use: Story text, card descriptions, pull quotes

BODY        : "DM Sans" — Google Fonts — sans-serif
              Weight: 300 (Light), 400 (Regular), 500 (Medium)
              Use: Navigation, body copy, UI labels

MONO/ACCENT : "Cormorant SC" OR letter-spacing trick on DM Sans
              Use: Spider aliases, category tags, metadata labels
```

**Google Fonts Import URL:**
```
https://fonts.googleapis.com/css2?
  family=Playfair+Display:wght@400;700;900&
  family=Cormorant+Garamond:wght@300;400;500&
  family=DM+Sans:wght@300;400;500&
  display=swap
```

### 5.2 Type Scale

```
──────────────────────────────────────────────────────────────
ROLE              SIZE      LINE-HEIGHT   WEIGHT    FAMILY
──────────────────────────────────────────────────────────────
Hero Display      clamp(64px, 8vw, 120px)  1.0   900   Playfair
Hero Subtitle     clamp(16px, 2vw, 22px)   1.6   300   Cormorant
Section Display   clamp(48px, 6vw, 80px)   1.1   700   Playfair
Section Subtitle  clamp(14px, 1.5vw, 18px) 1.5   400   Cormorant
Card Name         clamp(22px, 2.5vw, 32px) 1.2   700   Playfair
Card Role         14px                     1.4   400   DM Sans
Card Alias        13px                     1.3   500   DM Sans (tracked)
Body Copy         clamp(15px, 1.2vw, 18px) 1.85  300   Cormorant
Navigation        13px                     1.0   500   DM Sans (tracked)
Button Label      12px                     1.0   500   DM Sans (tracked +0.15em)
Meta / Tag        11px                     1.0   500   DM Sans (tracked +0.2em)
Pull Quote        clamp(24px, 3vw, 40px)   1.4   300   Cormorant (italic)
──────────────────────────────────────────────────────────────
```

### 5.3 Typography Rules

- **Headlines:** Never set in all caps unless it's a micro-label (navigation, tags)
- **Body:** `font-feature-settings: "liga" 1, "kern" 1` — enable ligatures
- **Gold text:** Use `#E8D5B0` (Pale Gold) on dark, `#B8962E` (Antique Gold) on light
- **Letter spacing on caps labels:** `letter-spacing: 0.2em` minimum
- **Line length:** Body copy max-width `65ch` — never wider
- **Italic:** Cormorant Garamond italic is exceptionally refined — use for pull quotes and taglines

---

## 6. LAYOUT SPECIFICATIONS

### 6.1 Grid System

```css
/* Root Grid */
--grid-columns: 12;
--grid-gap: clamp(16px, 2vw, 32px);
--grid-margin: clamp(24px, 6vw, 120px);
--section-padding-v: clamp(80px, 10vw, 160px);
--max-content-width: 1440px;
```

### 6.2 Breakpoints

```
Mobile Small  : 320px  – 479px   (1-column, stacked)
Mobile        : 480px  – 767px   (1-column, wider)
Tablet        : 768px  – 1023px  (2-column, condensed)
Desktop       : 1024px – 1439px  (full layout)
Wide          : 1440px – 2560px  (max-width centered, wider margins)
```

### 6.3 Spacing Scale

```
--space-xs  : 8px
--space-sm  : 16px
--space-md  : 32px
--space-lg  : 64px
--space-xl  : 96px
--space-2xl : 128px
--space-3xl : 192px
```

### 6.4 Border Radius

```
--radius-none   : 0px         (most luxury elements — sharp corners)
--radius-sm     : 2px         (subtle rounding on tags only)
--radius-card   : 0px         (team cards — hard edges, editorial)
--radius-button : 0px         (CTA buttons — rectangular, commanding)
--radius-glass  : 1px         (glassmorphism overlays)
```

**Note:** This design uses hard rectangular corners almost universally. Rounded corners dilute the luxury editorial feel. Reserve any rounding for micro-UI elements only.

---

## 7. COMPONENT SPECIFICATIONS

### 7.1 Navigation Bar

**Behavior:**
- Initial state: Fully transparent, positioned absolute over hero
- Scrolled state (> 80px): Semi-transparent dark glass background `rgba(10, 10, 10, 0.92)` with `backdrop-filter: blur(20px)`
- Smooth CSS transition on background (0.4s ease)
- Logo left-aligned, nav links right-aligned
- One gold CTA button ("Contact") on far right

**Content:**
```
[TC Monogram Logo]  ·  [Story]  [Team]  [Services]  [Collaboration]  ·  [Contact ▸]
```

**Logo:** The letters "TC" in Playfair Display 700, with a thin gold underline. Or a stylized monogram if SVG asset is provided. Below "TC": "× Thai Cong" in Cormorant Garamond 300 at 11px.

**Mobile:** Hamburger menu (3 thin lines, 24px, gold color). Full-screen overlay menu when open. Menu items large (48px), centered, one per line. Overlay background: `rgba(10, 10, 10, 0.97)`.

**Active Section Indicator:** Thin gold underline on the nav item corresponding to the current viewport section. Updated via IntersectionObserver.

### 7.2 Buttons

**Primary CTA (Dark Background):**
```
Background: #C9A96E (Warm Gold)
Text: #0A0A0A, DM Sans 500, 12px, tracked +0.15em
Padding: 16px 40px
Border: none
Border-radius: 0
Hover: background shifts to #E8D5B0, subtle box-shadow 0 0 30px rgba(201,169,110,0.4)
Transition: 0.35s ease
```

**Secondary CTA (Ghost Button):**
```
Background: transparent
Text: #C9A96E, DM Sans 500, 12px, tracked +0.15em
Border: 1px solid #C9A96E
Padding: 14px 38px
Border-radius: 0
Hover: background rgba(201,169,110,0.08), border-color #E8D5B0
Transition: 0.35s ease
```

**Text Link with Arrow:**
```
Text: #C9A96E, DM Sans 500, 13px
Arrow: → (right arrow, shifts right 6px on hover)
Underline: thin gold line grows from 0 to 100% on hover
Transition: 0.3s ease
```

### 7.3 Section Divider / Ornament

A thin horizontal rule with a centered diamond ornament:
```
─────────────────── ◆ ───────────────────
```

- Line color: `rgba(201, 169, 110, 0.4)` on dark, `rgba(201, 169, 110, 0.3)` on light
- Diamond: `#C9A96E`, 8px × 8px, rotated 45deg
- Used between major sections as a breathing element

### 7.4 Gold Accent Lines

- Thin vertical gold line (1px wide, 60px tall, `#C9A96E`) used beside section labels
- Thin horizontal gold line (1px tall, 40px wide) used under team member names
- These are pure CSS — `border-left` or `::before` pseudo-elements

### 7.5 Team Cards (Core Component)

See full specification in Section 8.4. Key visual traits:

```
Card type      : Glassmorphism on light background; elevated dark on dark background
Background     : rgba(10, 10, 10, 0.03) blur(10px) on light bg
               : rgba(255, 255, 255, 0.04) blur(16px) on dark bg
Border         : 1px solid rgba(201, 169, 110, 0.2)
Padding        : 40px 28px
Portrait       : Circular placeholder (140px diameter), gold ring frame, member initials
                 Easy swap for real circular photo when available (see Section 8.4)
Hover effect   : Card lifts (translateY -8px), border brightens, gold ring glows
Shadow on hover: 0 24px 60px rgba(201, 169, 110, 0.12), 0 0 0 1px rgba(201,169,110,0.3)
Transition     : 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

### 7.6 Pull Quote Component

Large italic Cormorant Garamond quote, preceded and followed by thin gold lines:

```
        ─────────────────
        "Every space tells
         a story before
         anyone speaks."
        ─────────────────
              — Thai Cong
```

---

## 8. SECTION-BY-SECTION ARCHITECTURE

---

### 8.1 NAVIGATION

#### Wireframe

```
┌─────────────────────────────────────────────────────────────────────┐
│  TC                                                                  │
│  × Thai Cong              Story   Team   Services   Collab  [Contact]│
└─────────────────────────────────────────────────────────────────────┘

Position: fixed, top: 0, z-index: 1000
Height: 72px (desktop), 60px (mobile)
Padding: 0 clamp(24px, 6vw, 120px)
```

#### Mobile Navigation (Hamburger Open)

```
┌─────────────────────────┐
│  TC          ×  close   │
│                         │
│                         │
│         Story           │
│                         │
│         Team            │
│                         │
│        Services         │
│                         │
│       Collaboration     │
│                         │
│         Contact         │
│                         │
│  ─────── ◆ ─────────   │
│  © Spider-Marketers     │
└─────────────────────────┘
```

#### Behavior Specifications

- **Scroll detection:** `window.scrollY > 80` triggers background change
- **Active section tracking:** IntersectionObserver with threshold 0.5 on each section
- **Smooth scroll:** `scroll-behavior: smooth` + JS `scrollIntoView({behavior: 'smooth'})` for nav clicks
- **Logo click:** Scrolls to top (Hero section)
- **Mobile overlay:** Slides in from right with 0.4s ease-in-out transform translateX
- **Focus trap:** When mobile menu is open, Tab key cycles within menu items only

---

### 8.2 HERO SECTION

#### Wireframe

```
┌─────────────────────────────────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓          SPIDER-MARKETERS × THAI CONG           ▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓                                                 ▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓   ┌─────────────────────────────────────────┐  ▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓   │                                         │  ▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓   │    Every Space                          │  ▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓   │    Deserves                             │  ▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓   │    a Story.                             │  ▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓   │                                         │  ▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓   │    Interior Design by Thai Cong         │  ▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓   │    Strategy by Spider-Marketers         │  ▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓   │                                         │  ▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓   │      [ Discover the Team  ▸ ]           │  ▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓   └─────────────────────────────────────────┘  ▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓                                                 ▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│                         ↓ scroll ↓                                  │
└─────────────────────────────────────────────────────────────────────┘
  Height: 100vh (minimum), full-bleed
  ▓ = Luxury interior design background image with dark overlay
```

#### Hero Content Specifications

**Layout:**
- Full viewport height (`100vh`)
- Background: No photograph available — use the CSS cinematic gradient specified in Section 14.2 (warm amber + deep noir with radial gold highlights)
- Overlay: `rgba(10, 10, 10, 0.55)` — enough to ensure text legibility, not so dark it kills the image
- Parallax effect: background-attachment fixed (CSS parallax, no JS required on desktop)

**Content positioning:** Left-aligned, vertically centered. Margin-left: `clamp(40px, 8vw, 160px)`. Max-width: 700px.

**Content stack (top to bottom):**
```
1. MICRO LABEL (pre-title):
   "SPIDER-MARKETERS × THAI CONG"
   DM Sans 500, 11px, tracked +0.3em, #C9A96E (gold)
   Preceded by thin gold line: ─── SPIDER-MARKETERS × THAI CONG
   Animation: fade in + slide up, 0.8s, delay 0.2s

2. DISPLAY HEADLINE (3 lines):
   "Every Space"
   "Deserves"
   "a Story."
   Playfair Display 900
   Font size: clamp(56px, 8vw, 112px)
   Color: #F5F0E8 (Ivory)
   Line-height: 1.0
   "a Story." — the period is gold (#C9A96E)
   Animation: words reveal one by one, stagger 0.15s each

3. SUBTEXT:
   "Interior Design by Thai Cong · Creative Strategy by Spider-Marketers"
   Cormorant Garamond 300 italic, 18px, #E8D5B0
   Animation: fade in, delay 0.9s

4. CTA BUTTON:
   "Discover the Team" (primary gold button)
   Scrolls to #team section
   Animation: fade in + slide up, delay 1.2s
   Below: "↓" animated scroll indicator, bouncing gently

5. SCROLL INDICATOR:
   Thin vertical line (2px, 48px, gold) with downward-moving dot
   "SCROLL" text in 10px DM Sans, tracked
   Positioned: bottom 40px, centered
```

**Parallax Detail:** On scroll, the hero background moves at 0.5x scroll speed (CSS `background-attachment: fixed` handles this on most browsers without JS overhead).

**Animated Grain Overlay (optional, high-end touch):**
A subtle CSS `noise` texture overlay at 3% opacity gives the background the feeling of fine photographic grain — matching luxury print media aesthetics. Implemented with `filter: url(#noise)` SVG filter or a tiny repeating PNG.

---

### 8.3 STORY INTRODUCTION SECTION

#### Wireframe

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ─────── ◆ ─────────────────────────────────────────────────────   │
│                                                                     │
│  ┌──────────────────────────────┐   ┌─────────────────────────────┐│
│  │                              │   │                             ││
│  │   [LUXURY INTERIOR IMAGE]    │   │  ── THE STORY ──            ││
│  │                              │   │                             ││
│  │   Full-bleed, high contrast  │   │  Thai Cong has spent three  ││
│  │   editorial photography      │   │  decades transforming       ││
│  │   of an interior space       │   │  empty volumes into         ││
│  │                              │   │  inhabited poetry.          ││
│  │   Aspect ratio: 4:5          │   │                             ││
│  │                              │   │  ─────────────────          ││
│  │                              │   │  "A room is not finished    ││
│  │                              │   │   when the last piece       ││
│  │                              │   │   arrives — it is finished  ││
│  │                              │   │   when nothing can be       ││
│  │                              │   │   removed."                 ││
│  │                              │   │  ─────────────────          ││
│  │                              │   │                             ││
│  │                              │   │  We met at the intersection ││
│  │                              │   │  of a master's vision and   ││
│  │                              │   │  a team of storytellers.    ││
│  │                              │   │                             ││
│  │                              │   │  This is that story.        ││
│  └──────────────────────────────┘   │                             ││
│                                     │  [ Read More ▸ ]            ││
│                                     └─────────────────────────────┘│
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
  Background: #1A1A1A (dark charcoal)
  Text: #F5F0E8 (Ivory)
  Layout: 55% image / 45% text (desktop), stacked (mobile)
  Padding: var(--section-padding-v) var(--grid-margin)
```

#### Story Section Content Specifications

**Left Column (Image):**
- Editorial portrait-style interior photograph
- Object-fit: cover, aspect-ratio 4/5
- On scroll into view: subtle zoom-in animation (scale 1.0 → 1.04, 1.2s ease)
- Optional: thin gold border frame (1px, offset 8px inward via outline or box-shadow)

**Right Column (Text):**
- Vertical gold accent line (1px, full column height) on the left edge of this column
- Section micro-label: "THE STORY" in DM Sans 500, 11px, #C9A96E, tracked +0.3em
- Body copy: Cormorant Garamond 300, 18px, line-height 1.85, color #E8D5B0
- Pull quote: Isolated in a separate styled block (see Component 7.6)
- Final line: "This is that story." — Cormorant Garamond 500 italic, slightly larger
- CTA: Text link with arrow → "Read More" (or removed if no linked long-form content)

**Animation on scroll:**
- Image column: slides in from left (translateX -40px → 0, fade in)
- Text column: slides in from right (translateX 40px → 0, fade in)
- Pull quote: fades in last, with slight delay
- All triggered by IntersectionObserver at 20% threshold

---

### 8.4 TEAM MEMBERS SECTION

#### Wireframe (Desktop — 3 Column Grid)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│          THE WEB                                                    │
│          ── Spider-Marketers Team ──                                │
│                                                                     │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐    │
│  │                 │  │                 │  │                 │    │
│  │  [PORTRAIT]     │  │  [PORTRAIT]     │  │  [PORTRAIT]     │    │
│  │  Photo 3:4      │  │  Photo 3:4      │  │  Photo 3:4      │    │
│  │                 │  │                 │  │                 │    │
│  ├─────────────────┤  ├─────────────────┤  ├─────────────────┤    │
│  │                 │  │                 │  │                 │    │
│  │ ─ Full Name     │  │ ─ Full Name     │  │ ─ Full Name     │    │
│  │                 │  │                 │  │                 │    │
│  │ ROLE TITLE      │  │ ROLE TITLE      │  │ ROLE TITLE      │    │
│  │ ◆ "Spider Alias"│  │ ◆ "Spider Alias"│  │ ◆ "Spider Alias"│    │
│  │                 │  │                 │  │                 │    │
│  │ Description of  │  │ Description of  │  │ Description of  │    │
│  │ the team member │  │ the team member │  │ the team member │    │
│  │ in 2-3 lines.   │  │ in 2-3 lines.   │  │ in 2-3 lines.   │    │
│  │                 │  │                 │  │                 │    │
│  │ [ CATEGORY ]    │  │ [ CATEGORY ]    │  │ [ CATEGORY ]    │    │
│  │                 │  │                 │  │                 │    │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘    │
│                                                                     │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐    │
│  │  [ROW 2 — #4]   │  │  [ROW 2 — #5]   │  │  [ROW 2 — #6]   │    │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘    │
│                                                                     │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐    │
│  │  [ROW 3 — #7]   │  │  [ROW 3 — #8]   │  │  [ROW 3 — #9]   │    │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
  Total cards: 9 (3 rows × 3 columns on desktop)
  Background: #FDFAF5 (Warm White) — light section
  Section title text: #1C1C1C
  Card: glassmorphism on light bg
  Grid: repeat(3, 1fr) with 32px gap (desktop)
       repeat(2, 1fr) with 24px gap (tablet — row 3 card is centered)
       1fr (mobile)
```

#### Team Card — Detailed Wireframe

```
┌─────────────────────────────────────────────────┐
│                                                  │
│              ┌───────────────┐                   │
│              │               │                   │
│              │   ╭───────╮   │ ← gold ring frame │
│              │  ╱         ╲  │                   │
│              │ │   H   H   │ │ ← member initials │
│              │  ╲         ╱  │   Playfair 700    │
│              │   ╰───────╯   │   gold, centered  │
│              │               │                   │
│              └───────────────┘                   │
│                                                  │
│  ─────────────── (thin gold line, 48px)          │
│                                                  │
│  Full Name                                       │
│  (Playfair Display 700, 24–28px, #1C1C1C)        │
│                                                  │
│  ROLE TITLE                                      │
│  (DM Sans 500, 12px, tracked, #1C1C1C, opacity 0.6)│
│                                                  │
│  ◆  "The Grand Constructor Spider"               │
│  (Cormorant Garamond italic 400, 14px, #C9A96E)  │
│  ◆ = diamond bullet in gold                      │
│                                                  │
│  Short description of this member's creative     │
│  strength, personality, and contribution to      │
│  the project. Maximum 3 sentences.               │
│  (Cormorant Garamond 300, 15px, #555, lh 1.7)   │
│                                                  │
│  ┌──────────────┐                                │
│  │  CATEGORY   │                                │
│  └──────────────┘                                │
│  (DM Sans 500, 10px, tracked +0.2em, border 1px │
│   gold, padding 4px 10px, color #C9A96E)        │
│                                                  │
└─────────────────────────────────────────────────┘
  Card background: rgba(255, 255, 255, 0.7)
  Card border: 1px solid rgba(201, 169, 110, 0.25)
  Card padding: 40px 28px
  Portrait: Circular placeholder, not rectangular photo
  Hover: translateY(-8px), shadow intensifies, gold ring brightens
```

#### Circular Portrait Placeholder — CSS Specification

```
Structure:
  <div class="portrait-placeholder" aria-hidden="true">
    <div class="portrait-ring">
      <span class="portrait-initials">HH</span>
    </div>
  </div>

.portrait-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0 24px;
}

.portrait-ring {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1C1C1C 0%, #2D2D2D 100%);
  border: 2px solid #C9A96E;
  box-shadow:
    0 0 0 4px rgba(201, 169, 110, 0.12),
    0 0 0 8px rgba(201, 169, 110, 0.06),
    inset 0 1px 0 rgba(201, 169, 110, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.5s ease, border-color 0.5s ease;
  position: relative;
}

/* Rotating gold arc decoration on the ring */
.portrait-ring::before {
  content: '';
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 1px solid transparent;
  border-top-color: rgba(201, 169, 110, 0.4);
  border-right-color: rgba(201, 169, 110, 0.15);
  pointer-events: none;
}

.portrait-initials {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 36px;
  color: #C9A96E;
  letter-spacing: 0.05em;
  user-select: none;
}

/* Hover state */
.team-card:hover .portrait-ring {
  border-color: #E8D5B0;
  box-shadow:
    0 0 0 4px rgba(201, 169, 110, 0.2),
    0 0 0 8px rgba(201, 169, 110, 0.1),
    0 0 24px rgba(201, 169, 110, 0.15),
    inset 0 1px 0 rgba(201, 169, 110, 0.3);
}

REPLACEMENT STRATEGY:
  When real photos are available, replace the .portrait-ring div
  with an <img> tag. The circular clipping is achieved by:
  .portrait-img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center top;
    border: 2px solid #C9A96E;
    box-shadow: 0 0 0 4px rgba(201, 169, 110, 0.12);
  }
  No structural HTML changes required — just swap the inner element.
```

#### Team Section Header Wireframe

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   ── THE WEB                                                        │
│                                                                     │
│   The creative minds behind Thai Cong's digital universe.           │
│   Nine specialists. One vision.                                     │
│                                                                     │
│   ─────────────────────── ◆ ───────────────────────                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Section title:** "THE WEB" — Playfair Display 900, 64–80px, #1C1C1C  
**Section subtitle:** "Spider-Marketers Team" — DM Sans 500, 12px, tracked, #C9A96E  
**Intro text:** Cormorant Garamond 300, 20px, max-width 540px

#### Card Hover State — Full Specification

```
DEFAULT STATE:
  - Portrait ring: border 2px solid #C9A96E, inner glow subtle
  - Initials: #C9A96E, Playfair 700
  - Card: flat, no shadow
  - Border: 1px solid rgba(201, 169, 110, 0.2)
  - Background: rgba(255, 255, 255, 0.6)

HOVER STATE (transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)):
  - Portrait ring: border-color brightens to #E8D5B0
  - Portrait ring: outer glow intensifies (0 0 24px rgba(201,169,110,0.25))
  - Card: translateY(-8px)
  - Shadow: 0 20px 60px rgba(201, 169, 110, 0.15),
            0 0 0 1px rgba(201, 169, 110, 0.35)
  - Background: rgba(255, 255, 255, 0.9)
  - Spider Alias color: brightens slightly
  - Category tag: border-color brightens
```

---

### 8.5 BRAND COLLABORATION SECTION

#### Wireframe

```
┌─────────────────────────────────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                             ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ── COLLABORATION ──        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                             ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  Spider-Marketers           ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ×                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  Thai Cong Interior Design  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                             ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ┌─────────────────────┐   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  SM LOGO            │   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │     ×               │   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  TC LOGO            │   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  └─────────────────────┘   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                             ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  [ Our Manifesto ▸ ]        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                             ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
└─────────────────────────────────────────────────────────────────────┘
  Background: #0A0A0A with subtle full-bleed dark interior image (10% opacity)
  Text: #F5F0E8
  Layout: Single centered column, max-width 800px
```

#### Collaboration Section — Content Specifications

**Purpose:** Formally introduce the collaboration as a named partnership. Treat it like a luxury brand announcement.

**Content stack:**
```
1. MICRO LABEL:     "THE COLLABORATION" — gold, tracked DM Sans
2. DISPLAY TEXT:    "Spider-Marketers" (Playfair 700, 56px)
                    "×" (Cormorant Garamond 300, 80px, gold, italic)
                    "Thai Cong Interior Design" (Playfair 700, 56px)
3. BODY COPY:       2–3 sentences describing the nature of the partnership
4. STATS ROW:       Three numbers with labels:
                    [9 Team Members] · [1 Vision] · [∞ Possibilities]
                    Stats styled as: number in Playfair 700 56px gold,
                    label in DM Sans 400 12px ivory
5. CTA BUTTON:      "Discover Our Approach" (ghost button style)
```

**Stats Row Wireframe:**
```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│      9          ·         1          ·         ∞         │
│  Team Members      Core Vision          Possibilities    │
│                                                          │
└──────────────────────────────────────────────────────────┘
  Numbers: Playfair Display 700, clamp(48px, 6vw, 80px), #C9A96E
  Labels: DM Sans 400, 12px, #E8D5B0, tracked +0.15em
  Dots (·): #C9A96E
  Layout: flex row, justify-content: center, gap 80px
```

---

### 8.6 SERVICES SECTION

**Context:** This section showcases Thai Cong Interior Design's service offerings — the disciplines that Spider-Marketers was tasked with communicating to the world. The section title reflects this: "What Thai Cong Creates." Spider-Marketers framed these services as the backbone of their campaign strategy.

**Project focus areas (displayed as a pre-grid sub-header):**
```
Mansions  ·  Penthouses  ·  Luxury Apartments
```

#### Wireframe

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   ── WHAT THAI CONG CREATES ──                                      │
│                                                                     │
│   Eight disciplines. One philosophy: that beauty is                 │
│   not decoration — it is the architecture of how life feels.        │
│                                                                     │
│   MANSIONS  ·  PENTHOUSES  ·  LUXURY APARTMENTS                    │
│                                                                     │
│  ─────────────────────────── ◆ ────────────────────────────        │
│                                                                     │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │
│  │                  │  │                  │  │                  │  │
│  │  01              │  │  02              │  │  03              │  │
│  │  ──────────      │  │  ──────────      │  │  ──────────      │  │
│  │  Architectural   │  │  Spatial Layout  │  │  Ceiling, Wall   │  │
│  │  Consulting      │  │  Optimization    │  │  & Floor Design  │  │
│  │                  │  │                  │  │                  │  │
│  │  Master-level    │  │  Every volume    │  │  Surfaces are    │  │
│  │  guidance on     │  │  optimized for   │  │  the canvas of   │  │
│  │  structure and   │  │  light, flow,    │  │  a room's        │  │
│  │  proportion.     │  │  and purpose.    │  │  biography.      │  │
│  │                  │  │                  │  │                  │  │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘  │
│                                                                     │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │
│  │  04              │  │  05              │  │  06              │  │
│  │  Premium         │  │  Color &         │  │  Decorative      │  │
│  │  Furniture       │  │  Material        │  │  Arrangement     │  │
│  │  Selection       │  │  Consulting      │  │                  │  │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘  │
│                                                                     │
│  ┌──────────────────┐  ┌──────────────────┐                        │
│  │  07              │  │  08              │                        │
│  │  3D Visualization│  │  Luxury          │                        │
│  │  & Material      │  │  Residential     │                        │
│  │  Profiles        │  │  Interior Design │                        │
│  └──────────────────┘  └──────────────────┘                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
  Background: #F5F0E8 (Smoke/light warm)
  Text: #1C1C1C
  Cards: transparent, bottom border 1px gold, padding 32px 0
  Layout: 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
```

#### Service Card Specifications

Each service card:
```
Structure:
  - Service Number: "01" — DM Sans 300, 48px, gold (#C9A96E), opacity 0.35
  - Thin gold underline: 32px wide, 1px tall, margin-top 8px
  - Service Name: Playfair Display 700, 20px, #1C1C1C, line-height 1.3
  - Description: Cormorant Garamond 300, 15px, #555, line-height 1.75
  - Bottom border: 1px solid rgba(201, 169, 110, 0.2) — default
  - Hover: bottom border animates from rgba(201,169,110,0.2) → #C9A96E
            number opacity increases from 0.35 → 0.75
            service name color shifts from #1C1C1C → #1C1C1C (unchanged, stable)
  - Transition: border-color 0.4s ease, opacity 0.4s ease

Services List (8 services — exact from Thai Cong PDF):
  01 — Architectural Consulting
       Master-level architectural guidance on structural form, spatial proportion,
       and the invisible grammar of well-composed rooms.

  02 — Spatial Layout Optimization
       Every cubic metre of a space re-examined for light, movement, and purpose.
       No volume is wasted. No corner is accidental.

  03 — Ceiling, Wall & Floor Design
       The surfaces that define a room's atmosphere — from raw stone floors
       to lacquered ceilings that hold the light of a different hour.

  04 — Premium Furniture Selection
       Curation of furniture as a form of portraiture — each piece chosen
       for what it says about the person who will live beside it.

  05 — Color & Material Consulting
       The science and poetry of pigment, texture, and finish.
       How warm oak speaks differently in morning light than in candlelight.

  06 — Decorative Arrangement
       The final composition — where objects become characters
       and a room becomes a complete narrative.

  07 — 3D Visualization & Material Profiles
       Photo-realistic renders and material boards that allow clients
       to inhabit the future of their space before a single wall is touched.

  08 — Luxury Residential Interior Design
       The complete service: from architectural consultation through to final
       styling — for mansions, penthouses, and high-end apartments.
```

---

### 8.7 CONTACT SECTION

#### Wireframe

```
┌─────────────────────────────────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓                                           ▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓  ── BEGIN A CONVERSATION ──               ▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓                                           ▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓  Every great space begins with            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓  a great conversation.                    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓                                           ▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓  ─────────────────── ◆ ───────────────    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓                                           ▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓        ┌──────────────────────────────────────────────────────┐  ▓│
│▓▓        │  ── DIRECT CONTACT ──                               │  ▓│
│▓▓        │                                                      │  ▓│
│▓▓        │  Ms. Anh Ngoc                                        │  ▓│
│▓▓        │  +84 914 93 88 44                                    │  ▓│
│▓▓        │  anhngoc@thespidermarketers.com                      │  ▓│
│▓▓        │                                                      │  ▓│
│▓▓        │  ─────────────────── ◆ ──────────────────           │  ▓│
│▓▓        │                                                      │  ▓│
│▓▓        │  ── HEADQUARTERS ──                                  │  ▓│
│▓▓        │  Spider-Marketers Headquarters                       │  ▓│
│▓▓        │  144 Xuan Thuy Street, Cau Giay District             │  ▓│
│▓▓        │  Hanoi, Vietnam                                      │  ▓│
│▓▓        │                                                      │  ▓│
│▓▓        │  ─────────────────── ◆ ──────────────────           │  ▓│
│▓▓        │                                                      │  ▓│
│▓▓        │  MEDIA & PRESS                                       │  ▓│
│▓▓        │  media@thespidermarketers.com                        │  ▓│
│▓▓        │                                                      │  ▓│
│▓▓        │  BUSINESS DEVELOPMENT                                │  ▓│
│▓▓        │  info@thespidermarketers.com                         │  ▓│
│▓▓        │                                                      │  ▓│
│▓▓        │  CAREERS & RECRUITMENT                               │  ▓│
│▓▓        │  hr@thespidermarketers.com                           │  ▓│
│▓▓        │                                                      │  ▓│
│▓▓        │  ─────────────────── ◆ ──────────────────           │  ▓│
│▓▓        │                                                      │  ▓│
│▓▓        │  [YouTube]  [Facebook]  [Instagram]  [TikTok]        │  ▓│
│▓▓        │                                                      │  ▓│
│▓▓        └──────────────────────────────────────────────────────┘  ▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
└─────────────────────────────────────────────────────────────────────┘
  Background: #1A1A1A
  Text: #F5F0E8
  Content max-width: 680px, centered
  Layout: Single centered column — no contact form (real contact info shown instead)
```

#### Contact Section — Content Specifications

**Layout decision:** This section presents real direct-contact information rather than a generic web form, consistent with the luxury atelier approach — a maison does not hide behind forms; it offers you a person.

**Section Header Block:**
```
Micro-label: "── BEGIN A CONVERSATION ──"
             DM Sans 500, 11px, tracked +0.3em, #C9A96E

Tagline:     "Every great space begins with a great conversation."
             Cormorant Garamond 300 italic, 22px, #E8D5B0, centered
             max-width 520px
```

**Contact Block — Direct Contact:**
```
Label:       "DIRECT CONTACT"
             DM Sans 500, 11px, tracked +0.25em, #C9A96E

Name:        "Ms. Anh Ngoc"
             Playfair Display 700, 20px, #F5F0E8

Phone:       "+84 914 93 88 44"
             DM Sans 300, 16px, #E8D5B0
             Rendered as: <a href="tel:+84914938844">
             Hover: color shifts to #C9A96E

Email:       "anhngoc@thespidermarketers.com"
             DM Sans 300, 16px, #E8D5B0
             Rendered as: <a href="mailto:anhngoc@thespidermarketers.com">
             Hover: color shifts to #C9A96E, thin underline appears
```

**Contact Block — Headquarters:**
```
Label:       "HEADQUARTERS"
             DM Sans 500, 11px, tracked +0.25em, #C9A96E

Address:     Spider-Marketers Headquarters
             144 Xuan Thuy Street
             Cau Giay District, Hanoi, Vietnam

Typography:  Cormorant Garamond 300, 17px, #E8D5B0, line-height 1.9
```

**Contact Block — Departments:**
```
Three department rows, each with:
  - Department label: DM Sans 500, 11px, tracked +0.2em, #C9A96E
  - Email link: DM Sans 300, 15px, #E8D5B0 → hover #C9A96E

  MEDIA & PRESS          →  media@thespidermarketers.com
  BUSINESS DEVELOPMENT   →  info@thespidermarketers.com
  CAREERS & RECRUITMENT  →  hr@thespidermarketers.com
```

**Social Platform Icons:**
```
Platforms: YouTube · Facebook · Instagram · TikTok
Links: All href="#" (placeholder — no URLs in PDF)

Icon style: SVG line icons, 20px × 20px, #F5F0E8 at 60% opacity
Hover: opacity 100%, color #C9A96E
Spacing: 28px gap between icons
Layout: horizontal row, centered
ARIA: Each icon has aria-label="Platform name"
```

**Section Dividers within Contact block:**
Each sub-section separated by: `─────── ◆ ───────` (gold, thin, 40% opacity)

---

### 8.8 FOOTER SECTION

#### Wireframe

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ─────────────────────── ◆ ─────────────────────────               │
│                                                                     │
│  TC                       Story                                     │
│  × Thai Cong              Team                                      │
│                           Services                                  │
│  Spider-Marketers         Collaboration                             │
│  A Creative Collective    Contact                                   │
│                                                                     │
│  ─────────────────────────────────────────────────────────         │
│                                                                     │
│  © 2024 Spider-Marketers × Thai Cong Interior Design               │
│  All rights reserved. · Crafted with intention.                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
  Background: #0A0A0A (deep noir)
  Text: #F5F0E8 at 60% opacity
  Gold accents: #C9A96E
  Layout: 2-column (left: brand, right: nav links)
```

#### Footer Specifications

**Left Column:**
- "TC" monogram: Playfair Display 700, 28px, #C9A96E
- "× Thai Cong" tagline: Cormorant Garamond 300, 14px, #E8D5B0
- "Spider-Marketers" : DM Sans 400, 13px, #F5F0E8 at 70%
- "A Creative Collective": DM Sans 300, 12px, #F5F0E8 at 40%

**Right Column:**
- Navigation links: DM Sans 400, 13px, #F5F0E8 at 60%
- Hover: color brightens to #C9A96E, cursor pointer
- One link per line, no bullets

**Bottom Bar:**
- Thin rule: 1px, rgba(201, 169, 110, 0.2)
- Copyright: DM Sans 300, 12px, #F5F0E8 at 40%
- "Crafted with intention." — a nod to Thai Cong's philosophy

---

## 9. TEAM MEMBER DATA STRUCTURE

### 9.1 JSON Schema

```json
{
  "team": [
    {
      "id": "member-01",
      "fullName": "Hoàng Thanh Hải",
      "initials": "HH",
      "role": "Planner & Team Leader",
      "roleLabel": "The Master Architect",
      "spiderAlias": "The Grand Constructor Spider",
      "description": "Thanh Hải holds the entire web together. As Planner and Leader, he maps the strategic architecture of every campaign before a single thread is spun — ensuring that Spider-Marketers moves as one organism, not nine individuals.",
      "category": "LEADERSHIP",
      "portrait": null,
      "portraitAlt": "Hoàng Thanh Hải, Team Leader",
      "order": 1
    },
    {
      "id": "member-02",
      "fullName": "Trịnh Tuấn Tú",
      "initials": "TT",
      "role": "Market Researcher",
      "roleLabel": "The Insight Hunter",
      "spiderAlias": "The Detective Spider",
      "description": "Tuấn Tú hunts what others overlook. He traces the invisible patterns in markets, audiences, and moments — surfacing the insights that give every Thai Cong campaign its precision and its edge.",
      "category": "RESEARCH",
      "portrait": null,
      "portraitAlt": "Trịnh Tuấn Tú, Market Researcher",
      "order": 2
    },
    {
      "id": "member-03",
      "fullName": "Đinh Trần Yến Ngọc",
      "initials": "YN",
      "role": "Data Analyst & Digital Ads",
      "roleLabel": "The Data Curator",
      "spiderAlias": "The Data-Optimizing Spider",
      "description": "Yến Ngọc transforms numbers into narratives. She reads the data behind every campaign with the same care that Thai Cong reads a space — finding what is missing, what is abundant, and what can be refined.",
      "category": "ANALYTICS",
      "portrait": null,
      "portraitAlt": "Đinh Trần Yến Ngọc, Data Analyst",
      "order": 3
    },
    {
      "id": "member-04",
      "fullName": "Hoàng Anh Ngọc",
      "initials": "HN",
      "role": "Content Leader",
      "roleLabel": "The Royal Copywriter",
      "spiderAlias": "The Word-Weaver Spider",
      "description": "Anh Ngọc writes as Thai Cong designs — nothing extraneous, nothing unintended. As Content Leader, she sets the editorial standard for every word that reaches the audience in Thai Cong's name.",
      "category": "CONTENT",
      "portrait": null,
      "portraitAlt": "Hoàng Anh Ngọc, Content Leader",
      "order": 4
    },
    {
      "id": "member-05",
      "fullName": "Phạm Minh Ngọc",
      "initials": "PN",
      "role": "PR & Scriptwriter",
      "roleLabel": "The Storyteller",
      "spiderAlias": "The Tapestry-Weaving Spider",
      "description": "Minh Ngọc weaves stories that hold. From press narratives to video scripts, she constructs the tapestry of Thai Cong's public story — thread by thread, scene by scene, with no loose ends.",
      "category": "PR",
      "portrait": null,
      "portraitAlt": "Phạm Minh Ngọc, PR & Scriptwriter",
      "order": 5
    },
    {
      "id": "member-06",
      "fullName": "Phạm Thị Mai Xuân",
      "initials": "MX",
      "role": "Community & Seeding",
      "roleLabel": "The Social Host",
      "spiderAlias": "The Grand Host Spider",
      "description": "Mai Xuân is the presence Thai Cong's audience feels before they see the design. She hosts conversations, cultivates community, and seeds the brand's voice into every corner of the digital landscape with elegance.",
      "category": "SOCIAL",
      "portrait": null,
      "portraitAlt": "Phạm Thị Mai Xuân, Community Manager",
      "order": 6
    },
    {
      "id": "member-07",
      "fullName": "Ngô Hà Khoa",
      "initials": "NK",
      "role": "Art Director & Designer",
      "roleLabel": "The Visual Alchemist",
      "spiderAlias": "The Aesthetic Visionary Spider",
      "description": "Hà Khoa transmutes concept into vision. As Art Director, he translates Thai Cong's design philosophy into visual language that can be felt across a screen — light, proportion, and tension all preserved.",
      "category": "DESIGN",
      "portrait": null,
      "portraitAlt": "Ngô Hà Khoa, Art Director",
      "order": 7
    },
    {
      "id": "member-08",
      "fullName": "Lưu Phương Thùy",
      "initials": "LT",
      "role": "Video Editor & Director",
      "roleLabel": "The Cinematographer",
      "spiderAlias": "The Lensmaster Spider",
      "description": "Phương Thùy directs through the lens. Her films do not document Thai Cong's spaces — they inhabit them. Every cut, every frame, every second of silence is composed as deliberately as a Thai Cong room.",
      "category": "VIDEO",
      "portrait": null,
      "portraitAlt": "Lưu Phương Thùy, Video Director",
      "order": 8
    },
    {
      "id": "member-09",
      "fullName": "Nguyễn Khánh Hạ",
      "initials": "NH",
      "role": "Event & UI/UX Designer",
      "roleLabel": "The Experiential Designer",
      "spiderAlias": "The Spatial Architect Spider",
      "description": "Khánh Hạ designs the spaces where the brand comes alive — both physical events and digital interfaces. She understands that an experience, like a room, must be felt before it is understood.",
      "category": "EXPERIENCE",
      "portrait": null,
      "portraitAlt": "Nguyễn Khánh Hạ, Event & UX Designer",
      "order": 9
    }
  ]
}
### 9.2 Category Color Coding

Each category tag uses uniform gold styling — label text distinguishes role type:

```
LEADERSHIP   — #C9A96E border, "LEADERSHIP" label   (Hoàng Thanh Hải)
RESEARCH     — #C9A96E border, "RESEARCH" label      (Trịnh Tuấn Tú)
ANALYTICS    — #C9A96E border, "ANALYTICS" label     (Đinh Trần Yến Ngọc)
CONTENT      — #C9A96E border, "CONTENT" label       (Hoàng Anh Ngọc)
PR           — #C9A96E border, "PR" label             (Phạm Minh Ngọc)
SOCIAL       — #C9A96E border, "SOCIAL" label        (Phạm Thị Mai Xuân)
DESIGN       — #C9A96E border, "DESIGN" label        (Ngô Hà Khoa)
VIDEO        — #C9A96E border, "VIDEO" label         (Lưu Phương Thùy)
EXPERIENCE   — #C9A96E border, "EXPERIENCE" label    (Nguyễn Khánh Hạ)
```

**Note:** Uniform gold styling preserves visual cohesion. Color variation would dilute the luxury palette.

### 9.3 Portrait Placeholder Specifications

No photographs are available. Circular placeholder portraits are used throughout:

```
INITIALS REFERENCE (2-character display):
  Member 01  Hoàng Thanh Hải         →  HH
  Member 02  Trịnh Tuấn Tú           →  TT
  Member 03  Đinh Trần Yến Ngọc      →  YN  (given name initials)
  Member 04  Hoàng Anh Ngọc          →  HN
  Member 05  Phạm Minh Ngọc          →  PN
  Member 06  Phạm Thị Mai Xuân       →  MX  (given name initials)
  Member 07  Ngô Hà Khoa             →  NK
  Member 08  Lưu Phương Thùy         →  LT
  Member 09  Nguyễn Khánh Hạ         →  NH

PLACEHOLDER VISUAL SPEC:
  Size       : 140px × 140px (displayed at center of card top)
  Shape      : Circle (border-radius: 50%)
  Background : linear-gradient(135deg, #1C1C1C 0%, #2D2D2D 60%, #1A1208 100%)
  Frame      : 2px solid #C9A96E (gold ring)
  Outer glow : box-shadow 0 0 0 4px rgba(201,169,110,0.12)
  Initials   : Playfair Display 700, 36px, #C9A96E, centered
  Animation  : Ring brightens on card hover
  Decoration : Subtle arc using ::before pseudo-element (see Section 8.4 CSS spec)

PHOTO REPLACEMENT:
  When real photos become available:
  1. Add portrait photo file to assets/team/
  2. Replace .portrait-ring <div> with <img> element
  3. Apply border-radius: 50%, object-fit: cover, border: 2px solid #C9A96E
  4. No other structural changes required

PHOTO GUIDELINES (for future use):
  Composition : Upper-body, slight 3/4 angle, editorial composed
  Background  : Warm dark neutral (studio or interior)
  Lighting    : Directional, warm — Rembrandt or loop
  Attire      : Dark formal or smart-casual
  Minimum size: 400px × 400px (displayed at 140px circle)
```

---

## 10. RESPONSIVE BEHAVIOR

### 10.1 Navigation

```
DESKTOP (≥1024px):
  - Full horizontal nav, all links visible
  - Transparent → glass on scroll

TABLET (768-1023px):
  - Reduce nav link font size to 12px
  - Collapse to hamburger if 5+ links don't fit

MOBILE (<768px):
  - Always hamburger menu
  - Full-screen overlay on open
  - Logo remains visible
```

### 10.2 Hero

```
DESKTOP    : Text left-aligned, max-width 700px, right side shows more of image
TABLET     : Text centered, max-width 600px
MOBILE     : Text centered, headline font reduced, CTA full-width button
             Background parallax disabled (mobile performance)
```

### 10.3 Story Introduction

```
DESKTOP    : 55/45 two-column layout (image/text)
TABLET     : 50/50 two-column layout
MOBILE     : Single column — image above text, image height 300px fixed
```

### 10.4 Team Cards

```
DESKTOP (≥1280px) : 3-column grid, 32px gap
DESKTOP (1024-1279px): 3-column grid, 24px gap
TABLET (768-1023px) : 2-column grid, 24px gap
MOBILE (<768px)   : 1-column, full-width cards
```

### 10.5 Services

```
DESKTOP    : 3-column grid
TABLET     : 2-column grid
MOBILE     : 1-column, accordion-style (click to expand description)
```

### 10.6 Contact

```
All breakpoints : Centered single column
DESKTOP max-width: 580px
MOBILE           : Full-width form fields, stacked layout
```

### 10.7 Typography Responsive Scaling

All major type sizes use `clamp()` for fluid scaling:
```css
/* Examples */
.hero-headline { font-size: clamp(48px, 8vw, 112px); }
.section-title { font-size: clamp(36px, 6vw, 80px); }
.body-copy     { font-size: clamp(15px, 1.2vw, 18px); }
.card-name     { font-size: clamp(20px, 2vw, 28px); }
```

---

## 11. ANIMATION REQUIREMENTS

### 11.1 Page Load Sequence

```
t=0ms      : Page renders, no content visible (opacity: 0)
t=0ms      : Navigation fades in (opacity 0→1, 600ms)
t=300ms    : Hero pre-title slides up and fades in (400ms)
t=600ms    : Hero headline — word 1 reveals (300ms)
t=750ms    : Hero headline — word 2 reveals (300ms)
t=900ms    : Hero headline — word 3 reveals (300ms)
t=1100ms   : Hero subtitle fades in (400ms)
t=1400ms   : CTA button slides up and fades in (400ms)
t=1800ms   : Scroll indicator appears (300ms)
```

### 11.2 Scroll-Triggered Animations (IntersectionObserver)

All scroll animations use this pattern:
```javascript
// Trigger threshold: 0.15 (15% of element in viewport)
// Animation applied via adding CSS class: .is-visible

.animate-fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.animate-fade-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Section-specific animations:**

| Element | Animation | Duration | Delay |
|---|---|---|---|
| Section micro-labels | Fade + slide up | 0.6s | 0ms |
| Section headlines | Fade + slide up | 0.9s | 100ms |
| Story image | Fade + slide left, scale-in | 1.0s | 0ms |
| Story text | Fade + slide right | 1.0s | 200ms |
| Team cards | Stagger fade-up, 100ms between cards | 0.7s each | staggered |
| Pull quotes | Fade in | 1.2s | 300ms |
| Stats numbers | Count-up animation (0 → target number) | 1.5s | 200ms |
| Service cards | Stagger fade-up | 0.6s each | staggered |
| Contact form | Fade + slide up | 0.8s | 0ms |

### 11.3 Hover Animations

| Element | Effect | Duration |
|---|---|---|
| Nav links | Gold underline grows left-to-right | 0.3s |
| CTA Button | Gold brightens, subtle outward glow | 0.35s |
| Team cards | translateY(-8px), shadow appears | 0.5s cubic |
| Team card portrait | Desaturation removed, slight zoom | 0.4s ease |
| Service cards | Bottom border grows to gold | 0.3s ease |
| Footer links | Color shifts to gold | 0.25s |
| Form fields | Bottom border brightens, gold glow | 0.3s |
| Text links with arrow | Arrow shifts right 6px | 0.3s |

### 11.4 Scroll Progress Indicator (Optional Enhancement)

A thin gold horizontal line at the very top of the viewport (above nav) shows reading progress as the user scrolls:
```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: #C9A96E;
  width: 0%;  /* updated by JS: (scrollY / (docHeight - viewportHeight)) * 100 */
  z-index: 2000;
  transition: width 0.1s linear;
}
```

### 11.5 Parallax Effects

```
Hero background   : CSS fixed attachment (0.5x scroll speed)
Story image       : Subtle JS parallax: translateY(scrollProgress * -0.15)
Section overlays  : None — performance over polish on mid-tier devices
```

### 11.6 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .scroll-progress { display: none; }
}
```

---

## 12. ACCESSIBILITY REQUIREMENTS

### 12.1 Structure

- Single `<h1>` on the page: the hero headline
- Section titles use `<h2>` (Story, Team, Services, Collaboration, Contact)
- Team member names use `<h3>` within team section
- All sections have `<section>` tags with `aria-label` attributes
- Navigation wrapped in `<nav aria-label="Main navigation">`
- Footer wrapped in `<footer>`

### 12.2 Color Contrast

All text-background combinations must meet WCAG AA (4.5:1 for body, 3:1 for large text):

```
#F5F0E8 on #0A0A0A  → ratio ~18:1  ✓
#C9A96E on #0A0A0A  → ratio ~7.2:1 ✓ (for large text)
#E8D5B0 on #1A1A1A  → ratio ~12:1  ✓
#1C1C1C on #FDFAF5  → ratio ~19:1  ✓
#C9A96E on #FDFAF5  → ratio ~4.8:1 ✓ (for large text/18px+)
```

**Note:** Use `#B8962E` (Antique Gold) instead of `#C9A96E` for small body text on light backgrounds to ensure AA compliance.

### 12.3 Interactive Elements

- All interactive elements (buttons, links, form fields) have visible focus indicators
- Focus indicator: `outline: 2px solid #C9A96E; outline-offset: 4px`
- Hamburger menu button has `aria-expanded` and `aria-controls` attributes
- Mobile menu has `role="dialog"` and `aria-modal="true"`
- Smooth scroll does NOT interfere with `prefers-reduced-motion`

### 12.4 Images

- All team portrait `<img>` tags have descriptive `alt` text
- Background/decorative images: `role="presentation"` or CSS backgrounds (no img tag)
- Hero background: CSS background-image (not `<img>`)

### 12.5 Forms

- All form inputs have associated `<label>` elements (not just placeholder)
- Form has `aria-label="Contact form"`
- Required fields marked with `aria-required="true"`
- Error states use `aria-describedby` to associate error messages
- Success state announced via `aria-live="polite"` region

### 12.6 Keyboard Navigation

- Full keyboard navigation through all sections and interactive elements
- Mobile menu dismissible with Escape key
- Focus returns to hamburger button when mobile menu closes
- Skip-to-content link: first focusable element, visible on focus

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

---

## 13. VISUAL EFFECTS CATALOG

### 13.1 Glassmorphism Cards (Team Section)

```css
.team-card {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(201, 169, 110, 0.25);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

/* Fallback for browsers without backdrop-filter */
@supports not (backdrop-filter: blur(1px)) {
  .team-card {
    background: rgba(253, 250, 245, 0.95);
  }
}
```

### 13.2 Gold Shimmer Text Effect (Hero headline "a Story.")

```css
/* The period in the hero headline gets a shimmer on load */
.hero-gold-period {
  color: #C9A96E;
  background: linear-gradient(90deg, #B8962E, #E8D5B0, #C9A96E, #B8962E);
  background-size: 300% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s linear infinite;
  animation-delay: 2s; /* starts after page load sequence completes */
}

@keyframes shimmer {
  0% { background-position: 0% center; }
  100% { background-position: 300% center; }
}
```

### 13.3 Cursor Effect (Optional, Desktop Only)

A custom cursor: small gold circle (8px) with a larger trailing ring (24px):
```css
body { cursor: none; } /* Hide default cursor */

.custom-cursor {
  width: 8px; height: 8px;
  background: #C9A96E;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s ease;
}
.custom-cursor-ring {
  width: 24px; height: 24px;
  border: 1px solid rgba(201, 169, 110, 0.6);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transition: transform 0.4s ease, width 0.3s, height 0.3s;
}
/* Ring expands on hovering over interactive elements */
a:hover ~ .custom-cursor-ring,
button:hover ~ .custom-cursor-ring {
  width: 40px; height: 40px;
  border-color: #C9A96E;
}
```

**Note:** Disable on touch devices and `prefers-reduced-motion`.

### 13.4 Section Transition Ornament

Between alternating dark/light sections, a full-width graphic divider:
```
Option A: Simple — thin gold horizontal rule with diamond: ──── ◆ ────
Option B: Decorative — a 1px rule with subtle gold gradient (left edge transparent → gold → transparent)
Option C: Typographic — a large watermark letter "TC" in Playfair 900 at 4% opacity
```

Recommendation: **Option A** for all transitions (clean, consistent, luxury-minimal).

### 13.5 Image Hover Reveal (Team Cards)

On card hover, the portrait transitions from editorial grayscale to full color:
```css
.team-card .portrait {
  filter: grayscale(35%) brightness(0.95);
  transition: filter 0.5s ease;
}
.team-card:hover .portrait {
  filter: grayscale(0%) brightness(1);
}
```

### 13.6 Noise / Film Grain Texture

Subtle film grain overlay on the hero section, implemented as a lightweight CSS animation:
```css
.hero-grain {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* SVG noise pattern */
  opacity: 0.04;
  pointer-events: none;
  z-index: 1;
  animation: grain 0.5s steps(1) infinite;
}
@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-2%, -3%); }
  20% { transform: translate(3%, 2%); }
  30% { transform: translate(-1%, 4%); }
  40% { transform: translate(4%, -1%); }
  50% { transform: translate(-3%, 2%); }
  60% { transform: translate(2%, -4%); }
  70% { transform: translate(-4%, 3%); }
  80% { transform: translate(3%, -2%); }
  90% { transform: translate(-2%, 4%); }
}
```

---

## 14. ASSET & MEDIA SPECIFICATIONS

### 14.1 Asset Status & File Structure

```
STATUS LEGEND: ✓ Required  ✗ Not available (use CSS/placeholder)  ○ Optional

assets/
├── hero/
│   └── hero-bg.jpg          ✗  NO IMAGE AVAILABLE
│                               USE: CSS cinematic gradient (see 14.3)
│
├── story/
│   └── story-interior.jpg   ✗  NO IMAGE AVAILABLE
│                               USE: CSS dark gradient placeholder
│
├── team/                    ✗  NO PORTRAIT PHOTOS AVAILABLE
│   (no files — use circular   USE: Circular CSS placeholder (Section 8.4)
│    CSS placeholder avatars)   All 9 members use initials-based circles
│
├── brand/
│   ├── tc-monogram.svg      ○  CSS "TC" text monogram if SVG not provided
│   └── sm-logo.svg          ○  CSS "SM" text mark if SVG not provided
│
└── textures/
    └── noise.svg            ○  Inline SVG noise filter in <defs>
```

### 14.2 Hero Background — CSS Cinematic Gradient

Since no hero photograph is available, implement the hero background as a rich CSS gradient with a layered texture:

```css
.hero-section {
  background:
    /* Gold highlight layer — subtle warm glow top-right */
    radial-gradient(
      ellipse 60% 40% at 80% 20%,
      rgba(201, 169, 110, 0.08) 0%,
      transparent 60%
    ),
    /* Warm amber glow bottom-left — candlelight warmth */
    radial-gradient(
      ellipse 50% 60% at 10% 85%,
      rgba(180, 120, 40, 0.10) 0%,
      transparent 55%
    ),
    /* Base gradient — deep cinematic noir */
    linear-gradient(
      155deg,
      #1A1208 0%,    /* very dark warm brown */
      #0D0D0D 35%,   /* near-black */
      #0A0A0A 60%,   /* deep noir */
      #12100A 100%   /* slightly warm near-black */
    );
  background-size: 100% 100%;
  background-attachment: fixed; /* parallax on desktop */
  min-height: 100vh;
  position: relative;
}

/* Noise grain overlay */
.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* SVG noise */
  opacity: 0.035;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 1;
}
```

### 14.3 Story Section — CSS Placeholder

```css
.story-image-placeholder {
  background:
    radial-gradient(
      ellipse 70% 50% at 40% 60%,
      rgba(201, 169, 110, 0.06) 0%,
      transparent 65%
    ),
    linear-gradient(160deg, #1C1C1C 0%, #141410 50%, #0D0D0D 100%);
  aspect-ratio: 4 / 5;
  width: 100%;

  /* Decorative: thin gold frame offset inward */
  box-shadow: inset 0 0 0 1px rgba(201, 169, 110, 0.15),
              inset 8px 8px 0 0 rgba(201, 169, 110, 0.06);
}
```

### 14.4 Image Optimization Rules (for when real images are provided)

- All hero/story images: AVIF format with JPEG fallback via `<picture>`
- Circular portraits (when added): WebP format with JPEG fallback
- Hero image when provided: `fetchpriority="high"`, no lazy load
- Story/team images: `loading="lazy"`

---

## 15. IMPLEMENTATION CHECKLIST

### Phase 1 — Structure

- [ ] HTML boilerplate with correct meta tags
- [ ] Google Fonts import
- [ ] CSS custom properties (all variables defined)
- [ ] Skip-to-content link
- [ ] Navigation structure
- [ ] All 8 sections created as `<section>` with IDs
- [ ] Footer structure

### Phase 2 — Styling

- [ ] CSS reset / normalize
- [ ] Color system applied
- [ ] Typography system applied
- [ ] Grid/layout system
- [ ] Navigation styles (transparent + scrolled state)
- [ ] Hero section full-viewport styling
- [ ] Story section two-column layout
- [ ] Team card components (full specification)
- [ ] Service card components
- [ ] Contact form styling
- [ ] Footer styling
- [ ] Section divider ornaments

### Phase 3 — Responsive

- [ ] Mobile navigation (hamburger + overlay)
- [ ] Hero responsive (text repositioning)
- [ ] Story section stacking
- [ ] Team grid breakpoints
- [ ] Services grid breakpoints
- [ ] Typography clamp() values
- [ ] Touch-friendly tap targets (≥44px)

### Phase 4 — JavaScript

- [ ] Navigation scroll behavior (transparent → glass)
- [ ] Active section tracking (IntersectionObserver)
- [ ] Smooth scroll on nav clicks
- [ ] Mobile menu toggle (open/close/escape)
- [ ] Focus trap in mobile menu
- [ ] Scroll-triggered animations (IntersectionObserver)
- [ ] Stats count-up animation
- [ ] Scroll progress indicator
- [ ] Custom cursor (desktop only)
- [ ] Parallax on hero (desktop only, via scroll listener)
- [ ] Form submission handler (prevent default, validate, success state)
- [ ] prefers-reduced-motion detection

### Phase 5 — Polish & Accessibility

- [ ] All ARIA attributes in place
- [ ] Focus indicators on all interactive elements
- [ ] Color contrast audit (all text/background pairs)
- [ ] Keyboard navigation test
- [ ] Screen reader test (VoiceOver or NVDA)
- [ ] Reduced-motion test
- [ ] Image alt text audit
- [ ] Form label association audit

### Phase 6 — Performance

- [ ] Image optimization (AVIF/WebP with fallbacks)
- [ ] Font display: swap on all font-face rules
- [ ] Lazy loading on below-fold images
- [ ] CSS: no unused rules, properties grouped logically
- [ ] JS: no blocking scripts, all deferred or async
- [ ] Lighthouse audit: Performance ≥90, Accessibility ≥95

---

## APPENDIX A — FULL PAGE SECTION MAP

```
┌─────────────────────────────────────────────────────────────────────┐
│ [NAVIGATION]          Fixed, transparent → glass on scroll          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ [HERO]                100vh, full-bleed image, display headline     │
│                       "Every Space Deserves a Story."               │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ [STORY INTRODUCTION]  Dark. Two-column: image + editorial text      │
│                       Pull quote. Brand origin story.               │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ [TEAM — THE WEB]      Light. 3-col glassmorphism card grid          │
│                       8 members with alias + portrait + role        │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ [COLLABORATION]       Dark. Full-bleed. Partnership announcement.   │
│                       Stats row. Dual logo mark.                    │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ [SERVICES]            Light warm. 3-col service cards.              │
│                       5 disciplines. Bottom-border hover effect.    │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ [CONTACT]             Dark. Centered form. Underline-only inputs.   │
│                       "Begin a Conversation."                       │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ [FOOTER]              Deep black. 2-col: brand mark + nav links.   │
│                       "Crafted with intention."                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## APPENDIX B — CSS CUSTOM PROPERTIES MANIFEST

```css
:root {
  /* Colors */
  --color-noir:        #0A0A0A;
  --color-charcoal:    #1A1A1A;
  --color-graphite:    #2D2D2D;
  --color-gold:        #C9A96E;
  --color-gold-pale:   #E8D5B0;
  --color-gold-dark:   #B8962E;
  --color-ivory:       #F5F0E8;
  --color-warm-white:  #FDFAF5;
  --color-smoke:       #F0EAE0;
  --color-text-dark:   #1C1C1C;
  --color-text-light:  #F5F0E8;
  --color-stone:       #9B9EA4;

  /* Gold with opacity variants */
  --color-gold-10:   rgba(201, 169, 110, 0.10);
  --color-gold-20:   rgba(201, 169, 110, 0.20);
  --color-gold-30:   rgba(201, 169, 110, 0.30);
  --color-gold-40:   rgba(201, 169, 110, 0.40);

  /* Typography */
  --font-display:   'Playfair Display', Georgia, serif;
  --font-editorial: 'Cormorant Garamond', Garamond, serif;
  --font-body:      'DM Sans', system-ui, sans-serif;

  /* Spacing */
  --space-xs:   8px;
  --space-sm:   16px;
  --space-md:   32px;
  --space-lg:   64px;
  --space-xl:   96px;
  --space-2xl:  128px;
  --space-3xl:  192px;

  /* Layout */
  --grid-margin: clamp(24px, 6vw, 120px);
  --grid-gap:    clamp(16px, 2vw, 32px);
  --section-v:   clamp(80px, 10vw, 160px);
  --max-width:   1440px;

  /* Motion */
  --ease-luxury: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --duration-fast: 0.25s;
  --duration-med:  0.5s;
  --duration-slow: 0.9s;

  /* Z-index layers */
  --z-content:    1;
  --z-overlay:    10;
  --z-nav:        100;
  --z-menu:       200;
  --z-cursor:     9999;
}
```

---

## APPENDIX C — SECTION ID & ANCHOR MAP

```html
<nav>           id="nav"
<section>       id="hero"
<section>       id="story"
<section>       id="team"
<section>       id="collaboration"
<section>       id="services"
<section>       id="contact"
<footer>        id="footer"
```

All navigation links use `href="#section-id"` for in-page anchor scroll.

---

*PRD Version 1.0 — Spider-Marketers × Thai Cong Interior Design*  
*Prepared for implementation by Claude Code*  
*Sufficient detail for pixel-perfect recreation without the source PDF*
