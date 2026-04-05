# VitaPrime Uganda — Next.js Supplement Store

Premium supplements dropshipping store for Uganda, built with Next.js 14, Supabase & Vercel.

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS — earthy brown/white/sage palette
- **Database**: Supabase (PostgreSQL + Auth + Storage)
- **Deployment**: Vercel
- **Fonts**: Cormorant Garamond (display) + Jost (body)

---

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/yourname/vitaprime.git
cd vitaprime
npm install
```

### 2. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) → New Project
2. Name it `vitaprime`, choose a strong password
3. Once created, go to **SQL Editor** and run `supabase-schema.sql` (in the project root)
4. Copy your Project URL and anon key from **Settings → API**

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Fill in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=256700000000
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Homepage (assembles all sections)
│   ├── globals.css         # Global styles + Tailwind
│   └── api/
│       └── newsletter/
│           └── route.ts    # Newsletter subscribe endpoint
├── components/
│   ├── Header.tsx          # Sticky nav with search, cart, mobile menu
│   ├── Hero.tsx            # Hero section with product card visual
│   ├── ProductCard.tsx     # Individual product card
│   ├── ProductGrid.tsx     # Filterable product grid
│   └── Sections.tsx        # TrustBar, CategoryNav, BundleBanner,
│                           # HealthGoals, Testimonials, WhyUs,
│                           # Newsletter, Footer, WhatsAppButton
└── lib/
    ├── data.ts             # Product data, types, mock content
    └── supabase.ts         # Supabase client + DB types
```

---

## Deploy to Vercel

### One-click deploy

```bash
npm install -g vercel
vercel
```

### Add Environment Variables on Vercel

In your Vercel project dashboard → **Settings → Environment Variables**, add:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | your Supabase URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | your anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | your service role key |
| `NEXT_PUBLIC_SITE_URL` | `https://vitaprime.ug` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `256700000000` |

---

## Supabase Database Tables

| Table | Purpose |
|-------|---------|
| `products` | Product catalog with pricing, categories, tags |
| `orders` | Customer orders with items JSON, status, payment method |
| `newsletter_subscribers` | Email list |
| `reviews` | Product reviews with rating |

---

## Customisation Guide

### Brand Colors (tailwind.config.js)
```js
brown: { 50: '#FAF6F2', ..., 900: '#1E130A' }
sage:  { 50: '#F2F6F1', ..., 900: '#0E1C0C' }
```

### Add a Product
Either:
1. Add to `src/lib/data.ts` → `PRODUCTS` array (dev/prototype)
2. Insert a row in Supabase `products` table (production)

### Payment Integration
For MTN & Airtel Mobile Money, integrate:
- [Pesapal](https://pesapal.com) — supports UG mobile money + cards
- [Flutterwave](https://flutterwave.com) — MTN/Airtel/Visa/Mastercard

### WhatsApp
Update `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` to your real business number.

---

## Roadmap

- [ ] Product detail page (`/products/[slug]`)
- [ ] Shopping cart with localStorage persistence
- [ ] Checkout flow with mobile money integration
- [ ] User accounts (Supabase Auth)
- [ ] Order tracking page
- [ ] Admin dashboard (Supabase Studio or custom)
- [ ] Product reviews system
- [ ] Email order confirmations (Resend)
