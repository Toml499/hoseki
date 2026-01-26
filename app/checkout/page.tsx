import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CheckoutForm from '@/components/CheckoutForm'

export default function CheckoutPage() {
  return (
    <>
      <Navigation />

      <main className="flex-grow pt-20">
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-light font-serif mb-4">Checkout</h1>
              <p className="text-gray-600">Complete your order</p>
            </div>

            <CheckoutForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
