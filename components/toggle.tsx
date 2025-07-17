"use client"

import { useState } from "react"

export default function Component() {
  const [toggles, setToggles] = useState({
    notifications: false,
    darkMode: false,
    security: false,
    wifi: false,
    performance: false,
  })

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="bg-black w-full mx-auto justify-center flex">
      <div className="space-y-4 w-full max-w-lg">

        {/* Toggle 1: Basic Slide Toggle - Notifications */}
        <div className="flex items-center justify-between p-4 bg-neutral-950 md:hover:bg-neutral-900 transition-colors duration-200 rounded-lg border border-neutral-900">
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="text-white font-medium">Notifications</h3>
              <p className="text-neutral-400 text-sm">Receive push notifications</p>
            </div>
          </div>
          <button
            onClick={() => handleToggle("notifications")}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              toggles.notifications ? "bg-gradient-to-r from-blue-800 via-sky-400 to-sky-400" : "bg-neutral-700"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                toggles.notifications ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* Toggle 2: iOS Style Toggle - Dark Mode */}
        <div className="flex items-center justify-between p-4 bg-neutral-950 md:hover:bg-neutral-900 transition-colors duration-200 rounded-lg border border-neutral-900">
          <div className="flex items-center space-x-3">         <div>
              <h3 className="text-white font-medium">Dark Mode</h3>
              <p className="text-neutral-400 text-sm">Use dark theme</p>
            </div>
          </div>
          <button
            onClick={() => handleToggle("darkMode")}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
              toggles.darkMode ? "bg-neutral-300" : "bg-neutral-900 border border-white/20"
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full transition-transform duration-300 shadow-lg ${
                toggles.darkMode ? "translate-x-7 bg-neutral-700 shadow-md shadow-black/70" : "translate-x-1 bg-white"
              }`}
            />
          </button>
        </div>

        {/* Toggle 3: Checkbox Style Toggle - Security */}
        <div className="flex items-center justify-between p-4 bg-neutral-950 md:hover:bg-neutral-900 transition-colors duration-200 rounded-lg border border-neutral-900">
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="text-white font-medium">Enhanced Security</h3>
              <p className="text-neutral-400 text-sm">Enable two-factor authentication</p>
            </div>
          </div>
          <button
            onClick={() => handleToggle("security")}
            className={`w-7 h-7 rounded border transition-all duration-200 flex items-center justify-center ${
              toggles.security
                ? "bg-green-600 border-green-400 shadow-lg shadow-lime-700/70"
                : "bg-transparent border-neutral-700 hover:border-neutral-500"
            }`}
          >
            {toggles.security && (
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Toggle 4: Pill Style Toggle - WiFi */}
        <div className="flex items-center justify-between p-4 bg-neutral-950 md:hover:bg-neutral-900 transition-colors duration-200 rounded-lg border border-neutral-900">
          <div className="flex items-center space-x-3 w-full">
            <div>
              <h3 className="text-white font-medium">WiFi</h3>
              <p className="text-neutral-400 w-26 mr-8 text-sm">Connect to wireless networks</p>
            </div>
          </div>
          <button
            onClick={() => handleToggle("wifi")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all w-20 duration-200 ${
              toggles.wifi
                ? "bg-violet-300/20 border border-violet-300 shadow-lg shadow-indigo-600/70"
                : "bg-neutral-800 text-white hover:bg-neutral-700 border border-transparent"
            }`}
          >
            {toggles.wifi ? "ON" : "OFF"}
          </button>
        </div>

        {/* Toggle 5: Modern Animated Toggle - Performance Mode */}
        <div className="flex items-center justify-between p-4 bg-neutral-950 md:hover:bg-neutral-900 transition-colors duration-200 rounded-lg border border-neutral-900">
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="text-white font-medium">Performance Mode</h3>
              <p className="text-neutral-400 text-sm">Optimize for speed and efficiency</p>
            </div>
          </div>
          <button
            onClick={() => handleToggle("performance")}
            className={`relative inline-flex h-7 w-12 items-center bg-transparent rounded-full transition-all duration-300 ${
              toggles.performance
                ? "bg-gradient-to-r from-amber-600 via-amber-300 to-amber-400 shadow-lg shadow-amber-700/70"
                : "bg-amber-400/10 border border-amber-500/50"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full transition-all duration-200 ${
                toggles.performance ? "translate-x-6 bg-white shadow-lg" : "translate-x-1 bg-white"
              }`}
            />
            
          </button>
        </div>
      </div>
    </div>
  )
}
