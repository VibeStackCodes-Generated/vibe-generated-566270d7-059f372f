import { Toaster } from '@/components/ui/sonner'
import { VibeStackBadge } from '@/components/vibestack-badge'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { TrustedBy } from '@/components/trusted-by'
import { FeeComparison } from '@/components/fee-comparison'
import { Footer } from '@/components/footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Features />
      <TrustedBy />
      <FeeComparison />
      <Footer />
      <Toaster position="bottom-right" />
      <VibeStackBadge />
    </div>
  )
}

export default App
