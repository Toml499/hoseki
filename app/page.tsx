import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroAnimation from '@/components/HeroAnimation'

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main className="flex-grow">
        {/* Hero Animation Section */}
        <HeroAnimation />

        {/* Our Story Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="image-zoom-container aspect-[3/4] relative">
                <img
                  src="/images/hera_necklace.png"
                  alt="Hera Necklace - Handcrafted Tunisian Gold"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -top-6 -left-6 hidden lg:block">
                  <div className="bg-ivory p-8 border border-black/5 shadow-xl max-w-xs">
                    <span className="text-3xl font-light font-serif text-gold">1988</span>
                    <p className="text-sm text-gray-500 mt-2 italic">
                      The year our first atelier opened in the heart of the Tunis Medina.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <span className="text-xs uppercase tracking-[0.3em] text-gold">Medina & Modernity</span>
                <h2 className="text-5xl font-light leading-tight italic">A Legacy of Carthage</h2>
                <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                  <p>
                    HOSEKI was born from the timeless echoes of the Mediterranean. Inspired by the legendary
                    Queen Elyssa and the refined gold-smithing traditions of ancient Carthage, we bridge the
                    gap between ancestral craftsmanship and contemporary elegance.
                  </p>
                  <p>
                    Every piece is meticulously handmade in our Tunis workshop, where master artisans use
                    techniques passed down through generations. From delicate filigree to bold geometric
                    statements, our jewelry is a love letter to the Tunisian spirit.
                  </p>
                </div>
                <div className="pt-4">
                  <Link href="/about" className="group flex items-center space-x-4 text-xs uppercase tracking-[0.2em] font-medium">
                    <span>Our Artisanal Process</span>
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collections Showcase */}
        <section className="py-32 tunisian-pattern-subtle relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-[0.3em] text-gold mb-4 block">Curated Series</span>
                <h2 className="text-5xl font-light">The Heritage Collections</h2>
              </div>
              <Link
                href="/collection"
                className="text-xs uppercase tracking-[0.2em] border-b border-black pb-2 hover:text-gold hover:border-gold transition-all"
              >
                View all series
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Item 1 */}
              <Link href="/collection?category=necklaces" className="group cursor-pointer block">
                <div className="image-zoom-container aspect-[4/5] bg-white mb-6">
                  <img
                    src="/images/necklace_outside.png"
                    alt="Jasmine Collection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-light mb-1">Jasmine of Carthage</h3>
                  <p className="text-sm text-gold italic mb-4">18k Yellow Gold & Pure Pearl</p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                    Discover the Scent
                  </p>
                </div>
              </Link>

              {/* Item 2 */}
              <Link href="/collection?category=bracelets" className="group cursor-pointer block">
                <div className="image-zoom-container aspect-[4/5] bg-white mb-6">
                  <img
                    src="/images/armband_jeans.png"
                    alt="Sahara Collection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-light mb-1">Sahara Whispers</h3>
                  <p className="text-sm text-gold italic mb-4">Textured Gold & Sandstone</p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                    Explore the Sands
                  </p>
                </div>
              </Link>

              {/* Item 3 */}
              <Link href="/collection?category=rings" className="group cursor-pointer block">
                <div className="image-zoom-container aspect-[4/5] bg-white mb-6">
                  <img
                    src="/images/chains.png"
                    alt="Medina Collection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-light mb-1">Medina Silhouettes</h3>
                  <p className="text-sm text-gold italic mb-4">Arabesque Filigree Rings</p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                    Enter the Labyrinth
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section className="py-32 bg-white border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-light italic mb-6">Handcrafted Tunisian Excellence</h2>
              <p className="text-gray-500 font-light">
                Every piece is a testament to the North African sun and the skilled hands of our local artisans.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-ivory border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium font-serif">Mediterranean Light</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  Our gold is finished with a unique satin texture that reflects the soft coastal light of Sidi Bou Said.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-ivory border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium font-serif">Artisan Soul</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  Not a single machine is used in our assembly process. Every stone is set by hand in our Tunis atelier.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-ivory border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium font-serif">Cultural Continuity</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  We honor traditional Tunisian patterns and motifs, reimagined for the modern wearer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 tunisian-pattern-subtle">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-light italic mb-4">Join Our Story</h3>
            <p className="text-gray-600 mb-8">
              Receive updates on new collections, artisan stories, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 border border-black/20 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 text-xs uppercase tracking-wide hover:bg-gold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
