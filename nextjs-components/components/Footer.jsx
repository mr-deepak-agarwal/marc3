"use client"

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react'

// Static data
const companyInfo = {
  phone: '+91 93596 28675',
  email: 'contact@marcglocal.com',
  address: '2nd Floor, CMM Building, Above Sarvaa Restaurant, Rua de Ourém, Panaji, Goa 403001',
  socialLinks: {
    facebook: 'https://www.facebook.com/MARCGlocal/',
    twitter: 'https://twitter.com/Marcglocal',
    instagram: 'https://www.instagram.com/marc_glocal/',
    linkedin: 'https://www.linkedin.com/company/marcglocal/',
    youtube: 'https://www.youtube.com/channel/UCMg4JaqL7zZ3pLfpfkhRnVQ',
  },
}

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

const socialIcons = [
  { icon: Facebook, href: companyInfo.socialLinks.facebook, label: 'Facebook' },
  { icon: Twitter, href: companyInfo.socialLinks.twitter, label: 'Twitter' },
  { icon: Instagram, href: companyInfo.socialLinks.instagram, label: 'Instagram' },
  { icon: Linkedin, href: companyInfo.socialLinks.linkedin, label: 'LinkedIn' },
  { icon: Youtube, href: companyInfo.socialLinks.youtube, label: 'YouTube' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="font-serif text-3xl font-medium tracking-tight">
                <span className="text-emerald-400">M</span>ARC
              </div>
            </Link>

            {/* Social Icons */}
            <nav className="flex items-center gap-3 mt-6" aria-label="Social media links">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </nav>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="font-serif text-lg font-medium mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h4 className="font-serif text-lg font-medium mb-6 tracking-tight">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href={`tel:${companyInfo.phone}`} className="hover:text-emerald-400 transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-emerald-400 transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="leading-relaxed">{companyInfo.address}</li>
            </ul>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mangal Analytics and Research Consulting (MARC). All Rights Reserved.
          </p>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-500/30 flex items-center justify-center hover:bg-emerald-700 transition-all duration-300 hover:-translate-y-1 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
