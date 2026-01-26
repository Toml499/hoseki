'use client'

import { useState } from 'react'

interface AddToCartButtonProps {
  productId: string
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const [message, setMessage] = useState('')

  const handleAddToCart = async () => {
    setIsAdding(true)
    setMessage('')

    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          quantity,
        }),
      })

      if (response.ok) {
        setMessage('Added to cart!')
        setTimeout(() => setMessage(''), 3000)
      } else {
        setMessage('Failed to add to cart')
      }
    } catch (error) {
      setMessage('Error adding to cart')
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="text-sm font-medium">Quantity:</label>
        <div className="flex items-center border border-black/20">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-6 py-2 border-x border-black/20">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className="w-full bg-black text-white py-4 text-xs uppercase tracking-wide hover:bg-gold transition-colors disabled:opacity-50"
      >
        {isAdding ? 'Adding...' : 'Add to Cart'}
      </button>

      {message && (
        <p className={`text-sm text-center ${message.includes('Failed') || message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </div>
  )
}
