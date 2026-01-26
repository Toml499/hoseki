import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create sample products
  const products = [
    {
      name: 'Jasmine of Carthage Necklace',
      description: '18k Yellow Gold & Pure Pearl - A delicate tribute to Tunisia\'s national flower, handcrafted in our Tunis atelier.',
      price: 299.99,
      category: 'necklaces',
      images: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000'],
      inStock: true,
      featured: true,
    },
    {
      name: 'Sahara Whispers Bracelet',
      description: 'Textured Gold & Sandstone - Inspired by the golden dunes of the Sahara, this bracelet captures the essence of North African beauty.',
      price: 249.99,
      category: 'bracelets',
      images: ['https://images.unsplash.com/photo-1611085583191-a3b130a88d4a?auto=format&fit=crop&q=80&w=1000'],
      inStock: true,
      featured: true,
    },
    {
      name: 'Medina Silhouettes Ring',
      description: 'Arabesque Filigree Ring - Echoes of ancient medina architecture woven into intricate metalwork.',
      price: 189.99,
      category: 'rings',
      images: ['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000'],
      inStock: true,
      featured: true,
    },
    {
      name: 'Sidi Bou Said Earrings',
      description: 'Blue and White Ceramic Accent Earrings - Inspired by the iconic colors of Sidi Bou Said.',
      price: 149.99,
      category: 'earrings',
      images: ['https://images.unsplash.com/photo-1535556339656-dc43a3a5c645?auto=format&fit=crop&q=80&w=1000'],
      inStock: true,
      featured: false,
    },
    {
      name: 'Carthage Gold Pendant',
      description: '18k Gold Pendant with Ancient Symbol - A modern interpretation of Carthaginian jewelry traditions.',
      price: 379.99,
      category: 'necklaces',
      images: ['https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=80&w=1000'],
      inStock: true,
      featured: false,
    },
    {
      name: 'Tunis Medina Cuff',
      description: 'Wide Silver Cuff with Geometric Patterns - Bold statement piece celebrating Tunisian architecture.',
      price: 329.99,
      category: 'bracelets',
      images: ['https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1000'],
      inStock: true,
      featured: false,
    },
  ]

  for (const product of products) {
    await prisma.product.create({
      data: product,
    })
    console.log(`Created product: ${product.name}`)
  }

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
