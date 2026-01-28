import { notFound } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// For static export - no order pages pre-rendered
export function generateStaticParams() {
  return []
}

export default async function OrderConfirmationPage({
  params,
}: {
  params: { id: string }
}) {
  const order = await prisma.order.findUnique({
    where: { id: params.id },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  })

  if (!order) {
    notFound()
  }

  return (
    <>
      <Navigation />

      <main className="flex-grow pt-20">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            {/* Success Message */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-light font-serif mb-4">Order Confirmed!</h1>
              <p className="text-gray-600">
                Thank you for your order. We'll send you a confirmation email shortly.
              </p>
            </div>

            {/* Order Details */}
            <div className="border border-black/10 p-8 mb-8">
              <div className="mb-6">
                <h2 className="text-2xl font-serif mb-4">Order Details</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order Number:</span>
                    <span className="font-medium">{order.orderNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order Date:</span>
                    <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="capitalize">{order.status}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-black/10 pt-6 mb-6">
                <h3 className="font-medium mb-4">Shipping Address</h3>
                <div className="text-sm text-gray-600">
                  <p>{order.shippingName}</p>
                  <p>{order.shippingAddress}</p>
                  <p>{order.shippingCity}, {order.shippingPostal}</p>
                  <p>{order.shippingCountry}</p>
                  {order.shippingPhone && <p>Phone: {order.shippingPhone}</p>}
                </div>
              </div>

              <div className="border-t border-black/10 pt-6">
                <h3 className="font-medium mb-4">Order Items</h3>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.productName} × {item.quantity}
                      </span>
                      <span className="font-serif">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-black/10">
                  <div className="flex justify-between text-lg">
                    <span className="font-medium">Total</span>
                    <span className="font-serif text-gold">${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="text-center">
              <Link
                href="/collection"
                className="inline-block bg-black text-white px-8 py-3 text-xs uppercase tracking-wide hover:bg-gold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
