'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-white pt-[48px] pb-[48px] lg:pt-[96px] lg:pb-[80px]">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 text-center lg:text-left">
        <div className="mb-6">
          <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--gray-400)] mb-4 lg:mb-6">
            DISCOVER
          </div>
          <h1 className="font-display text-[36px] lg:text-[52px] font-semibold text-[var(--black)] leading-[1.1]">
            Premium Supplements<br />
            Delivered to Your Door.
          </h1>
        </div>

        <div className="w-[48px] h-[1px] bg-[var(--gray-200)] my-[24px] mx-auto lg:mx-0"></div>

        <p className="text-[15px] font-normal text-[var(--gray-600)] max-w-[460px] mx-auto lg:mx-0 mb-8 leading-relaxed">
          Science-backed vitamins and supplements from trusted global brands. Fast delivery across Uganda.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-[12px] mb-12">
          <Link
            href="/#products"
            className="flex items-center justify-center bg-[var(--black)] text-white text-[13px] font-semibold px-6 py-3 rounded-full min-w-[160px] transition-opacity hover:opacity-90"
          >
            Explore Products
          </Link>
          <Link
            href="/#goals"
            className="flex items-center justify-center bg-white border border-[var(--black)] text-[var(--black)] text-[13px] font-semibold px-6 py-3 rounded-full min-w-[160px] transition-colors hover:bg-[var(--gray-50)]"
          >
            Shop by Goal
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:justify-start text-[11px] font-medium text-[var(--gray-400)]">
          <span>200+ Products</span>
          <span className="mx-3 text-[var(--gray-200)]">|</span>
          <span>12k+ Customers</span>
          <span className="mx-3 text-[var(--gray-200)]">|</span>
          <span>4.8★ Rating</span>
        </div>
      </div>
    </section>
  )
}
