"use client"

import { useState, useEffect } from 'react'

// Section navigation items
const sections = [
  { id: 'story', label: 'Our Story' },
  { id: 'team', label: 'Our Team' },
  { id: 'locations', label: 'Locations' },
  { id: 'clients', label: 'Clients' },
  { id: 'partners', label: 'Partners' },
]

export default function AboutStickyNav() {
  const [activeSection, setActiveSection] = useState('story')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero (500px)
      setIsVisible(window.scrollY > 500)

      // Determine active section based on scroll position
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }))

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav
      className={`fixed top-20 left-0 right-0 z-40 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
      aria-label="About page sections"
    >
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1 py-3 overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeSection === section.id
                    ? 'text-white bg-emerald-600 shadow-md shadow-emerald-500/25'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
