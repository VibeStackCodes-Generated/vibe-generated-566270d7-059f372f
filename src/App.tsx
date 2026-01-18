import { Toaster } from '@/components/ui/sonner'
import { VibeStackBadge } from '@/components/vibestack-badge'
import { Header } from '@/components/header'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto p-4 pt-32">
        <h1 className="text-3xl font-bold">Welcome to ApexTrade</h1>
        <p className="text-muted-foreground mt-2">
          Professional trading platform with real-time market data
        </p>
        <div className="h-[200vh] mt-8">
          <p className="text-muted-foreground">
            Scroll down to see the sticky header in action...
          </p>
        </div>
      </main>
      <Toaster position="bottom-right" />
      <VibeStackBadge />
    </div>
  )
}

export default App
