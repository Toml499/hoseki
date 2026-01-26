import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import Image from 'next/image'

interface ProductGridProps {
  category?: string
}

export default async function ProductGrid({ category }: ProductGridProps) {
  // Fetch products from database
  const products = await prisma.product.findMany({
    where: category ? { category } : undefined,
    orderBy: { createdAt: 'desc' },
  })

  if (products.length === 0) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-gray-500">No products found in this category.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group block"
            >
              <div className="image-zoom-container aspect-[3/4] bg-white mb-4 relative">
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
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white text-sm uppercase tracking-wide">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-light group-hover:text-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-lg font-serif text-gold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
