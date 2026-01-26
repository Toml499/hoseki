Main Page:

# Design Reference

## Original Prompt
Enhance the luxury minimalist jewelry brand landing page to authentically celebrate its Tunisian handmade heritage. Incorporate Tunisian cultural elements throughout: update the hero section to tell the story of Tunisian craftsmanship and artisanal heritage (reference the 1988 founding in Tunisia instead of Florence), add subtle Tunisian geometric patterns and arabesque influences as design accents (borders, backgrounds, decorative elements), feature Tunisian craftsmanship and heritage prominently, showcase the handmade artisanal process from Tunisian workshops, and emphasize the connection to Tunisian geography, traditions, and craftsmanship. Keep the refined luxury aesthetic with the same color palette (ivory, black, gold) but integrate traditional Tunisian visual elements like geometric patterns, tile-work-inspired designs, and cultural references. Update brand name to something more authentically Tunisian if needed, or keep the current name but emphasize Tunisian origins throughout the copy and visuals.

## HTML Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AURÉLIA CARTHAGE | Tunisian Artisanal Excellence</title>
    <!-- Prefetch flow pages for instant navigation -->
    <link rel="prefetch" href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa" as="document">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <meta name="view-transition" content="same-origin">
    <style>
        :root {
            --ivory: #FCFBF7;
            --gold: #C5A059;
            --black: #1A1A1A;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--ivory);
            color: var(--black);
            overflow-x: hidden;
        }
        h1, h2, h3, .serif {
            font-family: 'Cormorant Garamond', serif;
        }
        .tunisian-pattern-subtle {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5a059' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .gold-border {
            border-color: rgba(197, 160, 89, 0.3);
        }
        .fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .reveal-delay-1 { animation-delay: 0.2s; }
        .reveal-delay-2 { animation-delay: 0.4s; }
        .reveal-delay-3 { animation-delay: 0.6s; }
        
        html { background-color: var(--ivory); }
        @view-transition { navigation: auto; }
        
        ::view-transition-old(main-nav),
        ::view-transition-new(main-nav) {
            animation: none;
            mix-blend-mode: normal;
        }

        ::view-transition-old(main-content) {
            animation: 0.25s ease-out both fade-out;
        }
        ::view-transition-new(main-content) {
            animation: 0.25s ease-in 0.1s both fade-in;
        }
        @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

        ::view-transition-old(root),
        ::view-transition-new(root) {
            animation: none;
            mix-blend-mode: normal;
        }

        .hover-lift {
            transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hover-lift:hover {
            transform: translateY(-8px);
        }
        .image-zoom-container {
            overflow: hidden;
        }
        .image-zoom-container img {
            transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .image-zoom-container:hover img {
            transform: scale(1.05);
        }
        .arabesque-accent {
            position: relative;
        }
        .arabesque-accent::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 2px;
            background: var(--gold);
            opacity: 0.5;
        }
    </style>
</head>
<body>
    <div class="min-h-screen flex flex-col tunisian-pattern-subtle">
        <!-- Header Navigation -->
        <header class="fixed top-0 left-0 w-full z-50 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-black/5" style="view-transition-name: main-nav">
            <nav class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <div class="flex items-center space-x-8">
                    <a href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" id="nav-shop-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Shop</a>
                    <a href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" id="nav-collections-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Collections</a>
                </div>
                
                <div class="flex flex-col items-center">
                    <a href="#" id="nav-brand-logo" class="text-3xl tracking-[0.3em] font-light serif uppercase">Aurélia</a>
                    <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1">Carthage</span>
                </div>
                
                <div class="flex items-center space-x-6">
                    <a href="#" id="nav-search-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:search" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#" id="nav-account-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:user" class="text-lg"></iconify-icon>
                    </a>
                    <a href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" id="nav-cart-link" class="hover:text-[#C5A059] transition-colors relative">
                        <iconify-icon icon="lucide:shopping-bag" class="text-lg"></iconify-icon>
                        <span class="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">0</span>
                    </a>
                </div>
            </nav>
        </header>

        <main style="view-transition-name: main-content" class="flex-grow pt-20">
            
            <!-- Hero Section -->
            <section class="relative h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-12">
                <div class="absolute inset-0 z-0">
                    <!-- Image suggesting Mediterranean/Tunisian luxury -->
                    <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=2000" alt="Tunisian Gold Jewelry" class="w-full h-full object-cover opacity-15">
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#FCFBF7]"></div>
                </div>
                <div class="relative z-10 text-center max-w-5xl fade-in-up">
                    <span class="text-xs uppercase tracking-[0.5em] mb-6 block text-[#C5A059] font-medium">Handcrafted in Tunisia • Since 1988</span>
                    <h1 class="text-6xl md:text-8xl font-light mb-8 leading-tight">
                        The soul of Tunis, <br><span class="italic serif">sculpted in gold.</span>
                    </h1>
                    <p class="text-lg max-w-2xl mx-auto mb-10 text-gray-600 font-light leading-relaxed">
                        Discover an ancestral legacy of artisanal brilliance, where the Mediterranean light meets the heritage of the Medina.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" id="cta-hero-shop" class="bg-[#1A1A1A] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all duration-300">The Collection</a>
                        <a href="#" id="cta-hero-story" class="border border-[#1A1A1A] px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">Heritage</a>
                    </div>
                </div>
                <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                    <iconify-icon icon="tabler:inner-shadow-top-right" class="text-2xl text-[#C5A059]"></iconify-icon>
                </div>
            </section>

            <!-- Our Story Section -->
            <section class="py-32 bg-white relative overflow-hidden">
                <div class="absolute left-0 top-0 w-64 h-full opacity-[0.03] pointer-events-none">
                    <iconify-icon icon="gis:layer-o-map-o" class="text-[400px] -ml-20"></iconify-icon>
                </div>
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div class="image-zoom-container aspect-[3/4] relative">
                            <img src="https://images.unsplash.com/photo-1621350289139-445699709d73?auto=format&fit=crop&q=80&w=1200" alt="Artisan working in Tunis Medina" class="w-full h-full object-cover">
                            <div class="absolute -bottom-10 -right-10 hidden lg:block">
                                <div class="bg-[#FCFBF7] p-8 border border-black/5 shadow-xl max-w-xs">
                                    <span class="text-3xl font-light serif text-[#C5A059]">1988</span>
                                    <p class="text-sm text-gray-500 mt-2 italic">The year our first atelier opened in the heart of the Tunis Medina.</p>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-8">
                            <span class="text-xs uppercase tracking-[0.3em] text-[#C5A059]">Medina & Modernity</span>
                            <h2 class="text-5xl font-light leading-tight italic">A Legacy of Carthage</h2>
                            <div class="space-y-6 text-gray-600 font-light leading-relaxed">
                                <p>Aurélia Carthage was born from the timeless echoes of the Mediterranean. Inspired by the legendary Queen Elyssa and the refined gold-smithing traditions of ancient Carthage, we bridge the gap between ancestral craftsmanship and contemporary elegance.</p>
                                <p>Every piece is meticulously handmade in our Tunis workshop, where master artisans use techniques passed down through generations. From delicate filigree to bold geometric statements, our jewelry is a love letter to the Tunisian spirit.</p>
                            </div>
                            <div class="pt-4">
                                <a href="#" id="story-read-more" class="group flex items-center space-x-4 text-xs uppercase tracking-[0.2em] font-medium">
                                    <span>Our Artisanal Process</span>
                                    <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-2 transition-transform"></iconify-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Collections Showcase -->
            <section class="py-32 bg-[#FCFBF7] relative">
                <!-- Decorative accent -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <iconify-icon icon="hugeicons:star-01" class="text-4xl text-[#C5A059] opacity-30"></iconify-icon>
                </div>
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div class="max-w-xl">
                            <span class="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4 block">Curated Series</span>
                            <h2 class="text-5xl font-light">The Heritage Collections</h2>
                        </div>
                        <a href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" id="collections-all-link" class="text-xs uppercase tracking-[0.2em] border-b border-black pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
                            View all series
                        </a>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <!-- Item 1 -->
                        <a href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" id="collection-item-1" class="group cursor-pointer block">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000" alt="Jasmine Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Jasmine of Carthage</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">18k Yellow Gold & Pure Pearl</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Discover the Scent</p>
                            </div>
                        </a>

                        <!-- Item 2 -->
                        <a href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" id="collection-item-2" class="group cursor-pointer block">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1611085583191-a3b130a88d4a?auto=format&fit=crop&q=80&w=1000" alt="Sahara Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Sahara Whispers</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">Textured Gold & Sandstone</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Explore the Sands</p>
                            </div>
                        </a>

                        <!-- Item 3 -->
                        <a href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" id="collection-item-3" class="group cursor-pointer block">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000" alt="Medina Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Medina Silhouettes</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">Arabesque Filigree Rings</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Enter the Labyrinth</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <!-- Why Choose Us / Craftsmanship -->
            <section class="py-32 bg-white border-y border-black/5">
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="text-center max-w-3xl mx-auto mb-20">
                        <h2 class="text-4xl font-light italic mb-6">Handcrafted Tunisian Excellence</h2>
                        <p class="text-gray-500 font-light">Every piece is a testament to the North African sun and the skilled hands of our local artisans.</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="solar:sun-2-linear" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Mediterranean Light</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">Our gold is finished with a unique satin texture that reflects the soft coastal light of Sidi Bou Said.</p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="ph:hand-eye-light" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Artisan Soul</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">Not a single machine is used in our assembly process. Every stone is set by hand in our Tunis atelier.</p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="icon-park-outline:traditional-chinese-medicine" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Cultural Continuity</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">We preserve traditional Tunisian jewelry forms while reinterpreting them for the modern world.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Newsletter Section -->
            <section class="py-32 bg-[#1A1A1A] text-white overflow-hidden relative">
                <div class="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <iconify-icon icon="hugeicons:diamond" class="text-[400px] text-[#C5A059]"></iconify-icon>
                </div>
                <div class="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <span class="text-xs uppercase tracking-[0.4em] text-[#C5A059] mb-6 block font-medium">Carthage Circle</span>
                    <h2 class="text-5xl font-light mb-8 serif">Join the Inner Circle</h2>
                    <p class="text-gray-400 font-light mb-12 text-lg">
                        Experience the heritage of Tunisia through our limited-run artisanal drops and stories from our workshops.
                    </p>
                    
                    <form class="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                        <input type="email" placeholder="Your email address" class="flex-grow bg-transparent border-b border-gray-700 py-4 px-2 focus:outline-none focus:border-[#C5A059] transition-colors text-white font-light">
                        <button type="submit" id="cta-subscribe-btn" class="bg-[#C5A059] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all duration-300">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

        </main>

        <!-- Footer -->
        <footer class="bg-white border-t border-black/5 pt-20 pb-10">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div class="col-span-1 md:col-span-1">
                        <div class="mb-6">
                            <a href="#" class="text-3xl tracking-[0.3em] font-light serif uppercase block">Aurélia</a>
                            <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1 block">Carthage</span>
                        </div>
                        <p class="text-sm text-gray-500 font-light leading-relaxed">
                            Authentic Tunisian jewelry crafted with passion since 1988. From the Medina to your heart.
                        </p>
                    </div>
                    
                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Artisan Care</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a" id="footer-shipping" class="hover:text-[#C5A059] transition-colors">International Delivery</a></li>
                            <li><a href="#" id="footer-warranty" class="hover:text-[#C5A059] transition-colors">Goldsmith Warranty</a></li>
                            <li><a href="#" id="footer-repairs" class="hover:text-[#C5A059] transition-colors">Atelier Repairs</a></li>
                            <li><a href="#" id="footer-sizing" class="hover:text-[#C5A059] transition-colors">Sizing Guide</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Our Heritage</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#" id="footer-about" class="hover:text-[#C5A059] transition-colors">The Tunisian Atelier</a></li>
                            <li><a href="#" id="footer-ethics" class="hover:text-[#C5A059] transition-colors">Ethical Sourcing</a></li>
                            <li><a href="#" id="footer-journal" class="hover:text-[#C5A059] transition-colors">Tunis Journal</a></li>
                            <li><a href="#" id="footer-stores" class="hover:text-[#C5A059] transition-colors">Tunis Boutique</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Connect</h5>
                        <div class="flex space-x-6">
                            <a href="#" id="footer-ig" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:instagram" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-fb" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:facebook" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-pin" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:pinterest" class="text-xl"></iconify-icon></a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-[10px] text-gray-400 uppercase tracking-widest">&copy; 2024 Aurélia Carthage. Made with love in Tunisia.</p>
                    <div class="flex space-x-8 mt-4 md:mt-0">
                        <a href="#" id="footer-privacy" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Privacy</a>
                        <a href="#" id="footer-terms" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                        entry.target.style.opacity = '1';
                    }
                });
            }, observerOptions);

            document.querySelectorAll('section > div').forEach(el => {
                el.style.opacity = '0';
                observer.observe(el);
            });
        });
    </script>
</body>
</html>
```

---
Please reference this design when implementing the component.

Product Collection:
# Design Reference

## Original Prompt
## Page to Generate: Product Collection

Display filtered jewelry items by collection with pricing, images, and add-to-cart options

## Flow Context
Tunisian jewelry e-commerce website

## Available Page Links for Navigation

Use these exact URLs for navigation links between pages in this flow:

- "AURÉLIA CARTHAGE | Tunisian Artisanal Excellence": https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db
- "Product Collection" (current page): https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c
- "Product Detail": https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8
- "Shopping Cart": https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3
- "Checkout": https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a
- "Order Confirmation": https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa

**Navigation Link Instructions:**
1. For <a> tags that navigate between pages in this flow, use the URLs above as href values
2. Mark the current page as "active" in navigation elements (add "active" class or similar styling)
3. The navigation should allow users to move between all pages in this flow
4. Keep all other links (external, social media, etc.) unchanged from the source

## Semantic Hash Placeholders for Future Links

For links to pages that are NOT listed above (pages not yet created or outside this flow), use semantic hash placeholders in kebab-case format:

**Common Placeholders:**
- Dashboard/Home: `#dashboard` or `#home`
- Settings: `#settings`
- Profile: `#profile` or `#user-profile`
- Notifications: `#notifications`
- Search: `#search`
- [Feature Name]: `#feature-name` (always use kebab-case)

**Examples:**
```html
<a href="#settings" id="nav-settings-link">Settings</a>
<a href="#user-profile" id="nav-profile-link">Profile</a>
<a href="#billing" id="nav-billing-link">Billing</a>
```

These semantic hashes make it easy to search and replace when target pages are created later. Always use descriptive, meaningful names that reflect the destination page's purpose.

## Prefetch Optimization

Add these prefetch links in <head> to improve navigation performance:
```html
<link rel="prefetch" href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa" as="document">
```
This allows the browser to pre-load linked pages during idle time, making navigation nearly instant.

## CRITICAL: View Transition API - SPA-LIKE SMOOTH TRANSITIONS

**MANDATORY**: All flow pages MUST implement View Transition API for silky smooth page-to-page transitions.

### Step 1: Identify Persistent Elements in Source Page

Scan the source page for elements that should remain **unchanged** across pages:
- Navigation components (top nav, bottom tabs, side menu, breadcrumbs)
- Brand elements (logo, app title)
- Global UI (toolbars, status bars, floating buttons, dock)
- User context (profile widget, notifications badge)
- Any element with existing `view-transition-name` declarations

**Key test**: "Would this element look identical on other pages?" → If yes, it's persistent.

### Step 2: Implementation

1. **Enable View Transitions**: Add meta tag in <head>:
   `<meta name="view-transition" content="same-origin">`

2. **CSS Setup** - Match source page's transition names:
   ```css
   /* Prevent white flash */
   html {
       background-color: #0a0a0a; /* Match page background */
   }
   @view-transition { navigation: auto; }
   ::view-transition { background-color: #0a0a0a; }

   /* For EACH persistent element found in source */
   /* Use the SAME view-transition-name as source page */
   ::view-transition-old([name]),
   ::view-transition-new([name]) {
       animation: none;
       mix-blend-mode: normal;
   }

   /* Dynamic content - animate */
   ::view-transition-old(main-content) {
       animation: 0.25s ease-out both fade-out;
   }
   ::view-transition-new(main-content) {
       animation: 0.25s ease-in 0.1s both fade-in;
   }

   @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
   @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

   ::view-transition-old(root),
   ::view-transition-new(root) {
       animation: none;
       mix-blend-mode: normal;
   }
   ```

3. **Apply view-transition-name**:
   - Copy ALL `view-transition-name` declarations from source page
   - Use the EXACT SAME names for corresponding elements
   - Always apply `main-content` to the primary dynamic area

### Examples

Source has nav + brand + content:
```html
<nav style="view-transition-name: main-nav"><!-- Copy exactly --></nav>
<div style="view-transition-name: brand"><!-- Copy exactly --></div>
<main style="view-transition-name: main-content"><!-- New content --></main>
```

Source has only content (no persistent UI):
```html
<main style="view-transition-name: main-content"><!-- All content --></main>
```

## CRITICAL: view-transition-name Alignment & Content Consistency

### Step 1: Identify Persistent vs Dynamic Elements

Analyze the source page and classify each major element:

**Persistent Elements** (should stay static during transitions):
- Elements that appear in the same position across multiple pages
- Elements whose content remains unchanged between pages
- Examples: navigation bars, brand logos, toolbars, status indicators, floating action buttons, breadcrumbs, user profile widgets, tab bars, dock menus

**Dynamic Elements** (should animate during transitions):
- Elements whose content changes based on the current page
- Page-specific content areas
- Examples: main content, page titles, article bodies, form content, data displays

**Key Question**: "Would this element's content be identical on the next page?"
- Yes → Persistent (apply view-transition-name, keep static)
- No → Dynamic (animate with crossfade)

### Step 2: Apply view-transition-name Based on Analysis

For each **persistent element** identified:
- Assign a semantic view-transition-name (e.g., `nav`, `brand`, `toolbar`, `user-widget`)
- Use descriptive names that reflect the element's purpose
- Add CSS rules to keep these elements static (no animation)

For the **primary dynamic area**:
- Apply `view-transition-name: main-content`
- This is typically the largest content area that changes between pages

**If NO persistent elements exist** (single-page designs, modals, focused UIs):
- Only apply `main-content` to the primary area
- Skip static element rules entirely

### Naming Requirements
- Match the EXACT names used in the source page if already defined
- Use the SAME declaration style (inline vs CSS class) as source
- Choose semantic, descriptive names for new transitions

### Content Consistency for Persistent Elements
**CRITICAL**: Elements sharing the same view-transition-name MUST have IDENTICAL content.

- Copy the HTML **exactly** from the source page
- Keep all text, icons, and structure identical
- Only **state indicators** (active tab, current page highlight) can differ

### Why This Matters
Identical content → Browser treats element as unchanged → Rock-solid, no morphing
Different content → Browser morphs between states → Visible flickering/distortion

**WHY**: Persistent elements stay rock-solid. Only dynamic content crossfades. No white flash, no morphing artifacts.

## CRITICAL: Persistent Element Content MUST Be Identical

### Step 1: Identify Persistent Elements in Source Page

Scan the source for elements that should remain **unchanged** across pages:

**Common persistent elements** (not exhaustive):
- Navigation (top nav, bottom tabs, side menu, breadcrumbs, pagination)
- Brand (logo, app title, tagline)
- Global UI (toolbar, status bar, floating action button, dock, minimap)
- User context (profile widget, avatar, notifications, settings toggle)
- Decorative (background patterns, ambient animations)

**Key test**: "Would this element's content be identical on the next page?"
- Yes → Persistent element (must be copied exactly)
- No → Dynamic element (can change)

**Some pages have NO persistent elements** - that's perfectly valid for:
- Landing pages, single-purpose views, modals, focused task UIs

### Step 2: Rules for Persistent Elements

For EVERY persistent element identified:
- Copy the HTML **exactly** from the source page
- Keep all text, icons, structure identical
- Only **state indicators** can differ (active tab, current page highlight)

### Step 3: Page-Specific Content Placement

All page-specific content belongs in the **dynamic area** (main-content):

```html
<main style="view-transition-name: main-content">
    <!-- Page title, back button if needed -->
    <div class="page-header">
        <a href="./home.html">Back</a>
        <h1>Page Title</h1>
    </div>
    <!-- Page-specific content -->
</main>
```

### Why Content Must Be Identical

**Identical content** → Browser treats as unchanged → Rock-solid, no animation
**Different content** → Browser morphs between states → Visible flickering

This is the fundamental principle of View Transitions: persistent elements stay put, only dynamic content animates.

## CRITICAL: Analyze Source Page First

### Step 1: Identify Persistent vs Dynamic Elements

Scan the source page and classify each major element:

**Persistent** (unchanged across pages):
- Elements with `view-transition-name` that disable animation
- Navigation, brand, toolbars, user widgets, status indicators, etc.
- Any element whose content would be identical on other pages

**Dynamic** (changes per page):
- Main content area
- Page-specific data, titles, forms

### Step 2: Preserve Persistent Elements Exactly

For EVERY persistent element found in source:
- Copy the EXACT same HTML structure
- Keep all text, icons, structure identical
- Only state indicators can differ (active tab, current highlight)

**WHY**: These pages belong to the SAME application flow. Inconsistent persistent elements break user experience and cause View Transition morphing artifacts.

## Visual Consistency Requirements
- Use the EXACT same color palette, typography, and spacing
- Follow the same component styling patterns
- Maintain the same responsive behavior and layout grid
- ONLY the dynamic area (main-content) should change

## CRITICAL: view-transition-name Alignment & Content Consistency

### Step 1: Identify Persistent vs Dynamic Elements

Analyze the source page and classify each major element:

**Persistent Elements** (should stay static during transitions):
- Elements that appear in the same position across multiple pages
- Elements whose content remains unchanged between pages
- Examples: navigation bars, brand logos, toolbars, status indicators, floating action buttons, breadcrumbs, user profile widgets, tab bars, dock menus

**Dynamic Elements** (should animate during transitions):
- Elements whose content changes based on the current page
- Page-specific content areas
- Examples: main content, page titles, article bodies, form content, data displays

**Key Question**: "Would this element's content be identical on the next page?"
- Yes → Persistent (apply view-transition-name, keep static)
- No → Dynamic (animate with crossfade)

### Step 2: Apply view-transition-name Based on Analysis

For each **persistent element** identified:
- Assign a semantic view-transition-name (e.g., `nav`, `brand`, `toolbar`, `user-widget`)
- Use descriptive names that reflect the element's purpose
- Add CSS rules to keep these elements static (no animation)

For the **primary dynamic area**:
- Apply `view-transition-name: main-content`
- This is typically the largest content area that changes between pages

**If NO persistent elements exist** (single-page designs, modals, focused UIs):
- Only apply `main-content` to the primary area
- Skip static element rules entirely

### Naming Requirements
- Match the EXACT names used in the source page if already defined
- Use the SAME declaration style (inline vs CSS class) as source
- Choose semantic, descriptive names for new transitions

### Content Consistency for Persistent Elements
**CRITICAL**: Elements sharing the same view-transition-name MUST have IDENTICAL content.

- Copy the HTML **exactly** from the source page
- Keep all text, icons, and structure identical
- Only **state indicators** (active tab, current page highlight) can differ

### Why This Matters
Identical content → Browser treats element as unchanged → Rock-solid, no morphing
Different content → Browser morphs between states → Visible flickering/distortion

## What You CAN Change
- Main content area (primary dynamic section)
- Page-specific components within content area
- Content text and data
- Active state indicators on persistent elements

## What You CANNOT Change
- ANY element marked with `view-transition-name` (except main-content)
- Structure, text, icons of persistent elements
- Global CSS variables and theme colors
- View transition naming conventions from source

### Source Page HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AURÉLIA CARTHAGE | Tunisian Artisanal Excellence</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <meta name="view-transition" content="same-origin">
    <style>
        :root {
            --ivory: #FCFBF7;
            --gold: #C5A059;
            --black: #1A1A1A;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--ivory);
            color: var(--black);
            overflow-x: hidden;
        }
        h1, h2, h3, .serif {
            font-family: 'Cormorant Garamond', serif;
        }
        .tunisian-pattern-subtle {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5a059' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .gold-border {
            border-color: rgba(197, 160, 89, 0.3);
        }
        .fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .reveal-delay-1 { animation-delay: 0.2s; }
        .reveal-delay-2 { animation-delay: 0.4s; }
        .reveal-delay-3 { animation-delay: 0.6s; }
        
        ::view-transition-old(main-content) {
            animation: 0.3s ease-out both fade-out;
        }
        ::view-transition-new(main-content) {
            animation: 0.3s ease-in 0.1s both fade-in;
        }
        @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

        .hover-lift {
            transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hover-lift:hover {
            transform: translateY(-8px);
        }
        .image-zoom-container {
            overflow: hidden;
        }
        .image-zoom-container img {
            transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .image-zoom-container:hover img {
            transform: scale(1.05);
        }
        .arabesque-accent {
            position: relative;
        }
        .arabesque-accent::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 2px;
            background: var(--gold);
            opacity: 0.5;
        }
    </style>
</head>
<body>
    <div class="min-h-screen flex flex-col tunisian-pattern-subtle">
        <!-- Header Navigation -->
        <header class="fixed top-0 left-0 w-full z-50 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-black/5" style="view-transition-name: main-nav">
            <nav class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <div class="flex items-center space-x-8">
                    <a href="#" id="nav-shop-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Shop</a>
                    <a href="#" id="nav-collections-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Collections</a>
                </div>
                
                <div class="flex flex-col items-center">
                    <a href="#" id="nav-brand-logo" class="text-3xl tracking-[0.3em] font-light serif uppercase">Aurélia</a>
                    <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1">Carthage</span>
                </div>
                
                <div class="flex items-center space-x-6">
                    <a href="#" id="nav-search-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:search" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#" id="nav-account-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:user" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#" id="nav-cart-link" class="hover:text-[#C5A059] transition-colors relative">
                        <iconify-icon icon="lucide:shopping-bag" class="text-lg"></iconify-icon>
                        <span class="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">0</span>
                    </a>
                </div>
            </nav>
        </header>

        <main style="view-transition-name: main-content" class="flex-grow pt-20">
            
            <!-- Hero Section -->
            <section class="relative h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-12">
                <div class="absolute inset-0 z-0">
                    <!-- Image suggesting Mediterranean/Tunisian luxury -->
                    <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=2000" alt="Tunisian Gold Jewelry" class="w-full h-full object-cover opacity-15">
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#FCFBF7]"></div>
                </div>
                <div class="relative z-10 text-center max-w-5xl fade-in-up">
                    <span class="text-xs uppercase tracking-[0.5em] mb-6 block text-[#C5A059] font-medium">Handcrafted in Tunisia • Since 1988</span>
                    <h1 class="text-6xl md:text-8xl font-light mb-8 leading-tight">
                        The soul of Tunis, <br><span class="italic serif">sculpted in gold.</span>
                    </h1>
                    <p class="text-lg max-w-2xl mx-auto mb-10 text-gray-600 font-light leading-relaxed">
                        Discover an ancestral legacy of artisanal brilliance, where the Mediterranean light meets the heritage of the Medina.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#" id="cta-hero-shop" class="bg-[#1A1A1A] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all duration-300">The Collection</a>
                        <a href="#" id="cta-hero-story" class="border border-[#1A1A1A] px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">Heritage</a>
                    </div>
                </div>
                <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                    <iconify-icon icon="tabler:inner-shadow-top-right" class="text-2xl text-[#C5A059]"></iconify-icon>
                </div>
            </section>

            <!-- Our Story Section -->
            <section class="py-32 bg-white relative overflow-hidden">
                <div class="absolute left-0 top-0 w-64 h-full opacity-[0.03] pointer-events-none">
                    <iconify-icon icon="gis:layer-o-map-o" class="text-[400px] -ml-20"></iconify-icon>
                </div>
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div class="image-zoom-container aspect-[3/4] relative">
                            <img src="https://images.unsplash.com/photo-1621350289139-445699709d73?auto=format&fit=crop&q=80&w=1200" alt="Artisan working in Tunis Medina" class="w-full h-full object-cover">
                            <div class="absolute -bottom-10 -right-10 hidden lg:block">
                                <div class="bg-[#FCFBF7] p-8 border border-black/5 shadow-xl max-w-xs">
                                    <span class="text-3xl font-light serif text-[#C5A059]">1988</span>
                                    <p class="text-sm text-gray-500 mt-2 italic">The year our first atelier opened in the heart of the Tunis Medina.</p>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-8">
                            <span class="text-xs uppercase tracking-[0.3em] text-[#C5A059]">Medina & Modernity</span>
                            <h2 class="text-5xl font-light leading-tight italic">A Legacy of Carthage</h2>
                            <div class="space-y-6 text-gray-600 font-light leading-relaxed">
                                <p>Aurélia Carthage was born from the timeless echoes of the Mediterranean. Inspired by the legendary Queen Elyssa and the refined gold-smithing traditions of ancient Carthage, we bridge the gap between ancestral craftsmanship and contemporary elegance.</p>
                                <p>Every piece is meticulously handmade in our Tunis workshop, where master artisans use techniques passed down through generations. From delicate filigree to bold geometric statements, our jewelry is a love letter to the Tunisian spirit.</p>
                            </div>
                            <div class="pt-4">
                                <a href="#" id="story-read-more" class="group flex items-center space-x-4 text-xs uppercase tracking-[0.2em] font-medium">
                                    <span>Our Artisanal Process</span>
                                    <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-2 transition-transform"></iconify-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Collections Showcase -->
            <section class="py-32 bg-[#FCFBF7] relative">
                <!-- Decorative accent -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <iconify-icon icon="hugeicons:star-01" class="text-4xl text-[#C5A059] opacity-30"></iconify-icon>
                </div>
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div class="max-w-xl">
                            <span class="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4 block">Curated Series</span>
                            <h2 class="text-5xl font-light">The Heritage Collections</h2>
                        </div>
                        <a href="#" id="collections-all-link" class="text-xs uppercase tracking-[0.2em] border-b border-black pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
                            View all series
                        </a>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <!-- Item 1 -->
                        <div class="group cursor-pointer">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000" alt="Jasmine Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Jasmine of Carthage</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">18k Yellow Gold & Pure Pearl</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Discover the Scent</p>
                            </div>
                        </div>

                        <!-- Item 2 -->
                        <div class="group cursor-pointer">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1611085583191-a3b130a88d4a?auto=format&fit=crop&q=80&w=1000" alt="Sahara Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Sahara Whispers</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">Textured Gold & Sandstone</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Explore the Sands</p>
                            </div>
                        </div>

                        <!-- Item 3 -->
                        <div class="group cursor-pointer">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000" alt="Medina Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Medina Silhouettes</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">Arabesque Filigree Rings</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Enter the Labyrinth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Why Choose Us / Craftsmanship -->
            <section class="py-32 bg-white border-y border-black/5">
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="text-center max-w-3xl mx-auto mb-20">
                        <h2 class="text-4xl font-light italic mb-6">Handcrafted Tunisian Excellence</h2>
                        <p class="text-gray-500 font-light">Every piece is a testament to the North African sun and the skilled hands of our local artisans.</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="solar:sun-2-linear" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Mediterranean Light</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">Our gold is finished with a unique satin texture that reflects the soft coastal light of Sidi Bou Said.</p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="ph:hand-eye-light" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Artisan Soul</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">Not a single machine is used in our assembly process. Every stone is set by hand in our Tunis atelier.</p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="icon-park-outline:traditional-chinese-medicine" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Cultural Continuity</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">We preserve traditional Tunisian jewelry forms while reinterpreting them for the modern world.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Newsletter Section -->
            <section class="py-32 bg-[#1A1A1A] text-white overflow-hidden relative">
                <div class="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <iconify-icon icon="hugeicons:diamond" class="text-[400px] text-[#C5A059]"></iconify-icon>
                </div>
                <div class="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <span class="text-xs uppercase tracking-[0.4em] text-[#C5A059] mb-6 block font-medium">Carthage Circle</span>
                    <h2 class="text-5xl font-light mb-8 serif">Join the Inner Circle</h2>
                    <p class="text-gray-400 font-light mb-12 text-lg">
                        Experience the heritage of Tunisia through our limited-run artisanal drops and stories from our workshops.
                    </p>
                    
                    <form class="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                        <input type="email" placeholder="Your email address" class="flex-grow bg-transparent border-b border-gray-700 py-4 px-2 focus:outline-none focus:border-[#C5A059] transition-colors text-white font-light">
                        <button type="submit" id="cta-subscribe-btn" class="bg-[#C5A059] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all duration-300">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

        </main>

        <!-- Footer -->
        <footer class="bg-white border-t border-black/5 pt-20 pb-10">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div class="col-span-1 md:col-span-1">
                        <div class="mb-6">
                            <a href="#" class="text-3xl tracking-[0.3em] font-light serif uppercase block">Aurélia</a>
                            <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1 block">Carthage</span>
                        </div>
                        <p class="text-sm text-gray-500 font-light leading-relaxed">
                            Authentic Tunisian jewelry crafted with passion since 1988. From the Medina to your heart.
                        </p>
                    </div>
                    
                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Artisan Care</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#" id="footer-shipping" class="hover:text-[#C5A059] transition-colors">International Delivery</a></li>
                            <li><a href="#" id="footer-warranty" class="hover:text-[#C5A059] transition-colors">Goldsmith Warranty</a></li>
                            <li><a href="#" id="footer-repairs" class="hover:text-[#C5A059] transition-colors">Atelier Repairs</a></li>
                            <li><a href="#" id="footer-sizing" class="hover:text-[#C5A059] transition-colors">Sizing Guide</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Our Heritage</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#" id="footer-about" class="hover:text-[#C5A059] transition-colors">The Tunisian Atelier</a></li>
                            <li><a href="#" id="footer-ethics" class="hover:text-[#C5A059] transition-colors">Ethical Sourcing</a></li>
                            <li><a href="#" id="footer-journal" class="hover:text-[#C5A059] transition-colors">Tunis Journal</a></li>
                            <li><a href="#" id="footer-stores" class="hover:text-[#C5A059] transition-colors">Tunis Boutique</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Connect</h5>
                        <div class="flex space-x-6">
                            <a href="#" id="footer-ig" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:instagram" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-fb" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:facebook" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-pin" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:pinterest" class="text-xl"></iconify-icon></a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-[10px] text-gray-400 uppercase tracking-widest">&copy; 2024 Aurélia Carthage. Made with love in Tunisia.</p>
                    <div class="flex space-x-8 mt-4 md:mt-0">
                        <a href="#" id="footer-privacy" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Privacy</a>
                        <a href="#" id="footer-terms" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                        entry.target.style.opacity = '1';
                    }
                });
            }, observerOptions);

            document.querySelectorAll('section > div').forEach(el => {
                el.style.opacity = '0';
                observer.observe(el);
            });
        });
    </script>
</body>
</html>
```

Generate the HTML for "Product Collection".
- Preserve ALL persistent elements from source EXACTLY
- Only modify the dynamic content area (main-content)
- If source has NO persistent elements, focus on main-content transition only

## HTML Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AURÉLIA CARTHAGE | The Collections</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <meta name="view-transition" content="same-origin">
    
    <!-- Prefetch Links -->
    <link rel="prefetch" href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa" as="document">

    <style>
        :root {
            --ivory: #FCFBF7;
            --gold: #C5A059;
            --black: #1A1A1A;
        }
        html {
            background-color: var(--ivory);
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--ivory);
            color: var(--black);
            overflow-x: hidden;
        }
        h1, h2, h3, .serif {
            font-family: 'Cormorant Garamond', serif;
        }
        .tunisian-pattern-subtle {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5a059' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        @view-transition { navigation: auto; }
        
        /* Persistent Nav - No Animation */
        ::view-transition-old(main-nav),
        ::view-transition-new(main-nav) {
            animation: none;
            mix-blend-mode: normal;
        }

        /* Dynamic Content - Animate */
        ::view-transition-old(main-content) {
            animation: 0.3s ease-out both fade-out;
        }
        ::view-transition-new(main-content) {
            animation: 0.3s ease-in 0.1s both fade-in;
        }
        @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

        .image-zoom-container {
            overflow: hidden;
        }
        .image-zoom-container img {
            transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .image-zoom-container:hover img {
            transform: scale(1.05);
        }
        .product-card-overlay {
            opacity: 0;
            transition: opacity 0.4s ease;
        }
        .group:hover .product-card-overlay {
            opacity: 1;
        }
    </style>
</head>
<body>
    <div class="min-h-screen flex flex-col tunisian-pattern-subtle">
        <!-- Header Navigation - PERSISTENT -->
        <header class="fixed top-0 left-0 w-full z-50 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-black/5" style="view-transition-name: main-nav">
            <nav class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <div class="flex items-center space-x-8">
                    <a href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" id="nav-shop-link" class="text-xs uppercase tracking-[0.2em] font-medium text-[#C5A059] border-b border-[#C5A059]">Shop</a>
                    <a href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" id="nav-collections-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Collections</a>
                </div>
                
                <div class="flex flex-col items-center">
                    <a href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" id="nav-brand-logo" class="text-3xl tracking-[0.3em] font-light serif uppercase">Aurélia</a>
                    <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1">Carthage</span>
                </div>
                
                <div class="flex items-center space-x-6">
                    <a href="#search" id="nav-search-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:search" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#account" id="nav-account-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:user" class="text-lg"></iconify-icon>
                    </a>
                    <a href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" id="nav-cart-link" class="hover:text-[#C5A059] transition-colors relative">
                        <iconify-icon icon="lucide:shopping-bag" class="text-lg"></iconify-icon>
                        <span class="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">0</span>
                    </a>
                </div>
            </nav>
        </header>

        <!-- Main Content - DYNAMIC -->
        <main style="view-transition-name: main-content" class="flex-grow pt-32">
            
            <!-- Collection Header -->
            <section class="px-6 lg:px-12 mb-20">
                <div class="max-w-7xl mx-auto">
                    <nav class="mb-8 flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                        <a href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" id="breadcrumb-home" class="hover:text-black transition-colors">Home</a>
                        <iconify-icon icon="lucide:chevron-right"></iconify-icon>
                        <span class="text-black">The Collections</span>
                    </nav>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <div>
                            <h1 class="text-6xl font-light mb-6 italic">The Heritage Series</h1>
                            <p class="text-lg text-gray-500 font-light leading-relaxed max-w-xl">
                                Crafted with 18k gold and precious gems, our heritage collections draw inspiration from the ancient gates of Tunis and the sun-drenched coastlines of Carthage.
                            </p>
                        </div>
                        <div class="flex flex-wrap lg:justify-end gap-x-8 gap-y-4">
                            <button class="text-xs uppercase tracking-[0.2em] font-medium border-b border-black pb-1">All pieces</button>
                            <button class="text-xs uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-black transition-colors">Necklaces</button>
                            <button class="text-xs uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-black transition-colors">Rings</button>
                            <button class="text-xs uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-black transition-colors">Earrings</button>
                            <button class="text-xs uppercase tracking-[0.2em] font-medium text-gray-400 hover:text-black transition-colors">Bracelets</button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Product Grid -->
            <section class="px-6 lg:px-12 mb-32">
                <div class="max-w-7xl mx-auto">
                    <!-- Toolbar -->
                    <div class="flex justify-between items-center border-b border-black/5 pb-6 mb-12">
                        <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400">12 Masterpieces</span>
                        <div class="flex items-center space-x-4">
                            <button class="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">
                                <span>Sort By</span>
                                <iconify-icon icon="lucide:chevron-down"></iconify-icon>
                            </button>
                            <button class="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">
                                <iconify-icon icon="lucide:sliders-horizontal" class="text-sm"></iconify-icon>
                                <span>Filters</span>
                            </button>
                        </div>
                    </div>

                    <!-- Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                        
                        <!-- Product 1 -->
                        <div class="group">
                            <a href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" id="product-1-link" class="block relative">
                                <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                    <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000" alt="Jasmine Earring" class="w-full h-full object-cover">
                                    <div class="product-card-overlay absolute inset-0 bg-[#FCFBF7]/20 backdrop-blur-[2px] flex items-center justify-center p-6">
                                        <button class="w-full bg-[#1A1A1A] text-white py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all duration-300 shadow-xl">
                                            Quick Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </a>
                            <div class="text-center">
                                <span class="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] block mb-2">Jasmine Series</span>
                                <h3 class="text-2xl font-light serif mb-2">Queen Elyssa Drop Earrings</h3>
                                <p class="text-sm text-gray-500 font-light mb-4">18k Textured Gold & Keshi Pearl</p>
                                <p class="text-lg font-light tracking-wide">$1,250</p>
                            </div>
                        </div>

                        <!-- Product 2 -->
                        <div class="group">
                            <a href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" id="product-2-link" class="block relative">
                                <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                    <img src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1000" alt="Sahara Ring" class="w-full h-full object-cover">
                                    <div class="product-card-overlay absolute inset-0 bg-[#FCFBF7]/20 backdrop-blur-[2px] flex items-center justify-center p-6">
                                        <button class="w-full bg-[#1A1A1A] text-white py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all duration-300 shadow-xl">
                                            Quick Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </a>
                            <div class="text-center">
                                <span class="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] block mb-2">Sahara Whispers</span>
                                <h3 class="text-2xl font-light serif mb-2">Dune Filigree Band</h3>
                                <p class="text-sm text-gray-500 font-light mb-4">Hand-etched 22k Gold Overlay</p>
                                <p class="text-lg font-light tracking-wide">$890</p>
                            </div>
                        </div>

                        <!-- Product 3 -->
                        <div class="group">
                            <a href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" id="product-3-link" class="block relative">
                                <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                    <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000" alt="Medina Necklace" class="w-full h-full object-cover">
                                    <div class="product-card-overlay absolute inset-0 bg-[#FCFBF7]/20 backdrop-blur-[2px] flex items-center justify-center p-6">
                                        <button class="w-full bg-[#1A1A1A] text-white py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all duration-300 shadow-xl">
                                            Quick Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </a>
                            <div class="text-center">
                                <span class="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] block mb-2">Medina Silhouettes</span>
                                <h3 class="text-2xl font-light serif mb-2">Carthage Moon Amulet</h3>
                                <p class="text-sm text-gray-500 font-light mb-4">18k Gold with Lapis Lazuli</p>
                                <p class="text-lg font-light tracking-wide">$2,100</p>
                            </div>
                        </div>

                        <!-- Product 4 -->
                        <div class="group">
                            <a href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" id="product-4-link" class="block relative">
                                <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                    <img src="https://images.unsplash.com/photo-1611085583191-a3b130a88d4a?auto=format&fit=crop&q=80&w=1000" alt="Bracelet" class="w-full h-full object-cover">
                                    <div class="product-card-overlay absolute inset-0 bg-[#FCFBF7]/20 backdrop-blur-[2px] flex items-center justify-center p-6">
                                        <button class="w-full bg-[#1A1A1A] text-white py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all duration-300 shadow-xl">
                                            Quick Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </a>
                            <div class="text-center">
                                <span class="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] block mb-2">The Archways</span>
                                <h3 class="text-2xl font-light serif mb-2">Sidi Bou Said Bangle</h3>
                                <p class="text-sm text-gray-500 font-light mb-4">Enamel Blue & Gold Filigree</p>
                                <p class="text-lg font-light tracking-wide">$1,450</p>
                            </div>
                        </div>

                        <!-- Product 5 -->
                        <div class="group">
                            <a href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" id="product-5-link" class="block relative">
                                <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                    <img src="https://images.unsplash.com/photo-1621350289139-445699709d73?auto=format&fit=crop&q=80&w=1000" alt="Artisan Ring" class="w-full h-full object-cover">
                                    <div class="product-card-overlay absolute inset-0 bg-[#FCFBF7]/20 backdrop-blur-[2px] flex items-center justify-center p-6">
                                        <button class="w-full bg-[#1A1A1A] text-white py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all duration-300 shadow-xl">
                                            Quick Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </a>
                            <div class="text-center">
                                <span class="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] block mb-2">Medina Silhouettes</span>
                                <h3 class="text-2xl font-light serif mb-2">Atlas Peak Solitaire</h3>
                                <p class="text-sm text-gray-500 font-light mb-4">Rose Gold with Raw Emerald</p>
                                <p class="text-lg font-light tracking-wide">$3,400</p>
                            </div>
                        </div>

                        <!-- Product 6 -->
                        <div class="group">
                            <a href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" id="product-6-link" class="block relative">
                                <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                    <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=1000" alt="Earrings" class="w-full h-full object-cover">
                                    <div class="product-card-overlay absolute inset-0 bg-[#FCFBF7]/20 backdrop-blur-[2px] flex items-center justify-center p-6">
                                        <button class="w-full bg-[#1A1A1A] text-white py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all duration-300 shadow-xl">
                                            Quick Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </a>
                            <div class="text-center">
                                <span class="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] block mb-2">The Berber Spirit</span>
                                <h3 class="text-2xl font-light serif mb-2">Nomadic Sun Hoops</h3>
                                <p class="text-sm text-gray-500 font-light mb-4">18k Yellow Gold, Hand-Hammered</p>
                                <p class="text-lg font-light tracking-wide">$1,100</p>
                            </div>
                        </div>

                    </div>

                    <!-- Pagination -->
                    <div class="mt-24 flex items-center justify-center space-x-12">
                        <button class="text-[10px] uppercase tracking-[0.3em] text-gray-400 cursor-not-allowed">Previous</button>
                        <div class="flex space-x-6">
                            <span class="text-[10px] uppercase tracking-[0.3em] font-medium border-b border-black">01</span>
                            <span class="text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-colors cursor-pointer">02</span>
                        </div>
                        <button class="text-[10px] uppercase tracking-[0.3em] hover:text-[#C5A059] transition-colors">Next</button>
                    </div>
                </div>
            </section>

        </main>

        <!-- Footer - PERSISTENT -->
        <footer class="bg-white border-t border-black/5 pt-20 pb-10">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div class="col-span-1 md:col-span-1">
                        <div class="mb-6">
                            <a href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" class="text-3xl tracking-[0.3em] font-light serif uppercase block">Aurélia</a>
                            <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1 block">Carthage</span>
                        </div>
                        <p class="text-sm text-gray-500 font-light leading-relaxed">
                            Authentic Tunisian jewelry crafted with passion since 1988. From the Medina to your heart.
                        </p>
                    </div>
                    
                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Artisan Care</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#shipping" id="footer-shipping" class="hover:text-[#C5A059] transition-colors">International Delivery</a></li>
                            <li><a href="#warranty" id="footer-warranty" class="hover:text-[#C5A059] transition-colors">Goldsmith Warranty</a></li>
                            <li><a href="#repairs" id="footer-repairs" class="hover:text-[#C5A059] transition-colors">Atelier Repairs</a></li>
                            <li><a href="#sizing" id="footer-sizing" class="hover:text-[#C5A059] transition-colors">Sizing Guide</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Our Heritage</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#heritage-site" id="footer-about" class="hover:text-[#C5A059] transition-colors">The Tunisian Atelier</a></li>
                            <li><a href="#ethics" id="footer-ethics" class="hover:text-[#C5A059] transition-colors">Ethical Sourcing</a></li>
                            <li><a href="#journal" id="footer-journal" class="hover:text-[#C5A059] transition-colors">Tunis Journal</a></li>
                            <li><a href="#stores" id="footer-stores" class="hover:text-[#C5A059] transition-colors">Tunis Boutique</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Connect</h5>
                        <div class="flex space-x-6">
                            <a href="#instagram" id="footer-ig" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:instagram" class="text-xl"></iconify-icon></a>
                            <a href="#facebook" id="footer-fb" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:facebook" class="text-xl"></iconify-icon></a>
                            <a href="#pinterest" id="footer-pin" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:pinterest" class="text-xl"></iconify-icon></a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-[10px] text-gray-400 uppercase tracking-widest">&copy; 2024 Aurélia Carthage. Made with love in Tunisia.</p>
                    <div class="flex space-x-8 mt-4 md:mt-0">
                        <a href="#privacy" id="footer-privacy" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Privacy</a>
                        <a href="#terms" id="footer-terms" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>
```

---
Please reference this design when implementing the component.

Product Detail:
# Design Reference

## Original Prompt
## Page to Generate: Product Detail

Show individual jewelry piece with high-res images, materials, dimensions, care instructions, and quantity selector

## Flow Context
Tunisian jewelry e-commerce website

## Available Page Links for Navigation

Use these exact URLs for navigation links between pages in this flow:

- "AURÉLIA CARTHAGE | Tunisian Artisanal Excellence": https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db
- "Product Collection": https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c
- "Product Detail" (current page): https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8
- "Shopping Cart": https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3
- "Checkout": https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a
- "Order Confirmation": https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa

**Navigation Link Instructions:**
1. For <a> tags that navigate between pages in this flow, use the URLs above as href values
2. Mark the current page as "active" in navigation elements (add "active" class or similar styling)
3. The navigation should allow users to move between all pages in this flow
4. Keep all other links (external, social media, etc.) unchanged from the source

## Semantic Hash Placeholders for Future Links

For links to pages that are NOT listed above (pages not yet created or outside this flow), use semantic hash placeholders in kebab-case format:

**Common Placeholders:**
- Dashboard/Home: `#dashboard` or `#home`
- Settings: `#settings`
- Profile: `#profile` or `#user-profile`
- Notifications: `#notifications`
- Search: `#search`
- [Feature Name]: `#feature-name` (always use kebab-case)

**Examples:**
```html
<a href="#settings" id="nav-settings-link">Settings</a>
<a href="#user-profile" id="nav-profile-link">Profile</a>
<a href="#billing" id="nav-billing-link">Billing</a>
```

These semantic hashes make it easy to search and replace when target pages are created later. Always use descriptive, meaningful names that reflect the destination page's purpose.

## Prefetch Optimization

Add these prefetch links in <head> to improve navigation performance:
```html
<link rel="prefetch" href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa" as="document">
```
This allows the browser to pre-load linked pages during idle time, making navigation nearly instant.

## CRITICAL: View Transition API - SPA-LIKE SMOOTH TRANSITIONS

**MANDATORY**: All flow pages MUST implement View Transition API for silky smooth page-to-page transitions.

### Step 1: Identify Persistent Elements in Source Page

Scan the source page for elements that should remain **unchanged** across pages:
- Navigation components (top nav, bottom tabs, side menu, breadcrumbs)
- Brand elements (logo, app title)
- Global UI (toolbars, status bars, floating buttons, dock)
- User context (profile widget, notifications badge)
- Any element with existing `view-transition-name` declarations

**Key test**: "Would this element look identical on other pages?" → If yes, it's persistent.

### Step 2: Implementation

1. **Enable View Transitions**: Add meta tag in <head>:
   `<meta name="view-transition" content="same-origin">`

2. **CSS Setup** - Match source page's transition names:
   ```css
   /* Prevent white flash */
   html {
       background-color: #0a0a0a; /* Match page background */
   }
   @view-transition { navigation: auto; }
   ::view-transition { background-color: #0a0a0a; }

   /* For EACH persistent element found in source */
   /* Use the SAME view-transition-name as source page */
   ::view-transition-old([name]),
   ::view-transition-new([name]) {
       animation: none;
       mix-blend-mode: normal;
   }

   /* Dynamic content - animate */
   ::view-transition-old(main-content) {
       animation: 0.25s ease-out both fade-out;
   }
   ::view-transition-new(main-content) {
       animation: 0.25s ease-in 0.1s both fade-in;
   }

   @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
   @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

   ::view-transition-old(root),
   ::view-transition-new(root) {
       animation: none;
       mix-blend-mode: normal;
   }
   ```

3. **Apply view-transition-name**:
   - Copy ALL `view-transition-name` declarations from source page
   - Use the EXACT SAME names for corresponding elements
   - Always apply `main-content` to the primary dynamic area

### Examples

Source has nav + brand + content:
```html
<nav style="view-transition-name: main-nav"><!-- Copy exactly --></nav>
<div style="view-transition-name: brand"><!-- Copy exactly --></div>
<main style="view-transition-name: main-content"><!-- New content --></main>
```

Source has only content (no persistent UI):
```html
<main style="view-transition-name: main-content"><!-- All content --></main>
```

## CRITICAL: view-transition-name Alignment & Content Consistency

### Step 1: Identify Persistent vs Dynamic Elements

Analyze the source page and classify each major element:

**Persistent Elements** (should stay static during transitions):
- Elements that appear in the same position across multiple pages
- Elements whose content remains unchanged between pages
- Examples: navigation bars, brand logos, toolbars, status indicators, floating action buttons, breadcrumbs, user profile widgets, tab bars, dock menus

**Dynamic Elements** (should animate during transitions):
- Elements whose content changes based on the current page
- Page-specific content areas
- Examples: main content, page titles, article bodies, form content, data displays

**Key Question**: "Would this element's content be identical on the next page?"
- Yes → Persistent (apply view-transition-name, keep static)
- No → Dynamic (animate with crossfade)

### Step 2: Apply view-transition-name Based on Analysis

For each **persistent element** identified:
- Assign a semantic view-transition-name (e.g., `nav`, `brand`, `toolbar`, `user-widget`)
- Use descriptive names that reflect the element's purpose
- Add CSS rules to keep these elements static (no animation)

For the **primary dynamic area**:
- Apply `view-transition-name: main-content`
- This is typically the largest content area that changes between pages

**If NO persistent elements exist** (single-page designs, modals, focused UIs):
- Only apply `main-content` to the primary area
- Skip static element rules entirely

### Naming Requirements
- Match the EXACT names used in the source page if already defined
- Use the SAME declaration style (inline vs CSS class) as source
- Choose semantic, descriptive names for new transitions

### Content Consistency for Persistent Elements
**CRITICAL**: Elements sharing the same view-transition-name MUST have IDENTICAL content.

- Copy the HTML **exactly** from the source page
- Keep all text, icons, and structure identical
- Only **state indicators** (active tab, current page highlight) can differ

### Why This Matters
Identical content → Browser treats element as unchanged → Rock-solid, no morphing
Different content → Browser morphs between states → Visible flickering/distortion

**WHY**: Persistent elements stay rock-solid. Only dynamic content crossfades. No white flash, no morphing artifacts.

## CRITICAL: Persistent Element Content MUST Be Identical

### Step 1: Identify Persistent Elements in Source Page

Scan the source for elements that should remain **unchanged** across pages:

**Common persistent elements** (not exhaustive):
- Navigation (top nav, bottom tabs, side menu, breadcrumbs, pagination)
- Brand (logo, app title, tagline)
- Global UI (toolbar, status bar, floating action button, dock, minimap)
- User context (profile widget, avatar, notifications, settings toggle)
- Decorative (background patterns, ambient animations)

**Key test**: "Would this element's content be identical on the next page?"
- Yes → Persistent element (must be copied exactly)
- No → Dynamic element (can change)

**Some pages have NO persistent elements** - that's perfectly valid for:
- Landing pages, single-purpose views, modals, focused task UIs

### Step 2: Rules for Persistent Elements

For EVERY persistent element identified:
- Copy the HTML **exactly** from the source page
- Keep all text, icons, structure identical
- Only **state indicators** can differ (active tab, current page highlight)

### Step 3: Page-Specific Content Placement

All page-specific content belongs in the **dynamic area** (main-content):

```html
<main style="view-transition-name: main-content">
    <!-- Page title, back button if needed -->
    <div class="page-header">
        <a href="./home.html">Back</a>
        <h1>Page Title</h1>
    </div>
    <!-- Page-specific content -->
</main>
```

### Why Content Must Be Identical

**Identical content** → Browser treats as unchanged → Rock-solid, no animation
**Different content** → Browser morphs between states → Visible flickering

This is the fundamental principle of View Transitions: persistent elements stay put, only dynamic content animates.

## CRITICAL: Analyze Source Page First

### Step 1: Identify Persistent vs Dynamic Elements

Scan the source page and classify each major element:

**Persistent** (unchanged across pages):
- Elements with `view-transition-name` that disable animation
- Navigation, brand, toolbars, user widgets, status indicators, etc.
- Any element whose content would be identical on other pages

**Dynamic** (changes per page):
- Main content area
- Page-specific data, titles, forms

### Step 2: Preserve Persistent Elements Exactly

For EVERY persistent element found in source:
- Copy the EXACT same HTML structure
- Keep all text, icons, structure identical
- Only state indicators can differ (active tab, current highlight)

**WHY**: These pages belong to the SAME application flow. Inconsistent persistent elements break user experience and cause View Transition morphing artifacts.

## Visual Consistency Requirements
- Use the EXACT same color palette, typography, and spacing
- Follow the same component styling patterns
- Maintain the same responsive behavior and layout grid
- ONLY the dynamic area (main-content) should change

## CRITICAL: view-transition-name Alignment & Content Consistency

### Step 1: Identify Persistent vs Dynamic Elements

Analyze the source page and classify each major element:

**Persistent Elements** (should stay static during transitions):
- Elements that appear in the same position across multiple pages
- Elements whose content remains unchanged between pages
- Examples: navigation bars, brand logos, toolbars, status indicators, floating action buttons, breadcrumbs, user profile widgets, tab bars, dock menus

**Dynamic Elements** (should animate during transitions):
- Elements whose content changes based on the current page
- Page-specific content areas
- Examples: main content, page titles, article bodies, form content, data displays

**Key Question**: "Would this element's content be identical on the next page?"
- Yes → Persistent (apply view-transition-name, keep static)
- No → Dynamic (animate with crossfade)

### Step 2: Apply view-transition-name Based on Analysis

For each **persistent element** identified:
- Assign a semantic view-transition-name (e.g., `nav`, `brand`, `toolbar`, `user-widget`)
- Use descriptive names that reflect the element's purpose
- Add CSS rules to keep these elements static (no animation)

For the **primary dynamic area**:
- Apply `view-transition-name: main-content`
- This is typically the largest content area that changes between pages

**If NO persistent elements exist** (single-page designs, modals, focused UIs):
- Only apply `main-content` to the primary area
- Skip static element rules entirely

### Naming Requirements
- Match the EXACT names used in the source page if already defined
- Use the SAME declaration style (inline vs CSS class) as source
- Choose semantic, descriptive names for new transitions

### Content Consistency for Persistent Elements
**CRITICAL**: Elements sharing the same view-transition-name MUST have IDENTICAL content.

- Copy the HTML **exactly** from the source page
- Keep all text, icons, and structure identical
- Only **state indicators** (active tab, current page highlight) can differ

### Why This Matters
Identical content → Browser treats element as unchanged → Rock-solid, no morphing
Different content → Browser morphs between states → Visible flickering/distortion

## What You CAN Change
- Main content area (primary dynamic section)
- Page-specific components within content area
- Content text and data
- Active state indicators on persistent elements

## What You CANNOT Change
- ANY element marked with `view-transition-name` (except main-content)
- Structure, text, icons of persistent elements
- Global CSS variables and theme colors
- View transition naming conventions from source

### Source Page HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AURÉLIA CARTHAGE | Tunisian Artisanal Excellence</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <meta name="view-transition" content="same-origin">
    <style>
        :root {
            --ivory: #FCFBF7;
            --gold: #C5A059;
            --black: #1A1A1A;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--ivory);
            color: var(--black);
            overflow-x: hidden;
        }
        h1, h2, h3, .serif {
            font-family: 'Cormorant Garamond', serif;
        }
        .tunisian-pattern-subtle {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5a059' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .gold-border {
            border-color: rgba(197, 160, 89, 0.3);
        }
        .fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .reveal-delay-1 { animation-delay: 0.2s; }
        .reveal-delay-2 { animation-delay: 0.4s; }
        .reveal-delay-3 { animation-delay: 0.6s; }
        
        ::view-transition-old(main-content) {
            animation: 0.3s ease-out both fade-out;
        }
        ::view-transition-new(main-content) {
            animation: 0.3s ease-in 0.1s both fade-in;
        }
        @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

        .hover-lift {
            transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hover-lift:hover {
            transform: translateY(-8px);
        }
        .image-zoom-container {
            overflow: hidden;
        }
        .image-zoom-container img {
            transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .image-zoom-container:hover img {
            transform: scale(1.05);
        }
        .arabesque-accent {
            position: relative;
        }
        .arabesque-accent::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 2px;
            background: var(--gold);
            opacity: 0.5;
        }
    </style>
</head>
<body>
    <div class="min-h-screen flex flex-col tunisian-pattern-subtle">
        <!-- Header Navigation -->
        <header class="fixed top-0 left-0 w-full z-50 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-black/5" style="view-transition-name: main-nav">
            <nav class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <div class="flex items-center space-x-8">
                    <a href="#" id="nav-shop-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Shop</a>
                    <a href="#" id="nav-collections-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Collections</a>
                </div>
                
                <div class="flex flex-col items-center">
                    <a href="#" id="nav-brand-logo" class="text-3xl tracking-[0.3em] font-light serif uppercase">Aurélia</a>
                    <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1">Carthage</span>
                </div>
                
                <div class="flex items-center space-x-6">
                    <a href="#" id="nav-search-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:search" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#" id="nav-account-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:user" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#" id="nav-cart-link" class="hover:text-[#C5A059] transition-colors relative">
                        <iconify-icon icon="lucide:shopping-bag" class="text-lg"></iconify-icon>
                        <span class="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">0</span>
                    </a>
                </div>
            </nav>
        </header>

        <main style="view-transition-name: main-content" class="flex-grow pt-20">
            
            <!-- Hero Section -->
            <section class="relative h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-12">
                <div class="absolute inset-0 z-0">
                    <!-- Image suggesting Mediterranean/Tunisian luxury -->
                    <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=2000" alt="Tunisian Gold Jewelry" class="w-full h-full object-cover opacity-15">
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#FCFBF7]"></div>
                </div>
                <div class="relative z-10 text-center max-w-5xl fade-in-up">
                    <span class="text-xs uppercase tracking-[0.5em] mb-6 block text-[#C5A059] font-medium">Handcrafted in Tunisia • Since 1988</span>
                    <h1 class="text-6xl md:text-8xl font-light mb-8 leading-tight">
                        The soul of Tunis, <br><span class="italic serif">sculpted in gold.</span>
                    </h1>
                    <p class="text-lg max-w-2xl mx-auto mb-10 text-gray-600 font-light leading-relaxed">
                        Discover an ancestral legacy of artisanal brilliance, where the Mediterranean light meets the heritage of the Medina.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#" id="cta-hero-shop" class="bg-[#1A1A1A] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all duration-300">The Collection</a>
                        <a href="#" id="cta-hero-story" class="border border-[#1A1A1A] px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">Heritage</a>
                    </div>
                </div>
                <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                    <iconify-icon icon="tabler:inner-shadow-top-right" class="text-2xl text-[#C5A059]"></iconify-icon>
                </div>
            </section>

            <!-- Our Story Section -->
            <section class="py-32 bg-white relative overflow-hidden">
                <div class="absolute left-0 top-0 w-64 h-full opacity-[0.03] pointer-events-none">
                    <iconify-icon icon="gis:layer-o-map-o" class="text-[400px] -ml-20"></iconify-icon>
                </div>
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div class="image-zoom-container aspect-[3/4] relative">
                            <img src="https://images.unsplash.com/photo-1621350289139-445699709d73?auto=format&fit=crop&q=80&w=1200" alt="Artisan working in Tunis Medina" class="w-full h-full object-cover">
                            <div class="absolute -bottom-10 -right-10 hidden lg:block">
                                <div class="bg-[#FCFBF7] p-8 border border-black/5 shadow-xl max-w-xs">
                                    <span class="text-3xl font-light serif text-[#C5A059]">1988</span>
                                    <p class="text-sm text-gray-500 mt-2 italic">The year our first atelier opened in the heart of the Tunis Medina.</p>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-8">
                            <span class="text-xs uppercase tracking-[0.3em] text-[#C5A059]">Medina & Modernity</span>
                            <h2 class="text-5xl font-light leading-tight italic">A Legacy of Carthage</h2>
                            <div class="space-y-6 text-gray-600 font-light leading-relaxed">
                                <p>Aurélia Carthage was born from the timeless echoes of the Mediterranean. Inspired by the legendary Queen Elyssa and the refined gold-smithing traditions of ancient Carthage, we bridge the gap between ancestral craftsmanship and contemporary elegance.</p>
                                <p>Every piece is meticulously handmade in our Tunis workshop, where master artisans use techniques passed down through generations. From delicate filigree to bold geometric statements, our jewelry is a love letter to the Tunisian spirit.</p>
                            </div>
                            <div class="pt-4">
                                <a href="#" id="story-read-more" class="group flex items-center space-x-4 text-xs uppercase tracking-[0.2em] font-medium">
                                    <span>Our Artisanal Process</span>
                                    <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-2 transition-transform"></iconify-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Collections Showcase -->
            <section class="py-32 bg-[#FCFBF7] relative">
                <!-- Decorative accent -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <iconify-icon icon="hugeicons:star-01" class="text-4xl text-[#C5A059] opacity-30"></iconify-icon>
                </div>
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div class="max-w-xl">
                            <span class="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4 block">Curated Series</span>
                            <h2 class="text-5xl font-light">The Heritage Collections</h2>
                        </div>
                        <a href="#" id="collections-all-link" class="text-xs uppercase tracking-[0.2em] border-b border-black pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
                            View all series
                        </a>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <!-- Item 1 -->
                        <div class="group cursor-pointer">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000" alt="Jasmine Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Jasmine of Carthage</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">18k Yellow Gold & Pure Pearl</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Discover the Scent</p>
                            </div>
                        </div>

                        <!-- Item 2 -->
                        <div class="group cursor-pointer">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1611085583191-a3b130a88d4a?auto=format&fit=crop&q=80&w=1000" alt="Sahara Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Sahara Whispers</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">Textured Gold & Sandstone</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Explore the Sands</p>
                            </div>
                        </div>

                        <!-- Item 3 -->
                        <div class="group cursor-pointer">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000" alt="Medina Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Medina Silhouettes</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">Arabesque Filigree Rings</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Enter the Labyrinth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Why Choose Us / Craftsmanship -->
            <section class="py-32 bg-white border-y border-black/5">
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="text-center max-w-3xl mx-auto mb-20">
                        <h2 class="text-4xl font-light italic mb-6">Handcrafted Tunisian Excellence</h2>
                        <p class="text-gray-500 font-light">Every piece is a testament to the North African sun and the skilled hands of our local artisans.</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="solar:sun-2-linear" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Mediterranean Light</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">Our gold is finished with a unique satin texture that reflects the soft coastal light of Sidi Bou Said.</p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="ph:hand-eye-light" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Artisan Soul</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">Not a single machine is used in our assembly process. Every stone is set by hand in our Tunis atelier.</p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="icon-park-outline:traditional-chinese-medicine" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Cultural Continuity</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">We preserve traditional Tunisian jewelry forms while reinterpreting them for the modern world.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Newsletter Section -->
            <section class="py-32 bg-[#1A1A1A] text-white overflow-hidden relative">
                <div class="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <iconify-icon icon="hugeicons:diamond" class="text-[400px] text-[#C5A059]"></iconify-icon>
                </div>
                <div class="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <span class="text-xs uppercase tracking-[0.4em] text-[#C5A059] mb-6 block font-medium">Carthage Circle</span>
                    <h2 class="text-5xl font-light mb-8 serif">Join the Inner Circle</h2>
                    <p class="text-gray-400 font-light mb-12 text-lg">
                        Experience the heritage of Tunisia through our limited-run artisanal drops and stories from our workshops.
                    </p>
                    
                    <form class="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                        <input type="email" placeholder="Your email address" class="flex-grow bg-transparent border-b border-gray-700 py-4 px-2 focus:outline-none focus:border-[#C5A059] transition-colors text-white font-light">
                        <button type="submit" id="cta-subscribe-btn" class="bg-[#C5A059] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all duration-300">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

        </main>

        <!-- Footer -->
        <footer class="bg-white border-t border-black/5 pt-20 pb-10">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div class="col-span-1 md:col-span-1">
                        <div class="mb-6">
                            <a href="#" class="text-3xl tracking-[0.3em] font-light serif uppercase block">Aurélia</a>
                            <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1 block">Carthage</span>
                        </div>
                        <p class="text-sm text-gray-500 font-light leading-relaxed">
                            Authentic Tunisian jewelry crafted with passion since 1988. From the Medina to your heart.
                        </p>
                    </div>
                    
                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Artisan Care</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#" id="footer-shipping" class="hover:text-[#C5A059] transition-colors">International Delivery</a></li>
                            <li><a href="#" id="footer-warranty" class="hover:text-[#C5A059] transition-colors">Goldsmith Warranty</a></li>
                            <li><a href="#" id="footer-repairs" class="hover:text-[#C5A059] transition-colors">Atelier Repairs</a></li>
                            <li><a href="#" id="footer-sizing" class="hover:text-[#C5A059] transition-colors">Sizing Guide</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Our Heritage</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#" id="footer-about" class="hover:text-[#C5A059] transition-colors">The Tunisian Atelier</a></li>
                            <li><a href="#" id="footer-ethics" class="hover:text-[#C5A059] transition-colors">Ethical Sourcing</a></li>
                            <li><a href="#" id="footer-journal" class="hover:text-[#C5A059] transition-colors">Tunis Journal</a></li>
                            <li><a href="#" id="footer-stores" class="hover:text-[#C5A059] transition-colors">Tunis Boutique</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Connect</h5>
                        <div class="flex space-x-6">
                            <a href="#" id="footer-ig" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:instagram" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-fb" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:facebook" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-pin" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:pinterest" class="text-xl"></iconify-icon></a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-[10px] text-gray-400 uppercase tracking-widest">&copy; 2024 Aurélia Carthage. Made with love in Tunisia.</p>
                    <div class="flex space-x-8 mt-4 md:mt-0">
                        <a href="#" id="footer-privacy" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Privacy</a>
                        <a href="#" id="footer-terms" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                        entry.target.style.opacity = '1';
                    }
                });
            }, observerOptions);

            document.querySelectorAll('section > div').forEach(el => {
                el.style.opacity = '0';
                observer.observe(el);
            });
        });
    </script>
</body>
</html>
```

Generate the HTML for "Product Detail".
- Preserve ALL persistent elements from source EXACTLY
- Only modify the dynamic content area (main-content)
- If source has NO persistent elements, focus on main-content transition only

## HTML Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AURÉLIA CARTHAGE | Jasmine Filigree Cuff</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <meta name="view-transition" content="same-origin">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa" as="document">
    <style>
        :root {
            --ivory: #FCFBF7;
            --gold: #C5A059;
            --black: #1A1A1A;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--ivory);
            color: var(--black);
            overflow-x: hidden;
        }
        h1, h2, h3, .serif {
            font-family: 'Cormorant Garamond', serif;
        }
        .tunisian-pattern-subtle {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5a059' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        @view-transition { navigation: auto; }
        ::view-transition { background-color: var(--ivory); }

        ::view-transition-old(main-nav),
        ::view-transition-new(main-nav) {
            animation: none;
            mix-blend-mode: normal;
        }

        ::view-transition-old(main-content) {
            animation: 0.3s ease-out both fade-out;
        }
        ::view-transition-new(main-content) {
            animation: 0.3s ease-in 0.1s both fade-in;
        }
        @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

        .image-zoom-container {
            overflow: hidden;
        }
        .image-zoom-container img {
            transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .image-zoom-container:hover img {
            transform: scale(1.05);
        }

        details summary::-webkit-details-marker {
            display: none;
        }
        details[open] summary iconify-icon {
            transform: rotate(180deg);
        }
    </style>
</head>
<body>
    <div class="min-h-screen flex flex-col tunisian-pattern-subtle">
        <!-- Header Navigation (Persistent) -->
        <header class="fixed top-0 left-0 w-full z-50 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-black/5" style="view-transition-name: main-nav">
            <nav class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <div class="flex items-center space-x-8">
                    <a href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" id="nav-shop-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Shop</a>
                    <a href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" id="nav-collections-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Collections</a>
                </div>
                
                <div class="flex flex-col items-center">
                    <a href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" id="nav-brand-logo" class="text-3xl tracking-[0.3em] font-light serif uppercase">Aurélia</a>
                    <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1">Carthage</span>
                </div>
                
                <div class="flex items-center space-x-6">
                    <a href="#search" id="nav-search-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:search" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#account" id="nav-account-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:user" class="text-lg"></iconify-icon>
                    </a>
                    <a href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" id="nav-cart-link" class="hover:text-[#C5A059] transition-colors relative">
                        <iconify-icon icon="lucide:shopping-bag" class="text-lg"></iconify-icon>
                        <span class="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">0</span>
                    </a>
                </div>
            </nav>
        </header>

        <!-- Main Content (Dynamic Area) -->
        <main style="view-transition-name: main-content" class="flex-grow pt-32 pb-20">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                
                <!-- Breadcrumbs -->
                <div class="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-12">
                    <a href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" id="breadcrumb-home" class="hover:text-black">Home</a>
                    <span>/</span>
                    <a href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" id="breadcrumb-collection" class="hover:text-black">The Heritage Series</a>
                    <span>/</span>
                    <span class="text-[#C5A059]">Jasmine Filigree Cuff</span>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <!-- Product Gallery -->
                    <div class="lg:col-span-7 space-y-4">
                        <div class="aspect-[4/5] bg-white image-zoom-container">
                            <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=1500" alt="Jasmine Filigree Cuff" class="w-full h-full object-cover">
                        </div>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="aspect-square bg-white cursor-pointer opacity-100 ring-1 ring-[#C5A059]">
                                <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=500" class="w-full h-full object-cover">
                            </div>
                            <div class="aspect-square bg-white cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                                <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=500" class="w-full h-full object-cover">
                            </div>
                            <div class="aspect-square bg-white cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                                <img src="https://images.unsplash.com/photo-1621350289139-445699709d73?auto=format&fit=crop&q=80&w=500" class="w-full h-full object-cover">
                            </div>
                        </div>
                    </div>

                    <!-- Product Info -->
                    <div class="lg:col-span-5 flex flex-col">
                        <div class="mb-8">
                            <span class="text-xs uppercase tracking-[0.4em] text-[#C5A059] font-medium block mb-4">Artisanal Heritage</span>
                            <h1 class="text-5xl md:text-6xl font-light mb-4 serif leading-tight">Jasmine Filigree Cuff</h1>
                            <p class="text-2xl font-light tracking-wide">840.00 TND</p>
                        </div>

                        <div class="space-y-6 text-gray-600 font-light leading-relaxed mb-10">
                            <p>Hand-wrought in the heart of the Tunis Medina, this cuff draws inspiration from the delicate jasmine blossoms that scent the Tunisian air. Each intricate filigree swirl is a testament to thousands of hours of master craftsmanship, utilizing ancient Carthaginian wire-bending techniques.</p>
                            <p class="text-sm italic">"A wearable piece of Mediterranean sunlight, designed to be passed down through generations."</p>
                        </div>

                        <!-- Controls -->
                        <div class="space-y-8 mb-10 pt-6 border-t border-black/5">
                            <div class="flex items-center justify-between">
                                <label class="text-xs uppercase tracking-widest font-medium">Quantity</label>
                                <div class="flex items-center border border-black/10 px-4 py-2">
                                    <button class="px-2 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:minus" class="text-sm"></iconify-icon></button>
                                    <input type="text" value="1" class="w-12 text-center bg-transparent focus:outline-none text-sm">
                                    <button class="px-2 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:plus" class="text-sm"></iconify-icon></button>
                                </div>
                            </div>
                            
                            <a href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" id="add-to-bag-btn" class="w-full bg-[#1A1A1A] text-white py-5 text-xs uppercase tracking-[0.3em] font-medium text-center block hover:bg-[#C5A059] transition-all duration-500">
                                Add to Shopping Bag
                            </a>
                        </div>

                        <!-- Specifications Accordion -->
                        <div class="space-y-2 border-t border-black/5 pt-4">
                            <details class="group">
                                <summary class="list-none flex justify-between items-center py-4 cursor-pointer">
                                    <span class="text-xs uppercase tracking-widest">Materials & Origin</span>
                                    <iconify-icon icon="lucide:chevron-down" class="text-sm transition-transform duration-300"></iconify-icon>
                                </summary>
                                <div class="pb-6 text-sm text-gray-500 font-light leading-relaxed">
                                    Solid 18k Yellow Gold, ethically sourced from regional Mediterranean mines. Featuring hand-hammered satin finishes and traditional wire filigree. Crafted in our Tunis Atelier.
                                </div>
                            </details>
                            
                            <details class="group border-t border-black/5">
                                <summary class="list-none flex justify-between items-center py-4 cursor-pointer">
                                    <span class="text-xs uppercase tracking-widest">Dimensions</span>
                                    <iconify-icon icon="lucide:chevron-down" class="text-sm transition-transform duration-300"></iconify-icon>
                                </summary>
                                <div class="pb-6 text-sm text-gray-500 font-light leading-relaxed">
                                    Adjustable open-cuff design. Internal diameter 58mm (Medium). Width at widest point: 22mm. Weight: approximately 24g of solid gold.
                                </div>
                            </details>

                            <details class="group border-t border-black/5">
                                <summary class="list-none flex justify-between items-center py-4 cursor-pointer">
                                    <span class="text-xs uppercase tracking-widest">Care Instructions</span>
                                    <iconify-icon icon="lucide:chevron-down" class="text-sm transition-transform duration-300"></iconify-icon>
                                </summary>
                                <div class="pb-6 text-sm text-gray-500 font-light leading-relaxed">
                                    To maintain the satin luster, clean gently with a soft microfiber cloth. Avoid contact with abrasive perfumes or chemicals. We offer complimentary professional cleaning at our Tunis boutique.
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer (Persistent) -->
        <footer class="bg-white border-t border-black/5 pt-20 pb-10">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div class="col-span-1 md:col-span-1">
                        <div class="mb-6">
                            <a href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" class="text-3xl tracking-[0.3em] font-light serif uppercase block">Aurélia</a>
                            <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1 block">Carthage</span>
                        </div>
                        <p class="text-sm text-gray-500 font-light leading-relaxed">
                            Authentic Tunisian jewelry crafted with passion since 1988. From the Medina to your heart.
                        </p>
                    </div>
                    
                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Artisan Care</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#shipping" id="footer-shipping" class="hover:text-[#C5A059] transition-colors">International Delivery</a></li>
                            <li><a href="#warranty" id="footer-warranty" class="hover:text-[#C5A059] transition-colors">Goldsmith Warranty</a></li>
                            <li><a href="#repairs" id="footer-repairs" class="hover:text-[#C5A059] transition-colors">Atelier Repairs</a></li>
                            <li><a href="#sizing" id="footer-sizing" class="hover:text-[#C5A059] transition-colors">Sizing Guide</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Our Heritage</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#about" id="footer-about" class="hover:text-[#C5A059] transition-colors">The Tunisian Atelier</a></li>
                            <li><a href="#ethics" id="footer-ethics" class="hover:text-[#C5A059] transition-colors">Ethical Sourcing</a></li>
                            <li><a href="#journal" id="footer-journal" class="hover:text-[#C5A059] transition-colors">Tunis Journal</a></li>
                            <li><a href="#stores" id="footer-stores" class="hover:text-[#C5A059] transition-colors">Tunis Boutique</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Connect</h5>
                        <div class="flex space-x-6">
                            <a href="#ig" id="footer-ig" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:instagram" class="text-xl"></iconify-icon></a>
                            <a href="#fb" id="footer-fb" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:facebook" class="text-xl"></iconify-icon></a>
                            <a href="#pin" id="footer-pin" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:pinterest" class="text-xl"></iconify-icon></a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-[10px] text-gray-400 uppercase tracking-widest">&copy; 2024 Aurélia Carthage. Made with love in Tunisia.</p>
                    <div class="flex space-x-8 mt-4 md:mt-0">
                        <a href="#privacy" id="footer-privacy" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Privacy</a>
                        <a href="#terms" id="footer-terms" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>
```

---
Please reference this design when implementing the component.

Product Detail:
# Design Reference

## Original Prompt
## Page to Generate: Shopping Cart

List added items with quantities, prices, subtotal, and proceed to checkout button

## Flow Context
Tunisian jewelry e-commerce website

## Available Page Links for Navigation

Use these exact URLs for navigation links between pages in this flow:

- "AURÉLIA CARTHAGE | Tunisian Artisanal Excellence": https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db
- "Product Collection": https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c
- "Product Detail": https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8
- "Shopping Cart" (current page): https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3
- "Checkout": https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a
- "Order Confirmation": https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa

**Navigation Link Instructions:**
1. For <a> tags that navigate between pages in this flow, use the URLs above as href values
2. Mark the current page as "active" in navigation elements (add "active" class or similar styling)
3. The navigation should allow users to move between all pages in this flow
4. Keep all other links (external, social media, etc.) unchanged from the source

## Semantic Hash Placeholders for Future Links

For links to pages that are NOT listed above (pages not yet created or outside this flow), use semantic hash placeholders in kebab-case format:

**Common Placeholders:**
- Dashboard/Home: `#dashboard` or `#home`
- Settings: `#settings`
- Profile: `#profile` or `#user-profile`
- Notifications: `#notifications`
- Search: `#search`
- [Feature Name]: `#feature-name` (always use kebab-case)

**Examples:**
```html
<a href="#settings" id="nav-settings-link">Settings</a>
<a href="#user-profile" id="nav-profile-link">Profile</a>
<a href="#billing" id="nav-billing-link">Billing</a>
```

These semantic hashes make it easy to search and replace when target pages are created later. Always use descriptive, meaningful names that reflect the destination page's purpose.

## Prefetch Optimization

Add these prefetch links in <head> to improve navigation performance:
```html
<link rel="prefetch" href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa" as="document">
```
This allows the browser to pre-load linked pages during idle time, making navigation nearly instant.

## CRITICAL: View Transition API - SPA-LIKE SMOOTH TRANSITIONS

**MANDATORY**: All flow pages MUST implement View Transition API for silky smooth page-to-page transitions.

### Step 1: Identify Persistent Elements in Source Page

Scan the source page for elements that should remain **unchanged** across pages:
- Navigation components (top nav, bottom tabs, side menu, breadcrumbs)
- Brand elements (logo, app title)
- Global UI (toolbars, status bars, floating buttons, dock)
- User context (profile widget, notifications badge)
- Any element with existing `view-transition-name` declarations

**Key test**: "Would this element look identical on other pages?" → If yes, it's persistent.

### Step 2: Implementation

1. **Enable View Transitions**: Add meta tag in <head>:
   `<meta name="view-transition" content="same-origin">`

2. **CSS Setup** - Match source page's transition names:
   ```css
   /* Prevent white flash */
   html {
       background-color: #0a0a0a; /* Match page background */
   }
   @view-transition { navigation: auto; }
   ::view-transition { background-color: #0a0a0a; }

   /* For EACH persistent element found in source */
   /* Use the SAME view-transition-name as source page */
   ::view-transition-old([name]),
   ::view-transition-new([name]) {
       animation: none;
       mix-blend-mode: normal;
   }

   /* Dynamic content - animate */
   ::view-transition-old(main-content) {
       animation: 0.25s ease-out both fade-out;
   }
   ::view-transition-new(main-content) {
       animation: 0.25s ease-in 0.1s both fade-in;
   }

   @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
   @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

   ::view-transition-old(root),
   ::view-transition-new(root) {
       animation: none;
       mix-blend-mode: normal;
   }
   ```

3. **Apply view-transition-name**:
   - Copy ALL `view-transition-name` declarations from source page
   - Use the EXACT SAME names for corresponding elements
   - Always apply `main-content` to the primary dynamic area

### Examples

Source has nav + brand + content:
```html
<nav style="view-transition-name: main-nav"><!-- Copy exactly --></nav>
<div style="view-transition-name: brand"><!-- Copy exactly --></div>
<main style="view-transition-name: main-content"><!-- New content --></main>
```

Source has only content (no persistent UI):
```html
<main style="view-transition-name: main-content"><!-- All content --></main>
```

## CRITICAL: view-transition-name Alignment & Content Consistency

### Step 1: Identify Persistent vs Dynamic Elements

Analyze the source page and classify each major element:

**Persistent Elements** (should stay static during transitions):
- Elements that appear in the same position across multiple pages
- Elements whose content remains unchanged between pages
- Examples: navigation bars, brand logos, toolbars, status indicators, floating action buttons, breadcrumbs, user profile widgets, tab bars, dock menus

**Dynamic Elements** (should animate during transitions):
- Elements whose content changes based on the current page
- Page-specific content areas
- Examples: main content, page titles, article bodies, form content, data displays

**Key Question**: "Would this element's content be identical on the next page?"
- Yes → Persistent (apply view-transition-name, keep static)
- No → Dynamic (animate with crossfade)

### Step 2: Apply view-transition-name Based on Analysis

For each **persistent element** identified:
- Assign a semantic view-transition-name (e.g., `nav`, `brand`, `toolbar`, `user-widget`)
- Use descriptive names that reflect the element's purpose
- Add CSS rules to keep these elements static (no animation)

For the **primary dynamic area**:
- Apply `view-transition-name: main-content`
- This is typically the largest content area that changes between pages

**If NO persistent elements exist** (single-page designs, modals, focused UIs):
- Only apply `main-content` to the primary area
- Skip static element rules entirely

### Naming Requirements
- Match the EXACT names used in the source page if already defined
- Use the SAME declaration style (inline vs CSS class) as source
- Choose semantic, descriptive names for new transitions

### Content Consistency for Persistent Elements
**CRITICAL**: Elements sharing the same view-transition-name MUST have IDENTICAL content.

- Copy the HTML **exactly** from the source page
- Keep all text, icons, and structure identical
- Only **state indicators** (active tab, current page highlight) can differ

### Why This Matters
Identical content → Browser treats element as unchanged → Rock-solid, no morphing
Different content → Browser morphs between states → Visible flickering/distortion

**WHY**: Persistent elements stay rock-solid. Only dynamic content crossfades. No white flash, no morphing artifacts.

## CRITICAL: Persistent Element Content MUST Be Identical

### Step 1: Identify Persistent Elements in Source Page

Scan the source for elements that should remain **unchanged** across pages:

**Common persistent elements** (not exhaustive):
- Navigation (top nav, bottom tabs, side menu, breadcrumbs, pagination)
- Brand (logo, app title, tagline)
- Global UI (toolbar, status bar, floating action button, dock, minimap)
- User context (profile widget, avatar, notifications, settings toggle)
- Decorative (background patterns, ambient animations)

**Key test**: "Would this element's content be identical on the next page?"
- Yes → Persistent element (must be copied exactly)
- No → Dynamic element (can change)

**Some pages have NO persistent elements** - that's perfectly valid for:
- Landing pages, single-purpose views, modals, focused task UIs

### Step 2: Rules for Persistent Elements

For EVERY persistent element identified:
- Copy the HTML **exactly** from the source page
- Keep all text, icons, structure identical
- Only **state indicators** can differ (active tab, current page highlight)

### Step 3: Page-Specific Content Placement

All page-specific content belongs in the **dynamic area** (main-content):

```html
<main style="view-transition-name: main-content">
    <!-- Page title, back button if needed -->
    <div class="page-header">
        <a href="./home.html">Back</a>
        <h1>Page Title</h1>
    </div>
    <!-- Page-specific content -->
</main>
```

### Why Content Must Be Identical

**Identical content** → Browser treats as unchanged → Rock-solid, no animation
**Different content** → Browser morphs between states → Visible flickering

This is the fundamental principle of View Transitions: persistent elements stay put, only dynamic content animates.

## CRITICAL: Analyze Source Page First

### Step 1: Identify Persistent vs Dynamic Elements

Scan the source page and classify each major element:

**Persistent** (unchanged across pages):
- Elements with `view-transition-name` that disable animation
- Navigation, brand, toolbars, user widgets, status indicators, etc.
- Any element whose content would be identical on other pages

**Dynamic** (changes per page):
- Main content area
- Page-specific data, titles, forms

### Step 2: Preserve Persistent Elements Exactly

For EVERY persistent element found in source:
- Copy the EXACT same HTML structure
- Keep all text, icons, structure identical
- Only state indicators can differ (active tab, current highlight)

**WHY**: These pages belong to the SAME application flow. Inconsistent persistent elements break user experience and cause View Transition morphing artifacts.

## Visual Consistency Requirements
- Use the EXACT same color palette, typography, and spacing
- Follow the same component styling patterns
- Maintain the same responsive behavior and layout grid
- ONLY the dynamic area (main-content) should change

## CRITICAL: view-transition-name Alignment & Content Consistency

### Step 1: Identify Persistent vs Dynamic Elements

Analyze the source page and classify each major element:

**Persistent Elements** (should stay static during transitions):
- Elements that appear in the same position across multiple pages
- Elements whose content remains unchanged between pages
- Examples: navigation bars, brand logos, toolbars, status indicators, floating action buttons, breadcrumbs, user profile widgets, tab bars, dock menus

**Dynamic Elements** (should animate during transitions):
- Elements whose content changes based on the current page
- Page-specific content areas
- Examples: main content, page titles, article bodies, form content, data displays

**Key Question**: "Would this element's content be identical on the next page?"
- Yes → Persistent (apply view-transition-name, keep static)
- No → Dynamic (animate with crossfade)

### Step 2: Apply view-transition-name Based on Analysis

For each **persistent element** identified:
- Assign a semantic view-transition-name (e.g., `nav`, `brand`, `toolbar`, `user-widget`)
- Use descriptive names that reflect the element's purpose
- Add CSS rules to keep these elements static (no animation)

For the **primary dynamic area**:
- Apply `view-transition-name: main-content`
- This is typically the largest content area that changes between pages

**If NO persistent elements exist** (single-page designs, modals, focused UIs):
- Only apply `main-content` to the primary area
- Skip static element rules entirely

### Naming Requirements
- Match the EXACT names used in the source page if already defined
- Use the SAME declaration style (inline vs CSS class) as source
- Choose semantic, descriptive names for new transitions

### Content Consistency for Persistent Elements
**CRITICAL**: Elements sharing the same view-transition-name MUST have IDENTICAL content.

- Copy the HTML **exactly** from the source page
- Keep all text, icons, and structure identical
- Only **state indicators** (active tab, current page highlight) can differ

### Why This Matters
Identical content → Browser treats element as unchanged → Rock-solid, no morphing
Different content → Browser morphs between states → Visible flickering/distortion

## What You CAN Change
- Main content area (primary dynamic section)
- Page-specific components within content area
- Content text and data
- Active state indicators on persistent elements

## What You CANNOT Change
- ANY element marked with `view-transition-name` (except main-content)
- Structure, text, icons of persistent elements
- Global CSS variables and theme colors
- View transition naming conventions from source

### Source Page HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AURÉLIA CARTHAGE | Tunisian Artisanal Excellence</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <meta name="view-transition" content="same-origin">
    <style>
        :root {
            --ivory: #FCFBF7;
            --gold: #C5A059;
            --black: #1A1A1A;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--ivory);
            color: var(--black);
            overflow-x: hidden;
        }
        h1, h2, h3, .serif {
            font-family: 'Cormorant Garamond', serif;
        }
        .tunisian-pattern-subtle {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5a059' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .gold-border {
            border-color: rgba(197, 160, 89, 0.3);
        }
        .fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .reveal-delay-1 { animation-delay: 0.2s; }
        .reveal-delay-2 { animation-delay: 0.4s; }
        .reveal-delay-3 { animation-delay: 0.6s; }
        
        ::view-transition-old(main-content) {
            animation: 0.3s ease-out both fade-out;
        }
        ::view-transition-new(main-content) {
            animation: 0.3s ease-in 0.1s both fade-in;
        }
        @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

        .hover-lift {
            transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hover-lift:hover {
            transform: translateY(-8px);
        }
        .image-zoom-container {
            overflow: hidden;
        }
        .image-zoom-container img {
            transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .image-zoom-container:hover img {
            transform: scale(1.05);
        }
        .arabesque-accent {
            position: relative;
        }
        .arabesque-accent::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 2px;
            background: var(--gold);
            opacity: 0.5;
        }
    </style>
</head>
<body>
    <div class="min-h-screen flex flex-col tunisian-pattern-subtle">
        <!-- Header Navigation -->
        <header class="fixed top-0 left-0 w-full z-50 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-black/5" style="view-transition-name: main-nav">
            <nav class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <div class="flex items-center space-x-8">
                    <a href="#" id="nav-shop-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Shop</a>
                    <a href="#" id="nav-collections-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Collections</a>
                </div>
                
                <div class="flex flex-col items-center">
                    <a href="#" id="nav-brand-logo" class="text-3xl tracking-[0.3em] font-light serif uppercase">Aurélia</a>
                    <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1">Carthage</span>
                </div>
                
                <div class="flex items-center space-x-6">
                    <a href="#" id="nav-search-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:search" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#" id="nav-account-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:user" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#" id="nav-cart-link" class="hover:text-[#C5A059] transition-colors relative">
                        <iconify-icon icon="lucide:shopping-bag" class="text-lg"></iconify-icon>
                        <span class="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">0</span>
                    </a>
                </div>
            </nav>
        </header>

        <main style="view-transition-name: main-content" class="flex-grow pt-20">
            
            <!-- Hero Section -->
            <section class="relative h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-12">
                <div class="absolute inset-0 z-0">
                    <!-- Image suggesting Mediterranean/Tunisian luxury -->
                    <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=2000" alt="Tunisian Gold Jewelry" class="w-full h-full object-cover opacity-15">
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#FCFBF7]"></div>
                </div>
                <div class="relative z-10 text-center max-w-5xl fade-in-up">
                    <span class="text-xs uppercase tracking-[0.5em] mb-6 block text-[#C5A059] font-medium">Handcrafted in Tunisia • Since 1988</span>
                    <h1 class="text-6xl md:text-8xl font-light mb-8 leading-tight">
                        The soul of Tunis, <br><span class="italic serif">sculpted in gold.</span>
                    </h1>
                    <p class="text-lg max-w-2xl mx-auto mb-10 text-gray-600 font-light leading-relaxed">
                        Discover an ancestral legacy of artisanal brilliance, where the Mediterranean light meets the heritage of the Medina.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#" id="cta-hero-shop" class="bg-[#1A1A1A] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all duration-300">The Collection</a>
                        <a href="#" id="cta-hero-story" class="border border-[#1A1A1A] px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">Heritage</a>
                    </div>
                </div>
                <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                    <iconify-icon icon="tabler:inner-shadow-top-right" class="text-2xl text-[#C5A059]"></iconify-icon>
                </div>
            </section>

            <!-- Our Story Section -->
            <section class="py-32 bg-white relative overflow-hidden">
                <div class="absolute left-0 top-0 w-64 h-full opacity-[0.03] pointer-events-none">
                    <iconify-icon icon="gis:layer-o-map-o" class="text-[400px] -ml-20"></iconify-icon>
                </div>
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div class="image-zoom-container aspect-[3/4] relative">
                            <img src="https://images.unsplash.com/photo-1621350289139-445699709d73?auto=format&fit=crop&q=80&w=1200" alt="Artisan working in Tunis Medina" class="w-full h-full object-cover">
                            <div class="absolute -bottom-10 -right-10 hidden lg:block">
                                <div class="bg-[#FCFBF7] p-8 border border-black/5 shadow-xl max-w-xs">
                                    <span class="text-3xl font-light serif text-[#C5A059]">1988</span>
                                    <p class="text-sm text-gray-500 mt-2 italic">The year our first atelier opened in the heart of the Tunis Medina.</p>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-8">
                            <span class="text-xs uppercase tracking-[0.3em] text-[#C5A059]">Medina & Modernity</span>
                            <h2 class="text-5xl font-light leading-tight italic">A Legacy of Carthage</h2>
                            <div class="space-y-6 text-gray-600 font-light leading-relaxed">
                                <p>Aurélia Carthage was born from the timeless echoes of the Mediterranean. Inspired by the legendary Queen Elyssa and the refined gold-smithing traditions of ancient Carthage, we bridge the gap between ancestral craftsmanship and contemporary elegance.</p>
                                <p>Every piece is meticulously handmade in our Tunis workshop, where master artisans use techniques passed down through generations. From delicate filigree to bold geometric statements, our jewelry is a love letter to the Tunisian spirit.</p>
                            </div>
                            <div class="pt-4">
                                <a href="#" id="story-read-more" class="group flex items-center space-x-4 text-xs uppercase tracking-[0.2em] font-medium">
                                    <span>Our Artisanal Process</span>
                                    <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-2 transition-transform"></iconify-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Collections Showcase -->
            <section class="py-32 bg-[#FCFBF7] relative">
                <!-- Decorative accent -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <iconify-icon icon="hugeicons:star-01" class="text-4xl text-[#C5A059] opacity-30"></iconify-icon>
                </div>
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div class="max-w-xl">
                            <span class="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4 block">Curated Series</span>
                            <h2 class="text-5xl font-light">The Heritage Collections</h2>
                        </div>
                        <a href="#" id="collections-all-link" class="text-xs uppercase tracking-[0.2em] border-b border-black pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
                            View all series
                        </a>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <!-- Item 1 -->
                        <div class="group cursor-pointer">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000" alt="Jasmine Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Jasmine of Carthage</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">18k Yellow Gold & Pure Pearl</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Discover the Scent</p>
                            </div>
                        </div>

                        <!-- Item 2 -->
                        <div class="group cursor-pointer">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1611085583191-a3b130a88d4a?auto=format&fit=crop&q=80&w=1000" alt="Sahara Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Sahara Whispers</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">Textured Gold & Sandstone</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Explore the Sands</p>
                            </div>
                        </div>

                        <!-- Item 3 -->
                        <div class="group cursor-pointer">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000" alt="Medina Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Medina Silhouettes</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">Arabesque Filigree Rings</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Enter the Labyrinth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Why Choose Us / Craftsmanship -->
            <section class="py-32 bg-white border-y border-black/5">
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="text-center max-w-3xl mx-auto mb-20">
                        <h2 class="text-4xl font-light italic mb-6">Handcrafted Tunisian Excellence</h2>
                        <p class="text-gray-500 font-light">Every piece is a testament to the North African sun and the skilled hands of our local artisans.</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="solar:sun-2-linear" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Mediterranean Light</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">Our gold is finished with a unique satin texture that reflects the soft coastal light of Sidi Bou Said.</p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="ph:hand-eye-light" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Artisan Soul</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">Not a single machine is used in our assembly process. Every stone is set by hand in our Tunis atelier.</p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="icon-park-outline:traditional-chinese-medicine" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Cultural Continuity</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">We preserve traditional Tunisian jewelry forms while reinterpreting them for the modern world.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Newsletter Section -->
            <section class="py-32 bg-[#1A1A1A] text-white overflow-hidden relative">
                <div class="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <iconify-icon icon="hugeicons:diamond" class="text-[400px] text-[#C5A059]"></iconify-icon>
                </div>
                <div class="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <span class="text-xs uppercase tracking-[0.4em] text-[#C5A059] mb-6 block font-medium">Carthage Circle</span>
                    <h2 class="text-5xl font-light mb-8 serif">Join the Inner Circle</h2>
                    <p class="text-gray-400 font-light mb-12 text-lg">
                        Experience the heritage of Tunisia through our limited-run artisanal drops and stories from our workshops.
                    </p>
                    
                    <form class="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                        <input type="email" placeholder="Your email address" class="flex-grow bg-transparent border-b border-gray-700 py-4 px-2 focus:outline-none focus:border-[#C5A059] transition-colors text-white font-light">
                        <button type="submit" id="cta-subscribe-btn" class="bg-[#C5A059] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all duration-300">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

        </main>

        <!-- Footer -->
        <footer class="bg-white border-t border-black/5 pt-20 pb-10">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div class="col-span-1 md:col-span-1">
                        <div class="mb-6">
                            <a href="#" class="text-3xl tracking-[0.3em] font-light serif uppercase block">Aurélia</a>
                            <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1 block">Carthage</span>
                        </div>
                        <p class="text-sm text-gray-500 font-light leading-relaxed">
                            Authentic Tunisian jewelry crafted with passion since 1988. From the Medina to your heart.
                        </p>
                    </div>
                    
                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Artisan Care</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#" id="footer-shipping" class="hover:text-[#C5A059] transition-colors">International Delivery</a></li>
                            <li><a href="#" id="footer-warranty" class="hover:text-[#C5A059] transition-colors">Goldsmith Warranty</a></li>
                            <li><a href="#" id="footer-repairs" class="hover:text-[#C5A059] transition-colors">Atelier Repairs</a></li>
                            <li><a href="#" id="footer-sizing" class="hover:text-[#C5A059] transition-colors">Sizing Guide</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Our Heritage</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#" id="footer-about" class="hover:text-[#C5A059] transition-colors">The Tunisian Atelier</a></li>
                            <li><a href="#" id="footer-ethics" class="hover:text-[#C5A059] transition-colors">Ethical Sourcing</a></li>
                            <li><a href="#" id="footer-journal" class="hover:text-[#C5A059] transition-colors">Tunis Journal</a></li>
                            <li><a href="#" id="footer-stores" class="hover:text-[#C5A059] transition-colors">Tunis Boutique</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Connect</h5>
                        <div class="flex space-x-6">
                            <a href="#" id="footer-ig" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:instagram" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-fb" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:facebook" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-pin" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:pinterest" class="text-xl"></iconify-icon></a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-[10px] text-gray-400 uppercase tracking-widest">&copy; 2024 Aurélia Carthage. Made with love in Tunisia.</p>
                    <div class="flex space-x-8 mt-4 md:mt-0">
                        <a href="#" id="footer-privacy" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Privacy</a>
                        <a href="#" id="footer-terms" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                        entry.target.style.opacity = '1';
                    }
                });
            }, observerOptions);

            document.querySelectorAll('section > div').forEach(el => {
                el.style.opacity = '0';
                observer.observe(el);
            });
        });
    </script>
</body>
</html>
```

Generate the HTML for "Shopping Cart".
- Preserve ALL persistent elements from source EXACTLY
- Only modify the dynamic content area (main-content)
- If source has NO persistent elements, focus on main-content transition only

## HTML Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AURÉLIA CARTHAGE | Shopping Bag</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <meta name="view-transition" content="same-origin">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa" as="document">
    <style>
        :root {
            --ivory: #FCFBF7;
            --gold: #C5A059;
            --black: #1A1A1A;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--ivory);
            color: var(--black);
            overflow-x: hidden;
        }
        h1, h2, h3, .serif {
            font-family: 'Cormorant Garamond', serif;
        }
        .tunisian-pattern-subtle {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5a059' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        @view-transition {
            navigation: auto;
        }

        ::view-transition-old(main-nav),
        ::view-transition-new(main-nav) {
            animation: none;
            mix-blend-mode: normal;
        }

        ::view-transition-old(main-content) {
            animation: 0.3s ease-out both fade-out;
        }
        ::view-transition-new(main-content) {
            animation: 0.3s ease-in 0.1s both fade-in;
        }

        @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

        .quantity-btn {
            transition: all 0.3s ease;
        }
        .quantity-btn:hover {
            background-color: rgba(197, 160, 89, 0.1);
        }
    </style>
</head>
<body>
    <div class="min-h-screen flex flex-col tunisian-pattern-subtle">
        <!-- Header Navigation (Persistent) -->
        <header class="fixed top-0 left-0 w-full z-50 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-black/5" style="view-transition-name: main-nav">
            <nav class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <div class="flex items-center space-x-8">
                    <a href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" id="nav-shop-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Shop</a>
                    <a href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" id="nav-collections-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Collections</a>
                </div>
                
                <div class="flex flex-col items-center">
                    <a href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" id="nav-brand-logo" class="text-3xl tracking-[0.3em] font-light serif uppercase">Aurélia</a>
                    <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1">Carthage</span>
                </div>
                
                <div class="flex items-center space-x-6">
                    <a href="#search" id="nav-search-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:search" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#profile" id="nav-account-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:user" class="text-lg"></iconify-icon>
                    </a>
                    <a href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" id="nav-cart-link" class="hover:text-[#C5A059] transition-colors relative active text-[#C5A059]">
                        <iconify-icon icon="lucide:shopping-bag" class="text-lg"></iconify-icon>
                        <span class="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">2</span>
                    </a>
                </div>
            </nav>
        </header>

        <!-- Shopping Cart Content (Dynamic) -->
        <main style="view-transition-name: main-content" class="flex-grow pt-32 pb-24">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="flex flex-col md:flex-row justify-between items-baseline mb-12">
                    <div>
                        <nav class="flex mb-4 text-[10px] uppercase tracking-widest text-gray-400">
                            <a href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" id="breadcrumb-home" class="hover:text-black">Home</a>
                            <span class="mx-2">/</span>
                            <span class="text-black">Shopping Bag</span>
                        </nav>
                        <h1 class="text-5xl font-light serif italic">Your Shopping Bag</h1>
                    </div>
                    <a href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" id="continue-shopping" class="text-[10px] uppercase tracking-[0.2em] border-b border-black/20 pb-1 hover:border-black transition-all">Continue Shopping</a>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <!-- Cart Items -->
                    <div class="lg:col-span-8">
                        <div class="border-t border-black/5">
                            <!-- Item 1 -->
                            <div class="flex py-10 border-b border-black/5 items-center">
                                <div class="w-32 h-40 bg-white overflow-hidden flex-shrink-0">
                                    <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600" alt="Jasmine Earring" class="w-full h-full object-cover">
                                </div>
                                <div class="ml-8 flex-grow">
                                    <div class="flex justify-between">
                                        <div>
                                            <h3 class="text-xl font-light serif">Jasmine of Carthage Earrings</h3>
                                            <p class="text-xs text-[#C5A059] uppercase tracking-widest mt-1 italic">18k Yellow Gold & Pure Pearl</p>
                                        </div>
                                        <p class="text-lg font-light">850 TND</p>
                                    </div>
                                    <div class="mt-8 flex items-center justify-between">
                                        <div class="flex items-center border border-black/10 rounded-full">
                                            <button class="quantity-btn w-8 h-8 flex items-center justify-center text-sm font-light border-r border-black/10">-</button>
                                            <span class="px-4 text-xs font-light">1</span>
                                            <button class="quantity-btn w-8 h-8 flex items-center justify-center text-sm font-light border-l border-black/10">+</button>
                                        </div>
                                        <button id="remove-item-1" class="text-[10px] uppercase tracking-widest text-gray-400 hover:text-red-800 transition-colors flex items-center gap-2">
                                            <iconify-icon icon="lucide:trash-2"></iconify-icon>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Item 2 -->
                            <div class="flex py-10 border-b border-black/5 items-center">
                                <div class="w-32 h-40 bg-white overflow-hidden flex-shrink-0">
                                    <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600" alt="Filigree Ring" class="w-full h-full object-cover">
                                </div>
                                <div class="ml-8 flex-grow">
                                    <div class="flex justify-between">
                                        <div>
                                            <h3 class="text-xl font-light serif">Medina Silhouettes Ring</h3>
                                            <p class="text-xs text-[#C5A059] uppercase tracking-widest mt-1 italic">Handcrafted Arabesque Filigree</p>
                                        </div>
                                        <p class="text-lg font-light">1,200 TND</p>
                                    </div>
                                    <div class="mt-8 flex items-center justify-between">
                                        <div class="flex items-center border border-black/10 rounded-full">
                                            <button class="quantity-btn w-8 h-8 flex items-center justify-center text-sm font-light border-r border-black/10">-</button>
                                            <span class="px-4 text-xs font-light">1</span>
                                            <button class="quantity-btn w-8 h-8 flex items-center justify-center text-sm font-light border-l border-black/10">+</button>
                                        </div>
                                        <button id="remove-item-2" class="text-[10px] uppercase tracking-widest text-gray-400 hover:text-red-800 transition-colors flex items-center gap-2">
                                            <iconify-icon icon="lucide:trash-2"></iconify-icon>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Extra Detail -->
                        <div class="mt-12 p-8 border border-[#C5A059]/10 bg-white/50 backdrop-blur-sm flex items-start gap-6">
                            <iconify-icon icon="ph:hand-eye-light" class="text-4xl text-[#C5A059]"></iconify-icon>
                            <div>
                                <h4 class="text-sm uppercase tracking-widest font-medium mb-2">Handmade Just For You</h4>
                                <p class="text-xs text-gray-500 font-light leading-relaxed">As each piece is individually handcrafted in our Tunis Medina workshop, please allow 3-5 business days for final refinement before shipping. Your jewelry carries the soul of Tunisian craftsmanship.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Summary Panel -->
                    <div class="lg:col-span-4">
                        <div class="bg-white border border-black/5 p-8 sticky top-32">
                            <h2 class="text-2xl font-light serif mb-8">Order Summary</h2>
                            
                            <div class="space-y-4 mb-8">
                                <div class="flex justify-between text-sm font-light">
                                    <span class="text-gray-500">Subtotal</span>
                                    <span>2,050 TND</span>
                                </div>
                                <div class="flex justify-between text-sm font-light">
                                    <span class="text-gray-500">Shipping (Tunis Medina to World)</span>
                                    <span class="text-[#C5A059]">Calculated at next step</span>
                                </div>
                                <div class="flex justify-between text-sm font-light border-t border-black/5 pt-4">
                                    <span class="text-black font-medium">Estimated Total</span>
                                    <span class="text-xl font-light">2,050 TND</span>
                                </div>
                            </div>

                            <div class="mb-8">
                                <label for="promo" class="text-[10px] uppercase tracking-widest text-gray-400 block mb-2">Promotional Code</label>
                                <div class="flex border-b border-black/10 focus-within:border-[#C5A059] transition-colors">
                                    <input type="text" id="promo" class="w-full py-2 bg-transparent focus:outline-none text-sm font-light" placeholder="Enter code">
                                    <button class="text-[10px] uppercase tracking-widest hover:text-[#C5A059] transition-colors">Apply</button>
                                </div>
                            </div>

                            <a href="https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a" id="checkout-btn" class="w-full bg-[#1A1A1A] text-white py-5 text-xs uppercase tracking-[0.3em] font-medium hover:bg-[#C5A059] transition-all duration-300 text-center block">
                                Proceed to Checkout
                            </a>

                            <div class="mt-8 space-y-4">
                                <div class="flex items-center gap-3 text-[10px] text-gray-400 uppercase tracking-widest">
                                    <iconify-icon icon="lucide:shield-check" class="text-sm"></iconify-icon>
                                    <span>Secure Payment Encrypted</span>
                                </div>
                                <div class="flex items-center gap-3 text-[10px] text-gray-400 uppercase tracking-widest">
                                    <iconify-icon icon="lucide:truck" class="text-sm"></iconify-icon>
                                    <span>Insured Global Delivery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer (Persistent) -->
        <footer class="bg-white border-t border-black/5 pt-20 pb-10">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div class="col-span-1 md:col-span-1">
                        <div class="mb-6">
                            <a href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" class="text-3xl tracking-[0.3em] font-light serif uppercase block">Aurélia</a>
                            <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1 block">Carthage</span>
                        </div>
                        <p class="text-sm text-gray-500 font-light leading-relaxed">
                            Authentic Tunisian jewelry crafted with passion since 1988. From the Medina to your heart.
                        </p>
                    </div>
                    
                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Artisan Care</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#shipping" id="footer-shipping" class="hover:text-[#C5A059] transition-colors">International Delivery</a></li>
                            <li><a href="#warranty" id="footer-warranty" class="hover:text-[#C5A059] transition-colors">Goldsmith Warranty</a></li>
                            <li><a href="#repairs" id="footer-repairs" class="hover:text-[#C5A059] transition-colors">Atelier Repairs</a></li>
                            <li><a href="#sizing" id="footer-sizing" class="hover:text-[#C5A059] transition-colors">Sizing Guide</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Our Heritage</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#heritage" id="footer-about" class="hover:text-[#C5A059] transition-colors">The Tunisian Atelier</a></li>
                            <li><a href="#ethics" id="footer-ethics" class="hover:text-[#C5A059] transition-colors">Ethical Sourcing</a></li>
                            <li><a href="#journal" id="footer-journal" class="hover:text-[#C5A059] transition-colors">Tunis Journal</a></li>
                            <li><a href="#stores" id="footer-stores" class="hover:text-[#C5A059] transition-colors">Tunis Boutique</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Connect</h5>
                        <div class="flex space-x-6">
                            <a href="#instagram" id="footer-ig" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:instagram" class="text-xl"></iconify-icon></a>
                            <a href="#facebook" id="footer-fb" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:facebook" class="text-xl"></iconify-icon></a>
                            <a href="#pinterest" id="footer-pin" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:pinterest" class="text-xl"></iconify-icon></a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-[10px] text-gray-400 uppercase tracking-widest">&copy; 2024 Aurélia Carthage. Made with love in Tunisia.</p>
                    <div class="flex space-x-8 mt-4 md:mt-0">
                        <a href="#privacy" id="footer-privacy" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Privacy</a>
                        <a href="#terms" id="footer-terms" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>
```

---
Please reference this design when implementing the component.

Secure Checkout:
# Design Reference

## Original Prompt
## Page to Generate: Checkout

Collect shipping address, select delivery method, enter payment details, and confirm order

## Flow Context
Tunisian jewelry e-commerce website

## Available Page Links for Navigation

Use these exact URLs for navigation links between pages in this flow:

- "AURÉLIA CARTHAGE | Tunisian Artisanal Excellence": https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db
- "Product Collection": https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c
- "Product Detail": https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8
- "Shopping Cart": https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3
- "Checkout" (current page): https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a
- "Order Confirmation": https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa

**Navigation Link Instructions:**
1. For <a> tags that navigate between pages in this flow, use the URLs above as href values
2. Mark the current page as "active" in navigation elements (add "active" class or similar styling)
3. The navigation should allow users to move between all pages in this flow
4. Keep all other links (external, social media, etc.) unchanged from the source

## Semantic Hash Placeholders for Future Links

For links to pages that are NOT listed above (pages not yet created or outside this flow), use semantic hash placeholders in kebab-case format:

**Common Placeholders:**
- Dashboard/Home: `#dashboard` or `#home`
- Settings: `#settings`
- Profile: `#profile` or `#user-profile`
- Notifications: `#notifications`
- Search: `#search`
- [Feature Name]: `#feature-name` (always use kebab-case)

**Examples:**
```html
<a href="#settings" id="nav-settings-link">Settings</a>
<a href="#user-profile" id="nav-profile-link">Profile</a>
<a href="#billing" id="nav-billing-link">Billing</a>
```

These semantic hashes make it easy to search and replace when target pages are created later. Always use descriptive, meaningful names that reflect the destination page's purpose.

## Prefetch Optimization

Add these prefetch links in <head> to improve navigation performance:
```html
<link rel="prefetch" href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa" as="document">
```
This allows the browser to pre-load linked pages during idle time, making navigation nearly instant.

## CRITICAL: View Transition API - SPA-LIKE SMOOTH TRANSITIONS

**MANDATORY**: All flow pages MUST implement View Transition API for silky smooth page-to-page transitions.

### Step 1: Identify Persistent Elements in Source Page

Scan the source page for elements that should remain **unchanged** across pages:
- Navigation components (top nav, bottom tabs, side menu, breadcrumbs)
- Brand elements (logo, app title)
- Global UI (toolbars, status bars, floating buttons, dock)
- User context (profile widget, notifications badge)
- Any element with existing `view-transition-name` declarations

**Key test**: "Would this element look identical on other pages?" → If yes, it's persistent.

### Step 2: Implementation

1. **Enable View Transitions**: Add meta tag in <head>:
   `<meta name="view-transition" content="same-origin">`

2. **CSS Setup** - Match source page's transition names:
   ```css
   /* Prevent white flash */
   html {
       background-color: #0a0a0a; /* Match page background */
   }
   @view-transition { navigation: auto; }
   ::view-transition { background-color: #0a0a0a; }

   /* For EACH persistent element found in source */
   /* Use the SAME view-transition-name as source page */
   ::view-transition-old([name]),
   ::view-transition-new([name]) {
       animation: none;
       mix-blend-mode: normal;
   }

   /* Dynamic content - animate */
   ::view-transition-old(main-content) {
       animation: 0.25s ease-out both fade-out;
   }
   ::view-transition-new(main-content) {
       animation: 0.25s ease-in 0.1s both fade-in;
   }

   @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
   @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

   ::view-transition-old(root),
   ::view-transition-new(root) {
       animation: none;
       mix-blend-mode: normal;
   }
   ```

3. **Apply view-transition-name**:
   - Copy ALL `view-transition-name` declarations from source page
   - Use the EXACT SAME names for corresponding elements
   - Always apply `main-content` to the primary dynamic area

### Examples

Source has nav + brand + content:
```html
<nav style="view-transition-name: main-nav"><!-- Copy exactly --></nav>
<div style="view-transition-name: brand"><!-- Copy exactly --></div>
<main style="view-transition-name: main-content"><!-- New content --></main>
```

Source has only content (no persistent UI):
```html
<main style="view-transition-name: main-content"><!-- All content --></main>
```

## CRITICAL: view-transition-name Alignment & Content Consistency

### Step 1: Identify Persistent vs Dynamic Elements

Analyze the source page and classify each major element:

**Persistent Elements** (should stay static during transitions):
- Elements that appear in the same position across multiple pages
- Elements whose content remains unchanged between pages
- Examples: navigation bars, brand logos, toolbars, status indicators, floating action buttons, breadcrumbs, user profile widgets, tab bars, dock menus

**Dynamic Elements** (should animate during transitions):
- Elements whose content changes based on the current page
- Page-specific content areas
- Examples: main content, page titles, article bodies, form content, data displays

**Key Question**: "Would this element's content be identical on the next page?"
- Yes → Persistent (apply view-transition-name, keep static)
- No → Dynamic (animate with crossfade)

### Step 2: Apply view-transition-name Based on Analysis

For each **persistent element** identified:
- Assign a semantic view-transition-name (e.g., `nav`, `brand`, `toolbar`, `user-widget`)
- Use descriptive names that reflect the element's purpose
- Add CSS rules to keep these elements static (no animation)

For the **primary dynamic area**:
- Apply `view-transition-name: main-content`
- This is typically the largest content area that changes between pages

**If NO persistent elements exist** (single-page designs, modals, focused UIs):
- Only apply `main-content` to the primary area
- Skip static element rules entirely

### Naming Requirements
- Match the EXACT names used in the source page if already defined
- Use the SAME declaration style (inline vs CSS class) as source
- Choose semantic, descriptive names for new transitions

### Content Consistency for Persistent Elements
**CRITICAL**: Elements sharing the same view-transition-name MUST have IDENTICAL content.

- Copy the HTML **exactly** from the source page
- Keep all text, icons, and structure identical
- Only **state indicators** (active tab, current page highlight) can differ

### Why This Matters
Identical content → Browser treats element as unchanged → Rock-solid, no morphing
Different content → Browser morphs between states → Visible flickering/distortion

**WHY**: Persistent elements stay rock-solid. Only dynamic content crossfades. No white flash, no morphing artifacts.

## CRITICAL: Persistent Element Content MUST Be Identical

### Step 1: Identify Persistent Elements in Source Page

Scan the source for elements that should remain **unchanged** across pages:

**Common persistent elements** (not exhaustive):
- Navigation (top nav, bottom tabs, side menu, breadcrumbs, pagination)
- Brand (logo, app title, tagline)
- Global UI (toolbar, status bar, floating action button, dock, minimap)
- User context (profile widget, avatar, notifications, settings toggle)
- Decorative (background patterns, ambient animations)

**Key test**: "Would this element's content be identical on the next page?"
- Yes → Persistent element (must be copied exactly)
- No → Dynamic element (can change)

**Some pages have NO persistent elements** - that's perfectly valid for:
- Landing pages, single-purpose views, modals, focused task UIs

### Step 2: Rules for Persistent Elements

For EVERY persistent element identified:
- Copy the HTML **exactly** from the source page
- Keep all text, icons, structure identical
- Only **state indicators** can differ (active tab, current page highlight)

### Step 3: Page-Specific Content Placement

All page-specific content belongs in the **dynamic area** (main-content):

```html
<main style="view-transition-name: main-content">
    <!-- Page title, back button if needed -->
    <div class="page-header">
        <a href="./home.html">Back</a>
        <h1>Page Title</h1>
    </div>
    <!-- Page-specific content -->
</main>
```

### Why Content Must Be Identical

**Identical content** → Browser treats as unchanged → Rock-solid, no animation
**Different content** → Browser morphs between states → Visible flickering

This is the fundamental principle of View Transitions: persistent elements stay put, only dynamic content animates.

## CRITICAL: Analyze Source Page First

### Step 1: Identify Persistent vs Dynamic Elements

Scan the source page and classify each major element:

**Persistent** (unchanged across pages):
- Elements with `view-transition-name` that disable animation
- Navigation, brand, toolbars, user widgets, status indicators, etc.
- Any element whose content would be identical on other pages

**Dynamic** (changes per page):
- Main content area
- Page-specific data, titles, forms

### Step 2: Preserve Persistent Elements Exactly

For EVERY persistent element found in source:
- Copy the EXACT same HTML structure
- Keep all text, icons, structure identical
- Only state indicators can differ (active tab, current highlight)

**WHY**: These pages belong to the SAME application flow. Inconsistent persistent elements break user experience and cause View Transition morphing artifacts.

## Visual Consistency Requirements
- Use the EXACT same color palette, typography, and spacing
- Follow the same component styling patterns
- Maintain the same responsive behavior and layout grid
- ONLY the dynamic area (main-content) should change

## CRITICAL: view-transition-name Alignment & Content Consistency

### Step 1: Identify Persistent vs Dynamic Elements

Analyze the source page and classify each major element:

**Persistent Elements** (should stay static during transitions):
- Elements that appear in the same position across multiple pages
- Elements whose content remains unchanged between pages
- Examples: navigation bars, brand logos, toolbars, status indicators, floating action buttons, breadcrumbs, user profile widgets, tab bars, dock menus

**Dynamic Elements** (should animate during transitions):
- Elements whose content changes based on the current page
- Page-specific content areas
- Examples: main content, page titles, article bodies, form content, data displays

**Key Question**: "Would this element's content be identical on the next page?"
- Yes → Persistent (apply view-transition-name, keep static)
- No → Dynamic (animate with crossfade)

### Step 2: Apply view-transition-name Based on Analysis

For each **persistent element** identified:
- Assign a semantic view-transition-name (e.g., `nav`, `brand`, `toolbar`, `user-widget`)
- Use descriptive names that reflect the element's purpose
- Add CSS rules to keep these elements static (no animation)

For the **primary dynamic area**:
- Apply `view-transition-name: main-content`
- This is typically the largest content area that changes between pages

**If NO persistent elements exist** (single-page designs, modals, focused UIs):
- Only apply `main-content` to the primary area
- Skip static element rules entirely

### Naming Requirements
- Match the EXACT names used in the source page if already defined
- Use the SAME declaration style (inline vs CSS class) as source
- Choose semantic, descriptive names for new transitions

### Content Consistency for Persistent Elements
**CRITICAL**: Elements sharing the same view-transition-name MUST have IDENTICAL content.

- Copy the HTML **exactly** from the source page
- Keep all text, icons, and structure identical
- Only **state indicators** (active tab, current page highlight) can differ

### Why This Matters
Identical content → Browser treats element as unchanged → Rock-solid, no morphing
Different content → Browser morphs between states → Visible flickering/distortion

## What You CAN Change
- Main content area (primary dynamic section)
- Page-specific components within content area
- Content text and data
- Active state indicators on persistent elements

## What You CANNOT Change
- ANY element marked with `view-transition-name` (except main-content)
- Structure, text, icons of persistent elements
- Global CSS variables and theme colors
- View transition naming conventions from source

### Source Page HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AURÉLIA CARTHAGE | Tunisian Artisanal Excellence</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <meta name="view-transition" content="same-origin">
    <style>
        :root {
            --ivory: #FCFBF7;
            --gold: #C5A059;
            --black: #1A1A1A;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--ivory);
            color: var(--black);
            overflow-x: hidden;
        }
        h1, h2, h3, .serif {
            font-family: 'Cormorant Garamond', serif;
        }
        .tunisian-pattern-subtle {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5a059' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .gold-border {
            border-color: rgba(197, 160, 89, 0.3);
        }
        .fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .reveal-delay-1 { animation-delay: 0.2s; }
        .reveal-delay-2 { animation-delay: 0.4s; }
        .reveal-delay-3 { animation-delay: 0.6s; }
        
        ::view-transition-old(main-content) {
            animation: 0.3s ease-out both fade-out;
        }
        ::view-transition-new(main-content) {
            animation: 0.3s ease-in 0.1s both fade-in;
        }
        @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

        .hover-lift {
            transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hover-lift:hover {
            transform: translateY(-8px);
        }
        .image-zoom-container {
            overflow: hidden;
        }
        .image-zoom-container img {
            transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .image-zoom-container:hover img {
            transform: scale(1.05);
        }
        .arabesque-accent {
            position: relative;
        }
        .arabesque-accent::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 2px;
            background: var(--gold);
            opacity: 0.5;
        }
    </style>
</head>
<body>
    <div class="min-h-screen flex flex-col tunisian-pattern-subtle">
        <!-- Header Navigation -->
        <header class="fixed top-0 left-0 w-full z-50 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-black/5" style="view-transition-name: main-nav">
            <nav class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <div class="flex items-center space-x-8">
                    <a href="#" id="nav-shop-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Shop</a>
                    <a href="#" id="nav-collections-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Collections</a>
                </div>
                
                <div class="flex flex-col items-center">
                    <a href="#" id="nav-brand-logo" class="text-3xl tracking-[0.3em] font-light serif uppercase">Aurélia</a>
                    <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1">Carthage</span>
                </div>
                
                <div class="flex items-center space-x-6">
                    <a href="#" id="nav-search-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:search" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#" id="nav-account-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:user" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#" id="nav-cart-link" class="hover:text-[#C5A059] transition-colors relative">
                        <iconify-icon icon="lucide:shopping-bag" class="text-lg"></iconify-icon>
                        <span class="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">0</span>
                    </a>
                </div>
            </nav>
        </header>

        <main style="view-transition-name: main-content" class="flex-grow pt-20">
            
            <!-- Hero Section -->
            <section class="relative h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-12">
                <div class="absolute inset-0 z-0">
                    <!-- Image suggesting Mediterranean/Tunisian luxury -->
                    <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=2000" alt="Tunisian Gold Jewelry" class="w-full h-full object-cover opacity-15">
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#FCFBF7]"></div>
                </div>
                <div class="relative z-10 text-center max-w-5xl fade-in-up">
                    <span class="text-xs uppercase tracking-[0.5em] mb-6 block text-[#C5A059] font-medium">Handcrafted in Tunisia • Since 1988</span>
                    <h1 class="text-6xl md:text-8xl font-light mb-8 leading-tight">
                        The soul of Tunis, <br><span class="italic serif">sculpted in gold.</span>
                    </h1>
                    <p class="text-lg max-w-2xl mx-auto mb-10 text-gray-600 font-light leading-relaxed">
                        Discover an ancestral legacy of artisanal brilliance, where the Mediterranean light meets the heritage of the Medina.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#" id="cta-hero-shop" class="bg-[#1A1A1A] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all duration-300">The Collection</a>
                        <a href="#" id="cta-hero-story" class="border border-[#1A1A1A] px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">Heritage</a>
                    </div>
                </div>
                <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                    <iconify-icon icon="tabler:inner-shadow-top-right" class="text-2xl text-[#C5A059]"></iconify-icon>
                </div>
            </section>

            <!-- Our Story Section -->
            <section class="py-32 bg-white relative overflow-hidden">
                <div class="absolute left-0 top-0 w-64 h-full opacity-[0.03] pointer-events-none">
                    <iconify-icon icon="gis:layer-o-map-o" class="text-[400px] -ml-20"></iconify-icon>
                </div>
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div class="image-zoom-container aspect-[3/4] relative">
                            <img src="https://images.unsplash.com/photo-1621350289139-445699709d73?auto=format&fit=crop&q=80&w=1200" alt="Artisan working in Tunis Medina" class="w-full h-full object-cover">
                            <div class="absolute -bottom-10 -right-10 hidden lg:block">
                                <div class="bg-[#FCFBF7] p-8 border border-black/5 shadow-xl max-w-xs">
                                    <span class="text-3xl font-light serif text-[#C5A059]">1988</span>
                                    <p class="text-sm text-gray-500 mt-2 italic">The year our first atelier opened in the heart of the Tunis Medina.</p>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-8">
                            <span class="text-xs uppercase tracking-[0.3em] text-[#C5A059]">Medina & Modernity</span>
                            <h2 class="text-5xl font-light leading-tight italic">A Legacy of Carthage</h2>
                            <div class="space-y-6 text-gray-600 font-light leading-relaxed">
                                <p>Aurélia Carthage was born from the timeless echoes of the Mediterranean. Inspired by the legendary Queen Elyssa and the refined gold-smithing traditions of ancient Carthage, we bridge the gap between ancestral craftsmanship and contemporary elegance.</p>
                                <p>Every piece is meticulously handmade in our Tunis workshop, where master artisans use techniques passed down through generations. From delicate filigree to bold geometric statements, our jewelry is a love letter to the Tunisian spirit.</p>
                            </div>
                            <div class="pt-4">
                                <a href="#" id="story-read-more" class="group flex items-center space-x-4 text-xs uppercase tracking-[0.2em] font-medium">
                                    <span>Our Artisanal Process</span>
                                    <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-2 transition-transform"></iconify-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Collections Showcase -->
            <section class="py-32 bg-[#FCFBF7] relative">
                <!-- Decorative accent -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <iconify-icon icon="hugeicons:star-01" class="text-4xl text-[#C5A059] opacity-30"></iconify-icon>
                </div>
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div class="max-w-xl">
                            <span class="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4 block">Curated Series</span>
                            <h2 class="text-5xl font-light">The Heritage Collections</h2>
                        </div>
                        <a href="#" id="collections-all-link" class="text-xs uppercase tracking-[0.2em] border-b border-black pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
                            View all series
                        </a>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <!-- Item 1 -->
                        <div class="group cursor-pointer">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000" alt="Jasmine Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Jasmine of Carthage</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">18k Yellow Gold & Pure Pearl</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Discover the Scent</p>
                            </div>
                        </div>

                        <!-- Item 2 -->
                        <div class="group cursor-pointer">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1611085583191-a3b130a88d4a?auto=format&fit=crop&q=80&w=1000" alt="Sahara Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Sahara Whispers</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">Textured Gold & Sandstone</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Explore the Sands</p>
                            </div>
                        </div>

                        <!-- Item 3 -->
                        <div class="group cursor-pointer">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000" alt="Medina Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Medina Silhouettes</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">Arabesque Filigree Rings</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Enter the Labyrinth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Why Choose Us / Craftsmanship -->
            <section class="py-32 bg-white border-y border-black/5">
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="text-center max-w-3xl mx-auto mb-20">
                        <h2 class="text-4xl font-light italic mb-6">Handcrafted Tunisian Excellence</h2>
                        <p class="text-gray-500 font-light">Every piece is a testament to the North African sun and the skilled hands of our local artisans.</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="solar:sun-2-linear" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Mediterranean Light</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">Our gold is finished with a unique satin texture that reflects the soft coastal light of Sidi Bou Said.</p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="ph:hand-eye-light" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Artisan Soul</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">Not a single machine is used in our assembly process. Every stone is set by hand in our Tunis atelier.</p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="icon-park-outline:traditional-chinese-medicine" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Cultural Continuity</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">We preserve traditional Tunisian jewelry forms while reinterpreting them for the modern world.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Newsletter Section -->
            <section class="py-32 bg-[#1A1A1A] text-white overflow-hidden relative">
                <div class="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <iconify-icon icon="hugeicons:diamond" class="text-[400px] text-[#C5A059]"></iconify-icon>
                </div>
                <div class="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <span class="text-xs uppercase tracking-[0.4em] text-[#C5A059] mb-6 block font-medium">Carthage Circle</span>
                    <h2 class="text-5xl font-light mb-8 serif">Join the Inner Circle</h2>
                    <p class="text-gray-400 font-light mb-12 text-lg">
                        Experience the heritage of Tunisia through our limited-run artisanal drops and stories from our workshops.
                    </p>
                    
                    <form class="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                        <input type="email" placeholder="Your email address" class="flex-grow bg-transparent border-b border-gray-700 py-4 px-2 focus:outline-none focus:border-[#C5A059] transition-colors text-white font-light">
                        <button type="submit" id="cta-subscribe-btn" class="bg-[#C5A059] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all duration-300">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

        </main>

        <!-- Footer -->
        <footer class="bg-white border-t border-black/5 pt-20 pb-10">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div class="col-span-1 md:col-span-1">
                        <div class="mb-6">
                            <a href="#" class="text-3xl tracking-[0.3em] font-light serif uppercase block">Aurélia</a>
                            <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1 block">Carthage</span>
                        </div>
                        <p class="text-sm text-gray-500 font-light leading-relaxed">
                            Authentic Tunisian jewelry crafted with passion since 1988. From the Medina to your heart.
                        </p>
                    </div>
                    
                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Artisan Care</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#" id="footer-shipping" class="hover:text-[#C5A059] transition-colors">International Delivery</a></li>
                            <li><a href="#" id="footer-warranty" class="hover:text-[#C5A059] transition-colors">Goldsmith Warranty</a></li>
                            <li><a href="#" id="footer-repairs" class="hover:text-[#C5A059] transition-colors">Atelier Repairs</a></li>
                            <li><a href="#" id="footer-sizing" class="hover:text-[#C5A059] transition-colors">Sizing Guide</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Our Heritage</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#" id="footer-about" class="hover:text-[#C5A059] transition-colors">The Tunisian Atelier</a></li>
                            <li><a href="#" id="footer-ethics" class="hover:text-[#C5A059] transition-colors">Ethical Sourcing</a></li>
                            <li><a href="#" id="footer-journal" class="hover:text-[#C5A059] transition-colors">Tunis Journal</a></li>
                            <li><a href="#" id="footer-stores" class="hover:text-[#C5A059] transition-colors">Tunis Boutique</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Connect</h5>
                        <div class="flex space-x-6">
                            <a href="#" id="footer-ig" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:instagram" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-fb" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:facebook" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-pin" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:pinterest" class="text-xl"></iconify-icon></a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-[10px] text-gray-400 uppercase tracking-widest">&copy; 2024 Aurélia Carthage. Made with love in Tunisia.</p>
                    <div class="flex space-x-8 mt-4 md:mt-0">
                        <a href="#" id="footer-privacy" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Privacy</a>
                        <a href="#" id="footer-terms" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                        entry.target.style.opacity = '1';
                    }
                });
            }, observerOptions);

            document.querySelectorAll('section > div').forEach(el => {
                el.style.opacity = '0';
                observer.observe(el);
            });
        });
    </script>
</body>
</html>
```

Generate the HTML for "Checkout".
- Preserve ALL persistent elements from source EXACTLY
- Only modify the dynamic content area (main-content)
- If source has NO persistent elements, focus on main-content transition only

## HTML Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AURÉLIA CARTHAGE | Secure Checkout</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <meta name="view-transition" content="same-origin">
    
    <!-- Prefetch for Flow Navigation -->
    <link rel="prefetch" href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa" as="document">

    <style>
        :root {
            --ivory: #FCFBF7;
            --gold: #C5A059;
            --black: #1A1A1A;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--ivory);
            color: var(--black);
            overflow-x: hidden;
        }
        h1, h2, h3, .serif {
            font-family: 'Cormorant Garamond', serif;
        }
        .tunisian-pattern-subtle {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5a059' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        /* View Transition Setup */
        @view-transition { navigation: auto; }
        
        ::view-transition-old(main-nav),
        ::view-transition-new(main-nav) {
            animation: none;
            mix-blend-mode: normal;
        }

        ::view-transition-old(main-content) {
            animation: 0.3s ease-out both fade-out;
        }
        ::view-transition-new(main-content) {
            animation: 0.3s ease-in 0.1s both fade-in;
        }
        @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

        .input-elegant {
            background: transparent;
            border: none;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            padding: 1rem 0;
            width: 100%;
            font-weight: 300;
            transition: border-color 0.3s ease;
        }
        .input-elegant:focus {
            outline: none;
            border-bottom: 1px solid var(--gold);
        }
        .input-elegant::placeholder {
            color: #A0A0A0;
            font-size: 0.875rem;
            letter-spacing: 0.05em;
        }

        .checkout-step {
            opacity: 0.3;
            transition: opacity 0.3s ease;
        }
        .checkout-step.active {
            opacity: 1;
        }
    </style>
</head>
<body>
    <div class="min-h-screen flex flex-col tunisian-pattern-subtle">
        
        <!-- PERSISTENT HEADER (Identical to Source) -->
        <header class="fixed top-0 left-0 w-full z-50 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-black/5" style="view-transition-name: main-nav">
            <nav class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <div class="flex items-center space-x-8">
                    <a href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" id="nav-shop-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Shop</a>
                    <a href="#" id="nav-collections-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Collections</a>
                </div>
                
                <div class="flex flex-col items-center">
                    <a href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" id="nav-brand-logo" class="text-3xl tracking-[0.3em] font-light serif uppercase">Aurélia</a>
                    <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1">Carthage</span>
                </div>
                
                <div class="flex items-center space-x-6">
                    <a href="#search" id="nav-search-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:search" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#profile" id="nav-account-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:user" class="text-lg"></iconify-icon>
                    </a>
                    <a href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" id="nav-cart-link" class="hover:text-[#C5A059] transition-colors relative">
                        <iconify-icon icon="lucide:shopping-bag" class="text-lg"></iconify-icon>
                        <span class="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">1</span>
                    </a>
                </div>
            </nav>
        </header>

        <!-- DYNAMIC MAIN CONTENT -->
        <main style="view-transition-name: main-content" class="flex-grow pt-32 pb-24">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                
                <!-- Checkout Header -->
                <div class="mb-12 text-center">
                    <h1 class="text-4xl font-light serif mb-4 italic">Checkout</h1>
                    <nav class="flex justify-center items-center space-x-4 text-[10px] uppercase tracking-[0.2em]">
                        <a href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" class="hover:text-[#C5A059]">Cart</a>
                        <iconify-icon icon="lucide:chevron-right" class="text-gray-300"></iconify-icon>
                        <span class="text-[#C5A059]">Shipping</span>
                        <iconify-icon icon="lucide:chevron-right" class="text-gray-300"></iconify-icon>
                        <span class="text-gray-400">Payment</span>
                    </nav>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    <!-- Left: Checkout Forms -->
                    <div class="lg:col-span-7">
                        <section class="mb-12">
                            <div class="flex justify-between items-center mb-8 border-b border-black/5 pb-4">
                                <h2 class="text-xs uppercase tracking-[0.2em] font-semibold">1. Contact Information</h2>
                                <p class="text-[10px] text-gray-500">Already have an account? <a href="#login" class="text-[#C5A059] border-b border-[#C5A059]/30">Login</a></p>
                            </div>
                            <div class="space-y-6">
                                <input type="email" placeholder="Email Address" class="input-elegant">
                                <div class="flex items-center space-x-2 py-2">
                                    <input type="checkbox" id="newsletter" class="accent-[#C5A059] border-gray-300 rounded">
                                    <label for="newsletter" class="text-xs font-light text-gray-500">Keep me updated on artisanal drops and stories from the Medina.</label>
                                </div>
                            </div>
                        </section>

                        <section class="mb-12">
                            <div class="mb-8 border-b border-black/5 pb-4">
                                <h2 class="text-xs uppercase tracking-[0.2em] font-semibold">2. Shipping Address</h2>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" placeholder="First Name" class="input-elegant">
                                <input type="text" placeholder="Last Name" class="input-elegant">
                                <div class="md:col-span-2">
                                    <input type="text" placeholder="Street Address" class="input-elegant">
                                </div>
                                <input type="text" placeholder="Apartment, Suite (Optional)" class="input-elegant">
                                <input type="text" placeholder="City" class="input-elegant">
                                <select class="input-elegant appearance-none bg-transparent cursor-pointer">
                                    <option value="tunisia">Tunisia</option>
                                    <option value="france">France</option>
                                    <option value="usa">United States</option>
                                    <option value="uae">United Arab Emirates</option>
                                </select>
                                <input type="text" placeholder="Postal Code" class="input-elegant">
                            </div>
                        </section>

                        <section class="mb-12">
                            <div class="mb-8 border-b border-black/5 pb-4">
                                <h2 class="text-xs uppercase tracking-[0.2em] font-semibold">3. Delivery Method</h2>
                            </div>
                            <div class="space-y-4">
                                <label class="flex items-center justify-between p-6 border border-black/10 hover:border-[#C5A059]/50 transition-colors cursor-pointer group">
                                    <div class="flex items-center space-x-4">
                                        <input type="radio" name="shipping" checked class="accent-[#C5A059]">
                                        <div>
                                            <p class="text-sm font-medium">Standard Medina Express</p>
                                            <p class="text-xs text-gray-400 font-light">3-5 business days across Tunisia</p>
                                        </div>
                                    </div>
                                    <span class="text-xs font-medium">Free</span>
                                </label>
                                <label class="flex items-center justify-between p-6 border border-black/10 hover:border-[#C5A059]/50 transition-colors cursor-pointer group">
                                    <div class="flex items-center space-x-4">
                                        <input type="radio" name="shipping" class="accent-[#C5A059]">
                                        <div>
                                            <p class="text-sm font-medium">Priority Carthage Courier</p>
                                            <p class="text-xs text-gray-400 font-light">Next business day delivery</p>
                                        </div>
                                    </div>
                                    <span class="text-xs font-medium">25 TND</span>
                                </label>
                            </div>
                        </section>

                        <section class="mb-12">
                            <div class="mb-8 border-b border-black/5 pb-4">
                                <h2 class="text-xs uppercase tracking-[0.2em] font-semibold">4. Payment</h2>
                            </div>
                            <div class="bg-white border border-black/5 p-8">
                                <div class="flex space-x-4 mb-8">
                                    <iconify-icon icon="logos:visa" class="text-2xl opacity-70"></iconify-icon>
                                    <iconify-icon icon="logos:mastercard" class="text-2xl opacity-70"></iconify-icon>
                                    <iconify-icon icon="logos:apple-pay" class="text-2xl opacity-70"></iconify-icon>
                                </div>
                                <div class="space-y-6">
                                    <input type="text" placeholder="Card Number" class="input-elegant">
                                    <div class="grid grid-cols-2 gap-6">
                                        <input type="text" placeholder="MM / YY" class="input-elegant">
                                        <input type="text" placeholder="CVV" class="input-elegant">
                                    </div>
                                    <input type="text" placeholder="Name on Card" class="input-elegant">
                                </div>
                            </div>
                        </section>

                        <div class="pt-8">
                            <a href="https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa" id="checkout-confirm-btn" class="w-full block text-center bg-[#1A1A1A] text-white py-6 text-xs uppercase tracking-[0.3em] font-medium hover:bg-[#C5A059] transition-all duration-500">
                                Confirm Order &amp; Pay
                            </a>
                            <p class="text-[10px] text-gray-400 text-center mt-6 uppercase tracking-widest">
                                Securely encrypted checkout. Your artisanal heritage awaits.
                            </p>
                        </div>
                    </div>

                    <!-- Right: Order Summary -->
                    <div class="lg:col-span-5">
                        <div class="sticky top-32">
                            <div class="bg-white border border-black/5 p-8 shadow-sm">
                                <h2 class="text-xs uppercase tracking-[0.2em] font-semibold mb-8 border-b border-black/5 pb-4">Order Summary</h2>
                                
                                <div class="space-y-8 mb-8">
                                    <!-- Item 1 -->
                                    <div class="flex space-x-4">
                                        <div class="w-24 h-32 bg-[#FCFBF7] flex-shrink-0 border border-black/5 overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=300" alt="Jasmine of Carthage" class="w-full h-full object-cover">
                                        </div>
                                        <div class="flex flex-col justify-between py-1">
                                            <div>
                                                <h4 class="text-sm font-medium mb-1">Jasmine of Carthage Necklace</h4>
                                                <p class="text-[10px] text-gray-400 uppercase tracking-widest">18k Yellow Gold / Pearl</p>
                                            </div>
                                            <p class="text-xs font-semibold">1,450 TND</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="space-y-4 pt-8 border-t border-black/5">
                                    <div class="flex justify-between text-xs font-light text-gray-500">
                                        <span>Subtotal</span>
                                        <span>1,450 TND</span>
                                    </div>
                                    <div class="flex justify-between text-xs font-light text-gray-500">
                                        <span>Shipping</span>
                                        <span class="italic">Calculated at next step</span>
                                    </div>
                                    <div class="flex justify-between text-xs font-light text-gray-500">
                                        <span>Heritage Tax (Included)</span>
                                        <span>0 TND</span>
                                    </div>
                                    <div class="flex justify-between text-lg font-medium pt-4 serif">
                                        <span>Total</span>
                                        <span class="italic">1,450 TND</span>
                                    </div>
                                </div>

                                <!-- Promo Code -->
                                <div class="mt-8">
                                    <div class="flex">
                                        <input type="text" placeholder="Promo Code" class="flex-grow border border-black/10 px-4 py-3 text-xs uppercase tracking-widest focus:outline-none focus:border-[#C5A059]">
                                        <button class="bg-black text-white px-6 text-xs uppercase tracking-widest">Apply</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Artisan Badge -->
                            <div class="mt-8 flex items-center space-x-4 p-6 border border-[#C5A059]/20 bg-[#FCFBF7]">
                                <iconify-icon icon="ph:seal-check-fill" class="text-2xl text-[#C5A059]"></iconify-icon>
                                <div>
                                    <p class="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C5A059]">Artisan Guaranteed</p>
                                    <p class="text-[10px] text-gray-500 font-light leading-relaxed">Every piece is hand-checked by our master goldsmith in the Tunis Medina.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- PERSISTENT FOOTER (Identical to Source) -->
        <footer class="bg-white border-t border-black/5 pt-20 pb-10">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div class="col-span-1 md:col-span-1">
                        <div class="mb-6">
                            <a href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" class="text-3xl tracking-[0.3em] font-light serif uppercase block">Aurélia</a>
                            <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1 block">Carthage</span>
                        </div>
                        <p class="text-sm text-gray-500 font-light leading-relaxed">
                            Authentic Tunisian jewelry crafted with passion since 1988. From the Medina to your heart.
                        </p>
                    </div>
                    
                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Artisan Care</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#shipping-info" id="footer-shipping" class="hover:text-[#C5A059] transition-colors">International Delivery</a></li>
                            <li><a href="#warranty" id="footer-warranty" class="hover:text-[#C5A059] transition-colors">Goldsmith Warranty</a></li>
                            <li><a href="#repairs" id="footer-repairs" class="hover:text-[#C5A059] transition-colors">Atelier Repairs</a></li>
                            <li><a href="#sizing" id="footer-sizing" class="hover:text-[#C5A059] transition-colors">Sizing Guide</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Our Heritage</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#about" id="footer-about" class="hover:text-[#C5A059] transition-colors">The Tunisian Atelier</a></li>
                            <li><a href="#ethics" id="footer-ethics" class="hover:text-[#C5A059] transition-colors">Ethical Sourcing</a></li>
                            <li><a href="#journal" id="footer-journal" class="hover:text-[#C5A059] transition-colors">Tunis Journal</a></li>
                            <li><a href="#stores" id="footer-stores" class="hover:text-[#C5A059] transition-colors">Tunis Boutique</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Connect</h5>
                        <div class="flex space-x-6">
                            <a href="#ig" id="footer-ig" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:instagram" class="text-xl"></iconify-icon></a>
                            <a href="#fb" id="footer-fb" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:facebook" class="text-xl"></iconify-icon></a>
                            <a href="#pin" id="footer-pin" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:pinterest" class="text-xl"></iconify-icon></a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-[10px] text-gray-400 uppercase tracking-widest">&copy; 2024 Aurélia Carthage. Made with love in Tunisia.</p>
                    <div class="flex space-x-8 mt-4 md:mt-0">
                        <a href="#privacy" id="footer-privacy" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Privacy</a>
                        <a href="#terms" id="footer-terms" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Form focus visual feedback
            const inputs = document.querySelectorAll('.input-elegant');
            inputs.forEach(input => {
                input.addEventListener('focus', () => {
                    input.parentElement.classList.add('border-[#C5A059]');
                });
                input.addEventListener('blur', () => {
                    input.parentElement.classList.remove('border-[#C5A059]');
                });
            });
        });
    </script>
</body>
</html>
```

---
Please reference this design when implementing the component.

Order Confirmation:
# Design Reference

## Original Prompt
## Page to Generate: Order Confirmation

Display order number, summary of purchased items, delivery timeline, and tracking information

## Flow Context
Tunisian jewelry e-commerce website

## Available Page Links for Navigation

Use these exact URLs for navigation links between pages in this flow:

- "AURÉLIA CARTHAGE | Tunisian Artisanal Excellence": https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db
- "Product Collection": https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c
- "Product Detail": https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8
- "Shopping Cart": https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3
- "Checkout": https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a
- "Order Confirmation" (current page): https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa

**Navigation Link Instructions:**
1. For <a> tags that navigate between pages in this flow, use the URLs above as href values
2. Mark the current page as "active" in navigation elements (add "active" class or similar styling)
3. The navigation should allow users to move between all pages in this flow
4. Keep all other links (external, social media, etc.) unchanged from the source

## Semantic Hash Placeholders for Future Links

For links to pages that are NOT listed above (pages not yet created or outside this flow), use semantic hash placeholders in kebab-case format:

**Common Placeholders:**
- Dashboard/Home: `#dashboard` or `#home`
- Settings: `#settings`
- Profile: `#profile` or `#user-profile`
- Notifications: `#notifications`
- Search: `#search`
- [Feature Name]: `#feature-name` (always use kebab-case)

**Examples:**
```html
<a href="#settings" id="nav-settings-link">Settings</a>
<a href="#user-profile" id="nav-profile-link">Profile</a>
<a href="#billing" id="nav-billing-link">Billing</a>
```

These semantic hashes make it easy to search and replace when target pages are created later. Always use descriptive, meaningful names that reflect the destination page's purpose.

## Prefetch Optimization

Add these prefetch links in <head> to improve navigation performance:
```html
<link rel="prefetch" href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a" as="document">
<link rel="prefetch" href="https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa" as="document">
```
This allows the browser to pre-load linked pages during idle time, making navigation nearly instant.

## CRITICAL: View Transition API - SPA-LIKE SMOOTH TRANSITIONS

**MANDATORY**: All flow pages MUST implement View Transition API for silky smooth page-to-page transitions.

### Step 1: Identify Persistent Elements in Source Page

Scan the source page for elements that should remain **unchanged** across pages:
- Navigation components (top nav, bottom tabs, side menu, breadcrumbs)
- Brand elements (logo, app title)
- Global UI (toolbars, status bars, floating buttons, dock)
- User context (profile widget, notifications badge)
- Any element with existing `view-transition-name` declarations

**Key test**: "Would this element look identical on other pages?" → If yes, it's persistent.

### Step 2: Implementation

1. **Enable View Transitions**: Add meta tag in <head>:
   `<meta name="view-transition" content="same-origin">`

2. **CSS Setup** - Match source page's transition names:
   ```css
   /* Prevent white flash */
   html {
       background-color: #0a0a0a; /* Match page background */
   }
   @view-transition { navigation: auto; }
   ::view-transition { background-color: #0a0a0a; }

   /* For EACH persistent element found in source */
   /* Use the SAME view-transition-name as source page */
   ::view-transition-old([name]),
   ::view-transition-new([name]) {
       animation: none;
       mix-blend-mode: normal;
   }

   /* Dynamic content - animate */
   ::view-transition-old(main-content) {
       animation: 0.25s ease-out both fade-out;
   }
   ::view-transition-new(main-content) {
       animation: 0.25s ease-in 0.1s both fade-in;
   }

   @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
   @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

   ::view-transition-old(root),
   ::view-transition-new(root) {
       animation: none;
       mix-blend-mode: normal;
   }
   ```

3. **Apply view-transition-name**:
   - Copy ALL `view-transition-name` declarations from source page
   - Use the EXACT SAME names for corresponding elements
   - Always apply `main-content` to the primary dynamic area

### Examples

Source has nav + brand + content:
```html
<nav style="view-transition-name: main-nav"><!-- Copy exactly --></nav>
<div style="view-transition-name: brand"><!-- Copy exactly --></div>
<main style="view-transition-name: main-content"><!-- New content --></main>
```

Source has only content (no persistent UI):
```html
<main style="view-transition-name: main-content"><!-- All content --></main>
```

## CRITICAL: view-transition-name Alignment & Content Consistency

### Step 1: Identify Persistent vs Dynamic Elements

Analyze the source page and classify each major element:

**Persistent Elements** (should stay static during transitions):
- Elements that appear in the same position across multiple pages
- Elements whose content remains unchanged between pages
- Examples: navigation bars, brand logos, toolbars, status indicators, floating action buttons, breadcrumbs, user profile widgets, tab bars, dock menus

**Dynamic Elements** (should animate during transitions):
- Elements whose content changes based on the current page
- Page-specific content areas
- Examples: main content, page titles, article bodies, form content, data displays

**Key Question**: "Would this element's content be identical on the next page?"
- Yes → Persistent (apply view-transition-name, keep static)
- No → Dynamic (animate with crossfade)

### Step 2: Apply view-transition-name Based on Analysis

For each **persistent element** identified:
- Assign a semantic view-transition-name (e.g., `nav`, `brand`, `toolbar`, `user-widget`)
- Use descriptive names that reflect the element's purpose
- Add CSS rules to keep these elements static (no animation)

For the **primary dynamic area**:
- Apply `view-transition-name: main-content`
- This is typically the largest content area that changes between pages

**If NO persistent elements exist** (single-page designs, modals, focused UIs):
- Only apply `main-content` to the primary area
- Skip static element rules entirely

### Naming Requirements
- Match the EXACT names used in the source page if already defined
- Use the SAME declaration style (inline vs CSS class) as source
- Choose semantic, descriptive names for new transitions

### Content Consistency for Persistent Elements
**CRITICAL**: Elements sharing the same view-transition-name MUST have IDENTICAL content.

- Copy the HTML **exactly** from the source page
- Keep all text, icons, and structure identical
- Only **state indicators** (active tab, current page highlight) can differ

### Why This Matters
Identical content → Browser treats element as unchanged → Rock-solid, no morphing
Different content → Browser morphs between states → Visible flickering/distortion

**WHY**: Persistent elements stay rock-solid. Only dynamic content crossfades. No white flash, no morphing artifacts.

## CRITICAL: Persistent Element Content MUST Be Identical

### Step 1: Identify Persistent Elements in Source Page

Scan the source for elements that should remain **unchanged** across pages:

**Common persistent elements** (not exhaustive):
- Navigation (top nav, bottom tabs, side menu, breadcrumbs, pagination)
- Brand (logo, app title, tagline)
- Global UI (toolbar, status bar, floating action button, dock, minimap)
- User context (profile widget, avatar, notifications, settings toggle)
- Decorative (background patterns, ambient animations)

**Key test**: "Would this element's content be identical on the next page?"
- Yes → Persistent element (must be copied exactly)
- No → Dynamic element (can change)

**Some pages have NO persistent elements** - that's perfectly valid for:
- Landing pages, single-purpose views, modals, focused task UIs

### Step 2: Rules for Persistent Elements

For EVERY persistent element identified:
- Copy the HTML **exactly** from the source page
- Keep all text, icons, structure identical
- Only **state indicators** can differ (active tab, current page highlight)

### Step 3: Page-Specific Content Placement

All page-specific content belongs in the **dynamic area** (main-content):

```html
<main style="view-transition-name: main-content">
    <!-- Page title, back button if needed -->
    <div class="page-header">
        <a href="./home.html">Back</a>
        <h1>Page Title</h1>
    </div>
    <!-- Page-specific content -->
</main>
```

### Why Content Must Be Identical

**Identical content** → Browser treats as unchanged → Rock-solid, no animation
**Different content** → Browser morphs between states → Visible flickering

This is the fundamental principle of View Transitions: persistent elements stay put, only dynamic content animates.

## CRITICAL: Analyze Source Page First

### Step 1: Identify Persistent vs Dynamic Elements

Scan the source page and classify each major element:

**Persistent** (unchanged across pages):
- Elements with `view-transition-name` that disable animation
- Navigation, brand, toolbars, user widgets, status indicators, etc.
- Any element whose content would be identical on other pages

**Dynamic** (changes per page):
- Main content area
- Page-specific data, titles, forms

### Step 2: Preserve Persistent Elements Exactly

For EVERY persistent element found in source:
- Copy the EXACT same HTML structure
- Keep all text, icons, structure identical
- Only state indicators can differ (active tab, current highlight)

**WHY**: These pages belong to the SAME application flow. Inconsistent persistent elements break user experience and cause View Transition morphing artifacts.

## Visual Consistency Requirements
- Use the EXACT same color palette, typography, and spacing
- Follow the same component styling patterns
- Maintain the same responsive behavior and layout grid
- ONLY the dynamic area (main-content) should change

## CRITICAL: view-transition-name Alignment & Content Consistency

### Step 1: Identify Persistent vs Dynamic Elements

Analyze the source page and classify each major element:

**Persistent Elements** (should stay static during transitions):
- Elements that appear in the same position across multiple pages
- Elements whose content remains unchanged between pages
- Examples: navigation bars, brand logos, toolbars, status indicators, floating action buttons, breadcrumbs, user profile widgets, tab bars, dock menus

**Dynamic Elements** (should animate during transitions):
- Elements whose content changes based on the current page
- Page-specific content areas
- Examples: main content, page titles, article bodies, form content, data displays

**Key Question**: "Would this element's content be identical on the next page?"
- Yes → Persistent (apply view-transition-name, keep static)
- No → Dynamic (animate with crossfade)

### Step 2: Apply view-transition-name Based on Analysis

For each **persistent element** identified:
- Assign a semantic view-transition-name (e.g., `nav`, `brand`, `toolbar`, `user-widget`)
- Use descriptive names that reflect the element's purpose
- Add CSS rules to keep these elements static (no animation)

For the **primary dynamic area**:
- Apply `view-transition-name: main-content`
- This is typically the largest content area that changes between pages

**If NO persistent elements exist** (single-page designs, modals, focused UIs):
- Only apply `main-content` to the primary area
- Skip static element rules entirely

### Naming Requirements
- Match the EXACT names used in the source page if already defined
- Use the SAME declaration style (inline vs CSS class) as source
- Choose semantic, descriptive names for new transitions

### Content Consistency for Persistent Elements
**CRITICAL**: Elements sharing the same view-transition-name MUST have IDENTICAL content.

- Copy the HTML **exactly** from the source page
- Keep all text, icons, and structure identical
- Only **state indicators** (active tab, current page highlight) can differ

### Why This Matters
Identical content → Browser treats element as unchanged → Rock-solid, no morphing
Different content → Browser morphs between states → Visible flickering/distortion

## What You CAN Change
- Main content area (primary dynamic section)
- Page-specific components within content area
- Content text and data
- Active state indicators on persistent elements

## What You CANNOT Change
- ANY element marked with `view-transition-name` (except main-content)
- Structure, text, icons of persistent elements
- Global CSS variables and theme colors
- View transition naming conventions from source

### Source Page HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AURÉLIA CARTHAGE | Tunisian Artisanal Excellence</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <meta name="view-transition" content="same-origin">
    <style>
        :root {
            --ivory: #FCFBF7;
            --gold: #C5A059;
            --black: #1A1A1A;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--ivory);
            color: var(--black);
            overflow-x: hidden;
        }
        h1, h2, h3, .serif {
            font-family: 'Cormorant Garamond', serif;
        }
        .tunisian-pattern-subtle {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5a059' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .gold-border {
            border-color: rgba(197, 160, 89, 0.3);
        }
        .fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .reveal-delay-1 { animation-delay: 0.2s; }
        .reveal-delay-2 { animation-delay: 0.4s; }
        .reveal-delay-3 { animation-delay: 0.6s; }
        
        ::view-transition-old(main-content) {
            animation: 0.3s ease-out both fade-out;
        }
        ::view-transition-new(main-content) {
            animation: 0.3s ease-in 0.1s both fade-in;
        }
        @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

        .hover-lift {
            transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hover-lift:hover {
            transform: translateY(-8px);
        }
        .image-zoom-container {
            overflow: hidden;
        }
        .image-zoom-container img {
            transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .image-zoom-container:hover img {
            transform: scale(1.05);
        }
        .arabesque-accent {
            position: relative;
        }
        .arabesque-accent::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 2px;
            background: var(--gold);
            opacity: 0.5;
        }
    </style>
</head>
<body>
    <div class="min-h-screen flex flex-col tunisian-pattern-subtle">
        <!-- Header Navigation -->
        <header class="fixed top-0 left-0 w-full z-50 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-black/5" style="view-transition-name: main-nav">
            <nav class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <div class="flex items-center space-x-8">
                    <a href="#" id="nav-shop-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Shop</a>
                    <a href="#" id="nav-collections-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Collections</a>
                </div>
                
                <div class="flex flex-col items-center">
                    <a href="#" id="nav-brand-logo" class="text-3xl tracking-[0.3em] font-light serif uppercase">Aurélia</a>
                    <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1">Carthage</span>
                </div>
                
                <div class="flex items-center space-x-6">
                    <a href="#" id="nav-search-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:search" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#" id="nav-account-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:user" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#" id="nav-cart-link" class="hover:text-[#C5A059] transition-colors relative">
                        <iconify-icon icon="lucide:shopping-bag" class="text-lg"></iconify-icon>
                        <span class="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">0</span>
                    </a>
                </div>
            </nav>
        </header>

        <main style="view-transition-name: main-content" class="flex-grow pt-20">
            
            <!-- Hero Section -->
            <section class="relative h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-12">
                <div class="absolute inset-0 z-0">
                    <!-- Image suggesting Mediterranean/Tunisian luxury -->
                    <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=2000" alt="Tunisian Gold Jewelry" class="w-full h-full object-cover opacity-15">
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#FCFBF7]"></div>
                </div>
                <div class="relative z-10 text-center max-w-5xl fade-in-up">
                    <span class="text-xs uppercase tracking-[0.5em] mb-6 block text-[#C5A059] font-medium">Handcrafted in Tunisia • Since 1988</span>
                    <h1 class="text-6xl md:text-8xl font-light mb-8 leading-tight">
                        The soul of Tunis, <br><span class="italic serif">sculpted in gold.</span>
                    </h1>
                    <p class="text-lg max-w-2xl mx-auto mb-10 text-gray-600 font-light leading-relaxed">
                        Discover an ancestral legacy of artisanal brilliance, where the Mediterranean light meets the heritage of the Medina.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#" id="cta-hero-shop" class="bg-[#1A1A1A] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all duration-300">The Collection</a>
                        <a href="#" id="cta-hero-story" class="border border-[#1A1A1A] px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">Heritage</a>
                    </div>
                </div>
                <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                    <iconify-icon icon="tabler:inner-shadow-top-right" class="text-2xl text-[#C5A059]"></iconify-icon>
                </div>
            </section>

            <!-- Our Story Section -->
            <section class="py-32 bg-white relative overflow-hidden">
                <div class="absolute left-0 top-0 w-64 h-full opacity-[0.03] pointer-events-none">
                    <iconify-icon icon="gis:layer-o-map-o" class="text-[400px] -ml-20"></iconify-icon>
                </div>
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div class="image-zoom-container aspect-[3/4] relative">
                            <img src="https://images.unsplash.com/photo-1621350289139-445699709d73?auto=format&fit=crop&q=80&w=1200" alt="Artisan working in Tunis Medina" class="w-full h-full object-cover">
                            <div class="absolute -bottom-10 -right-10 hidden lg:block">
                                <div class="bg-[#FCFBF7] p-8 border border-black/5 shadow-xl max-w-xs">
                                    <span class="text-3xl font-light serif text-[#C5A059]">1988</span>
                                    <p class="text-sm text-gray-500 mt-2 italic">The year our first atelier opened in the heart of the Tunis Medina.</p>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-8">
                            <span class="text-xs uppercase tracking-[0.3em] text-[#C5A059]">Medina & Modernity</span>
                            <h2 class="text-5xl font-light leading-tight italic">A Legacy of Carthage</h2>
                            <div class="space-y-6 text-gray-600 font-light leading-relaxed">
                                <p>Aurélia Carthage was born from the timeless echoes of the Mediterranean. Inspired by the legendary Queen Elyssa and the refined gold-smithing traditions of ancient Carthage, we bridge the gap between ancestral craftsmanship and contemporary elegance.</p>
                                <p>Every piece is meticulously handmade in our Tunis workshop, where master artisans use techniques passed down through generations. From delicate filigree to bold geometric statements, our jewelry is a love letter to the Tunisian spirit.</p>
                            </div>
                            <div class="pt-4">
                                <a href="#" id="story-read-more" class="group flex items-center space-x-4 text-xs uppercase tracking-[0.2em] font-medium">
                                    <span>Our Artisanal Process</span>
                                    <iconify-icon icon="lucide:arrow-right" class="group-hover:translate-x-2 transition-transform"></iconify-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Collections Showcase -->
            <section class="py-32 bg-[#FCFBF7] relative">
                <!-- Decorative accent -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <iconify-icon icon="hugeicons:star-01" class="text-4xl text-[#C5A059] opacity-30"></iconify-icon>
                </div>
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div class="max-w-xl">
                            <span class="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4 block">Curated Series</span>
                            <h2 class="text-5xl font-light">The Heritage Collections</h2>
                        </div>
                        <a href="#" id="collections-all-link" class="text-xs uppercase tracking-[0.2em] border-b border-black pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
                            View all series
                        </a>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <!-- Item 1 -->
                        <div class="group cursor-pointer">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000" alt="Jasmine Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Jasmine of Carthage</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">18k Yellow Gold & Pure Pearl</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Discover the Scent</p>
                            </div>
                        </div>

                        <!-- Item 2 -->
                        <div class="group cursor-pointer">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1611085583191-a3b130a88d4a?auto=format&fit=crop&q=80&w=1000" alt="Sahara Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Sahara Whispers</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">Textured Gold & Sandstone</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Explore the Sands</p>
                            </div>
                        </div>

                        <!-- Item 3 -->
                        <div class="group cursor-pointer">
                            <div class="image-zoom-container aspect-[4/5] bg-white mb-6">
                                <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000" alt="Medina Collection" class="w-full h-full object-cover">
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-light mb-1">Medina Silhouettes</h3>
                                <p class="text-sm text-[#C5A059] italic mb-4">Arabesque Filigree Rings</p>
                                <p class="text-xs uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Enter the Labyrinth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Why Choose Us / Craftsmanship -->
            <section class="py-32 bg-white border-y border-black/5">
                <div class="max-w-7xl mx-auto px-6 lg:px-12">
                    <div class="text-center max-w-3xl mx-auto mb-20">
                        <h2 class="text-4xl font-light italic mb-6">Handcrafted Tunisian Excellence</h2>
                        <p class="text-gray-500 font-light">Every piece is a testament to the North African sun and the skilled hands of our local artisans.</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="solar:sun-2-linear" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Mediterranean Light</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">Our gold is finished with a unique satin texture that reflects the soft coastal light of Sidi Bou Said.</p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="ph:hand-eye-light" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Artisan Soul</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">Not a single machine is used in our assembly process. Every stone is set by hand in our Tunis atelier.</p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-[#FCFBF7] border border-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <iconify-icon icon="icon-park-outline:traditional-chinese-medicine" class="text-2xl text-[#C5A059]"></iconify-icon>
                            </div>
                            <h4 class="text-xl font-medium serif">Cultural Continuity</h4>
                            <p class="text-sm text-gray-500 leading-relaxed font-light">We preserve traditional Tunisian jewelry forms while reinterpreting them for the modern world.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Newsletter Section -->
            <section class="py-32 bg-[#1A1A1A] text-white overflow-hidden relative">
                <div class="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <iconify-icon icon="hugeicons:diamond" class="text-[400px] text-[#C5A059]"></iconify-icon>
                </div>
                <div class="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
                    <span class="text-xs uppercase tracking-[0.4em] text-[#C5A059] mb-6 block font-medium">Carthage Circle</span>
                    <h2 class="text-5xl font-light mb-8 serif">Join the Inner Circle</h2>
                    <p class="text-gray-400 font-light mb-12 text-lg">
                        Experience the heritage of Tunisia through our limited-run artisanal drops and stories from our workshops.
                    </p>
                    
                    <form class="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                        <input type="email" placeholder="Your email address" class="flex-grow bg-transparent border-b border-gray-700 py-4 px-2 focus:outline-none focus:border-[#C5A059] transition-colors text-white font-light">
                        <button type="submit" id="cta-subscribe-btn" class="bg-[#C5A059] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all duration-300">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

        </main>

        <!-- Footer -->
        <footer class="bg-white border-t border-black/5 pt-20 pb-10">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div class="col-span-1 md:col-span-1">
                        <div class="mb-6">
                            <a href="#" class="text-3xl tracking-[0.3em] font-light serif uppercase block">Aurélia</a>
                            <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1 block">Carthage</span>
                        </div>
                        <p class="text-sm text-gray-500 font-light leading-relaxed">
                            Authentic Tunisian jewelry crafted with passion since 1988. From the Medina to your heart.
                        </p>
                    </div>
                    
                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Artisan Care</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#" id="footer-shipping" class="hover:text-[#C5A059] transition-colors">International Delivery</a></li>
                            <li><a href="#" id="footer-warranty" class="hover:text-[#C5A059] transition-colors">Goldsmith Warranty</a></li>
                            <li><a href="#" id="footer-repairs" class="hover:text-[#C5A059] transition-colors">Atelier Repairs</a></li>
                            <li><a href="#" id="footer-sizing" class="hover:text-[#C5A059] transition-colors">Sizing Guide</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Our Heritage</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#" id="footer-about" class="hover:text-[#C5A059] transition-colors">The Tunisian Atelier</a></li>
                            <li><a href="#" id="footer-ethics" class="hover:text-[#C5A059] transition-colors">Ethical Sourcing</a></li>
                            <li><a href="#" id="footer-journal" class="hover:text-[#C5A059] transition-colors">Tunis Journal</a></li>
                            <li><a href="#" id="footer-stores" class="hover:text-[#C5A059] transition-colors">Tunis Boutique</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Connect</h5>
                        <div class="flex space-x-6">
                            <a href="#" id="footer-ig" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:instagram" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-fb" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:facebook" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-pin" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:pinterest" class="text-xl"></iconify-icon></a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-[10px] text-gray-400 uppercase tracking-widest">&copy; 2024 Aurélia Carthage. Made with love in Tunisia.</p>
                    <div class="flex space-x-8 mt-4 md:mt-0">
                        <a href="#" id="footer-privacy" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Privacy</a>
                        <a href="#" id="footer-terms" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                        entry.target.style.opacity = '1';
                    }
                });
            }, observerOptions);

            document.querySelectorAll('section > div').forEach(el => {
                el.style.opacity = '0';
                observer.observe(el);
            });
        });
    </script>
</body>
</html>
```

Generate the HTML for "Order Confirmation".
- Preserve ALL persistent elements from source EXACTLY
- Only modify the dynamic content area (main-content)
- If source has NO persistent elements, focus on main-content transition only

## HTML Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AURÉLIA CARTHAGE | Order Confirmation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <meta name="view-transition" content="same-origin">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/9078d739-692b-4197-8e86-e131c32a68c8" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/a2069818-1777-4fb9-93e0-cfcb2c23390a" as="document">
    <link rel="prefetch" href="https://p.superdesign.dev/draft/7ec5f3e0-3682-4d6d-9853-b460bdd3b4aa" as="document">
    <style>
        :root {
            --ivory: #FCFBF7;
            --gold: #C5A059;
            --black: #1A1A1A;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--ivory);
            color: var(--black);
            overflow-x: hidden;
        }
        h1, h2, h3, h4, .serif {
            font-family: 'Cormorant Garamond', serif;
        }
        .tunisian-pattern-subtle {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5a059' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .gold-border {
            border-color: rgba(197, 160, 89, 0.3);
        }
        
        /* View Transitions */
        @view-transition { navigation: auto; }
        
        ::view-transition-old(main-nav),
        ::view-transition-new(main-nav) {
            animation: none;
            mix-blend-mode: normal;
        }

        ::view-transition-old(main-content) {
            animation: 0.3s ease-out both fade-out;
        }
        ::view-transition-new(main-content) {
            animation: 0.3s ease-in 0.1s both fade-in;
        }
        @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }

        .fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .progress-line {
            position: relative;
        }
        .progress-line::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 1px;
            background: rgba(197, 160, 89, 0.2);
            z-index: 0;
        }
        .tracking-dot {
            position: relative;
            z-index: 10;
        }
    </style>
</head>
<body>
    <div class="min-h-screen flex flex-col tunisian-pattern-subtle">
        <!-- Persistent Header Navigation (Copied Exactly) -->
        <header class="fixed top-0 left-0 w-full z-50 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-black/5" style="view-transition-name: main-nav">
            <nav class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <div class="flex items-center space-x-8">
                    <a href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" id="nav-shop-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Shop</a>
                    <a href="#collections" id="nav-collections-link" class="text-xs uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors">Collections</a>
                </div>
                
                <div class="flex flex-col items-center">
                    <a href="https://p.superdesign.dev/draft/9d633578-daaf-441e-861d-18e13c1d76db" id="nav-brand-logo" class="text-3xl tracking-[0.3em] font-light serif uppercase">Aurélia</a>
                    <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1">Carthage</span>
                </div>
                
                <div class="flex items-center space-x-6">
                    <a href="#search" id="nav-search-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:search" class="text-lg"></iconify-icon>
                    </a>
                    <a href="#account" id="nav-account-link" class="hover:text-[#C5A059] transition-colors">
                        <iconify-icon icon="lucide:user" class="text-lg"></iconify-icon>
                    </a>
                    <a href="https://p.superdesign.dev/draft/37f5a668-899f-4941-b954-6db58f5ad9b3" id="nav-cart-link" class="hover:text-[#C5A059] transition-colors relative">
                        <iconify-icon icon="lucide:shopping-bag" class="text-lg"></iconify-icon>
                        <span class="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">0</span>
                    </a>
                </div>
            </nav>
        </header>

        <!-- Main Content Area -->
        <main style="view-transition-name: main-content" class="flex-grow pt-32 pb-24">
            <div class="max-w-6xl mx-auto px-6 lg:px-12">
                
                <!-- Confirmation Hero -->
                <div class="text-center mb-16 fade-in-up">
                    <div class="w-16 h-16 bg-white border border-[#C5A059]/30 rounded-full flex items-center justify-center mx-auto mb-8">
                        <iconify-icon icon="lucide:check" class="text-2xl text-[#C5A059]"></iconify-icon>
                    </div>
                    <span class="text-xs uppercase tracking-[0.4em] text-[#C5A059] mb-4 block font-medium">Treasures of the Medina</span>
                    <h1 class="text-5xl md:text-6xl font-light mb-6">Your piece of heritage is <span class="italic serif">reserved.</span></h1>
                    <p class="text-gray-500 font-light max-w-xl mx-auto leading-relaxed">
                        Thank you for your order. Our master artisans in the heart of Tunis have begun preparing your selection with ancestral care.
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <!-- Order Details Column -->
                    <div class="lg:col-span-2 space-y-8">
                        
                        <!-- Shipping Status -->
                        <div class="bg-white p-8 border border-black/5 shadow-sm fade-in-up" style="animation-delay: 0.1s">
                            <div class="flex justify-between items-center mb-10">
                                <div class="space-y-1">
                                    <h4 class="text-xl font-medium serif">Order #AC-829104</h4>
                                    <p class="text-xs text-gray-400 uppercase tracking-widest">Status: Processing in Atelier</p>
                                </div>
                                <a href="#track-external" id="track-order-btn" class="text-[10px] uppercase tracking-widest border border-black/10 px-4 py-2 hover:bg-black hover:text-white transition-all">Track on DHL</a>
                            </div>

                            <div class="progress-line flex justify-between items-center px-4 mb-4">
                                <div class="flex flex-col items-center">
                                    <div class="tracking-dot w-3 h-3 bg-[#C5A059] rounded-full ring-4 ring-[#C5A059]/10"></div>
                                    <span class="text-[9px] uppercase tracking-tighter mt-4 font-bold">Confirmed</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="tracking-dot w-3 h-3 bg-[#C5A059] rounded-full ring-4 ring-[#C5A059]/10 animate-pulse"></div>
                                    <span class="text-[9px] uppercase tracking-tighter mt-4 font-medium">Atelier</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="tracking-dot w-3 h-3 bg-gray-200 rounded-full"></div>
                                    <span class="text-[9px] uppercase tracking-tighter mt-4 text-gray-400">Shipping</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="tracking-dot w-3 h-3 bg-gray-200 rounded-full"></div>
                                    <span class="text-[9px] uppercase tracking-tighter mt-4 text-gray-400">Delivered</span>
                                </div>
                            </div>
                        </div>

                        <!-- Shipping & Delivery Info -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-up" style="animation-delay: 0.2s">
                            <div class="bg-white p-8 border border-black/5">
                                <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6 flex items-center gap-2">
                                    <iconify-icon icon="lucide:map-pin" class="text-[#C5A059]"></iconify-icon>
                                    Delivery Address
                                </h5>
                                <div class="text-sm text-gray-500 font-light leading-relaxed">
                                    <p class="text-black font-medium mb-1">Sarah Mansour</p>
                                    <p>12 Rue du Lac Biwa</p>
                                    <p>Les Berges du Lac 1</p>
                                    <p>Tunis, 1053, Tunisia</p>
                                    <p class="mt-4">+216 22 456 789</p>
                                </div>
                            </div>
                            
                            <div class="bg-white p-8 border border-black/5">
                                <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6 flex items-center gap-2">
                                    <iconify-icon icon="lucide:truck" class="text-[#C5A059]"></iconify-icon>
                                    Delivery Timeline
                                </h5>
                                <div class="text-sm text-gray-500 font-light leading-relaxed">
                                    <p class="mb-2">Estimated Delivery:</p>
                                    <p class="text-black font-medium text-lg serif">Nov 24 – Nov 28</p>
                                    <p class="mt-4">Method: Premium Artisan Courier</p>
                                    <p>DHL International Express</p>
                                </div>
                            </div>
                        </div>

                        <!-- Help Section -->
                        <div class="flex items-center justify-between p-6 bg-[#1A1A1A] text-white fade-in-up" style="animation-delay: 0.3s">
                            <div class="flex items-center space-x-4">
                                <iconify-icon icon="lucide:help-circle" class="text-2xl text-[#C5A059]"></iconify-icon>
                                <div>
                                    <p class="text-xs font-medium uppercase tracking-widest">Need assistance with your piece?</p>
                                    <p class="text-[10px] text-gray-400 font-light uppercase tracking-widest mt-1">Our Tunis concierge is available 24/7</p>
                                </div>
                            </div>
                            <a href="#contact" id="support-link" class="text-[10px] uppercase tracking-widest border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all">Contact Us</a>
                        </div>
                    </div>

                    <!-- Order Summary Column -->
                    <div class="space-y-8 fade-in-up" style="animation-delay: 0.4s">
                        <div class="bg-white border border-black/5">
                            <div class="p-6 border-b border-black/5">
                                <h4 class="text-xl font-medium serif">Order Summary</h4>
                            </div>
                            
                            <div class="p-6 space-y-6 max-h-[400px] overflow-y-auto">
                                <!-- Item 1 -->
                                <div class="flex space-x-4">
                                    <div class="w-20 h-24 bg-[#FCFBF7] border border-black/5 overflow-hidden flex-shrink-0">
                                        <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=300" alt="Jasmine Ring" class="w-full h-full object-cover">
                                    </div>
                                    <div class="flex-grow">
                                        <h6 class="text-sm font-medium">Jasmine of Carthage Ring</h6>
                                        <p class="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Size: 54 / 18k Yellow Gold</p>
                                        <div class="flex justify-between items-end mt-4">
                                            <span class="text-[10px] text-gray-400">Qty: 1</span>
                                            <span class="text-sm font-light">1,450 TND</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Item 2 -->
                                <div class="flex space-x-4">
                                    <div class="w-20 h-24 bg-[#FCFBF7] border border-black/5 overflow-hidden flex-shrink-0">
                                        <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=300" alt="Medina Earrings" class="w-full h-full object-cover">
                                    </div>
                                    <div class="flex-grow">
                                        <h6 class="text-sm font-medium">Medina Filigree Earrings</h6>
                                        <p class="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Hand-woven Gold</p>
                                        <div class="flex justify-between items-end mt-4">
                                            <span class="text-[10px] text-gray-400">Qty: 1</span>
                                            <span class="text-sm font-light">2,100 TND</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-6 bg-[#FCFBF7] border-t border-black/5 space-y-3">
                                <div class="flex justify-between text-xs font-light text-gray-500">
                                    <span>Subtotal</span>
                                    <span>3,550 TND</span>
                                </div>
                                <div class="flex justify-between text-xs font-light text-gray-500">
                                    <span>Tunis Boutique Shipping</span>
                                    <span class="text-[#C5A059] italic">Complimentary</span>
                                </div>
                                <div class="flex justify-between text-xs font-light text-gray-500">
                                    <span>Vat (19%)</span>
                                    <span>674.5 TND</span>
                                </div>
                                <div class="flex justify-between text-lg font-medium serif pt-3 border-t border-black/5">
                                    <span>Total Amount</span>
                                    <span>4,224.5 TND</span>
                                </div>
                            </div>
                        </div>

                        <div class="text-center">
                            <a href="https://p.superdesign.dev/draft/76bc842b-1db9-4d27-a6e3-59f3935b737c" id="continue-shopping-btn" class="inline-block text-[10px] uppercase tracking-[0.3em] font-medium border-b border-black pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
                                Continue Your Discovery
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Persistent Footer (Copied Exactly) -->
        <footer class="bg-white border-t border-black/5 pt-20 pb-10">
            <div class="max-w-7xl mx-auto px-6 lg:px-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div class="col-span-1 md:col-span-1">
                        <div class="mb-6">
                            <a href="#" class="text-3xl tracking-[0.3em] font-light serif uppercase block">Aurélia</a>
                            <span class="text-[8px] uppercase tracking-[0.4em] text-[#C5A059] -mt-1 block">Carthage</span>
                        </div>
                        <p class="text-sm text-gray-500 font-light leading-relaxed">
                            Authentic Tunisian jewelry crafted with passion since 1988. From the Medina to your heart.
                        </p>
                    </div>
                    
                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Artisan Care</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#" id="footer-shipping" class="hover:text-[#C5A059] transition-colors">International Delivery</a></li>
                            <li><a href="#" id="footer-warranty" class="hover:text-[#C5A059] transition-colors">Goldsmith Warranty</a></li>
                            <li><a href="#" id="footer-repairs" class="hover:text-[#C5A059] transition-colors">Atelier Repairs</a></li>
                            <li><a href="#" id="footer-sizing" class="hover:text-[#C5A059] transition-colors">Sizing Guide</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Our Heritage</h5>
                        <ul class="space-y-4 text-sm text-gray-500 font-light">
                            <li><a href="#" id="footer-about" class="hover:text-[#C5A059] transition-colors">The Tunisian Atelier</a></li>
                            <li><a href="#" id="footer-ethics" class="hover:text-[#C5A059] transition-colors">Ethical Sourcing</a></li>
                            <li><a href="#" id="footer-journal" class="hover:text-[#C5A059] transition-colors">Tunis Journal</a></li>
                            <li><a href="#" id="footer-stores" class="hover:text-[#C5A059] transition-colors">Tunis Boutique</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 class="text-xs uppercase tracking-[0.2em] font-medium mb-6">Connect</h5>
                        <div class="flex space-x-6">
                            <a href="#" id="footer-ig" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:instagram" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-fb" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:facebook" class="text-xl"></iconify-icon></a>
                            <a href="#" id="footer-pin" class="text-gray-400 hover:text-[#C5A059] transition-colors"><iconify-icon icon="lucide:pinterest" class="text-xl"></iconify-icon></a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-[10px] text-gray-400 uppercase tracking-widest">&copy; 2024 Aurélia Carthage. Made with love in Tunisia.</p>
                    <div class="flex space-x-8 mt-4 md:mt-0">
                        <a href="#" id="footer-privacy" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Privacy</a>
                        <a href="#" id="footer-terms" class="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>
```

---
Please reference this design when implementing the component.

