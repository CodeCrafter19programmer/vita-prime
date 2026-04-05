'use client'

import Link from 'next/link'
import type { Product } from '@/lib/data'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappText = encodeURIComponent(`I'm interested in ${product.name}`)
  
  return (
    <article className="bg-white border border-[var(--gray-200)] rounded-[10px] p-[12px] transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)] hover:-translate-y-[2px] flex flex-col h-full">

      {/* Image area */}
      <div className="aspect-square bg-[var(--gray-50)] rounded-[8px] overflow-hidden flex items-center justify-center mb-4">
        {/* Placeholder for no valid image */}
        <div className="w-16 h-20 border-2 border-[var(--gray-200)] rounded-md flex items-center justify-center relative">
          <div className="absolute top-[-6px] mx-auto w-6 h-2 bg-[var(--gray-200)] rounded-t-sm"></div>
           <span className="text-[10px] text-[var(--gray-400)] font-semibold uppercase">{product.subtitle.split(' ')[0]}</span>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        {/* Category tag */}
        <div className="mb-[6px]">
          <span className="inline-block text-[var(--green)] bg-[var(--green-light)] text-[10px] font-semibold uppercase tracking-[0.08em] px-[8px] py-[2px] rounded-[4px]">
            {product.category}
          </span>
        </div>

        {/* Info */}
        <Link href={`/products/${product.slug}`} className="block mb-2 flex-1">
          <h3 className="text-[14px] font-semibold text-[var(--black)] leading-[1.3] line-clamp-2 mb-1">
            {product.name}
          </h3>
          <p className="text-[12px] font-normal text-[var(--gray-600)] leading-[1.6] line-clamp-3">
            {product.description}
          </p>
        </Link>

        {/* Price + Button */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-[14px] font-semibold text-[var(--brown)]">
              UGX {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-[12px] text-[var(--gray-400)] line-through">
                {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <a
            href={`https://wa.me/256700000000?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full h-[36px] bg-transparent border border-[var(--black)] text-[var(--black)] text-[12px] font-medium rounded-[6px] hover:bg-[var(--black)] hover:text-white transition-colors"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}
