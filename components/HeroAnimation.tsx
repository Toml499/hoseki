'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'

const TOTAL_FRAMES = 80
const IMAGE_PREFIX = '/images/hero_animation/Whisk_cjzlztywgzm4ugm40yyjvmytqtmwqtljhjml1sz_'

function getFramePath(frameIndex: number): string {
  return `${IMAGE_PREFIX}${frameIndex.toString().padStart(3, '0')}.jpg`
}

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const currentFrameRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isReady, setIsReady] = useState(false)

  // Resize canvas to match container with device pixel ratio
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1

    // Set actual canvas dimensions accounting for device pixel ratio
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr

    // Scale context for crisp rendering on retina displays
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.scale(dpr, dpr)
    }
  }, [])

  // Draw frame to canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    const img = imagesRef.current[frameIndex]

    if (!canvas || !ctx || !img) return

    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1

    // Check if canvas needs resizing
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    // Clear previous frame
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Crop bottom 10% of source image to remove watermark
    const cropPercent = 0.10
    const sourceHeight = img.height * (1 - cropPercent)
    const sourceWidth = img.width

    // Draw image covering the canvas (object-cover behavior)
    const imgRatio = sourceWidth / sourceHeight
    const canvasRatio = rect.width / rect.height

    let drawWidth, drawHeight, drawX, drawY

    if (imgRatio > canvasRatio) {
      // Image is wider - fit height, crop width
      drawHeight = rect.height
      drawWidth = sourceWidth * (rect.height / sourceHeight)
      drawX = (rect.width - drawWidth) / 2
      drawY = 0
    } else {
      // Image is taller - fit width, crop height
      drawWidth = rect.width
      drawHeight = sourceHeight * (rect.width / sourceWidth)
      drawX = 0
      drawY = (rect.height - drawHeight) / 2
    }

    // Use 9-argument drawImage to crop source: (img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    ctx.drawImage(img, 0, 0, sourceWidth, sourceHeight, drawX, drawY, drawWidth, drawHeight)
  }, [])

  // Initialize canvas size on mount
  useEffect(() => {
    resizeCanvas()
  }, [resizeCanvas])

  // Preload and decode all images
  useEffect(() => {
    const loadImages = async () => {
      const images: HTMLImageElement[] = []

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new window.Image()
        img.src = getFramePath(i)

        await new Promise<void>((resolve) => {
          img.onload = async () => {
            // Pre-decode the image for faster rendering
            try {
              await img.decode()
            } catch {
              // Decode not supported, continue anyway
            }
            images.push(img)
            setLoadingProgress(Math.round(((i + 1) / TOTAL_FRAMES) * 100))
            resolve()
          }
          img.onerror = () => resolve()
        })
      }

      imagesRef.current = images
      setIsReady(true)

      // Draw first frame after a short delay to ensure canvas is sized
      requestAnimationFrame(() => {
        resizeCanvas()
        drawFrame(0)
      })
    }

    loadImages()
  }, [drawFrame, resizeCanvas])

  // Handle scroll-based animation with requestAnimationFrame
  useEffect(() => {
    if (!isReady) return

    let ticking = false

    const updateFrame = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const containerHeight = containerRef.current.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate scroll progress
      // Animation runs from when top of container hits top of viewport
      // to when bottom of container hits top of viewport
      const scrollableDistance = containerHeight - viewportHeight
      const scrolled = -rect.top

      // Progress: 0 when container top is at viewport top, 1 when we've scrolled through
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance))
      const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES))

      // Only redraw if frame changed
      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex
        drawFrame(frameIndex)
      }

      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(updateFrame)
        ticking = true
      }
    }

    const handleResize = () => {
      resizeCanvas()
      drawFrame(currentFrameRef.current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    updateFrame()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [isReady, drawFrame, resizeCanvas])

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full"
    >
      {/* Sticky container for the animation */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas for smooth frame rendering */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        {/* Loading overlay */}
        {!isReady && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-20">
            <div className="text-center text-white">
              <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold transition-all duration-150"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <p className="mt-4 text-sm tracking-widest uppercase opacity-60">
                Loading {loadingProgress}%
              </p>
            </div>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-ivory/90 pointer-events-none" />

        {/* Text content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 lg:px-12">
          <div className="text-center max-w-5xl fade-in-up">
            <span className="text-xs uppercase tracking-[0.5em] mb-6 block text-gold font-medium drop-shadow-lg">
              Handcrafted in Tunisia • Since 1988
            </span>
            <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight text-white drop-shadow-lg">
              The soul of Tunis, <br/>
              <span className="italic font-serif">sculpted in gold.</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-10 text-white/90 font-light leading-relaxed drop-shadow-md">
              Discover an ancestral legacy of artisanal brilliance, where the Mediterranean light meets the heritage of the Medina.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/collection"
                className="bg-white text-black px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-white transition-all duration-300"
              >
                The Collection
              </Link>
              <Link
                href="/about"
                className="border border-white text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
              >
                Heritage
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-6 h-6 text-white drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
