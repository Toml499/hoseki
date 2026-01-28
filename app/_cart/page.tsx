import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CartItems from '@/components/CartItems'

export default function CartPage() {
  return (
    <>
      <Navigation />

      <main className="flex-grow pt-20">
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-light font-serif mb-4">Shopping Cart</h1>
              <p className="text-gray-600">Review your selected items</p>
            </div>

            <CartItems />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
