import React from 'react';
import { companyInfo, navLinks } from '../data/mock';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialIcons = [
    { icon: Facebook, href: companyInfo.socialLinks.facebook, label: 'Facebook' },
    { icon: Twitter, href: companyInfo.socialLinks.twitter, label: 'Twitter' },
    { icon: Instagram, href: companyInfo.socialLinks.instagram, label: 'Instagram' },
    { icon: Linkedin, href: companyInfo.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Youtube, href: companyInfo.socialLinks.youtube, label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="text-3xl font-bold tracking-tight">
                <span className="text-emerald-400">M</span>ARC
              </div>
              <div className="text-xs font-medium leading-tight text-gray-400">
                Mangal Analytics &<br />Research Consulting
              </div>
            </a>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {companyInfo.tagline}. We offer a wide range of business consulting services that we constantly look to expand, helping companies grow and achieve lasting success.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
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
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
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
              <li className="leading-relaxed">
                {companyInfo.address}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mangal Analytics and Research Consulting (MARC). All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">
              Terms of Service
            </a>
          </div>
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
  );
};

export default Footer;
