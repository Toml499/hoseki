import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'

async function getUserId(request: NextRequest): Promise<string> {
  const cookieStore = await cookies()
  const userId = cookieStore.get('userId')?.value

  if (!userId) {
    throw new Error('No user session found')
  }

  return userId
}

// POST - Create new order
export async function POST(request: NextRequest) {
  try {
    const userId = await getUserId(request)
    const shippingData = await request.json()

    // Get cart items
    const cartItems = await prisma.cartItem.findMany({
      where: { userId },
      include: { product: true },
    })

    if (cartItems.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
    }

    // Calculate total
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    )
    const shipping = subtotal > 200 ? 0 : 15
    const total = subtotal + shipping

    // Generate order number
    const orderNumber = `HS-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Create order
    const order = await prisma.order.create({
      data: {
        userId,
        orderNumber,
        total,
        status: 'pending',
        shippingName: shippingData.name,
        shippingEmail: shippingData.email,
        shippingAddress: shippingData.address,
        shippingCity: shippingData.city,
        shippingPostal: shippingData.postal,
        shippingCountry: shippingData.country,
        shippingPhone: shippingData.phone || null,
        items: {
          create: cartItems.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.product.price,
            productName: item.product.name,
          })),
        },
      },
    })

    // Clear cart
    await prisma.cartItem.deleteMany({
      where: { userId },
    })

    return NextResponse.json({ orderId: order.id })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json({ error: 'Error creating order' }, { status: 500 })
  }
}
