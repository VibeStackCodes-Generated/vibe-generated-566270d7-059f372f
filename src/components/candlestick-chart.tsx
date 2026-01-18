import { useEffect, useState, useRef, useMemo } from 'react'

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
  const animationFrameRef = useRef<number>()
  const lastUpdateRef = useRef<number>(0)

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

  // Animate the chart by moving it left using requestAnimationFrame for better performance
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!lastUpdateRef.current) lastUpdateRef.current = timestamp

      const elapsed = timestamp - lastUpdateRef.current

      // Update approximately every 30ms (similar to previous interval)
      if (elapsed > 30) {
        setOffset((prev) => {
          const newOffset = prev + 0.5

          // When we've scrolled far enough, add a new candle
          if (newOffset % 20 === 0) {
            setCandles((prevCandles) => {
              if (prevCandles.length === 0) return prevCandles

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

              // Keep only visible candles plus a buffer (optimization)
              const visibleCandles = prevCandles.filter(
                (c) => c.x - newOffset > -100
              )

              return [...visibleCandles, newCandle]
            })
          }

          return newOffset
        })

        lastUpdateRef.current = timestamp
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Memoize grid lines to prevent re-rendering
  const gridLines = useMemo(() => (
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
  ), [])

  // Scale function for Y-axis (memoized)
  const scaleY = useMemo(() => (price: number) => 350 - ((price - 20) / 80) * 300, [])

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 animate-fade-in" aria-hidden="true">
      <svg
        className="w-full h-full animate-slide-up"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        role="presentation"
      >
        {/* Grid lines */}
        {gridLines}

        {/* Candles */}
        <g transform={`translate(${-offset}, 0)`}>
          {candles.map((candle) => {
            const isGreen = candle.color === 'green'
            const bodyTop = Math.min(candle.open, candle.close)
            const bodyBottom = Math.max(candle.open, candle.close)
            const bodyHeight = Math.max(bodyBottom - bodyTop, 0.5)

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
                />

                {/* Body */}
                <rect
                  x={candle.x + 1}
                  y={scaleY(bodyBottom)}
                  width="8"
                  height={Math.max((bodyHeight / 80) * 300, 1)}
                  fill={isGreen ? '#22c55e' : '#ef4444'}
                />
              </g>
            )
          })}
        </g>
      </svg>
    </div>
  )
}
