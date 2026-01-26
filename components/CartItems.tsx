'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface CartItem {
  id: string
  quantity: number
  product: {
    id: string
    name: string
    price: number
    images: string[]
  }
}

export default function CartItems() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

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

  const updateQuantity = async (itemId: string, quantity: number) => {
    if (quantity < 1) return

    try {
      const response = await fetch('/api/cart', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId, quantity }),
      })

      if (response.ok) {
        fetchCart()
      }
    } catch (error) {
      console.error('Error updating cart:', error)
    }
  }

  const removeItem = async (itemId: string) => {
    try {
      const response = await fetch(`/api/cart?itemId=${itemId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchCart()
      }
    } catch (error) {
      console.error('Error removing item:', error)
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  if (isLoading) {
    return <div className="text-center py-12">Loading cart...</div>
  }

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-6">Your cart is empty</p>
        <Link
          href="/collection"
          className="inline-block bg-black text-white px-8 py-3 text-xs uppercase tracking-wide hover:bg-gold transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-6 border-b border-black/10 pb-6">
            <div className="w-32 h-32 bg-white flex-shrink-0">
              {item.product.images[0] ? (
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <span className="text-gray-400 text-sm">No Image</span>
                </div>
              )}
            </div>

            <div className="flex-1">
              <Link href={`/product/${item.product.id}`} className="hover:text-gold">
                <h3 className="text-lg font-light mb-2">{item.product.name}</h3>
              </Link>
              <p className="text-gold font-serif mb-4">${item.product.price.toFixed(2)}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center border border-black/20">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-x border-black/20">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-sm text-gray-500 hover:text-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="border border-black/10 p-6 sticky top-24">
          <h2 className="text-xl font-serif mb-6">Order Summary</h2>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-serif">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="text-sm text-gray-500">Calculated at checkout</span>
            </div>
          </div>

          <div className="border-t border-black/10 pt-4 mb-6">
            <div className="flex justify-between text-lg">
              <span className="font-medium">Total</span>
              <span className="font-serif text-gold">${subtotal.toFixed(2)}</span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="block w-full bg-black text-white text-center py-4 text-xs uppercase tracking-wide hover:bg-gold transition-colors"
          >
            Proceed to Checkout
          </Link>

          <Link
            href="/collection"
            className="block w-full text-center mt-4 text-sm text-gray-600 hover:text-black"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
