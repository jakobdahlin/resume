"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Rectangle,
} from "recharts"
import { TrendingUp, TrendingDown, Eye, MousePointer, Globe, Smartphone, Download, Filter } from "lucide-react"
import { performanceData } from "@/app/data/analyticsData"
import { format, parse } from "date-fns"


const keywordData = [
  { keyword: "Product Designer", clicks: 45, impressions: 1200, ctr: 3.8, position: 8.2 },
  { keyword: "Architectural Photographer", clicks: 38, impressions: 980, ctr: 3.9, position: 12.1 },
  { keyword: "UX Engineer", clicks: 32, impressions: 850, ctr: 3.8, position: 15.3 },
  { keyword: "SEO", clicks: 28, impressions: 720, ctr: 3.9, position: 18.7 },
  { keyword: "Tailwind CSS", clicks: 24, impressions: 650, ctr: 3.7, position: 22.4 },
]

const pageData = [
  { page: "https://jdresume.vercel.app/resume", clicks: 89, impressions: 2100, ctr: 4.2, position: 6.8 },
  { page: "https://jdresume.vercel.app/portfolio", clicks: 67, impressions: 1800, ctr: 3.7, position: 9.2 },
  { page: "https://jdresume.vercel.app/certificate", clicks: 12, impressions: 570, ctr: 1.8, position: 4.2 },
]

const countryData = [
  { country: "United States", clicks: 156, impressions: 3800, flag: "🇺🇸" },
  { country: "United Kingdom", clicks: 89, impressions: 2200, flag: "🇬🇧" },
  { country: "Canada", clicks: 67, impressions: 1600, flag: "🇨🇦" },
  { country: "Australia", clicks: 45, impressions: 1100, flag: "🇦🇺" },
  { country: "Germany", clicks: 38, impressions: 950, flag: "🇩🇪" },
]

const deviceData = [
  { device: "Desktop", clicks: 345, impressions: 11200, color: "#3b82f6" },
  { device: "Mobile", clicks: 489, impressions: 18100, color: "#10b981" },
  { device: "Tablet", clicks: 67, impressions: 5350, color: "#8b5cf6" },
]

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]

export function SeoAnalyticsDashboard() {
const [showClicks, setShowClicks] = useState(true)
const [showImpressions, setShowImpressions] = useState(true)
const [timeRange, setTimeRange] = useState("Month")
const [activeTab, setActiveTab] = useState("keywords")
const [showCTR, setShowCTR] = useState(true)
const [showPosition, setShowPosition] = useState(true)

function getWeekNumber(date: Date): number {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1)
    const pastDaysOfYear = (date.valueOf() - firstDayOfYear.valueOf()) / 86400000
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)
  }

  function groupDataByPeriod(data: typeof performanceData, periodLength: number) {
    const result: typeof performanceData = []
    let sumClicks = 0
    let sumImpressions = 0
    let sumCtr = 0
    let sumPosition = 0
    let count = 0
  
    for (let i = 0; i < data.length; i++) {
      const entry = data[i]
      sumClicks += entry.clicks
      sumImpressions += entry.impressions
      sumCtr += entry.ctr
      sumPosition += entry.position
      count++
  
      // Every periodLength days or last entry
      if ((i + 1) % periodLength === 0 || i === data.length - 1) {
        result.push({
          date: format(new Date(entry.date), "MM/dd"), // use ISO for proper Date parsing later
          clicks: Math.round(sumClicks / count),
          impressions: Math.round(sumImpressions / count),
          ctr: parseFloat((sumCtr / count).toFixed(2)),
          position: parseFloat((sumPosition / count).toFixed(1)),
        })
        sumClicks = 0
        sumImpressions = 0
        sumCtr = 0
        sumPosition = 0
        count = 0
      }
    }
    return result
  }
  
  const transformedData = performanceData.map((item, index, array) => {
    // Calculate how many days ago this data point should be
    const daysAgo = array.length - index - 1
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
  
    return {
      ...item,
      date: format(date, "MM/dd"), // e.g., 07/12
    }
  })
  
  const filteredData = (() => {
    if (timeRange === "Today") return transformedData.slice(-1)
    if (timeRange === "Week") return transformedData.slice(-7)
    if (timeRange === "Month") return transformedData.slice(-30)
    return transformedData
  })()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }
  
  

  return (
    <motion.div className="max-w-7xl w-full px-4 mx-auto space-y-4" variants={containerVariants} initial="hidden" animate="visible">
      {/* Header */}
      <motion.div className="flex items-center justify-between mb-8" variants={itemVariants}>
        <div>
          <p className="text-white/50 mt-1">Last update: 3 hours ago</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="bg-neutral-900 border-neutral-700 text-white">
            <Filter className="w-4 h-4 mr-2" />
            Add filter
          </Button>
          <Button variant="outline" size="sm" className="bg-neutral-900 border-neutral-700 text-white">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </motion.div>

      {/* Time Range Selector */}
      <motion.div className="flex items-center gap-2" variants={itemVariants}>
        {["Today", "Week", "Month"].map((range) => (
          <Button
            key={range}
            variant={timeRange === range ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange(range)}
            className={
              timeRange === range
                ? "bg-sky-500 hover:bg-sky-600"
                : "bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800 hover:text-white"
            }
          >
            {range}
          </Button>
        ))}
      </motion.div>

      {/* Key Metrics */}
      <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-4" variants={itemVariants}>
        <Card onClick={() => setShowClicks((prev) => !prev)}
        className={`bg-gradient-to-r from-sky-800 to-sky-500 border-0 cursor-pointer ${
    showClicks ? "" : "opacity-50"
  }`}
>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm">Total clicks</p>
                <p className="text-3xl font-bold text-white">614</p>
              </div>
              <MousePointer className="w-8 h-8 text-sky-300" />
            </div>
          </CardContent>
        </Card>

        <Card onClick={() => setShowImpressions((prev) => !prev)}
        className={`bg-gradient-to-r from-green-800 to-lime-500 border-0 cursor-pointer ${
            showImpressions ? "" : "opacity-50"
          }`}
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Total impressions</p>
                <p className="text-3xl font-bold text-white">88.2K</p>
              </div>
              <Eye className="w-8 h-8 text-lime-300" />
            </div>
          </CardContent>
        </Card>

        <Card
  onClick={() => setShowCTR((prev) => !prev)}
  className={`bg-gradient-to-r from-violet-800 to-purple-500 border-0 cursor-pointer ${
    showCTR ? "" : "opacity-50"
  }`}
>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Average CTR</p>
                <p className="text-3xl font-bold text-white">0.7%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-300" />
            </div>
          </CardContent>
        </Card>

        <Card
  onClick={() => setShowPosition((prev) => !prev)}
  className={`bg-gradient-to-r from-red-950 to-red-600 border-0 cursor-pointer ${
    showPosition ? "" : "opacity-50"
  }`}
>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Average position</p>
                <p className="text-3xl font-bold text-white">20.8</p>
              </div>
              <TrendingDown className="w-8 h-8 text-red-400" />
            </div>
          </CardContent>
        </Card>

      </motion.div>

      {/* Performance Chart */}
      <motion.div variants={itemVariants} className="w-full">
  <Card className="w-full bg-gradient-to-b from-neutral-950 to-neutral-900 border-neutral-800 text-white">
          <CardHeader>
            <CardTitle className="text-white">Performance Overview</CardTitle>
          </CardHeader>
          <CardContent className="w-full">
  <div className="-mx-12 pr-4">
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
      <LineChart key={timeRange} data={filteredData}>
    {/* Gradients for the strokes */}
    <defs>
  <linearGradient id="clicksGradient" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stopColor="#075985" /> {/* Tailwind sky-800 */}
    <stop offset="100%" stopColor="#0ea5e9" /> {/* Tailwind sky-500 */}
  </linearGradient>

  <linearGradient id="impressionsGradient" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stopColor="#166534" /> {/* Tailwind green-800 */}
    <stop offset="100%" stopColor="#84cc16" /> {/* Tailwind lime-500 */}
  </linearGradient>

  <linearGradient id="ctrGradient" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stopColor="#5B21B6" /> {/* Tailwind violet-800 */}
    <stop offset="100%" stopColor="#A855F7" /> {/* Tailwind purple-500 */}
  </linearGradient>

  <linearGradient id="positionGradient" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stopColor="#450A0A" /> {/* Tailwind red-950 */}
    <stop offset="100%" stopColor="#DC2626" /> {/* Tailwind red-600 */}
  </linearGradient>
</defs>

    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
    <XAxis
  dataKey="date"
  stroke="#ffffff50"
  fontSize={12}
  tick={{ textAnchor: "end" }}
  interval={0} // force showing every tick
/>

    <YAxis
      yAxisId="clicks"
      orientation="left"
      stroke="#0ea5e9"
      fontSize={12}
    />
    <YAxis
      yAxisId="impressions"
      orientation="right"
      stroke="#84cc16"
      fontSize={12}
    />
    <YAxis
  yAxisId="ctr"
  orientation="left"
  stroke="#A855F7"
  fontSize={12}
/>
<YAxis
  yAxisId="position"
  orientation="right"
  stroke="#DC2626"
  fontSize={12}
/>
    <Tooltip
      contentStyle={{
        backgroundColor: "#00000070",
        border: "1px solid #ffffff20",
        borderRadius: "10px",
        color: "#fff",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    />

    {/* Line for Clicks */}
    {showClicks && (
  <Line
    yAxisId="clicks"
    type="monotone"
    dataKey="clicks"
    stroke="url(#clicksGradient)"
    strokeWidth={2}
    dot={{ fill: "#fff", strokeWidth: 2, r: 4 }}
  />
)}
{showImpressions && (
  <Line
    yAxisId="impressions"
    type="monotone"
    dataKey="impressions"
    stroke="url(#impressionsGradient)"
    strokeWidth={2}
    dot={{ fill: "#fff", strokeWidth: 2, r: 4 }}
  />
)}

{showCTR && (
  <Line
    yAxisId="ctr"
    type="monotone"
    dataKey="ctr"
    stroke="url(#ctrGradient)" // Use the gradient
    strokeWidth={2}
    dot={{ fill: "#fff", strokeWidth: 2, r: 4 }}
  />
)}

{showPosition && (
  <Line
    yAxisId="position"
    type="monotone"
    dataKey="position"
    stroke="url(#positionGradient)" // Use the gradient
    strokeWidth={2}
    dot={{ fill: "#fff", strokeWidth: 2, r: 4 }}
  />
)}
  </LineChart>
</ResponsiveContainer>

            </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tabs Section */}
      <motion.div variants={itemVariants}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-neutral-950 border-neutral-700 text-white">
            <TabsTrigger
              value="keywords"
              className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white text-white"
            >
              Keywords
            </TabsTrigger>
            <TabsTrigger
              value="pages"
              className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white text-white"
            >
              Pages
            </TabsTrigger>
            <TabsTrigger
              value="countries"
              className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white text-white"
            >
              Countries
            </TabsTrigger>
            <TabsTrigger
              value="devices"
              className="data-[state=active]:bg-bg-neutral-800 data-[state=active]:text-white text-white"
            >
              Devices
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent key="keywords" value="keywords" className="mt-6">
              <motion.div
                key="keywords"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-neutral-950 border-neutral-800 text-white">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Top Keywords
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {keywordData.map((item, index) => (
                        <motion.div
                        key={`${item.keyword}-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 bg-neutral-950 border-neutral-800 text-white rounded-lg hover:bg-neutral-900 transition-colors"
                        >
                          <div className="flex-1">
                            <p className="text-white font-medium">{item.keyword}</p>
                            <div className="flex items-center gap-4 mt-2">
                              <Badge variant="secondary" className="bg-sky-500 hover:bg-sky-600 text-white">
                                {item.clicks} clicks
                              </Badge>
                              <Badge className="bg-lime-700 hover:bg-lime-800 text-white border-none">
                                {item.impressions} impressions
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-semibold">{item.ctr}% CTR</p>
                            <p className="text-gray-400 text-sm">Pos: {item.position}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent key="pages" value="pages" className="mt-6">
              <motion.div
                key="pages"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-neutral-950 border-neutral-800 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">Top Pages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pageData.map((item, index) => (
                        <motion.div
                        key={`${item.page}-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-4 bg-neutral-950 border-neutral-800 text-white rounded-lg md:hover:bg-neutral-900"
                        >
<div className="flex-1 text-sm">
<div className="w-full md:w-auto overflow-x-auto">
  <p className="text-white font-medium font-mono whitespace-nowrap">
    {item.page}
  </p>
</div>
  <div className="flex items-center gap-4 mt-2">
    <span className="text-sky-500">{item.clicks} clicks</span>
    <span className="text-lime-600">{item.impressions} impressions</span>
  </div>
  {/* Show only on mobile */}
  <div className="text-left mt-2 md:hidden">
    <p className="text-white font-semibold">{item.ctr}% CTR</p>
    <p className="text-gray-400 text-sm">Pos: {item.position}</p>
  </div>
</div>

{/* Show only on desktop */}
<div className="text-right hidden md:block">
  <p className="text-white font-semibold">{item.ctr}% CTR</p>
  <p className="text-gray-400 text-sm">Pos: {item.position}</p>
</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent key="countries" value="countries" className="mt-6">
              <motion.div
                key="countries"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="bg-neutral-950 border-neutral-800 text-white">
                    <CardHeader>
                      <CardTitle className="text-white">Countries Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {countryData.map((item, index) => (
                          <motion.div
                          key={`${item.country}-${index}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-between p-4 bg-neutral-950 border-neutral-800 text-white rounded-lg hover:bg-neutral-900"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{item.flag}</span>
                              <span className="text-white font-medium">{item.country}</span>
                            </div>
                            <div className="text-right">
                              <p className="text-white font-semibold">{item.clicks} clicks</p>
                              <p className="text-gray-400 text-sm">{item.impressions} impressions</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-neutral-950 border-neutral-800 text-white">
                    <CardHeader>
                      <CardTitle className="text-white">Geographic Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                        <BarChart
  data={countryData}
  barCategoryGap={16}
  barGap={4}
  // 👇 This disables the hover highlight
  onMouseMove={() => {}}
  onMouseLeave={() => {}}
>
  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
  <XAxis
    dataKey="country"
    stroke="#ffffff50"
    fontSize={12}
    angle={-45}
    textAnchor="end"
    height={80}
  />
  <YAxis stroke="#ffffff50" fontSize={12} />
  <Tooltip
  cursor={{ fill: "transparent" }} // 👈 disables the gray hover background
  contentStyle={{
    backgroundColor: "#00000070",
    border: "1px solid #ffffff20",
    borderRadius: "8px",
    color: "#fff",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  }}
/>
  <Bar
    dataKey="clicks"
    fill="#0ea5e9"
    radius={[4, 4, 0, 0]}
  />
</BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent key="devices" value="devices" className="mt-6">
              <motion.div
                key="devices"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="bg-neutral-950 border-neutral-800 text-white">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Smartphone className="w-5 h-5" />
                        Device Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {deviceData.map((item, index) => (
                          <motion.div
                          key={`${item.device}-${index}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-between p-4 bg-neutral-950 border-neutral-800 text-white rounded-lg hover:bg-neutral-900"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                              <span className="text-white font-medium">{item.device}</span>
                            </div>
                            <div className="text-right">
                              <p className="text-white font-semibold">{item.clicks} clicks</p>
                              <p className="text-gray-400 text-sm">{item.impressions} impressions</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-neutral-950 border-neutral-800 text-white">
                    <CardHeader>
                      <CardTitle className="text-white">Device Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={deviceData}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              fill="#fff"
                              dataKey="clicks"
                              label={({ device, percent }) => `${device} ${(percent * 100).toFixed(0)}%`}
                            >
{deviceData.map((entry, index) => (
  <Cell key={`cell-${index}`} fill={entry.color} />
))}
                            </Pie>
                            <Tooltip
  cursor={{ fill: "transparent" }}
  contentStyle={{
    backgroundColor: "#00000070",
    border: "1px solid #ffffff20",
    borderRadius: "8px",
    color: "#fff",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  }}
/>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}
