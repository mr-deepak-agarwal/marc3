import React, { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, Linkedin, Twitter } from 'lucide-react'
import { companyInfo, navLinks } from '../data/mock'
import { Button } from './ui/button'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="hidden lg:block bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 hover:text-emerald-300 transition-colors"
            >
              <Phone size={14} />
              {companyInfo.phone}
            </a>

            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-2 hover:text-emerald-300 transition-colors"
            >
              <Mail size={14} />
              {companyInfo.email}
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={companyInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={companyInfo.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/marc_logo.png"
                alt="MarcGlocal Logo"
                className="h-11 w-auto"
              />
            </a>

            {/* ================= DESKTOP NAV ================= */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-sm font-medium rounded-lg text-gray-800 hover:text-emerald-600 hover:bg-emerald-500/10 transition-all"
                >
                  {link.label}
                </button>
              ))}

              <Button
                onClick={() => scrollToSection('#contact')}
                className="ml-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                Get in Touch
              </Button>
            </nav>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition font-medium"
              >
                {link.label}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection('#contact')}
              className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
