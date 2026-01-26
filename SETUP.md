# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up PostgreSQL Database

### Option A: Local PostgreSQL

1. Install PostgreSQL on your machine if you haven't already
2. Create a new database:
```bash
createdb hoseki
```

3. Update the `DATABASE_URL` in `.env`:
```env
DATABASE_URL="postgresql://your_username:your_password@localhost:5432/hoseki"
```

### Option B: Cloud Database (Recommended for quick start)

Use a free PostgreSQL database from:
- **Supabase**: https://supabase.com/ (free tier)
- **Railway**: https://railway.app/ (free tier)
- **Neon**: https://neon.tech/ (free tier)

Copy the connection string they provide and update `.env`:
```env
DATABASE_URL="your_connection_string_here"
```

## Step 3: Initialize Database

```bash
# Generate Prisma client
npm run prisma:generate

# Push schema to database
npm run prisma:push
```

## Step 4: Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Step 5: Add Sample Products

1. Go to [http://localhost:3000/admin](http://localhost:3000/admin)
2. Add some products using the form

### Sample Product Data

Here are some sample products you can add:

**Product 1:**
- Name: Jasmine of Carthage Necklace
- Description: 18k Yellow Gold & Pure Pearl - A delicate tribute to Tunisia's national flower
- Price: 299.99
- Category: necklaces
- Images: https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000
- In Stock: ✓
- Featured: ✓

**Product 2:**
- Name: Sahara Whispers Bracelet
- Description: Textured Gold & Sandstone - Inspired by the golden dunes of the Sahara
- Price: 249.99
- Category: bracelets
- Images: https://images.unsplash.com/photo-1611085583191-a3b130a88d4a?auto=format&fit=crop&q=80&w=1000
- In Stock: ✓
- Featured: ✓

**Product 3:**
- Name: Medina Silhouettes Ring
- Description: Arabesque Filigree Ring - Echoes of ancient medina architecture
- Price: 189.99
- Category: rings
- Images: https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000
- In Stock: ✓
- Featured: ✓

## Troubleshooting

### Database Connection Issues

If you see database connection errors:

1. Make sure PostgreSQL is running
2. Check that your `DATABASE_URL` in `.env` is correct
3. Verify you can connect to the database using a client like pgAdmin or psql

### Port Already in Use

If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Prisma Issues

If you make changes to `prisma/schema.prisma`:
```bash
npm run prisma:generate
npm run prisma:push
```

## Next Steps

1. Replace placeholder images with your actual product photos
2. Update contact information in [/app/contact/page.tsx](app/contact/page.tsx)
3. Update Instagram link to your actual account
4. Customize brand copy and descriptions
5. Set up a production database for deployment
6. Deploy to Vercel or your preferred platform

## Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review the design references in [design_references.md](design_references.md)
- Visit the Instagram: [@hosekiaccessories](https://www.instagram.com/hosekiaccessories/)
