import { useState } from 'react'
import { TrendingUp, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Security', href: '#security' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [activeLink, setActiveLink] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation */}
      <nav className="bg-[#0A192F] border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2" aria-label="ApexTrade Home">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center" aria-hidden="true">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ApexTrade</span>
            </a>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.href)}
                    className={`text-sm font-medium transition-all duration-300 hover:text-emerald-500 hover:scale-105 inline-block ${
                      activeLink === link.href
                        ? 'text-emerald-500'
                        : 'text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30" aria-label="Get Started with ApexTrade">
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white hover:text-emerald-500 transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => {
                        setActiveLink(link.href)
                        setMobileMenuOpen(false)
                      }}
                      className={`block text-sm font-medium transition-colors hover:text-emerald-500 ${
                        activeLink === link.href
                          ? 'text-emerald-500'
                          : 'text-white'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30">
                    Get Started
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Stock Ticker Tape */}
      <StockTicker />
    </header>
  )
}

function StockTicker() {
  const stocks = [
    { symbol: 'AAPL', price: 178.25, change: 2.45, isPositive: true },
    { symbol: 'GOOGL', price: 142.80, change: -1.20, isPositive: false },
    { symbol: 'MSFT', price: 378.90, change: 5.67, isPositive: true },
    { symbol: 'TSLA', price: 242.15, change: -3.40, isPositive: false },
    { symbol: 'AMZN', price: 155.30, change: 1.85, isPositive: true },
    { symbol: 'META', price: 485.60, change: 8.20, isPositive: true },
    { symbol: 'NVDA', price: 495.75, change: 12.30, isPositive: true },
    { symbol: 'AMD', price: 148.90, change: -2.15, isPositive: false },
  ]

  // Duplicate stocks to create seamless loop
  const duplicatedStocks = [...stocks, ...stocks]

  return (
    <div className="bg-[#0A192F]/95 border-b border-white/10 overflow-hidden" role="region" aria-label="Stock ticker">
      <div className="relative h-10 flex items-center">
        <div className="animate-marquee flex gap-8 whitespace-nowrap will-change-transform" aria-live="off">
          {duplicatedStocks.map((stock, index) => (
            <div
              key={`${stock.symbol}-${index}`}
              className="flex items-center gap-3 px-4 hover:scale-105 transition-transform duration-200"
            >
              <span className="text-white font-semibold text-sm">
                {stock.symbol}
              </span>
              <span className="text-white/80 text-sm">
                ${stock.price.toFixed(2)}
              </span>
              <span
                className={`text-sm font-medium ${
                  stock.isPositive ? 'text-emerald-500' : 'text-red-500'
                }`}
              >
                {stock.isPositive ? '+' : ''}
                {stock.change.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
