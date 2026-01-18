import { lazy, Suspense } from 'react'
import { Toaster } from '@/components/ui/sonner'
import { VibeStackBadge } from '@/components/vibestack-badge'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'

// Lazy load below-the-fold sections for better initial page load performance
const Features = lazy(() => import('@/components/features').then(m => ({ default: m.Features })))
const TrustedBy = lazy(() => import('@/components/trusted-by').then(m => ({ default: m.TrustedBy })))
const FeeComparison = lazy(() => import('@/components/fee-comparison').then(m => ({ default: m.FeeComparison })))
const Footer = lazy(() => import('@/components/footer').then(m => ({ default: m.Footer })))

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center" aria-label="Loading content"><div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" /></div>}>
          <Features />
          <TrustedBy />
          <FeeComparison />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Toaster position="bottom-right" />
      <VibeStackBadge />
    </div>
  )
}

export default App
