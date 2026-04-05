'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import type { Product } from '@/lib/data'

const FILTERS = [
  'All',
  'Vitamins',
  'Omega & Fish Oil',
  "Women's",
  "Men's",
  'Kids',
  'Immunity',
  'Beauty',
  'Joints'
]

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [active, setActive] = useState('All')

  // Example naive filter mapping for the sake of presentation
  const filtered = active === 'All'
    ? products
    : products.filter((p) => p.category.toLowerCase().includes(active.toLowerCase()) || active.toLowerCase().includes(p.category.toLowerCase()))

  return (
    <section id="products" className="py-[48px] lg:py-[64px] bg-white">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">

        {/* Filter tabs */}
        <div className="flex gap-[20px] overflow-x-auto pb-4 scrollbar-hide mb-[32px]">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`text-[13px] font-medium whitespace-nowrap transition-colors pb-1 border-b-[2px] ${
                active === filter
                  ? 'text-[var(--black)] border-[var(--black)]'
                  : 'text-[var(--gray-400)] border-transparent hover:text-[var(--gray-600)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[12px] sm:gap-[16px] lg:gap-[20px]">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            // If empty (because our naive logic didn't hit) just show all or show nothing
             products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          )}
        </div>

      </div>
    </section>
  )
}
