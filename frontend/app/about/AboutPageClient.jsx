'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, ArrowDown, Target, Eye, Compass, Award, Users, Globe, Shield,
  MapPin, Phone, Mail, Linkedin, ChevronDown, ExternalLink, X,
  Building2, Briefcase, TrendingUp, Zap
} from 'lucide-react'

// ===========================================
// DATA
// ===========================================
const stats = [
  { value: '14+', label: 'Years', icon: Award },
  { value: '500+', label: 'Clients', icon: Users },
  { value: '10+', label: 'Locations', icon: MapPin },
  { value: '100+', label: 'Experts', icon: Briefcase },
]

const directors = [
  {
    name: 'Ashutosh Kharangate',
    role: 'Founder & Managing Director',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=800',
    linkedin: 'https://www.linkedin.com/in/ashutoshkharangate/',
    bio: 'Part of PWC Financial Advisory Division for 4 years. Expert in Due Diligence and Valuations in M&A across sectors including Hospitality, Healthcare, Manufacturing, and more.',
    credentials: ['Chartered Accountant (ICAI)', 'PWC Alumni', 'M&A Expert'],
  },
  {
    name: 'Satish Shinde',
    role: 'Co-Founder & Director',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?w=800',
    linkedin: 'https://www.linkedin.com/in/satish-shinde-06962047/',
    bio: 'MD of Astra Metals Group with over 30 years of experience in the manufacturing arena. Leading the Marketing and Finance Division.',
    credentials: ['30+ Years Experience', 'Manufacturing Expert', 'Finance Leader'],
  },
  {
    name: 'Anita Ganti',
    role: 'Director',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?w=800',
    linkedin: 'https://www.linkedin.com/in/anita-ganti/',
    bio: 'Former Senior Vice President at Wipro. Ex Texas Instruments and Flex Executive with deep expertise in global operations.',
    credentials: ['Wharton MBA', 'Wipro SVP', 'Global Operations'],
  },
]

const keyTeam = [
  { name: 'Vaikunth Nadkarni', role: 'Manager - Research' },
  { name: 'Avdhut Padwalkar', role: 'Asst. Manager - Research' },
  { name: 'Smriti Bhattacharya', role: 'Asst. Manager - Research' },
  { name: 'Roopa Bhat Jacob', role: 'Head - Business Dev' },
]

const timeline = [
  { year: '2010', title: 'Founded', desc: 'Started as Mangal Advisory Services', color: 'from-emerald-500 to-teal-600' },
  { year: '2014', title: 'Global', desc: 'Partnership with Mundi Consulting', color: 'from-blue-500 to-indigo-600' },
  { year: '2015', title: 'MARC', desc: 'Rebranded with expanded services', color: 'from-purple-500 to-pink-600' },
  { year: '2020', title: 'Pan-India', desc: '8+ cities across India', color: 'from-orange-500 to-red-600' },
  { year: '2024', title: 'USA', desc: 'MARC Glocal Inc, Delaware', color: 'from-cyan-500 to-blue-600' },
]

const clients = [
  { name: 'Taj Hotels', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/08/Taj-1.png' },
  { name: 'Marriott', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/Marriott.png' },
  { name: 'Isha Yoga', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6-223.png' },
  { name: 'The Park', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/07/The-park-hotels.png' },
  { name: 'Kineco', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/logo5.png' },
  { name: 'Magsons', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6.png' },
  { name: 'E P Kamat', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/Kamat.png' },
  { name: 'Danlow', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6-32.png' },
]

const locations = [
  { city: 'Panaji', country: 'India', type: 'HQ', flag: '🇮🇳' },
  { city: 'Delaware', country: 'USA', type: 'Office', flag: '🇺🇸' },
  { city: 'Lisbon', country: 'Portugal', type: 'Partner', flag: '🇵🇹' },
  { city: 'Mumbai', country: 'India', type: 'Branch', flag: '🇮🇳' },
  { city: 'Pune', country: 'India', type: 'Branch', flag: '🇮🇳' },
  { city: 'Kolkata', country: 'India', type: 'Branch', flag: '🇮🇳' },
]

// ===========================================
// SECTION 1: HERO BENTO GRID
// ===========================================
const HeroBentoSection = () => {
  return (
    <section className="snap-section min-h-screen bg-mesh flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Bento Grid */}
        <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[85vh]">
          
          {/* Main Hero Card */}
          <div className="col-span-12 lg:col-span-7 row-span-4 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 rounded-[2rem] p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                About MARC
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-medium text-white leading-tight tracking-tight">
                We Shape
                <br />
                <span className="text-emerald-300 glow-text">Decisions</span>
                <br />
                For the Better
              </h1>
            </div>
            
            <p className="text-emerald-100/80 text-lg max-w-lg relative z-10">
              Global strategy consultancy working with business leaders to seize competitive advantage.
            </p>

            {/* Floating badge */}
            <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <ArrowDown className="w-8 h-8 text-white animate-bounce" />
            </div>
          </div>

          {/* Stats Cards */}
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`col-span-6 lg:col-span-2 row-span-2 ${
                i < 2 ? 'lg:col-start-8' : ''
              } glass rounded-[1.5rem] p-6 flex flex-col justify-center items-center border border-white/10 hover:border-emerald-500/50 transition-all duration-500 group hover:scale-105 cursor-pointer`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-emerald-400 mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-4xl lg:text-5xl font-serif font-medium text-white">{stat.value}</span>
              <span className="text-gray-400 text-sm mt-1">{stat.label}</span>
            </div>
          ))}

          {/* Vision Card */}
          <div className="col-span-6 lg:col-span-4 row-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[1.5rem] p-6 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500 group cursor-pointer overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <Eye className="w-10 h-10 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-serif text-white mb-2">Our Vision</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Creating an ecosystem of financial awareness and sound business management for an improved economy.</p>
          </div>

          {/* Mission Card */}
          <div className="col-span-6 lg:col-span-4 row-span-2 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-[1.5rem] p-6 border border-emerald-700/30 hover:border-emerald-500/50 transition-all duration-500 group cursor-pointer overflow-hidden relative">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <Compass className="w-10 h-10 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-serif text-white mb-2">Our Mission</h3>
            <p className="text-emerald-200/70 text-sm leading-relaxed">Partner with clients at all stages to deliver excellence and achieve unprecedented growth.</p>
          </div>

          {/* Scroll Indicator */}
          <div className="col-span-12 lg:col-span-4 row-span-2 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-4">Scroll to explore our story</p>
              <div className="w-8 h-12 border-2 border-gray-600 rounded-full mx-auto flex justify-center pt-2">
                <div className="w-1.5 h-3 bg-emerald-500 rounded-full animate-bounce" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ===========================================
// SECTION 2: JOURNEY TIMELINE
// ===========================================
const JourneySection = () => {
  return (
    <section className="snap-section min-h-screen bg-gray-950 flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase">Our Journey</span>
          <h2 className="font-serif text-5xl lg:text-7xl font-medium text-white mt-4">
            14 Years of <span className="text-emerald-400">Excellence</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          
          <div className="grid grid-cols-5 gap-4">
            {timeline.map((item, i) => (
              <div 
                key={i} 
                className="relative group"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full z-10 group-hover:scale-150 transition-transform">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-50" />
                </div>
                
                {/* Card */}
                <div className={`${i % 2 === 0 ? 'mb-20' : 'mt-20'} bg-gradient-to-br ${item.color} rounded-2xl p-6 transform group-hover:scale-105 transition-all duration-500 cursor-pointer`}>
                  <span className="text-5xl font-serif font-bold text-white/30">{item.year}</span>
                  <h3 className="text-xl font-serif text-white mt-2">{item.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ===========================================
// SECTION 3: TEAM (Card Stack with Zoom)
// ===========================================
const TeamSection = ({ selectedMember, setSelectedMember }) => {
  return (
    <section className="snap-section min-h-screen bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Ambient effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Selected Member Detail */}
          <div className="order-2 lg:order-1">
            {selectedMember !== null ? (
              <div className="animate-slide-in-left">
                <div className="relative aspect-[3/4] max-w-md rounded-3xl overflow-hidden mb-6 shadow-2xl shadow-emerald-500/20">
                  <Image
                    src={directors[selectedMember].image}
                    alt={directors[selectedMember].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  <button 
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-3xl text-white">{directors[selectedMember].name}</h3>
                    <p className="text-emerald-400 font-medium">{directors[selectedMember].role}</p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">{directors[selectedMember].bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {directors[selectedMember].credentials.map((cred, i) => (
                      <span key={i} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                        {cred}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={directors[selectedMember].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ) : (
              <div className="text-center lg:text-left">
                <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase">Our People</span>
                <h2 className="font-serif text-5xl lg:text-6xl font-medium text-white mt-4 mb-6">
                  Leadership <span className="text-emerald-400">Team</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-md">
                  Click on a team member to learn about their expertise and experience.
                </p>
              </div>
            )}
          </div>

          {/* Right: Stacked Cards */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[500px]">
              {directors.map((director, i) => {
                const isSelected = selectedMember === i
                const offset = selectedMember !== null 
                  ? (i - selectedMember) * 30 
                  : i * 40
                
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedMember(isSelected ? null : i)}
                    className={`absolute left-1/2 -translate-x-1/2 w-72 h-80 rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-out ${
                      isSelected ? 'scale-110 shadow-2xl shadow-emerald-500/30' : 'hover:scale-105'
                    }`}
                    style={{
                      top: `${offset}px`,
                      zIndex: isSelected ? 50 : directors.length - i,
                      opacity: selectedMember !== null && !isSelected ? 0.5 : 1,
                    }}
                  >
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="font-serif text-xl text-white">{director.name}</h4>
                      <p className="text-emerald-400 text-sm">{director.role}</p>
                    </div>

                    {/* Glow ring on hover */}
                    <div className={`absolute inset-0 rounded-3xl border-2 transition-colors ${
                      isSelected ? 'border-emerald-500' : 'border-transparent hover:border-emerald-500/50'
                    }`} />
                  </div>
                )
              })}
            </div>

            {/* Key Team Preview */}
            <div className="mt-8 flex justify-center gap-3">
              {keyTeam.slice(0, 4).map((member, i) => (
                <div key={i} className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                  <span className="font-serif text-emerald-300 font-medium">{member.name.charAt(0)}</span>
                </div>
              ))}
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                <span className="text-gray-400 text-sm">+20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===========================================
// SECTION 4: CLIENTS MARQUEE
// ===========================================
const ClientsSection = () => {
  const duplicatedClients = [...clients, ...clients, ...clients]
  
  return (
    <section className="snap-section min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 text-sm tracking-[0.3em] uppercase">Our Clients</span>
          <h2 className="font-serif text-5xl lg:text-6xl font-medium text-gray-900 mt-4">
            Trusted by <span className="text-emerald-600">500+</span> Companies
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            From startups to Fortune 500, we've partnered with organizations across 30+ countries.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
          {[
            { value: '500+', label: 'Clients Worldwide' },
            { value: '30+', label: 'Countries Served' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-5xl font-medium text-emerald-600">{stat.value}</div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="marquee-container py-8">
          <div className="marquee-track">
            {duplicatedClients.map((client, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-48 h-24 bg-gray-50 rounded-2xl flex items-center justify-center p-4 border border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Reverse Marquee */}
        <div className="marquee-container py-8">
          <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
            {[...duplicatedClients].reverse().map((client, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-48 h-24 bg-gray-50 rounded-2xl flex items-center justify-center p-4 border border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ===========================================
// SECTION 5: GLOBAL PRESENCE
// ===========================================
const LocationsSection = () => {
  return (
    <section className="snap-section min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-950 to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Globe wireframe effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-[800px] h-[800px] border border-emerald-500/30 rounded-full" />
        <div className="absolute w-[600px] h-[600px] border border-emerald-500/20 rounded-full" />
        <div className="absolute w-[400px] h-[400px] border border-emerald-500/10 rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase">Global Presence</span>
          <h2 className="font-serif text-5xl lg:text-6xl font-medium text-white mt-4">
            Across <span className="text-emerald-400">3 Continents</span>
          </h2>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {locations.map((loc, i) => (
            <div 
              key={i}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-500 cursor-pointer text-center"
            >
              <span className="text-4xl mb-3 block">{loc.flag}</span>
              <h4 className="font-serif text-lg text-white">{loc.city}</h4>
              <p className="text-emerald-400 text-sm">{loc.type}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="mailto:contact@marcglocal.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/30 group"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

// ===========================================
// SECTION 6: CTA
// ===========================================
const CTASection = () => {
  return (
    <section className="snap-section min-h-screen bg-mesh flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px] animate-pulse-glow" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-5xl lg:text-7xl font-medium text-white mb-6 leading-tight">
          Ready to make
          <br />
          <span className="text-emerald-400 glow-text">better decisions?</span>
        </h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
          Let us help you solve your toughest challenges and realize your greatest ambitions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="px-10 py-5 bg-emerald-500 text-white rounded-full font-semibold text-lg hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1 flex items-center gap-2 group"
          >
            Schedule Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://marcglocal.com/wp-content/uploads/2025/06/MARC-Credentials-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 border-2 border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2"
          >
            Download Credentials
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

// ===========================================
// MAIN PAGE COMPONENT
// ===========================================
export default function AboutPageClient() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [currentSection, setCurrentSection] = useState(0)
  
  const sections = ['hero', 'journey', 'team', 'clients', 'locations', 'cta']

  return (
    <div className="snap-container scrollbar-hide">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {sections.map((section, i) => (
          <button
            key={section}
            onClick={() => {
              document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === i 
                ? 'bg-emerald-500 scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Back to Home */}
      <Link 
        href="/"
        className="fixed top-6 left-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
      >
        ← Back to Home
      </Link>

      <div id="hero"><HeroBentoSection /></div>
      <div id="journey"><JourneySection /></div>
      <div id="team"><TeamSection selectedMember={selectedMember} setSelectedMember={setSelectedMember} /></div>
      <div id="clients"><ClientsSection /></div>
      <div id="locations"><LocationsSection /></div>
      <div id="cta"><CTASection /></div>
    </div>
  )
}
