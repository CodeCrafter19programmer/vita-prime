import Header from '@/components/Header'
import { Footer, FeaturedBundle } from '@/components/Sections'

export default function BundlesPage() {
  return (
    <>
      <Header />
      <main className="max-w-[1100px] mx-auto px-5 md:px-8 py-16 md:py-24 pt-[100px]">
        <div className="mb-16 text-center max-w-[600px] mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-[var(--black)] mb-6">
              Curated Bundles
            </h1>
            <p className="text-[16px] text-[var(--gray-600)]">
                Expertly combined supplement regimens to help you achieve your specific wellness goals efficiently.
            </p>
        </div>
        
        <div className="space-y-24">
            <FeaturedBundle />
            
            <div className="pt-16 border-t border-[var(--gray-200)] opacity-60">
                <FeaturedBundle />
            </div>
            
            <div className="pt-16 border-t border-[var(--gray-200)] opacity-40">
                <FeaturedBundle />
            </div>
        </div>
        
      </main>
      <Footer />
    </>
  )
}
