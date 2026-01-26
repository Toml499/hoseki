'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface CartItem {
  id: string
  quantity: number
  product: {
    id: string
    name: string
    price: number
  }
}

export default function CheckoutForm() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postal: '',
    country: '',
    phone: '',
  })

  useEffect(() => {
    fetchCart()
  }, [])

  const fetchCart = async () => {
    try {
      const response = await fetch('/api/cart')
      if (response.ok) {
        const data = await response.json()
        setCartItems(data)
      }
    } catch (error) {
      console.error('Error fetching cart:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const { orderId } = await response.json()
        router.push(`/order-confirmation/${orderId}`)
      } else {
        alert('Error creating order. Please try again.')
      }
    } catch (error) {
      console.error('Error creating order:', error)
      alert('Error creating order. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = subtotal > 200 ? 0 : 15
  const total = subtotal + shipping

  if (isLoading) {
    return <div className="text-center py-12">Loading...</div>
  }

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Shipping Information */}
      <div className="space-y-6">
        <h2 className="text-2xl font-serif mb-6">Shipping Information</h2>

        <div>
          <label className="block text-sm font-medium mb-2">Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-black/20 px-4 py-3 focus:border-gold focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-black/20 px-4 py-3 focus:border-gold focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Address *</label>
          <input
            type="text"
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full border border-black/20 px-4 py-3 focus:border-gold focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">City *</label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full border border-black/20 px-4 py-3 focus:border-gold focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Postal Code *</label>
            <input
              type="text"
              required
              value={formData.postal}
              onChange={(e) => setFormData({ ...formData, postal: e.target.value })}
              className="w-full border border-black/20 px-4 py-3 focus:border-gold focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Country *</label>
          <input
            type="text"
            required
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full border border-black/20 px-4 py-3 focus:border-gold focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border border-black/20 px-4 py-3 focus:border-gold focus:outline-none"
          />
        </div>
      </div>

      {/* Order Summary */}
      <div>
        <h2 className="text-2xl font-serif mb-6">Order Summary</h2>

        <div className="border border-black/10 p-6 space-y-6">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {item.product.name} × {item.quantity}
                </span>
                <span className="font-serif">${(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-black/10 pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-serif">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="font-serif">${shipping.toFixed(2)}</span>
            </div>
            {subtotal > 200 && (
              <p className="text-xs text-green-600">Free shipping applied!</p>
            )}
          </div>

          <div className="border-t border-black/10 pt-4">
            <div className="flex justify-between text-lg">
              <span className="font-medium">Total</span>
              <span className="font-serif text-gold">${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-4 text-xs uppercase tracking-wide hover:bg-gold transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Processing...' : 'Place Order'}
          </button>
        </div>
      </div>
    </form>
  )
}
