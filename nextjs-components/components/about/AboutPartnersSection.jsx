import Image from 'next/image'
import { ExternalLink, Globe } from 'lucide-react'

// Affiliations data
const affiliations = [
  {
    name: 'Mundi Consulting',
    logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/marc-logo-affiliates-2.png',
    website: 'https://www.mundiconsulting.net/en/',
    location: 'Portugal',
    description: 'International consulting company providing services for strategic and operational management, human resources and training, international procurement, and cooperation for development.',
    regions: ['Europe', 'Africa', 'South America'],
  },
  {
    name: 'Research 8020 Limited',
    logo: 'https://www.marcglocal.com/wp-content/uploads/2022/07/marc-logo-affiliates-67.png',
    website: 'https://research8020.com/',
    location: 'Africa',
    description: 'Full range of qualitative and quantitative research solutions for consumer and B2B audiences across sub-Saharan Africa. Provides market research solutions for Government and Non-Governmental Organizations.',
    regions: ['Sub-Saharan Africa'],
  },
  {
    name: 'Clearview Consulting Partners',
    logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/marc-logo-affiliates-34.png',
    website: 'https://www.clearviewpartners.in/',
    location: 'India',
    description: 'Multi-locational management consulting organization with expertise spanning M&A advisory, strategy, business advisory and enterprise support services.',
    regions: ['India'],
  },
  {
    name: 'Electronica Finance Limited',
    logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/marc-logo-affiliates-3.png',
    website: 'https://www.efl.co.in/',
    location: 'India',
    description: 'Pioneer in Machine Finance since 1990, with 50+ offices across India, serving 7500+ customers with AUM exceeding Rs.1250 crores.',
    regions: ['India'],
  },
]

// Global reach regions
const globalPresence = [
  { region: 'North America', countries: ['USA', 'Delaware'] },
  { region: 'Europe', countries: ['Portugal', 'UK'] },
  { region: 'Asia Pacific', countries: ['India', 'Hong Kong', 'Australia'] },
  { region: 'Africa', countries: ['Sub-Saharan Africa'] },
]

export default function AboutPartnersSection() {
  return (
    <section id="partners" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold mb-6">
            Our Affiliations
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">
            Vision of Circumventing Global Markets
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            MARC carries out its vision by connecting those who need with those who want. We forge strong affiliations across the map, enabling our stakeholders to receive end-to-end solutions.
          </p>
        </header>

        {/* Global Presence Overview */}
        <div className="bg-gray-800/50 rounded-3xl p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-emerald-400" />
            <h3 className="font-serif text-xl font-medium">Global Consulting Reach</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalPresence.map((area, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-lg text-emerald-400 mb-2">{area.region}</div>
                <div className="text-sm text-gray-400">
                  {area.countries.join(' • ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliations Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {affiliations.map((partner, index) => (
            <article
              key={index}
              className="bg-gray-800/50 rounded-3xl p-6 lg:p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-colors duration-300 group"
            >
              <div className="flex items-start gap-6">
                {/* Logo */}
                <div className="w-24 h-24 bg-white rounded-2xl p-3 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={80}
                    height={60}
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-serif text-xl font-medium text-white group-hover:text-emerald-300 transition-colors">
                      {partner.name}
                    </h4>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-emerald-400 transition-colors"
                      aria-label={`Visit ${partner.name} website`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <div className="text-emerald-400 text-sm font-medium mb-3">{partner.location}</div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {partner.description}
                  </p>

                  {/* Regions Tags */}
                  <div className="flex flex-wrap gap-2">
                    {partner.regions.map((region, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Interested in exploring partnership opportunities with MARC?
          </p>
          <a
            href="mailto:contact@marcglocal.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-500/25"
          >
            Get in Touch
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
