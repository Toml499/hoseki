# HOSEKI - Tunisian Jewelry E-Commerce Website

A luxury e-commerce website for HOSEKI, a Tunisian handcrafted jewelry brand celebrating artisanal heritage since 1988.

## Features

- **Modern Design**: Clean, minimalist design with Tunisian cultural elements
- **Full E-Commerce Functionality**:
  - Product catalog with filtering by category
  - Shopping cart management
  - Checkout process
  - Order confirmation
- **Backend API**: RESTful APIs for products, cart, orders, and authentication
- **Admin Panel**: Simple interface to add new products
- **Responsive**: Mobile-first design that works on all devices
- **Database**: PostgreSQL with Prisma ORM

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with bcrypt for password hashing
- **Styling**: Tailwind CSS with custom Tunisian-inspired patterns

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
Copy `.env.example` to `.env` and update the values:
```bash
cp .env.example .env
```

Edit `.env`:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/hoseki"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

Generate a secret key:
```bash
openssl rand -base64 32
```

3. **Set up the database**:
```bash
# Generate Prisma client
npm run prisma:generate

# Push database schema
npm run prisma:push

# (Optional) Open Prisma Studio to manage data
npm run prisma:studio
```

4. **Run the development server**:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Products

### Using the Admin Panel

1. Navigate to [http://localhost:3000/admin](http://localhost:3000/admin)
2. Fill in the product form:
   - Product Name
   - Description
   - Price
   - Category (Necklaces, Earrings, Bracelets, Rings)
   - Image URLs (one per line)
   - In Stock checkbox
   - Featured checkbox
3. Click "Add Product"

### Using the API

You can also add products programmatically:

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jasmine Necklace",
    "description": "18k Yellow Gold & Pure Pearl",
    "price": 299.99,
    "category": "necklaces",
    "images": ["https://example.com/image.jpg"],
    "inStock": true,
    "featured": true
  }'
```

## Project Structure

```
hoseki/
├── app/                      # Next.js 14 App Router
│   ├── about/               # About page
│   ├── admin/               # Admin panel
│   ├── api/                 # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   ├── cart/           # Cart management
│   │   ├── orders/         # Order processing
│   │   └── products/       # Product CRUD
│   ├── cart/               # Shopping cart page
│   ├── checkout/           # Checkout page
│   ├── collection/         # Product collection page
│   ├── contact/            # Contact page
│   ├── order-confirmation/ # Order confirmation
│   ├── product/[id]/       # Product detail page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable React components
│   ├── AddToCartButton.tsx
│   ├── CartItems.tsx
│   ├── CheckoutForm.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── ProductGrid.tsx
├── lib/                    # Utility functions
│   ├── auth.ts            # Authentication utilities
│   ├── prisma.ts          # Prisma client
│   └── types.ts           # TypeScript types
├── prisma/                # Database schema
│   └── schema.prisma
├── public/                # Static assets
└── design_references.md   # Design specifications
```

## Pages

- **/** - Homepage with hero, collections showcase, and brand story
- **/collection** - Product catalog with category filtering
- **/collection?category=necklaces** - Filtered by category
- **/product/[id]** - Individual product details
- **/cart** - Shopping cart
- **/checkout** - Checkout form
- **/order-confirmation/[id]** - Order confirmation
- **/about** - Brand story and craftsmanship
- **/contact** - Contact information and form
- **/admin** - Product management panel

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products?category=necklaces` - Filter by category
- `POST /api/products` - Create a product

### Cart
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add item to cart
- `PATCH /api/cart` - Update cart item quantity
- `DELETE /api/cart?itemId=[id]` - Remove item from cart

### Orders
- `POST /api/orders` - Create an order

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login

## Design System

### Colors
- **Ivory**: `#FCFBF7` - Background
- **Gold**: `#C5A059` - Accents, highlights
- **Black**: `#1A1A1A` - Text, UI elements

### Typography
- **Headings**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)

### Patterns
- Subtle Tunisian geometric patterns in backgrounds
- Gold accent borders with low opacity
- Hover animations with smooth transitions

## Database Schema

### Models
- **User**: User accounts and guest sessions
- **Product**: Product catalog
- **CartItem**: Shopping cart items
- **Order**: Customer orders
- **OrderItem**: Individual items in an order

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

Ensure you:
1. Set up a PostgreSQL database
2. Configure environment variables
3. Run `npm run prisma:push` after deployment
4. Set `NODE_ENV=production`

## Instagram Integration

Replace placeholder images with your actual product photos from [@hosekiaccessories](https://www.instagram.com/hosekiaccessories/).

Update image URLs in the admin panel when adding products.

## License

Proprietary - All rights reserved by HOSEKI

## Support

For issues or questions, please contact info@hoseki-jewelry.com