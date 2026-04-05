import Header from '@/components/Header'
import { Footer, Newsletter } from '@/components/Sections'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-[700px] mx-auto px-5 md:px-8 py-16 md:py-32">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-[var(--black)] mb-6 text-center">
          About VitaPrime
        </h1>
        <div className="h-[1px] w-[60px] bg-[var(--gray-200)] mx-auto mb-10" />
        
        <div className="space-y-6 text-[15px] md:text-[16px] text-[var(--gray-600)] leading-[1.8]">
          <p>
            VitaPrime was founded with a singular mission: to provide Ugandans with access to premium, science-backed vitamins and supplements from the world's most trusted brands.
          </p>
          <p>
            We realized that finding authentic, high-quality supplements in the region was often difficult. Many products on the market lacked transparency, and finding the right advice for personal health goals could be overwhelming. That's why we created a platform where quality meets convenience.
          </p>
          <h2 className="font-display text-2xl font-semibold text-[var(--black)] mt-12 mb-4">
            Our Promise
          </h2>
          <ul className="space-y-4 pt-4 border-t border-[var(--gray-200)]">
             <li className="flex flex-col md:flex-row gap-2 md:gap-6"><span className="text-[var(--black)] font-semibold md:w-32 flex-shrink-0">Authenticity</span> <span>We source our products directly from authorized distributors or the manufacturers themselves. No compromises.</span></li>
             <li className="flex flex-col md:flex-row gap-2 md:gap-6"><span className="text-[var(--black)] font-semibold md:w-32 flex-shrink-0">Guidance</span> <span>Our WhatsApp support isn't just for orders; we help you choose the right supplements for your specific needs.</span></li>
             <li className="flex flex-col md:flex-row gap-2 md:gap-6"><span className="text-[var(--black)] font-semibold md:w-32 flex-shrink-0">Delivery</span> <span>We deliver across Uganda safely and reliably, ensuring your wellness routine is never interrupted.</span></li>
          </ul>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </>
  )
}
