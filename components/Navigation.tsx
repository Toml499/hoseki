'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  return (
    <nav className="fixed w-full bg-ivory/95 backdrop-blur-sm z-50 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-light tracking-wider">
            HOSEKI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/collection" className="text-sm tracking-wide hover:text-gold transition-colors">
              COLLECTION
            </Link>
            <Link href="/about" className="text-sm tracking-wide hover:text-gold transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="text-sm tracking-wide hover:text-gold transition-colors">
              CONTACT
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <Link href="/cart" className="relative hover:text-gold transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-gold/20 mt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/collection" className="text-sm tracking-wide hover:text-gold transition-colors">
                COLLECTION
              </Link>
              <Link href="/about" className="text-sm tracking-wide hover:text-gold transition-colors">
                ABOUT
              </Link>
              <Link href="/contact" className="text-sm tracking-wide hover:text-gold transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
