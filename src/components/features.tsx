import { BarChart3, Percent, Shield } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description:
      'Track your portfolio performance with live market data and advanced charting tools.',
    highlight: 'Real-time',
  },
  {
    icon: Percent,
    title: 'Zero Commission',
    description:
      'Trade stocks, ETFs, and crypto without paying any commission fees. Keep more of your profits.',
    highlight: 'Zero',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description:
      'Your investments are protected with 256-bit encryption and two-factor authentication.',
    highlight: 'Bank-Grade',
  },
]

export function Features() {
  return (
    <section aria-labelledby="features-heading" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 id="features-heading" className="sr-only">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/50"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 transition-all duration-300 group-hover:from-emerald-500/5 group-hover:to-emerald-500/0" />
                <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:scale-110 group-hover:rotate-3" aria-hidden="true">
                  <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="relative mb-3 text-xl font-semibold text-foreground">
                  {feature.title.split(feature.highlight).map((part, i) =>
                    i === 0 ? (
                      <span key={i}>
                        {part}
                        <span className="text-emerald-600">{feature.highlight}</span>
                      </span>
                    ) : (
                      part
                    )
                  )}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
