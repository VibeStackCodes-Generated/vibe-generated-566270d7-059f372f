import { Toaster } from '@/components/ui/sonner'
import { VibeStackBadge } from '@/components/vibestack-badge'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { FeeComparison } from '@/components/fee-comparison'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Features />
      <FeeComparison />
      <Toaster position="bottom-right" />
      <VibeStackBadge />
    </div>
  )
}

export default App
