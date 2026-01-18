import { Toaster } from '@/components/ui/sonner'
import { VibeStackBadge } from '@/components/vibestack-badge'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Toaster position="bottom-right" />
      <VibeStackBadge />
    </div>
  )
}

export default App
