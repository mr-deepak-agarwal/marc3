"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

// Static data
const services = [
  {
    id: 1,
    title: 'Market Research',
    description: 'Market research and consulting is the process of determining the viability of a new service or product through research conducted directly with potential customers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Growth Strategy',
    description: "Growth strategy is an organization's plan for overcoming current and future challenges to realize its goals for expansion and sustainable development.",
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Mergers & Acquisitions',
    description: 'In corporate finance, mergers and acquisitions are transactions in which the ownership of companies are transferred or consolidated with other entities.',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Internationalization Strategy',
    description: 'Internationalization describes designing a product in a way that it may be readily consumed across multiple countries and global markets.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
  },
]

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(null)

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
            Our Services
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-tight tracking-tight">
            Comprehensive Business Solutions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            MARC provides actionable answers through our professional strategy management consulting and business consulting services tailored to meet your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background Image */}
              <div className="relative h-[400px]">
                <Image
                  src={service.image}
                  alt={`${service.title} - MARC consulting services`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    hoveredService === index
                      ? 'bg-emerald-900/80'
                      : 'bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent'
                  }`}
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div
                  className={`transform transition-all duration-500 ${
                    hoveredService === index ? '-translate-y-4' : 'translate-y-0'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-serif text-emerald-400 text-sm font-medium tracking-tight">
                      0{index + 1}
                    </span>
                    <span className="w-8 h-px bg-emerald-400" />
                  </div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-medium text-white mb-3 leading-snug tracking-tight">
                    {service.title}
                  </h3>
                  <p
                    className={`text-white/80 leading-relaxed transition-all duration-500 ${
                      hoveredService === index ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0'
                    } overflow-hidden`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Arrow Button */}
                <div
                  className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                    hoveredService === index ? 'bg-emerald-500 scale-110' : ''
                  }`}
                >
                  <ArrowUpRight
                    className={`w-5 h-5 transition-all duration-300 ${
                      hoveredService === index ? 'text-white rotate-45' : 'text-white'
                    }`}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-lg hover:text-emerald-700 transition-colors group">
            View All Services
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
