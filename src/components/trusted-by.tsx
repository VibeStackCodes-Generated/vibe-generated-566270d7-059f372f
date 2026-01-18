import { Building2, Landmark, University, Wallet, CreditCard, Banknote } from 'lucide-react'

const partners = [
  { name: 'First National Bank', icon: Landmark },
  { name: 'Global Investment Corp', icon: Building2 },
  { name: 'Capital Trust', icon: University },
  { name: 'Premier Wealth', icon: Wallet },
  { name: 'Secure Finance', icon: CreditCard },
  { name: 'Metropolitan Banking', icon: Banknote },
]

export function TrustedBy() {
  return (
    <section aria-labelledby="trusted-by-heading" className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <h2 id="trusted-by-heading" className="text-center text-2xl sm:text-3xl font-semibold text-foreground mb-12">
          Trusted by Leading{' '}
          <span className="text-slate-600 dark:text-slate-400">Financial Institutions</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => {
            const Icon = partner.icon
            return (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center gap-3 group cursor-default"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:bg-emerald-500/10 dark:group-hover:bg-emerald-500/20 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg" role="img" aria-label={partner.name}>
                  <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-xs text-center text-muted-foreground font-medium max-w-[120px] transition-colors duration-300 group-hover:text-foreground" aria-hidden="true">
                  {partner.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
