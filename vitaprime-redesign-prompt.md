# VitaPrime — UI/UX Redesign Prompt
## For use with Cursor AI, Claude, or any code-generation AI

---

## CONTEXT

You are redesigning an existing Next.js 14 supplement store called **VitaPrime Uganda**. The codebase already exists in the workspace with the following structure:

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/newsletter/route.ts
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   └── Sections.tsx
└── lib/
    ├── data.ts
    └── supabase.ts
```

The current design is over-styled — too many colours, gradients, decorative elements, and complex animations. Your job is to **completely replace** the visual design with a clean, minimal black and white system with restrained green and brown accents. Do NOT change the business logic, data structures, routing, or Supabase integration — only the visual layer.

---

## DESIGN DIRECTION

### 1. Core Design Philosophy

**"Editorial minimalism."** Think a premium health magazine printed in black and white — clean white space, strong typography, no visual clutter. The product is the hero. Nothing should distract from reading product names and descriptions.

Reference site for product layout inspiration: https://prime-store-theta.vercel.app/

Key principles:
- Maximum white space
- Black text on white backgrounds only
- Thin borders (`1px solid #E5E5E5`) — never coloured borders
- No gradients anywhere
- No box shadows except `0 1px 3px rgba(0,0,0,0.06)` on cards on hover only
- No decorative shapes, blobs, rings, or background patterns
- Typography does the heavy lifting — size, weight, and spacing create hierarchy
- Colour is used ONLY as a small accent — never as a background fill

---

### 2. Colour Palette

Replace ALL existing colour variables with this exact palette:

```css
:root {
  /* Base */
  --white:        #FFFFFF;
  --black:        #0A0A0A;
  --gray-50:      #FAFAFA;
  --gray-100:     #F5F5F5;
  --gray-200:     #E5E5E5;
  --gray-400:     #A3A3A3;
  --gray-600:     #525252;
  --gray-800:     #262626;

  /* Accent — use sparingly */
  --green:        #2D6A4F;   /* sage forest green — for category tags, badges, CTAs */
  --green-light:  #F0F7F4;   /* very pale green — for tag backgrounds only */
  --brown:        #6B4226;   /* warm brown — for price text and selected states */
  --brown-light:  #FAF5F0;   /* pale warm white — for alternating section bg */
}
```

**Colour usage rules:**
- Backgrounds: `--white` (primary), `--gray-50` (alternate sections), `--brown-light` (newsletter/footer strip only)
- Text: `--black` (headings), `--gray-600` (body/descriptions), `--gray-400` (meta/counts)
- Borders: `--gray-200` everywhere — no exceptions
- CTAs/Buttons: Black fill (`--black`) with white text, or white fill with black border
- Prices: `--brown` coloured text
- Category tags: `--green` text on `--green-light` background
- Green/brown should cover less than 10% of total visible pixels on any page

---

### 3. Typography

Replace font imports with:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;600&display=swap');
```

Apply these rules:
- `font-family: 'Playfair Display', serif` — ONLY for the hero H1 and product names on the detail page
- `font-family: 'Inter', sans-serif` — everything else
- Navigation links: 13px, weight 500, color `--gray-600`
- Product names on cards: 14px, weight 600, color `--black`, Inter (NOT Playfair — keeps grid clean)
- Product descriptions: 12px, weight 400, color `--gray-600`, line-height 1.6
- Prices: 14px, weight 600, color `--brown`
- Section titles: 24px mobile / 32px desktop, Playfair Display, weight 600, color `--black`
- Tags/badges: 10px, weight 600, uppercase, letter-spacing 0.08em

---

### 4. Layout — Global

**Max width:** `1100px` centered, `padding: 0 20px` on mobile, `0 32px` on desktop.

**Spacing scale (use only these values):**
- 8px, 16px, 24px, 32px, 48px, 64px, 96px

**Section padding:** `64px 0` desktop, `48px 0` mobile.

---

### 5. Header

Replace the existing Header completely with:

```
[Logo]  [Nav links — center]  [WhatsApp icon]
```

- Height: 56px
- Background: white
- Bottom border: `1px solid #E5E5E5`
- Logo: "VitaPrime" in Inter 600 16px black, with a small green dot (8px circle, `--green` fill) to the left
- Nav links: Shop · By Goal · Bundles · About — 13px Inter 500, `--gray-600`, no underline, hover → `--black`
- NO search bar in header (remove it)
- NO cart icon (this is not an e-commerce site — remove cart entirely)
- Right side: A single WhatsApp icon button (green, 36px circle) that opens `https://wa.me/256700000000`
- Mobile: Hamburger menu that slides down with the same nav links stacked vertically
- Sticky on scroll, `backdrop-filter: blur(8px)` with `background: rgba(255,255,255,0.95)`

**Remove:** search bar, wishlist icon, cart icon, cart count badge, announcement bar above header.

---

### 6. Hero Section

Replace the current hero with a simple, full-width typographic hero:

**Layout:**
```
[Section — white bg, 96px top padding, 80px bottom padding]

  DISCOVER                        ← 11px, Inter 500, uppercase, letter-spacing 0.14em, --gray-400
  VITAPRIME UGANDA                ← Not shown, this is part of the H1 flow

  Premium Supplements             ← Playfair Display, 52px desktop / 36px mobile, weight 600, --black
  Delivered to Your Door.         ← Same style, second line

  [Thin 1px horizontal rule, --gray-200, width 48px, margin: 24px 0]

  Science-backed vitamins and supplements from trusted global brands.   ← 15px Inter 400, --gray-600, max-width 460px
  Fast delivery across Uganda.

  [Two buttons side by side, gap 12px]
  [Button 1: "Explore Products" — black fill, white text, 13px Inter 600, px-6 py-3, rounded-full]
  [Button 2: "Shop by Goal" — white fill, black border 1px, same size]

```

- NO floating product cards, NO decorative rings, NO bottle illustrations in the hero
- NO background colours or patterns
- Left-aligned on desktop, centered on mobile
- Below the buttons: three small stats in a row separated by thin dividers:
  `200+ Products  |  12k+ Customers  |  4.8★ Rating`
  (11px, Inter 500, `--gray-400`, dividers are `|` characters styled in `--gray-200`)

---

### 7. Product Grid — THE MOST IMPORTANT SECTION

This is the core of the site. Follow these rules precisely.

**Grid layout:**
- Mobile (< 640px): **2 columns**, `gap: 12px`
- Tablet (640px–1024px): **3 columns**, `gap: 16px`
- Desktop (> 1024px): **4 columns**, `gap: 20px`

**Product Card design:**

Each card contains:
1. **Image area** — square aspect ratio (1:1), white background (`--gray-50`), `border-radius: 8px`, `overflow: hidden`. Image fills the square. If no image exists, show a centered bottle placeholder using a simple SVG or the product initials in `--gray-200`.
2. **Category tag** — sits BELOW the image, NOT overlaid. Small pill: `--green` text, `--green-light` background, 10px uppercase Inter 600, padding `2px 8px`, border-radius `4px`, margin-bottom `6px`
3. **Product name** — 14px Inter 600 `--black`, line-height 1.3, max 2 lines (clamp with `-webkit-line-clamp: 2`)
4. **Description** — 12px Inter 400 `--gray-600`, line-height 1.6, max 3 lines clamped. THIS IS REQUIRED — do not hide or remove descriptions.
5. **Price** — 14px Inter 600 `--brown`. If there's an original price, show it in 12px `--gray-400` with `text-decoration: line-through` beside it.
6. **Enquire button** — Full-width, `height: 36px`, black border `1px solid --black`, transparent background, 12px Inter 500 `--black` text, `border-radius: 6px`. On hover: black fill, white text. This is NOT an "Add to Cart" button — label it **"Enquire on WhatsApp"** and link to `https://wa.me/256700000000?text=I'm interested in {product name}`.

**Card styling:**
- Background: white
- Border: `1px solid --gray-200`
- Border-radius: `10px`
- Padding: `12px`
- NO box shadow at rest
- On hover: `box-shadow: 0 4px 16px rgba(0,0,0,0.07)`, `transform: translateY(-2px)`
- Transition: `0.2s ease`

**Remove from cards:** wishlist button, animated bottle illustrations, coloured image backgrounds, discount badges, star ratings display (keep data, hide from card — can show on detail page), "Add to Cart" button.

**Filter tabs above the grid:**
- `All  |  Vitamins  |  Omega & Fish Oil  |  Women's  |  Men's  |  Kids  |  Immunity  |  Beauty  |  Joints`
- Style: plain text tabs, 13px Inter 500 `--gray-400`, no borders, no background
- Active tab: `--black` color, with a thin 2px `--black` underline
- Spacing between tabs: 20px gap
- On mobile: horizontally scrollable, no scrollbar shown
- Remove the dropdown sort selector entirely

---

### 8. Category Section

Replace the current pill-style category icons with a simple **2-column text grid** on mobile, **5-column grid** on desktop:

Each cell:
- White background, `1px solid --gray-200` border, `border-radius: 8px`
- Padding: `20px 16px`
- Centered text
- Emoji (24px) on top
- Category name: 13px Inter 600 `--black`
- Product count: 11px Inter 400 `--gray-400`
- Hover: border-color → `--green`, slight `translateY(-1px)`

---

### 9. Bundle / Feature Section

Replace the current dark bundle banner with a minimal two-column layout:

**Left column:** (text)
- Small label: "CURATED BUNDLE" — 10px Inter 600 uppercase `--gray-400`, letter-spacing 0.1em
- Heading: "Family Wellness Pack" — 28px Playfair Display 600 `--black`
- Description: 14px Inter 400 `--gray-600`
- Three bullet points — plain `—` dashes, no styled icons, 13px `--gray-600`
- One button: black fill "Get the Bundle"

**Right column:** (product image area)
- A plain white `--gray-50` box with `border: 1px solid --gray-200`, `border-radius: 12px`
- Inside: four small product name labels stacked, each with a green dot prefix
- A simple price callout: large "UGX 119,000" in `--brown` Playfair Display

No dark backgrounds, no gradients, no illustrations.

---

### 10. Testimonials

Simple clean cards:
- White background, `1px solid --gray-200` border, `border-radius: 10px`, padding `24px`
- Stars: plain text `★★★★★` in `--gray-800`, 14px
- Quote text: 14px Inter 400 italic `--gray-600`
- Author: 13px Inter 600 `--black` + 12px `--gray-400` location
- Verified badge: small green dot + "Verified" in 10px `--green`
- 3 columns desktop, 1 column mobile

---

### 11. Why Us Section

Remove the dark green `sage-700` background entirely.

Replace with:
- White background section
- Title: "Why VitaPrime" — Playfair 32px centered
- 4-column icon grid (2-column mobile), each card:
  - White bg, `1px solid --gray-200` border
  - Thin-line SVG icon (stroke only, no fill) — `--black`, 24px
  - Title: 15px Inter 600 `--black`
  - Description: 13px Inter 400 `--gray-600`
  - NO coloured backgrounds on icons
  - NO dark section background

---

### 12. Newsletter Strip

- Background: `--brown-light` (`#FAF5F0`)
- Border-top and border-bottom: `1px solid --gray-200`
- Simple centered layout: heading + subtext + email input + button
- Input: `height: 44px`, `border: 1px solid --gray-200`, `border-radius: 6px 0 0 6px`, `padding: 0 16px`, no background
- Button: black fill, white text, `border-radius: 0 6px 6px 0`, height 44px

---

### 13. Footer

- Background: `--black`
- Text: `rgba(255,255,255,0.5)` for body, `rgba(255,255,255,0.9)` for headings
- 4-column grid desktop, 2-column mobile, 1-column on very small screens
- Logo: "VitaPrime" white Inter 600
- Payment method badges: small outlined white badges
- Bottom bar: `border-top: 1px solid rgba(255,255,255,0.08)`
- Remove: social media dummy buttons (keep layout placeholder if needed)

---

### 14. WhatsApp Sticky Button

- Position: `fixed bottom-5 right-5 z-50`
- Style: round button, 52px, green (#25D366) background, white WhatsApp SVG icon
- NO text label (icon only on mobile, can show "WhatsApp" text on desktop)
- Box shadow: `0 2px 12px rgba(37,211,102,0.4)`

---

### 15. Remove Entirely

Delete or comment out these elements completely:
- The announcement bar at the top ("Free delivery in Kampala...")
- Cart icon and cart count from Header
- Wishlist/heart buttons on product cards
- Animated floating bottle illustrations (replace with real image `<Image>` tags or `--gray-50` placeholder boxes)
- The `float` CSS animation
- All `.badge-*` coloured badges on product images
- The `cart-notify` toast (replace with a WhatsApp redirect instead)
- The existing `CategoryNav` pill component (replace per section 8 above)
- All coloured gradient backgrounds
- The `BundleBanner` dark green section (replace per section 9)

---

### 16. Globals CSS Reset

Replace `globals.css` with:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --white:       #FFFFFF;
  --black:       #0A0A0A;
  --gray-50:     #FAFAFA;
  --gray-100:    #F5F5F5;
  --gray-200:    #E5E5E5;
  --gray-400:    #A3A3A3;
  --gray-600:    #525252;
  --gray-800:    #262626;
  --green:       #2D6A4F;
  --green-light: #F0F7F4;
  --brown:       #6B4226;
  --brown-light: #FAF5F0;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: #FFFFFF;
  color: #0A0A0A;
  -webkit-font-smoothing: antialiased;
}

::selection { background: #0A0A0A; color: #FFFFFF; }

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #F5F5F5; }
::-webkit-scrollbar-thumb { background: #E5E5E5; border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: #A3A3A3; }

/* Utility classes */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

---

### 17. Tailwind Config Update

Replace the `theme.extend.colors` section in `tailwind.config.js` with:

```js
colors: {
  black:   '#0A0A0A',
  white:   '#FFFFFF',
  gray: {
    50:  '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    400: '#A3A3A3',
    600: '#525252',
    800: '#262626',
  },
  green: {
    DEFAULT: '#2D6A4F',
    light:   '#F0F7F4',
  },
  brown: {
    DEFAULT: '#6B4226',
    light:   '#FAF5F0',
  },
},
fontFamily: {
  sans:    ['Inter', 'system-ui', 'sans-serif'],
  display: ['Playfair Display', 'Georgia', 'serif'],
},
```

---

### 18. Page Assembly (`page.tsx`)

The homepage should render sections in this exact order:

1. `<Header />` — minimal sticky nav
2. `<Hero />` — typographic hero, white bg
3. `<TrustBar />` — 5 trust icons, white bg, bottom border
4. `<ProductGrid />` — filter tabs + 2/3/4-col product grid, white bg
5. `<HealthGoals />` — "Shop by Goal" grid, `--gray-50` bg
6. `<FeaturedBundle />` — minimal 2-col bundle section, white bg
7. `<Testimonials />` — 3-col review cards, `--gray-50` bg
8. `<WhyUs />` — 4-col icon grid, white bg
9. `<Newsletter />` — email signup, `--brown-light` bg
10. `<Footer />` — black bg

---

## SUMMARY CHECKLIST

Before finishing, verify:

- [ ] No gradients anywhere in the codebase
- [ ] No coloured backgrounds on any section except footer (black) and newsletter (`--brown-light`)
- [ ] Product cards have visible descriptions (3 lines, clamped)
- [ ] Product grid is 2-col on mobile, 3-col on tablet, 4-col on desktop
- [ ] "Enquire on WhatsApp" button on every product card
- [ ] Cart, wishlist, and announcement bar are removed
- [ ] All animated bottle illustrations are replaced with image placeholders
- [ ] Green and brown appear only in: category tags, prices, WhatsApp button, small accents
- [ ] Footer is solid black
- [ ] Typography is Inter for body, Playfair Display only for hero H1 and section headings
- [ ] Hover states use only black/white — no coloured hover states
- [ ] All existing Supabase/data logic is preserved unchanged
