import { TrendingUp, Twitter, Linkedin, MessageSquare, Mail } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Trading Platform', href: '#platform' },
    { label: 'Market Analysis', href: '#analysis' },
    { label: 'Portfolio Manager', href: '#portfolio' },
    { label: 'Mobile App', href: '#mobile' },
    { label: 'API Access', href: '#api' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press Kit', href: '#press' },
    { label: 'Blog', href: '#blog' },
    { label: 'Partners', href: '#partners' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
    { label: 'Compliance', href: '#compliance' },
    { label: 'Disclosures', href: '#disclosures' },
  ],
  support: [
    { label: 'Help Center', href: '#help' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'System Status', href: '#status' },
    { label: 'Documentation', href: '#docs' },
    { label: 'Community', href: '#community' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#twitter', label: 'Twitter' },
  { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
  { icon: MessageSquare, href: '#discord', label: 'Discord' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A192F] border-t border-white/10">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 mb-4" aria-label="ApexTrade Home">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center" aria-hidden="true">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ApexTrade</span>
            </a>

            {/* Description */}
            <p className="text-slate-400 text-sm mb-6 max-w-sm">
              Empowering traders with cutting-edge technology and real-time market insights. Trade smarter, not harder.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <a
                  href="mailto:support@apextrade.com"
                  className="hover:text-emerald-500 transition-colors"
                >
                  support@apextrade.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/50 flex items-center justify-center text-slate-400 hover:text-emerald-500 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <nav aria-labelledby="footer-product">
            <h3 id="footer-product" className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-emerald-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Links */}
          <nav aria-labelledby="footer-company">
            <h3 id="footer-company" className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-emerald-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <nav aria-labelledby="footer-legal">
            <h3 id="footer-legal" className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-emerald-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support Links */}
          <nav aria-labelledby="footer-support">
            <h3 id="footer-support" className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-emerald-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              &copy; {currentYear} ApexTrade. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <a href="#risk-disclosure" className="hover:text-emerald-500 transition-colors">
                Risk Disclosure
              </a>
              <a href="#regulatory" className="hover:text-emerald-500 transition-colors">
                Regulatory Information
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-slate-500 text-xs mt-4 max-w-4xl">
            Trading stocks, options, and other securities involves risk and may not be suitable for all investors.
            Past performance does not guarantee future results. Please consider your investment objectives and risk tolerance before trading.
          </p>
        </div>
      </div>
    </footer>
  )
}
