import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AddToCartButton from '@/components/AddToCartButton'

// For static export - no product pages pre-rendered
export function generateStaticParams() {
  return []
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
  })

  if (!product) {
    notFound()
  }

  return (
    <>
      <Navigation />

      <main className="flex-grow pt-20">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-white">
                  {product.images[0] ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <span className="text-gray-400">No Image</span>
                    </div>
                  )}
                </div>
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {product.images.slice(1).map((image, index) => (
                      <div key={index} className="aspect-square bg-white cursor-pointer hover:opacity-75 transition">
                        <img
                          src={image}
                          alt={`${product.name} ${index + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-gold mb-2 block">
                    {product.category || 'Jewelry'}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-light font-serif mb-4">
                    {product.name}
                  </h1>
                  <p className="text-3xl font-serif text-gold">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                <div className="border-t border-b border-black/10 py-8">
                  <p className="text-gray-600 font-light leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {product.inStock ? (
                    <AddToCartButton productId={product.id} />
                  ) : (
                    <div className="text-center py-4 border border-gray-300 text-gray-500">
                      Out of Stock
                    </div>
                  )}
                </div>

                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-start space-x-4">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Handcrafted in our Tunis atelier</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Traditional Tunisian craftsmanship</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Free worldwide shipping on orders over $200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
