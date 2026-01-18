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
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-emerald-500/50"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
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
                <p className="text-muted-foreground leading-relaxed">
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
