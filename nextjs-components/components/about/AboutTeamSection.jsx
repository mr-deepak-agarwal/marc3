"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Linkedin, ChevronDown, ChevronUp } from 'lucide-react'

// Team data
const directors = [
  {
    name: 'Ashutosh Kharangate',
    role: 'Founder & Managing Director',
    linkedin: 'https://www.linkedin.com/in/ashutoshkharangate/',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=400',
    bio: [
      'Part of PWC Financial Advisory Division for 4 years',
      'Expert in Due Diligence and Valuations in M&A across sectors',
      'Member of the Institute of Chartered Accounts of India (ICAI)',
    ],
  },
  {
    name: 'Satish Shinde',
    role: 'Co-Founder & Director',
    linkedin: 'https://www.linkedin.com/in/satish-shinde-06962047/',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?w=400',
    bio: [
      'MD of Astra Metals Group',
      'Leading the Marketing and Finance Division of Astra Metals Group',
      'Over 30 years of experience in the manufacturing arena',
    ],
  },
  {
    name: 'Anita Ganti',
    role: 'Director',
    linkedin: 'https://www.linkedin.com/in/anita-ganti/',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?w=400',
    bio: [
      'Former Senior Vice President at Wipro for over 4 years',
      'Ex Texas Instruments and Flex Executive',
      'Finance Major, MBA at The Wharton School of the University of Pennsylvania',
    ],
  },
]

const keyTeam = [
  { name: 'Vaikunth Nadkarni', role: 'Manager - Market Research and Financial Analysis' },
  { name: 'Avdhut Padwalkar', role: 'Assistant Manager - Market Research and Financial Analysis' },
  { name: 'Smriti Bhattacharya', role: 'Assistant Manager - Market Research and Financial Analysis' },
  { name: 'Roopa Bhat Jacob', role: 'Head - Business Development' },
]

const associates = [
  { name: 'Priyanka Kamat', role: 'Consultant - Human Capital' },
  { name: 'Karan Shah', role: 'Associate Partner' },
  { name: 'Manu Kurian', role: 'Associate Partner' },
  { name: 'Manas Joshi', role: 'Associate Partner' },
  { name: 'Varsha Chopra', role: 'Associate Partner' },
  { name: 'Ruchi Jindal', role: 'Associate Partner' },
  { name: 'Atanu Sengupta', role: 'Associate Partner' },
  { name: 'Ayush Soni', role: 'Associate Partner' },
  { name: 'CA Shrinidhi Rao', role: 'Associate Partner' },
]

const domainExperts = [
  { name: 'Anand Chatterjee', role: 'Hospitality Sector Expert' },
  { name: 'Dr. Tejas Kamat', role: 'Healthcare Sector Expert' },
  { name: 'Sonali Vartak', role: 'Finance Expert' },
]

export default function AboutTeamSection() {
  const [expandedDirector, setExpandedDirector] = useState(0)
  const [showAllAssociates, setShowAllAssociates] = useState(false)

  return (
    <section id="team" className="py-24 bg-emerald-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-200 text-sm font-semibold mb-6">
            Our People
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight">
            A Uniquely Collaborative Culture
          </h2>
          <p className="text-lg text-emerald-100/80 max-w-3xl mx-auto">
            MARC is a family comprising of Chartered Accountants, Strategic Planners, Engineers, Company Secretaries, LLBs, and MBAs, each a stalwart in their respective fields with prior experience of working for globally acclaimed consulting firms.
          </p>
        </header>

        {/* Directors - Large Feature Cards */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl font-medium text-white mb-8">Leadership</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {directors.map((director, index) => (
              <article
                key={index}
                className={`bg-white rounded-3xl overflow-hidden transition-all duration-500 ${
                  expandedDirector === index ? 'ring-2 ring-emerald-400' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={director.image}
                    alt={`${director.name} - ${director.role}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* LinkedIn Badge */}
                  <a
                    href={director.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                    aria-label={`${director.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="font-serif text-xl font-medium text-gray-900 mb-1">{director.name}</h4>
                  <p className="text-emerald-600 font-medium text-sm mb-4">{director.role}</p>
                  
                  {/* Expandable Bio */}
                  <button
                    onClick={() => setExpandedDirector(expandedDirector === index ? -1 : index)}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    {expandedDirector === index ? (
                      <>
                        <span>Show less</span>
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <span>View credentials</span>
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedDirector === index ? 'max-h-48 mt-4' : 'max-h-0'
                    }`}
                  >
                    <ul className="space-y-2">
                      {director.bio.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Key Team */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-medium text-white mb-8">Key Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <span className="font-serif text-xl font-medium text-emerald-300">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-medium text-white mb-1">{member.name}</h4>
                <p className="text-emerald-200/70 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Associates & Partners */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl font-medium text-white">Associates & Partners</h3>
            <button
              onClick={() => setShowAllAssociates(!showAllAssociates)}
              className="text-emerald-300 text-sm font-medium hover:text-white transition-colors"
            >
              {showAllAssociates ? 'Show less' : 'View all'}
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {(showAllAssociates ? associates : associates.slice(0, 6)).map((member, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-lg text-emerald-300">{member.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">{member.name}</h4>
                  <p className="text-emerald-200/60 text-xs">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Experts */}
        <div>
          <h3 className="font-serif text-2xl font-medium text-white mb-8">Domain Experts</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {domainExperts.map((expert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-800/50 to-emerald-900/50 rounded-2xl p-6 border border-emerald-700/50"
              >
                <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <span className="font-serif text-2xl font-medium text-emerald-300">
                    {expert.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-serif text-lg font-medium text-white mb-1">{expert.name}</h4>
                <p className="text-emerald-300 text-sm">{expert.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
