"use client"

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

// Static data
const testimonials = [
  {
    id: 1,
    content: 'We appointed MARC to execute two very diverse tasks. One was into market research and the other was a premium inventory assessment and valuation. We were immensely satisfied with the attention to detailing in both the assignments. The team on both jobs were highly sensitive to our needs, very flexible and result oriented.',
    author: 'Anand Chatterjee',
    position: 'GM, Planet Hollywood - Beach Resort, Goa',
  },
  {
    id: 2,
    content: 'We had the opportunity to meet Ashutosh and utilize the services of MARC for a due diligence and internal audit. It was a good experience. MARC brings a unique blend of big 4 exposure with a local lineage. That gives him a unique perspective and insight to add value to Goan corporates.',
    author: 'Deepak Tripathi',
    position: 'President - Tulip Diagnostics Pvt. Ltd.',
  },
  {
    id: 3,
    content: 'We have worked with MARC on several occasions and they have consistently surpassed our expectations with their analytical, professional and thorough approach delivered on time and within budget.',
    author: 'Dale Menezes',
    position: 'Director, CMM Group',
  },
  {
    id: 4,
    content: 'MARC is highly experienced and professional in the transaction advisory space. They have provided us with the ability to scale quickly, meet and exceed client deadlines and expectations. Ashutosh has been a great team member on call willing to go the extra mile.',
    author: 'Rakesh Parikh',
    position: 'Managing Director, Pivot Capital LLC',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 6000)
    return () => clearInterval(interval)
  }, [nextTestimonial])

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
            Testimonials
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-6 tracking-tight">
            What Our Clients Say
          </h2>
        </header>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-12 w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div
              className={`transition-all duration-500 ${
                isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              <blockquote className="font-serif text-xl lg:text-2xl font-medium text-gray-700 leading-relaxed mb-8 pt-4 tracking-tight">
                "{testimonials[currentIndex].content}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="font-serif text-xl font-medium text-emerald-600">
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <cite className="font-serif text-gray-900 text-lg font-medium tracking-tight not-italic block">
                    {testimonials[currentIndex].author}
                  </cite>
                  <span className="text-gray-600">{testimonials[currentIndex].position}</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white hover:bg-emerald-600 transition-all duration-300 hover:scale-110 shadow-lg shadow-emerald-500/30"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex ? 'w-8 h-2 bg-emerald-500' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
