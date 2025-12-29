import React from 'react'
import { Target, Eye, Compass, Award, Users, Globe, Shield } from 'lucide-react'

// Core values
const coreValues = [
  { icon: Shield, label: 'Integrity' },
  { icon: Award, label: 'Excellence' },
  { icon: Users, label: 'Consumer Focus' },
  { icon: Target, label: 'Accountability' },
  { icon: Globe, label: 'Inclusiveness' },
]

// Service verticals
const serviceVerticals = [
  'Market Research Solutions and Data Analytics',
  'Growth Strategy',
  'Mergers and Acquisitions',
  'Internationalization',
  'Global Business Analytics and Research',
]

// Timeline milestones
const timeline = [
  { year: '2010', title: 'Founded as MAS', description: 'Started as Mangal Advisory Services in Goa' },
  { year: '2014', title: 'Portugal Partnership', description: 'Strategic alliance with Mundi Consulting, Europe' },
  { year: '2015', title: 'Rebranded to MARC', description: 'Enhanced portfolio of consulting services' },
  { year: '2020', title: 'Pan-India Expansion', description: 'Offices across 8+ Indian cities' },
  { year: '2024', title: 'MARC Glocal Inc, USA', description: 'Delaware C Corp for US market' },
]

const AboutStorySection = () => {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
            Our Story
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-tight tracking-tight">
            Delivering Excellence & Partnering Success
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            'Service in India' on the lines of Indian Government's mission of 'Make in India' is what MARC believes in and is focused to achieve.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left - About Content */}
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              MARC is a business consulting firm engaged in the business of Mergers and Acquisitions Advisory, Business Analytics and Research, Internationalization, and Growth Strategy.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We have to our credit, over a decade of experience and expertise through our past associations with the Big 4, reputed MNCs, and a multi-faceted and skilled team. This enables us to offer customized and timebound solutions to complex business problems through our research and analytical insights.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At MARC, we assist our partners in discovering the power and importance of combining market research and data analytics to achieve significant improvements in efficiency and achieve scale.
            </p>

            {/* Service Verticals */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-serif text-xl font-medium text-gray-900 mb-4">Our Service Verticals</h3>
              <div className="space-y-3">
                {serviceVerticals.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="font-serif text-emerald-600 font-medium">0{index + 1}</span>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Image + Mission/Vision Cards */}
          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg"
                alt="MARC Team - Business consulting professionals collaborating"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-serif text-lg font-medium text-gray-900 mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To create an ecosystem of financial awareness and sound fundamental business management knowledge for an improved economy.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-serif text-lg font-medium text-gray-900 mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To partner with clients at all stages of business, delivering excellence to help start wisely, grow strappingly, and achieve unprecedented profitability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h3 className="font-serif text-2xl font-medium text-gray-900 mb-8 text-center">Our Core Values</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300"
              >
                <value.icon className="w-5 h-5 text-emerald-600" />
                <span className="font-medium text-gray-800">{value.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - The Journey */}
        <div className="relative">
          <h3 className="font-serif text-2xl font-medium text-gray-900 mb-12 text-center">The Journey So Far</h3>
          
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6"
              >
                <div className="w-4 h-4 bg-emerald-500 rounded-full ring-4 ring-emerald-100 flex-shrink-0" />
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1">
                  <div className="font-serif text-2xl font-medium text-emerald-600 mb-1">{item.year}</div>
                  <div className="font-medium text-gray-900 mb-1">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutStorySection
