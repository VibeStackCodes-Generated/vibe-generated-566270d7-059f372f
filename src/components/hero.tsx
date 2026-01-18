import { CandlestickChart } from '@/components/candlestick-chart'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Animated Candlestick Chart Background */}
      <CandlestickChart />

      {/* Content Layer */}
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
            Trade Smarter,
            <br />
            Not Harder
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience professional-grade trading with real-time market data,
            advanced analytics, and lightning-fast execution. Your gateway to
            the global markets.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-emerald-500 hover:text-white font-semibold text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
            >
              Open Account
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="font-semibold text-lg px-8 py-6 h-auto border-2 hover:border-emerald-500 hover:text-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="group bg-background/50 backdrop-blur-sm border border-border rounded-lg p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 cursor-default">
              <div className="text-2xl md:text-3xl font-bold font-mono transition-colors duration-300 group-hover:text-emerald-500">
                $2.4T+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Daily Volume
              </div>
            </div>

            <div className="group bg-background/50 backdrop-blur-sm border border-border rounded-lg p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 cursor-default">
              <div className="text-2xl md:text-3xl font-bold font-mono transition-colors duration-300 group-hover:text-emerald-500">
                500K+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Active Traders
              </div>
            </div>

            <div className="group bg-background/50 backdrop-blur-sm border border-border rounded-lg p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 cursor-default">
              <div className="text-2xl md:text-3xl font-bold font-mono transition-colors duration-300 group-hover:text-emerald-500">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground mt-1">Uptime</div>
            </div>

            <div className="group bg-background/50 backdrop-blur-sm border border-border rounded-lg p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 cursor-default">
              <div className="text-2xl md:text-3xl font-bold font-mono transition-colors duration-300 group-hover:text-emerald-500">
                &lt;10ms
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Execution
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
