import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProductGrid from '@/components/ProductGrid'

export default async function CollectionPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const category = searchParams.category

  return (
    <>
      <Navigation />

      <main className="flex-grow pt-20">
        {/* Page Header */}
        <section className="py-20 tunisian-pattern-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-[0.4em] text-gold mb-4 block">
                Handcrafted in Tunisia
              </span>
              <h1 className="text-5xl md:text-6xl font-light mb-6 font-serif italic">
                {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'The Collection'}
              </h1>
              <p className="text-gray-600 font-light">
                Each piece tells a story of Mediterranean heritage and artisanal mastery
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-y border-black/5 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/collection"
                className={`px-6 py-2 text-xs uppercase tracking-wide transition-colors ${
                  !category
                    ? 'bg-black text-white'
                    : 'border border-black/20 hover:border-gold hover:text-gold'
                }`}
              >
                All
              </Link>
              <Link
                href="/collection?category=necklaces"
                className={`px-6 py-2 text-xs uppercase tracking-wide transition-colors ${
                  category === 'necklaces'
                    ? 'bg-black text-white'
                    : 'border border-black/20 hover:border-gold hover:text-gold'
                }`}
              >
                Necklaces
              </Link>
              <Link
                href="/collection?category=earrings"
                className={`px-6 py-2 text-xs uppercase tracking-wide transition-colors ${
                  category === 'earrings'
                    ? 'bg-black text-white'
                    : 'border border-black/20 hover:border-gold hover:text-gold'
                }`}
              >
                Earrings
              </Link>
              <Link
                href="/collection?category=bracelets"
                className={`px-6 py-2 text-xs uppercase tracking-wide transition-colors ${
                  category === 'bracelets'
                    ? 'bg-black text-white'
                    : 'border border-black/20 hover:border-gold hover:text-gold'
                }`}
              >
                Bracelets
              </Link>
              <Link
                href="/collection?category=rings"
                className={`px-6 py-2 text-xs uppercase tracking-wide transition-colors ${
                  category === 'rings'
                    ? 'bg-black text-white'
                    : 'border border-black/20 hover:border-gold hover:text-gold'
                }`}
              >
                Rings
              </Link>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <ProductGrid category={category} />
      </main>

      <Footer />
    </>
  )
}
