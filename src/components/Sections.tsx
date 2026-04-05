'use client'

import { ShieldCheck, Clock, Truck, RotateCcw, MessageCircle, Heart, Leaf, Star, Sparkles, Activity } from 'lucide-react'
import Link from 'next/link'

// ─────────────────────────────────────────────
// TRUST BAR
// ─────────────────────────────────────────────
const TRUST_ITEMS = [
  '100% Authentic Products',
  'Same-Day Kampala Delivery',
  'Nationwide Shipping',
  '30-Day Easy Returns',
  'WhatsApp Support 24/7'
]

export function TrustBar() {
  return (
    <div className="bg-white border-b border-[var(--gray-200)] py-[16px]">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <div className="flex justify-center md:justify-between items-center flex-wrap gap-4">
          {TRUST_ITEMS.map((label, idx) => (
            <div key={idx} className="flex items-center gap-2 text-[11px] font-medium text-[var(--gray-400)]">
              <span className="w-1 h-1 rounded-full bg-[var(--gray-200)] md:hidden"></span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// HEALTH GOALS (Formerly Category Section)
// ─────────────────────────────────────────────
const CATEGORIES = [
  { emoji: '🌟', name: 'Vitamins', count: 42 },
  { emoji: '🐟', name: 'Omega & Fish Oil', count: 18 },
  { emoji: '🌸', name: 'Women\'s', count: 35 },
  { emoji: '👨', name: 'Men\'s', count: 28 },
  { emoji: '🧒', name: 'Kids', count: 15 },
  { emoji: '🛡️', name: 'Immunity', count: 24 },
  { emoji: '✨', name: 'Beauty', count: 20 },
  { emoji: '🦴', name: 'Joints', count: 12 },
  { emoji: '💪', name: 'Protein', count: 10 },
  { emoji: '🌱', name: 'Herbal', count: 22 },
]

export function HealthGoals() {
  return (
    <section id="goals" className="py-[48px] lg:py-[64px] bg-[var(--gray-50)]">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        
        <div className="text-center mb-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-[var(--black)]">
            Shop by Goal
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[12px] sm:gap-[16px] lg:gap-[20px]">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white border border-[var(--gray-200)] rounded-[8px] p-[20px] pb-[16px] text-center transition-all duration-200 hover:border-[var(--green)] hover:-translate-y-[1px] cursor-pointer"
            >
              <div className="text-[24px] mb-[8px]">{cat.emoji}</div>
              <div className="text-[13px] font-semibold text-[var(--black)] mb-[2px]">{cat.name}</div>
              <div className="text-[11px] font-normal text-[var(--gray-400)]">{cat.count} products</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// FEATURED BUNDLE
// ─────────────────────────────────────────────
export function FeaturedBundle() {
  return (
    <section className="py-[48px] lg:py-[64px] bg-white">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-[32px] lg:gap-[64px] items-center">
          
          {/* Left: Text */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--gray-400)] mb-[8px]">
              CURATED BUNDLE
            </div>
            <h2 className="font-display text-[28px] font-semibold text-[var(--black)] mb-[16px]">
              Family Wellness Pack
            </h2>
            <p className="text-[14px] font-normal text-[var(--gray-600)] leading-[1.6] mb-[24px]">
              Cover every family member with our curated wellness stack — vitamins for adults, omega for kids, collagen for mum & joint support for the elders.
            </p>
            
            <ul className="space-y-[8px] mb-[32px]">
              <li className="text-[13px] text-[var(--gray-600)] flex items-start gap-2">
                <span className="text-[var(--gray-400)]">—</span> 4 premium products, 1 discounted price
              </li>
              <li className="text-[13px] text-[var(--gray-600)] flex items-start gap-2">
                <span className="text-[var(--gray-400)]">—</span> Save UGX 38,000 vs buying separately
              </li>
              <li className="text-[13px] text-[var(--gray-600)] flex items-start gap-2">
                <span className="text-[var(--gray-400)]">—</span> Free express delivery in Kampala
              </li>
            </ul>

            <button className="bg-[var(--black)] text-white text-[13px] font-semibold px-[24px] py-[12px] rounded-full hover:opacity-90 transition-opacity">
              Get the Bundle
            </button>
          </div>

          {/* Right: Image Area */}
          <div className="bg-[var(--gray-50)] border border-[var(--gray-200)] rounded-[12px] p-[32px] relative flex flex-col items-center justify-center min-h-[300px]">
            <div className="space-y-[12px] z-10">
              {['Vitamin D3 1000IU', 'Omega-3 Fish Oil', 'Marine Collagen', 'Joint Support+'].map((item) => (
                <div key={item} className="bg-white border border-[var(--gray-200)] rounded-[6px] px-[16px] py-[8px] flex items-center gap-[8px] shadow-sm">
                  <div className="w-[6px] h-[6px] bg-[var(--green)] rounded-full"></div>
                  <span className="text-[13px] font-medium text-[var(--black)]">{item}</span>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-[24px] right-[24px] lg:right-auto lg:-left-[24px] bg-white border border-[var(--gray-200)] p-[16px] rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] z-20">
              <div className="text-[11px] text-[var(--gray-400)] uppercase tracking-wider mb-[4px]">Bundle Price</div>
              <div className="font-display text-[24px] text-[var(--brown)] font-semibold">UGX 119,000</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────
const TESTIMONIALS = [
  { quote: "Great selection of genuine supplements. Delivery was incredibly fast to Ntinda. Will buy again.", author: "Sarah K.", loc: "Kampala" },
  { quote: "Finally a reliable source for authentic vitamins in Uganda. The ordering process is so simple.", author: "Michael O.", loc: "Entebbe" },
  { quote: "I love that I can chat with them on WhatsApp before buying. Always helpful and polite.", author: "Grace N.", loc: "Jinja" },
]

export function Testimonials() {
  return (
    <section className="py-[48px] lg:py-[64px] bg-[var(--gray-50)]">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        
        <div className="text-center mb-[48px]">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-[var(--black)]">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white border border-[var(--gray-200)] rounded-[10px] p-[24px]">
              <div className="text-[14px] tracking-widest text-[var(--gray-800)] mb-[16px]">
                ★★★★★
              </div>
              <p className="text-[14px] font-normal italic text-[var(--gray-600)] leading-[1.6] mb-[24px]">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[13px] font-semibold text-[var(--black)]">{t.author}</div>
                  <div className="text-[12px] text-[var(--gray-400)]">{t.loc}</div>
                </div>
                <div className="flex items-center gap-[4px]">
                  <div className="w-[6px] h-[6px] bg-[var(--green)] rounded-full"></div>
                  <span className="text-[10px] text-[var(--green)] font-semibold uppercase tracking-wider">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// WHY US
// ─────────────────────────────────────────────
const WHY_ITEMS = [
  { icon: ShieldCheck, title: '100% Authentic', desc: 'Sourced directly from verified brands.' },
  { icon: Clock, title: 'Fast Delivery', desc: 'Same-day in Kampala & Entebbe.' },
  { icon: MessageCircle, title: 'Expert Support', desc: 'Chat via WhatsApp anytime.' },
  { icon: Leaf, title: 'Carefully Curated', desc: 'Only the best science-backed products.' },
]

export function WhyUs() {
  return (
    <section className="py-[48px] lg:py-[64px] bg-white">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-[var(--black)] text-center mb-[48px]">
          Why VitaPrime
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px] lg:gap-[32px]">
          {WHY_ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white border border-[var(--gray-200)] rounded-[8px] p-[24px] text-center flex flex-col items-center">
              <Icon className="w-[24px] h-[24px] text-[var(--black)] stroke-[1.5] mb-[16px]" fill="none" />
              <div className="text-[15px] font-semibold text-[var(--black)] mb-[8px]">{title}</div>
              <div className="text-[13px] font-normal text-[var(--gray-600)] leading-[1.5]">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// NEWSLETTER
// ─────────────────────────────────────────────
export function Newsletter() {
  return (
    <section className="py-[48px] bg-[var(--brown-light)] border-y border-[var(--gray-200)]">
      <div className="max-w-[600px] mx-auto px-5 md:px-8 text-center">
        <h3 className="font-display text-[24px] font-semibold text-[var(--black)] mb-[8px]">
          Join Our Newsletter
        </h3>
        <p className="text-[13px] text-[var(--gray-600)] mb-[24px]">
          Get wellness tips, exclusive offers, and early access to new arrivals.
        </p>
        
        <form className="flex w-full mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 h-[44px] border border-[var(--gray-200)] border-r-0 rounded-l-[6px] px-[16px] text-[13px] outline-none placeholder:text-[var(--gray-400)] bg-transparent focus:border-[var(--black)] transition-colors"
            required
          />
          <button
            type="submit"
            className="h-[44px] bg-[var(--black)] text-white text-[13px] font-semibold px-[20px] rounded-r-[6px] hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-[var(--black)] pt-[64px] pb-[32px]">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[48px] pb-[48px] border-b border-[rgba(255,255,255,0.08)]">
          {/* Logo */}
          <div>
            <div className="font-sans text-[18px] font-semibold text-white mb-[16px] tracking-tight">VitaPrime</div>
            <p className="text-[13px] text-[rgba(255,255,255,0.5)] leading-[1.6]">
              Premium wellness & health supplements delivered to your door across Uganda.
            </p>
          </div>

          <div>
            <div className="text-[13px] font-semibold text-[rgba(255,255,255,0.9)] mb-[16px]">Shop</div>
            <ul className="space-y-[12px]">
              {['Vitamins', 'Omega & Fish Oil', 'Men\'s Health', 'Women\'s Health'].map((l) => (
                <li key={l}><a href="#" className="text-[13px] text-[rgba(255,255,255,0.5)] hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[13px] font-semibold text-[rgba(255,255,255,0.9)] mb-[16px]">Company</div>
            <ul className="space-y-[12px]">
              {['About Us', 'Contact', 'Shipping Policy', 'Returns'].map((l) => (
                <li key={l}><a href="#" className="text-[13px] text-[rgba(255,255,255,0.5)] hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[13px] font-semibold text-[rgba(255,255,255,0.9)] mb-[16px]">Contact</div>
            <ul className="space-y-[12px] text-[13px] text-[rgba(255,255,255,0.5)]">
              <li>hello@vitaprime.com</li>
              <li>+256 700 000 000</li>
              <li>Kampala, Uganda</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-[16px] pt-[32px]">
          <div className="text-[12px] text-[rgba(255,255,255,0.5)]">
            © {new Date().getFullYear()} VitaPrime Uganda. All rights reserved.
          </div>
          
          <div className="flex items-center gap-[8px]">
            {['VISA', 'MTN', 'AIRTEL'].map((m) => (
              <div key={m} className="border border-[rgba(255,255,255,0.2)] rounded-[4px] px-[8px] py-[2px] text-[10px] text-white">
                {m}
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
