'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Shop',     href: '/#products' },
  { label: 'By Goal', href: '/#goals'    },
  { label: 'Bundles', href: '/bundles'   },
  { label: 'About',   href: '/about'     },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 h-[56px] border-b border-[var(--gray-200)] ${
        scrolled
          ? 'bg-[rgba(255,255,255,0.95)] backdrop-blur-[8px]'
          : 'bg-white'
      }`}
    >
      <div className="max-w-[1100px] h-full mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-[var(--green)]"></div>
            <span className="font-sans text-[16px] font-semibold text-[var(--black)] leading-none">
              VitaPrime
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-[var(--gray-600)] hover:text-[var(--black)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/256700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex w-9 h-9 items-center justify-center rounded-full bg-[#25D366] hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white">
                <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.95 11.95 0 0 0 5.71 1.447h.005c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.479-8.45zm-8.475 18.304h-.004a9.902 9.902 0 0 1-5.031-1.372l-.361-.214-3.741.976.998-3.648-.235-.374a9.844 9.844 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z"/>
              </svg>
            </a>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden flex items-center justify-center text-[var(--black)]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--gray-200)] bg-white absolute top-[56px] left-0 w-full shadow-sm">
          <div className="px-5 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-[var(--gray-600)]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/256700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[14px] font-medium text-[#25D366] mt-2"
              onClick={() => setMenuOpen(false)}
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#25D366]">
                <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.95 11.95 0 0 0 5.71 1.447h.005c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.479-8.45zm-8.475 18.304h-.004a9.902 9.902 0 0 1-5.031-1.372l-.361-.214-3.741.976.998-3.648-.235-.374a9.844 9.844 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
