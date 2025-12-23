import React from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { companyInfo } from '../data/mock'
import { Button } from './ui/button'

const HeroSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700">
      {/* ================= ANIMATED FINANCIAL CURVES ================= */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M0,600 C240,500 480,700 720,600 960,500 1200,550 1440,450"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2"
          className="animate-curve-slow"
        />
        <path
          d="M0,650 C260,560 520,720 780,610 1040,500 1280,540 1440,480"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          thickness="2"
          className="animate-curve-medium"
        />
        <path
          d="M0,700 C300,600 560,760 820,650 1080,540 1320,580 1440,520"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
          className="animate-curve-fast"
        />
      </svg>

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-200 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full" />
          {companyInfo.tagline}
        </div>

        {/* Serif hero heading */}
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
            className="bg-white text-emerald-800 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-900/30 group"
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            onClick={() => scrollToSection('#about')}
            variant="outline"
            size="lg"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
          >
            Learn About Us
          </Button>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}

export default HeroSection
