'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isTransparent, setIsTransparent] = useState(true)
  const [searchOpen, setSearchOpen] = useState(false)
  const lastScrollY = useRef(0)
  const heroHeight = useRef(0)

  useEffect(() => {
    // Get hero section height (200vh)
    heroHeight.current = window.innerHeight * 2

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isInHero = currentScrollY < heroHeight.current

      // Determine if we should show transparent or solid background
      setIsTransparent(isInHero && currentScrollY < 100)

      // Hide on scroll down, show on scroll up (only after some scroll)
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
          // Scrolling down - hide
          setIsVisible(false)
        } else {
          // Scrolling up - show
          setIsVisible(true)
        }
      } else {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Show navbar when mouse is near top of screen
      if (e.clientY < 80) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-sm border-b border-black/5 shadow-sm'
      }`}
    >
      {/* Top Row: Logo, Search, Icons */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-serif font-light tracking-wider transition-colors ${
              isTransparent ? 'text-white drop-shadow-lg' : 'text-black'
            }`}
          >
            HOSEKI
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div
              className={`relative w-full border-b transition-colors ${
                isTransparent ? 'border-white/50' : 'border-black/20'
              }`}
            >
              <svg
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                  isTransparent ? 'text-white/70' : 'text-gray-400'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className={`w-full bg-transparent pl-7 pr-4 py-2 text-sm outline-none placeholder:transition-colors ${
                  isTransparent
                    ? 'text-white placeholder:text-white/60'
                    : 'text-black placeholder:text-gray-400'
                }`}
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            {/* Search icon - Mobile */}
            <button
              className={`md:hidden transition-colors ${
                isTransparent ? 'text-white' : 'text-black'
              } hover:text-gold`}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Wishlist */}
            <Link
              href="#"
              className={`hidden sm:block transition-colors ${
                isTransparent ? 'text-white' : 'text-black'
              } hover:text-gold`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>

            {/* Account */}
            <Link
              href="#"
              className={`hidden sm:block transition-colors ${
                isTransparent ? 'text-white' : 'text-black'
              } hover:text-gold`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className={`relative transition-colors ${
                isTransparent ? 'text-white' : 'text-black'
              } hover:text-gold`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-colors ${
                isTransparent ? 'text-white' : 'text-black'
              }`}
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
      </div>

      {/* Bottom Row: Category Navigation - Desktop */}
      <div
        className={`hidden md:block border-t transition-colors ${
          isTransparent ? 'border-white/20' : 'border-black/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-10 py-3">
            <Link
              href="/collection?category=new"
              className={`text-xs tracking-widest uppercase transition-colors ${
                isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-gold'
              }`}
            >
              New Arrivals
            </Link>
            <Link
              href="/collection?category=necklaces"
              className={`text-xs tracking-widest uppercase transition-colors ${
                isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-gold'
              }`}
            >
              Necklaces
            </Link>
            <Link
              href="/collection?category=bracelets"
              className={`text-xs tracking-widest uppercase transition-colors ${
                isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-gold'
              }`}
            >
              Bracelets
            </Link>
            <Link
              href="/collection?category=rings"
              className={`text-xs tracking-widest uppercase transition-colors ${
                isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-gold'
              }`}
            >
              Rings
            </Link>
            <Link
              href="/collection?category=earrings"
              className={`text-xs tracking-widest uppercase transition-colors ${
                isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-gold'
              }`}
            >
              Earrings
            </Link>
            <Link
              href="/collection"
              className={`text-xs tracking-widest uppercase transition-colors ${
                isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-gold'
              }`}
            >
              Collections
            </Link>
            <Link
              href="/about"
              className={`text-xs tracking-widest uppercase transition-colors ${
                isTransparent ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-gold'
              }`}
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 pb-4 border-t ${
            isTransparent ? 'border-white/20 bg-black/50 backdrop-blur-sm' : 'border-black/5 bg-white'
          }`}
        >
          {/* Mobile Search */}
          <div className={`py-4 border-b ${isTransparent ? 'border-white/20' : 'border-black/10'}`}>
            <div className={`relative border-b ${isTransparent ? 'border-white/50' : 'border-black/20'}`}>
              <svg
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 ${
                  isTransparent ? 'text-white/70' : 'text-gray-400'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className={`w-full bg-transparent pl-7 pr-4 py-2 text-sm outline-none ${
                  isTransparent ? 'text-white placeholder:text-white/60' : 'text-black placeholder:text-gray-400'
                }`}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-4 pt-4">
            <Link
              href="/collection?category=new"
              className={`text-sm tracking-wide transition-colors ${
                isTransparent ? 'text-white' : 'text-black'
              } hover:text-gold`}
            >
              New Arrivals
            </Link>
            <Link
              href="/collection?category=necklaces"
              className={`text-sm tracking-wide transition-colors ${
                isTransparent ? 'text-white' : 'text-black'
              } hover:text-gold`}
            >
              Necklaces
            </Link>
            <Link
              href="/collection?category=bracelets"
              className={`text-sm tracking-wide transition-colors ${
                isTransparent ? 'text-white' : 'text-black'
              } hover:text-gold`}
            >
              Bracelets
            </Link>
            <Link
              href="/collection?category=rings"
              className={`text-sm tracking-wide transition-colors ${
                isTransparent ? 'text-white' : 'text-black'
              } hover:text-gold`}
            >
              Rings
            </Link>
            <Link
              href="/collection?category=earrings"
              className={`text-sm tracking-wide transition-colors ${
                isTransparent ? 'text-white' : 'text-black'
              } hover:text-gold`}
            >
              Earrings
            </Link>
            <Link
              href="/collection"
              className={`text-sm tracking-wide transition-colors ${
                isTransparent ? 'text-white' : 'text-black'
              } hover:text-gold`}
            >
              All Collections
            </Link>
            <Link
              href="/about"
              className={`text-sm tracking-wide transition-colors ${
                isTransparent ? 'text-white' : 'text-black'
              } hover:text-gold`}
            >
              Our Story
            </Link>
            <Link
              href="/contact"
              className={`text-sm tracking-wide transition-colors ${
                isTransparent ? 'text-white' : 'text-black'
              } hover:text-gold`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
