import React from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { companyInfo } from '../data/mock'
import { Button } from './ui/button'

const HeroSection = () => {
  const scrollToSection = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800">

      {/* ===== FULL PAGE FINANCIAL FLOW SVG ===== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-45"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        {[
          { y: 200, cls: 'animate-flow-slow', o: 0.35 },
          { y: 300, cls: 'animate-flow-medium', o: 0.28 },
          { y: 420, cls: 'animate-flow-fast', o: 0.22 },
          { y: 540, cls: 'animate-flow-slow', o: 0.30 },
          { y: 660, cls: 'animate-flow-medium', o: 0.24 },
        ].map((line, i) => (
          <path
            key={i}
            d={`M-200 ${line.y}
               C 200 ${line.y - 80},
                 500 ${line.y + 100},
                 800 ${line.y - 60},
                 1100 ${line.y + 80},
                 1600 ${line.y - 40}`}
            fill="none"
            stroke={`rgba(255,255,255,${line.o})`}
            strokeWidth="2"
            className={line.cls}
          />
        ))}
      </svg>

      {/* ===== DEPTH OVERLAY ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full" />
          {companyInfo.tagline}
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-medium text-white mb-6 leading-tight tracking-tight">
          Business Consulting Services
          <br />
          <span className="text-emerald-300">
            That Power Smarter Growth
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          {companyInfo.heroSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => scrollToSection('#services')}
            size="lg"
            className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold shadow-2xl shadow-black/25 transition-all duration-300 hover:-translate-y-1"
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            onClick={() => scrollToSection('#about')}
            variant="outline"
            size="lg"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
          >
            Learn About Us
          </Button>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}

export default HeroSection
