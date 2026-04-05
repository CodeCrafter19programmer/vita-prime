import { PRODUCTS } from '@/lib/data'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import { Footer } from '@/components/Sections'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export default function ProductPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) return notFound()

  const whatsappText = encodeURIComponent(`I'm interested in ${product.name}`)

  return (
    <>
      <Header />
      <main className="max-w-[1100px] mx-auto px-5 md:px-8 py-12 md:py-24">
        {/* minimal back link */}
        <a href="/#products" className="inline-block mb-8 text-[13px] font-medium text-[var(--gray-600)] hover:text-[var(--black)]">
          ← Back to Shop
        </a>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Image */}
          <div className="aspect-square bg-[var(--gray-50)] border border-[var(--gray-200)] rounded-[12px] flex items-center justify-center relative">
              <div className="w-32 h-40 border-[3px] border-[var(--gray-200)] rounded-xl flex items-center justify-center relative">
                  <div className="absolute top-[-12px] mx-auto w-12 h-4 bg-[var(--gray-200)] rounded-t-md"></div>
                  <span className="text-xs text-[var(--gray-400)] font-semibold uppercase">{product.subtitle.split(' ')[0]}</span>
              </div>
          </div>
          
          {/* Details */}
          <div>
            <div className="mb-4">
              <span className="inline-block text-[var(--green)] bg-[var(--green-light)] text-[11px] font-semibold uppercase tracking-[0.08em] px-[10px] py-[4px] rounded-[4px] mb-4">
                {product.category}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-[var(--black)] mb-2">
                {product.name}
              </h1>
              <p className="text-[16px] text-[var(--gray-600)]">{product.subtitle}</p>
            </div>
            
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-2xl font-semibold text-[var(--brown)]">
                UGX {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-[var(--gray-400)] line-through">
                  {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            
            <div className="h-[1px] w-full bg-[var(--gray-200)] mb-8" />
            
            <p className="text-[15px] font-normal text-[var(--gray-600)] leading-[1.7] mb-8">
               {product.description}
            </p>
            
            <a
              href={`https://wa.me/256700000000?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-[52px] bg-[var(--black)] text-white text-[14px] font-semibold rounded-[8px] hover:bg-[#262626] transition-colors mb-6"
            >
              Enquire on WhatsApp
            </a>
            
            <ul className="space-y-3 text-[13px] text-[var(--gray-600)]">
              <li className="flex gap-2"><span className="text-[var(--gray-400)]">—</span> Pickup available from Kampala</li>
              <li className="flex gap-2"><span className="text-[var(--gray-400)]">—</span> Nationwide delivery via board or bus</li>
              <li className="flex gap-2"><span className="text-[var(--gray-400)]">—</span> Secure payment via Mobile Money or Cash on Delivery</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
