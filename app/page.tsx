"use client"

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero'
import Projects from '@/components/Projects';

export default function App() {
  return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <Projects />
        </main>

        <footer className="border-t border-orange-500/15 px-6 py-8">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 VulcanWM</p>
            <p>Full-stack web apps, SaaS products, and useful tools.</p>
          </div>
        </footer>
      </div>
  );
}
