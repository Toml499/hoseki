import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'

// Get user ID from session/cookie (simplified - in production use proper auth)
async function getUserId(request: NextRequest): Promise<string> {
  const cookieStore = await cookies()
  let userId = cookieStore.get('userId')?.value

  if (!userId) {
    // Create a guest user ID
    userId = `guest-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }

  return userId
}

// GET - Fetch cart items
export async function GET(request: NextRequest) {
  try {
    const userId = await getUserId(request)

    const cartItems = await prisma.cartItem.findMany({
      where: { userId },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            price: true,
            images: true,
            inStock: true,
          },
        },
      },
    })

    return NextResponse.json(cartItems)
  } catch (error) {
    console.error('Error fetching cart:', error)
    return NextResponse.json({ error: 'Error fetching cart' }, { status: 500 })
  }
}

// POST - Add item to cart
export async function POST(request: NextRequest) {
  try {
    const { productId, quantity } = await request.json()
    const userId = await getUserId(request)

    // Check if user exists, create if not
    let user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) {
      user = await prisma.user.create({
        data: {
          id: userId,
          email: `${userId}@guest.local`,
          password: 'guest',
        },
      })
    }

    // Check if item already in cart
    const existingItem = await prisma.cartItem.findUnique({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    })

    if (existingItem) {
      // Update quantity
      const updated = await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + quantity },
      })
      return NextResponse.json(updated)
    } else {
      // Create new cart item
      const cartItem = await prisma.cartItem.create({
        data: {
          userId,
          productId,
          quantity,
        },
      })

      // Set cookie for guest users
      const response = NextResponse.json(cartItem)
      response.cookies.set('userId', userId, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 30, // 30 days
      })
      return response
    }
  } catch (error) {
    console.error('Error adding to cart:', error)
    return NextResponse.json({ error: 'Error adding to cart' }, { status: 500 })
  }
}

// PATCH - Update cart item quantity
export async function PATCH(request: NextRequest) {
  try {
    const { itemId, quantity } = await request.json()

    const updated = await prisma.cartItem.update({
      where: { id: itemId },
      data: { quantity },
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error('Error updating cart:', error)
    return NextResponse.json({ error: 'Error updating cart' }, { status: 500 })
  }
}

// DELETE - Remove item from cart
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const itemId = searchParams.get('itemId')

    if (!itemId) {
      return NextResponse.json({ error: 'Item ID required' }, { status: 400 })
    }

    await prisma.cartItem.delete({
      where: { id: itemId },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error removing from cart:', error)
    return NextResponse.json({ error: 'Error removing from cart' }, { status: 500 })
  }
}
