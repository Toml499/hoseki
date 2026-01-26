'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function AdminPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'necklaces',
    images: '',
    inStock: true,
    featured: false,
  })
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')

    try {
      const images = formData.images.split('\n').filter((url) => url.trim())

      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          images,
        }),
      })

      if (response.ok) {
        setMessage('Product added successfully!')
        setFormData({
          name: '',
          description: '',
          price: '',
          category: 'necklaces',
          images: '',
          inStock: true,
          featured: false,
        })
      } else {
        setMessage('Error adding product')
      }
    } catch (error) {
      setMessage('Error adding product')
    }
  }

  return (
    <>
      <Navigation />

      <main className="flex-grow pt-20">
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-4xl font-light font-serif mb-8">Admin Panel</h1>
            <p className="text-gray-600 mb-8">Add new products to the collection</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Product Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-black/20 px-4 py-3 focus:border-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full border border-black/20 px-4 py-3 focus:border-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Price ($) *</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full border border-black/20 px-4 py-3 focus:border-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full border border-black/20 px-4 py-3 focus:border-gold focus:outline-none"
                >
                  <option value="necklaces">Necklaces</option>
                  <option value="earrings">Earrings</option>
                  <option value="bracelets">Bracelets</option>
                  <option value="rings">Rings</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Image URLs (one per line)
                </label>
                <textarea
                  value={formData.images}
                  onChange={(e) => setFormData({ ...formData, images: e.target.value })}
                  rows={4}
                  placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
                  className="w-full border border-black/20 px-4 py-3 focus:border-gold focus:outline-none font-mono text-sm"
                />
              </div>

              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.inStock}
                    onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">In Stock</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Featured</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 text-xs uppercase tracking-wide hover:bg-gold transition-colors"
              >
                Add Product
              </button>

              {message && (
                <p className={`text-center ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  )
}
