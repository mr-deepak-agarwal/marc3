import React, { useState, useRef } from 'react'
import { ArrowRight, ArrowDown, ChevronLeft, ChevronRight, Linkedin, MapPin, Users, Globe, Target, Award, Building2, ExternalLink } from 'lucide-react'

// Sample data for preview
const teamMembers = [
  { name: 'Ashutosh Kharangate', role: 'Founder & MD', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=400' },
  { name: 'Satish Shinde', role: 'Co-Founder', image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?w=400' },
  { name: 'Anita Ganti', role: 'Director', image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?w=400' },
]

const stats = [
  { value: '14+', label: 'Years' },
  { value: '500+', label: 'Clients' },
  { value: '10+', label: 'Locations' },
]

// ============================================
// OPTION A: BENTO GRID LAYOUT
// ============================================
const OptionABentoGrid = () => {
  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-emerald-400 text-sm font-mono mb-4">OPTION A: BENTO GRID LAYOUT</h2>
        
        <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[80vh]">
          {/* Hero Card - Large */}
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative z-10">
              <span className="text-emerald-200 text-sm font-medium">About MARC</span>
              <h1 className="text-4xl font-serif font-medium text-white mt-2">We Shape Decisions For the Better</h1>
            </div>
            <p className="text-emerald-100/80 relative z-10">Global strategy consultancy working with business leaders.</p>
          </div>

          {/* Stats Cards */}
          {stats.map((stat, i) => (
            <div key={i} className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-6 flex flex-col justify-center items-center border border-gray-800 hover:border-emerald-500/50 transition-all hover:scale-105 cursor-pointer">
              <span className="text-4xl font-serif font-medium text-white">{stat.value}</span>
              <span className="text-gray-400 text-sm mt-1">{stat.label}</span>
            </div>
          ))}

          {/* Vision Card */}
          <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all group cursor-pointer">
            <Target className="w-8 h-8 text-emerald-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-medium mb-2">Our Vision</h3>
            <p className="text-gray-400 text-sm">Creating financial awareness ecosystem</p>
          </div>

          {/* Team Preview - Horizontal scroll */}
          <div className="col-span-2 bg-gray-900/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-800 overflow-hidden">
            <h3 className="text-white font-medium mb-4">Leadership</h3>
            <div className="flex gap-4">
              {teamMembers.map((member, i) => (
                <div key={i} className="flex-shrink-0 w-32 group cursor-pointer">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden mb-2">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-white text-sm font-medium truncate">{member.name}</p>
                  <p className="text-emerald-400 text-xs">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Locations Card */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all cursor-pointer">
            <Globe className="w-8 h-8 text-emerald-400 mb-3" />
            <h3 className="text-white font-medium mb-2">Global Reach</h3>
            <p className="text-gray-400 text-sm">USA • Portugal • India</p>
          </div>

          {/* CTA Card */}
          <div className="bg-emerald-500 rounded-3xl p-6 flex flex-col justify-center items-center hover:bg-emerald-400 transition-colors cursor-pointer group">
            <span className="text-emerald-950 font-semibold">Get in Touch</span>
            <ArrowRight className="w-5 h-5 text-emerald-950 mt-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// OPTION B: FULL-SCREEN SNAP SECTIONS
// ============================================
const OptionBSnapSections = () => {
  return (
    <div className="h-[80vh] overflow-y-auto snap-y snap-mandatory bg-gray-950">
      <h2 className="fixed top-4 left-8 text-emerald-400 text-sm font-mono z-50">OPTION B: SNAP SCROLL SECTIONS</h2>
      
      {/* Section 1: Hero */}
      <section className="h-[80vh] snap-start flex items-center justify-center relative bg-gradient-to-br from-emerald-950 via-gray-950 to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="text-center relative z-10 px-8">
          <span className="text-emerald-400 text-sm tracking-widest">ABOUT MARC</span>
          <h1 className="text-6xl font-serif font-medium text-white mt-4 mb-6">We Shape Decisions<br/><span className="text-emerald-400">For the Better</span></h1>
          <div className="flex justify-center gap-12 mt-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-serif text-white">{stat.value}</div>
                <div className="text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          <ArrowDown className="w-6 h-6 text-emerald-400 mx-auto mt-16 animate-bounce" />
        </div>
      </section>

      {/* Section 2: Team */}
      <section className="h-[80vh] snap-start flex items-center justify-center bg-gray-900 relative">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-serif text-white mb-12 text-center">Our Leadership</h2>
          <div className="grid grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-4 relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl text-white font-medium">{member.name}</h3>
                <p className="text-emerald-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Story */}
      <section className="h-[80vh] snap-start flex items-center justify-center bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <span className="text-emerald-300 text-sm tracking-widest">OUR STORY</span>
          <h2 className="text-5xl font-serif text-white mt-4 mb-8">14 Years of Excellence</h2>
          <p className="text-xl text-emerald-100/80 leading-relaxed">From Mangal Advisory Services in 2010 to MARC Glocal Inc today, we've grown from a Goa-based startup to a global consulting powerhouse.</p>
        </div>
      </section>
    </div>
  )
}

// ============================================
// OPTION C: INTERACTIVE CARD STACK
// ============================================
const OptionCCardStack = () => {
  const [activeCard, setActiveCard] = useState(0)
  
  const cards = [
    { title: 'Our Story', icon: Award, color: 'from-emerald-600 to-emerald-800', content: 'Founded in 2010, MARC has grown into a global consulting powerhouse.' },
    { title: 'Our Team', icon: Users, color: 'from-blue-600 to-blue-800', content: '100+ professionals across 10+ locations worldwide.' },
    { title: 'Our Reach', icon: Globe, color: 'from-purple-600 to-purple-800', content: 'USA, Portugal, and 8 cities across India.' },
    { title: 'Our Clients', icon: Building2, color: 'from-orange-600 to-orange-800', content: '500+ clients served across 30+ countries.' },
  ]

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <h2 className="text-emerald-400 text-sm font-mono mb-8">OPTION C: INTERACTIVE CARD STACK</h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-8 items-center">
          {/* Left: Stacked Cards */}
          <div className="relative h-[500px]">
            {cards.map((card, i) => {
              const isActive = activeCard === i
              const offset = (i - activeCard) * 20
              return (
                <div
                  key={i}
                  onClick={() => setActiveCard(i)}
                  className={`absolute inset-x-0 h-80 rounded-3xl p-8 cursor-pointer transition-all duration-500 bg-gradient-to-br ${card.color}`}
                  style={{
                    transform: `translateY(${offset}px) scale(${isActive ? 1 : 0.95 - (Math.abs(i - activeCard) * 0.02)})`,
                    zIndex: cards.length - Math.abs(i - activeCard),
                    opacity: Math.abs(i - activeCard) > 2 ? 0 : 1,
                  }}
                >
                  <card.icon className="w-12 h-12 text-white/80 mb-4" />
                  <h3 className="text-3xl font-serif text-white mb-4">{card.title}</h3>
                  {isActive && (
                    <p className="text-white/80 text-lg animate-fadeIn">{card.content}</p>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right: Team 3D Flip Cards */}
          <div>
            <h3 className="text-white text-2xl font-serif mb-6">Leadership Team</h3>
            <div className="grid grid-cols-3 gap-4">
              {teamMembers.map((member, i) => (
                <div key={i} className="group perspective-1000">
                  <div className="relative w-full aspect-square transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-emerald-600 rounded-2xl p-4 flex flex-col justify-center items-center">
                      <p className="text-white font-medium text-center">{member.name}</p>
                      <p className="text-emerald-200 text-sm">{member.role}</p>
                      <Linkedin className="w-5 h-5 text-white mt-3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveCard(i)}
              className={`w-3 h-3 rounded-full transition-all ${activeCard === i ? 'bg-emerald-500 w-8' : 'bg-gray-700'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================
// OPTION D: HORIZONTAL STORY SCROLL
// ============================================
const OptionDHorizontalScroll = () => {
  const scrollRef = useRef(null)
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 400, behavior: 'smooth' })
    }
  }

  const chapters = [
    { year: '2010', title: 'The Beginning', desc: 'Founded as Mangal Advisory Services in Goa', bg: 'from-emerald-900 to-emerald-950' },
    { year: '2014', title: 'Going Global', desc: 'Partnership with Mundi Consulting, Portugal', bg: 'from-blue-900 to-blue-950' },
    { year: '2015', title: 'Rebranding', desc: 'Evolved into MARC with expanded services', bg: 'from-purple-900 to-purple-950' },
    { year: '2020', title: 'Pan-India', desc: 'Offices across 8+ Indian cities', bg: 'from-orange-900 to-orange-950' },
    { year: '2024', title: 'USA Launch', desc: 'MARC Glocal Inc, Delaware', bg: 'from-pink-900 to-pink-950' },
    { year: 'Team', title: 'Our People', desc: '100+ professionals worldwide', bg: 'from-cyan-900 to-cyan-950', isTeam: true },
  ]

  return (
    <div className="min-h-screen bg-gray-950 p-8 relative">
      <h2 className="text-emerald-400 text-sm font-mono mb-4">OPTION D: HORIZONTAL STORY SCROLL</h2>
      
      {/* Navigation Arrows */}
      <button onClick={() => scroll(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button onClick={() => scroll(1)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {chapters.map((chapter, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-[400px] h-[60vh] rounded-3xl bg-gradient-to-br ${chapter.bg} p-8 snap-center flex flex-col justify-between relative overflow-hidden group`}
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <span className="text-6xl font-serif font-bold text-white/20">{chapter.year}</span>
              <h3 className="text-3xl font-serif text-white mt-4">{chapter.title}</h3>
            </div>
            
            {chapter.isTeam ? (
              <div className="flex gap-2 relative z-10">
                {teamMembers.map((m, j) => (
                  <img key={j} src={m.image} alt={m.name} className="w-16 h-16 rounded-full object-cover border-2 border-white/30" />
                ))}
              </div>
            ) : (
              <p className="text-white/70 text-lg relative z-10">{chapter.desc}</p>
            )}
          </div>
        ))}
        
        {/* CTA Card */}
        <div className="flex-shrink-0 w-[400px] h-[60vh] rounded-3xl bg-emerald-500 p-8 snap-center flex flex-col justify-center items-center">
          <h3 className="text-3xl font-serif text-emerald-950 mb-4">Ready to Start?</h3>
          <button className="px-8 py-4 bg-emerald-950 text-white rounded-full font-medium flex items-center gap-2 hover:bg-emerald-900 transition-colors">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-6">
        {chapters.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-gray-700" />
        ))}
      </div>
    </div>
  )
}

// ============================================
// MAIN PREVIEW PAGE
// ============================================
const DesignPreview = () => {
  const [activeOption, setActiveOption] = useState('A')

  const options = [
    { id: 'A', label: 'Bento Grid', desc: 'Apple-inspired grid layout' },
    { id: 'B', label: 'Snap Scroll', desc: 'Full-screen sections' },
    { id: 'C', label: 'Card Stack', desc: 'Interactive stacked cards' },
    { id: 'D', label: 'Horizontal', desc: 'Timeline story scroll' },
  ]

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Option Selector */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-white font-serif text-xl">About Page Design Options</h1>
            <div className="flex gap-2">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveOption(opt.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeOption === opt.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  <span className="font-mono mr-1">{opt.id}.</span>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            {options.find(o => o.id === activeOption)?.desc}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="pt-24">
        {activeOption === 'A' && <OptionABentoGrid />}
        {activeOption === 'B' && <OptionBSnapSections />}
        {activeOption === 'C' && <OptionCCardStack />}
        {activeOption === 'D' && <OptionDHorizontalScroll />}
      </div>
    </div>
  )
}

export default DesignPreview
