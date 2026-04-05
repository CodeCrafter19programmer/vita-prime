import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import {
  TrustBar,
  HealthGoals,
  FeaturedBundle,
  Testimonials,
  WhyUs,
  Newsletter,
  Footer,
} from '@/components/Sections'
import { PRODUCTS } from '@/lib/data'

export default function HomePage() {
  return (
    <>
      {/* 1. Header — minimal sticky nav */}
      <Header />
      
      <main>
        {/* 2. Hero — typographic hero, white bg */}
        <Hero />
        
        {/* 3. TrustBar — 5 trust icons, white bg, bottom border */}
        <TrustBar />
        
        {/* 4. ProductGrid — filter tabs + product grid, white bg */}
        <ProductGrid products={PRODUCTS} />
        
        {/* 5. HealthGoals — "Shop by Goal" grid, --gray-50 bg */}
        <HealthGoals />
        
        {/* 6. FeaturedBundle — minimal 2-col bundle section, white bg */}
        <FeaturedBundle />
        
        {/* 7. Testimonials — 3-col review cards, --gray-50 bg */}
        <Testimonials />
        
        {/* 8. WhyUs — 4-col icon grid, white bg */}
        <WhyUs />
        
        {/* 9. Newsletter — email signup, --brown-light bg */}
        <Newsletter />
      </main>

      {/* 10. Footer — black bg */}
      <Footer />
      
      {/* 14. WhatsApp Sticky Button */}
      <a
        href="https://wa.me/256700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 w-[52px] h-[52px] rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_2px_12px_rgba(37,211,102,0.4)] hover:-translate-y-1 transition-transform group"
      >
        <svg viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-white">
          <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.95 11.95 0 0 0 5.71 1.447h.005c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.479-8.45zm-8.475 18.304h-.004a9.902 9.902 0 0 1-5.031-1.372l-.361-.214-3.741.976.998-3.648-.235-.374a9.844 9.844 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z"/>
        </svg>
        <span className="hidden md:block absolute right-full mr-3 text-white bg-black/75 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp
        </span>
      </a>
    </>
  )
}
