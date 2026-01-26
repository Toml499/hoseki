export interface Product {
  id: string
  name: string
  description: string | null
  price: number
  images: string[]
  category: string | null
  inStock: boolean
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

export interface CartItem {
  id: string
  productId: string
  quantity: number
  product: Product
}

export interface User {
  id: string
  email: string
  name: string | null
}

export interface ShippingInfo {
  name: string
  email: string
  address: string
  city: string
  postal: string
  country: string
  phone?: string
}

export interface Order {
  id: string
  orderNumber: string
  userId: string
  status: string
  total: number
  shippingName: string
  shippingEmail: string
  shippingAddress: string
  shippingCity: string
  shippingPostal: string
  shippingCountry: string
  shippingPhone: string | null
  createdAt: Date
  items: OrderItem[]
}

export interface OrderItem {
  id: string
  productId: string
  productName: string
  quantity: number
  price: number
}
