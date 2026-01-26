import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="flex-grow pt-20">
        {/* Hero */}
        <section className="py-20 tunisian-pattern-subtle">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-gold mb-4 block">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-light mb-6 font-serif italic">
              Heritage of Carthage
            </h1>
            <p className="text-lg text-gray-600 font-light">
              Celebrating Tunisian craftsmanship since 1988
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="image-zoom-container aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1621350289139-445699709d73?auto=format&fit=crop&q=80&w=1200"
                  alt="Tunisian artisan at work"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-light font-serif">Our Beginning</h2>
                <p className="text-gray-600 font-light leading-relaxed">
                  HOSEKI was founded in 1988 in the heart of the Tunis Medina, where the ancient art of
                  goldsmithing has been practiced for centuries. Inspired by the legendary Queen Elyssa and
                  the refined traditions of ancient Carthage, we set out to create jewelry that bridges the
                  gap between ancestral craftsmanship and contemporary elegance.
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  Every piece is meticulously handmade in our Tunis workshop, where master artisans use
                  techniques passed down through generations. From delicate filigree to bold geometric
                  statements, our jewelry is a love letter to the Tunisian spirit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship */}
        <section className="py-20 tunisian-pattern-subtle" id="craftsmanship">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light font-serif mb-4">Our Craftsmanship</h2>
              <p className="text-gray-600">
                Every piece tells a story of Mediterranean heritage and artisanal mastery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-ivory border border-gold/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif">Mediterranean Light</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our gold is finished with a unique satin texture that reflects the soft coastal light of
                  Sidi Bou Said.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-ivory border border-gold/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif">Handcrafted Excellence</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Not a single machine is used in our assembly process. Every stone is set by hand in our
                  Tunis atelier.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-ivory border border-gold/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif">Cultural Legacy</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We honor traditional Tunisian patterns and motifs, reimagined for the modern wearer.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
