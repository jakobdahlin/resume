"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const stockSymbols = [
    "AAPL", "GOOGL", "MSFT", "NVDA", "NFLX",
    "BRK.B", "DIS", "TSLA", "AMZN", "META"
  ]
  
  
  // Replace with your API Key
  const FINNHUB_API_KEY = "d1s3l7pr01qskg7rbm9gd1s3l7pr01qskg7rbma0"
  
  export default function NewsBanner() {

    type Stock = {
        symbol: string
        price: number
        change: number
        isPositive: boolean
      }
    
    const [stockData, setStockData] = useState<Stock[]>([])
    const [currentTime, setCurrentTime] = useState("")
  
    // Fetch live stock prices
    useEffect(() => {
      const fetchStockPrices = async () => {
        try {
          const promises = stockSymbols.map(async (symbol) => {
            const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`
            const response = await fetch(url)
            const data = await response.json()
            return {
              symbol,
              price: data.c, // current price
              change: data.d, // price change
              isPositive: data.d >= 0
            }
          })
  
          const results = await Promise.all(promises)
          setStockData(results)
        } catch (error) {
          console.error("Error fetching stock prices:", error)
        }
      }
  
      fetchStockPrices()
      const interval = setInterval(fetchStockPrices, 60000) // refresh every 60 seconds
  
      return () => clearInterval(interval)
    }, [])
  
    // Update clock
    useEffect(() => {
      const updateTime = () => {
        const now = new Date()
        const timeString = now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
        setCurrentTime(timeString)
      }
  
      updateTime()
      const interval = setInterval(updateTime, 1000)
  
      return () => clearInterval(interval)
    }, [])

  return (
    <div className="relative w-full h-[74px] sm:h-[80px] lg:h-[80px] overflow-hidden rounded-2xl border border-white/20">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent backdrop-blur-md" />

      {/* Content Container */}
      <div className="relative z-10 flex items-center h-full px-4 sm:px-2 lg:px-2 gap-4">
        {/* Logo */}
        <div className="flex-shrink-0 pl-2 sm:pl-2 py-3 sm:py-4 bg-gradient-to-r from-transparent to-white/10 rounded-l-2xl">
          <div>
            <span className="text-white font-bold text-xl sm:text-2xl lg:text-4xl">GNS</span>
            <span className="text-white font-light text-lg sm:text-xl lg:text-3xl ml-1">11</span>
            <div className="text-white text-xs sm:text-sm mr-4">Global News Station</div>
          </div>
        </div>

        {/* Headline + Ticker */}
        <div className="flex flex-col flex-1 min-w-0 gap-1 sm:gap-2">
          {/* Headline */}
          <h1 className="text-white font-bold md:text-[clamp(12px,3.2vw,22px)] whitespace-nowrap flex-1 basis-0 min-w-0 px-4 sm:px-1">
            HUMANS HAVE LANDED ON MARS
          </h1>

          {/* Ticker */}
          <div className="w-full overflow-hidden 
            max-w-[clamp(800px,50vw,700px)] 
            lg:max-w-[50vw] ml-2 sm:ml-1 flex-shrink">
  <motion.div
              className="flex space-x-4 sm:space-x-6 whitespace-nowrap flex-shrink min-w-full"
              animate={{
                x: [0, -100 * stockData.length],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {stockData.map((stock, index) => (
                <div
                  key={`${stock.symbol}-${index}`}
                  className="flex items-center space-x-1"
                >
                  <span className="text-white text-xs sm:text-sm">{stock.symbol}</span>
                  <span
                    className={`font-bold text-xs sm:text-sm ${
                      stock.isPositive ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {stock.price?.toFixed(2) || "--"}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Clock + LIVE */}
        <div className="flex flex-col items-end justify-center flex-shrink gap-1 sm:gap-2">
          <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
            {currentTime}
          </span>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-500 font-bold text-xs sm:text-sm">LIVE</span>
          </div>
        </div>
      </div>
    </div>
  )
}
