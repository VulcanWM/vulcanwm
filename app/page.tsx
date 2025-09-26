"use client"

import Hero from '../components/Hero'

export default function App() {
  return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <main>
          <Hero/>
        </main>

        <footer className="py-12 px-6 border-t border-orange-500/20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-orbitron font-black text-orange-500 glow-text mb-2">
                  VULCAN<span className="text-white">WM</span>
                </h3>
                <p className="font-mono text-gray-400 mb-4">
                  Forging the future, one line of code at a time.
                </p>
                <p className="font-mono text-sm text-gray-500">
                  16 yo full stack developer from the shadows of cyberspace.
                </p>
              </div>
            </div>

            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6 glow-pulse"></div>

            <div className="text-center">
              <p className="font-mono text-sm text-gray-500">
                © 2025 VulcanWM. All rights reserved. Built with fire and code.
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}