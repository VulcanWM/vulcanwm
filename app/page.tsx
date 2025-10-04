"use client"

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero'
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { Github, Twitter, Mail, MessageCircle } from 'lucide-react';

export default function App() {
  return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>

        {/* Enhanced Footer */}
        <footer className="py-12 px-6 border-t border-orange-500/20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Brand */}
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-orbitron font-black text-orange-500 glow-text mb-2">
                  VULCAN<span className="text-white">WM</span>
                </h3>
                <p className="font-mono text-gray-400 mb-4">
                  Forging the future, one line of code at a time.
                </p>
                <p className="font-mono text-sm text-gray-500">
                  Digital architect crafting elegant solutions from the shadows of cyberspace.
                </p>
              </div>

              {/* Quick Links */}
              <div className="text-center">
                <h4 className="font-orbitron font-bold text-orange-500 mb-4">NAVIGATION</h4>
                <div className="space-y-2">
                  {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                      <button
                          key={item}
                          onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                          className="block mx-auto font-mono text-gray-400 hover:text-orange-500 transition-colors duration-300"
                      >
                        {item}
                      </button>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center md:text-right">
                <h4 className="font-orbitron font-bold text-orange-500 mb-4">CONNECT</h4>
                <div className="flex justify-center md:justify-end gap-4 mb-4">
                  {[
                    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/vulcanwm', label: 'GitHub' },
                    { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/vulcanwm', label: 'Twitter' },
                    { icon: <Mail className="w-5 h-5" />, url: 'mailto:vulcanwmemail@gmail.com', label: 'Email' },
                    { icon: <MessageCircle className="w-5 h-5" />, url: 'https://100k-before-uni.beehiiv.com', label: 'Newsletter' },
                  ].map((link) => (
                      <a
                          key={link.label}
                          href={link.url}
                          target={link.url.startsWith('http') ? '_blank' : '_self'}
                          rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="p-2 bg-gray-800 border border-orange-500/30 rounded-lg text-orange-400 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500 transition-all duration-300 glow-border hover:glow-pulse"
                          title={link.label}
                      >
                        {link.icon}
                      </a>
                  ))}
                </div>
                <p className="font-mono text-sm text-gray-500">
                  Always open to collaborations
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