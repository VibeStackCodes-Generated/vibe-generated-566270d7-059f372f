import { useEffect, useState } from 'react'

interface Candle {
  id: number
  x: number
  open: number
  close: number
  high: number
  low: number
  color: 'green' | 'red'
}

export function CandlestickChart() {
  const [candles, setCandles] = useState<Candle[]>([])
  const [offset, setOffset] = useState(0)

  // Generate initial candles
  useEffect(() => {
    const generateCandles = () => {
      const newCandles: Candle[] = []
      let lastPrice = 50

      for (let i = 0; i < 50; i++) {
        const open = lastPrice + (Math.random() - 0.5) * 4
        const close = open + (Math.random() - 0.5) * 8
        const high = Math.max(open, close) + Math.random() * 3
        const low = Math.min(open, close) - Math.random() * 3

        newCandles.push({
          id: i,
          x: i * 20,
          open,
          close,
          high,
          low,
          color: close >= open ? 'green' : 'red',
        })

        lastPrice = close
      }

      setCandles(newCandles)
    }

    generateCandles()
  }, [])

  // Animate the chart by moving it left
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + 0.5

        // When we've scrolled far enough, add a new candle
        if (newOffset % 20 === 0) {
          setCandles((prevCandles) => {
            const lastCandle = prevCandles[prevCandles.length - 1]
            const open = lastCandle.close
            const close = open + (Math.random() - 0.5) * 8
            const high = Math.max(open, close) + Math.random() * 3
            const low = Math.min(open, close) - Math.random() * 3

            const newCandle: Candle = {
              id: lastCandle.id + 1,
              x: lastCandle.x + 20,
              open,
              close,
              high,
              low,
              color: close >= open ? 'green' : 'red',
            }

            // Keep only visible candles plus a buffer
            const visibleCandles = prevCandles.filter(
              (c) => c.x - newOffset > -100
            )

            return [...visibleCandles, newCandle]
          })
        }

        return newOffset
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
      >
        {/* Grid lines */}
        <g className="opacity-30">
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 100}
              x2="1200"
              y2={i * 100}
              stroke="currentColor"
              strokeWidth="0.5"
            />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <line
              key={`v-${i}`}
              x1={i * 100}
              y1="0"
              x2={i * 100}
              y2="400"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Candles */}
        <g transform={`translate(${-offset}, 0)`}>
          {candles.map((candle) => {
            const isGreen = candle.color === 'green'
            const bodyTop = Math.min(candle.open, candle.close)
            const bodyBottom = Math.max(candle.open, candle.close)
            const bodyHeight = Math.max(bodyBottom - bodyTop, 0.5)

            // Scale to fit in viewBox (0-100 price range to 50-350 y coordinate)
            const scaleY = (price: number) => 350 - ((price - 20) / 80) * 300

            return (
              <g key={candle.id}>
                {/* Wick */}
                <line
                  x1={candle.x + 5}
                  y1={scaleY(candle.high)}
                  x2={candle.x + 5}
                  y2={scaleY(candle.low)}
                  stroke={isGreen ? '#22c55e' : '#ef4444'}
                  strokeWidth="1"
                  className="transition-colors"
                />

                {/* Body */}
                <rect
                  x={candle.x + 1}
                  y={scaleY(bodyBottom)}
                  width="8"
                  height={Math.max((bodyHeight / 80) * 300, 1)}
                  fill={isGreen ? '#22c55e' : '#ef4444'}
                  className="transition-colors"
                />
              </g>
            )
          })}
        </g>
      </svg>
    </div>
  )
}
