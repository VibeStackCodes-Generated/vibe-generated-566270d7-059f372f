import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Check, X } from 'lucide-react'

interface ComparisonRow {
  feature: string
  apexTrade: string | boolean
  broker1: string | boolean
  broker2: string | boolean
  broker3: string | boolean
}

const comparisonData: ComparisonRow[] = [
  {
    feature: 'Trading Fees',
    apexTrade: '$0',
    broker1: '$4.95 per trade',
    broker2: '$6.95 per trade',
    broker3: '$9.99 per trade',
  },
  {
    feature: 'Account Minimum',
    apexTrade: '$0',
    broker1: '$500',
    broker2: '$2,500',
    broker3: '$1,000',
  },
  {
    feature: 'Real-Time Market Data',
    apexTrade: true,
    broker1: false,
    broker2: true,
    broker3: false,
  },
  {
    feature: 'Advanced Research Tools',
    apexTrade: true,
    broker1: true,
    broker2: false,
    broker3: true,
  },
  {
    feature: '24/7 Customer Support',
    apexTrade: true,
    broker1: false,
    broker2: false,
    broker3: true,
  },
  {
    feature: 'Mobile Trading App',
    apexTrade: true,
    broker1: true,
    broker2: true,
    broker3: false,
  },
  {
    feature: 'Cryptocurrency Trading',
    apexTrade: true,
    broker1: false,
    broker2: true,
    broker3: false,
  },
  {
    feature: 'Options Trading',
    apexTrade: '$0 per contract',
    broker1: '$0.65 per contract',
    broker2: '$0.50 per contract',
    broker3: '$0.75 per contract',
  },
]

const renderCellValue = (value: string | boolean) => {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-label="Available" />
    ) : (
      <X className="h-5 w-5 text-muted-foreground" aria-label="Not available" />
    )
  }
  return value
}

export function FeeComparison() {
  return (
    <section aria-labelledby="fee-comparison-heading" className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Compare & Save
          </Badge>
          <h2 id="fee-comparison-heading" className="text-3xl md:text-4xl font-bold mb-4">
            See How We Stack Up
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ApexTrade offers superior value with zero fees, no account minimums,
            and premium features that traditional brokers charge extra for.
          </p>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-bold text-base">Feature</TableHead>
                <TableHead className="bg-emerald-50 dark:bg-emerald-950/30 font-bold text-base text-center">
                  <div className="flex flex-col items-center gap-1">
                    <span>ApexTrade</span>
                    <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs">
                      Best Value
                    </Badge>
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-center">
                  Broker A
                </TableHead>
                <TableHead className="font-semibold text-center">
                  Broker B
                </TableHead>
                <TableHead className="font-semibold text-center">
                  Broker C
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow key={index} className="transition-all duration-200 hover:bg-muted/30">
                  <TableCell className="font-medium">{row.feature}</TableCell>
                  <TableCell className="bg-emerald-50 dark:bg-emerald-950/30 text-center font-semibold text-emerald-700 dark:text-emerald-400 transition-all duration-200 hover:bg-emerald-100 dark:hover:bg-emerald-950/50">
                    <div className="flex justify-center">
                      {renderCellValue(row.apexTrade)}
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground transition-colors duration-200">
                    <div className="flex justify-center">
                      {renderCellValue(row.broker1)}
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground transition-colors duration-200">
                    <div className="flex justify-center">
                      {renderCellValue(row.broker2)}
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground transition-colors duration-200">
                    <div className="flex justify-center">
                      {renderCellValue(row.broker3)}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-muted-foreground text-center mt-6">
          Comparison data as of January 2026. Competitor fees and features may
          vary. See our{' '}
          <a href="#" className="underline hover:text-foreground">
            pricing page
          </a>{' '}
          for complete details.
        </p>
      </div>
    </section>
  )
}
