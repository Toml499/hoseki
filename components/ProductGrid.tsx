'use client'

import Link from 'next/link'

interface ProductGridProps {
  category?: string
}

// Static placeholder products for GitHub Pages demo
const placeholderProducts = [
  {
    id: '1',
    name: 'Jasmine Pendant',
    description: 'Delicate 18k gold pendant inspired by Tunisian jasmine flowers',
    price: 450,
    images: ['/images/necklace_outside.png'],
    category: 'necklaces',
    inStock: true,
  },
  {
    id: '2',
    name: 'Sahara Cuff',
    description: 'Bold gold cuff bracelet with desert-inspired textures',
    price: 680,
    images: ['/images/armband_jeans.png'],
    category: 'bracelets',
    inStock: true,
  },
  {
    id: '3',
    name: 'Medina Chain',
    description: 'Intricate chain necklace echoing the winding streets of the Medina',
    price: 520,
    images: ['/images/chains.png'],
    category: 'necklaces',
    inStock: true,
  },
  {
    id: '4',
    name: 'Hera Statement Necklace',
    description: 'Stunning statement piece with traditional Tunisian craftsmanship',
    price: 890,
    images: ['/images/hera_necklace.png'],
    category: 'necklaces',
    inStock: true,
  },
]

export default function ProductGrid({ category }: ProductGridProps) {
  const products = category
    ? placeholderProducts.filter(p => p.category === category)
    : placeholderProducts

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
