import React from 'react'

// Client logos data
const clientLogos = [
  { name: 'Isha Yoga', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6-223.png' },
  { name: 'Taj Hotels', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/08/Taj-1.png' },
  { name: 'Kineco', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/logo5.png' },
  { name: 'Magsons', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6.png' },
  { name: 'E P Kamat', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/Kamat.png' },
  { name: 'The Park Hotels', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/07/The-park-hotels.png' },
  { name: 'Maduas', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/06/maduas.png' },
  { name: 'Danlow', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6-32.png' },
]

// Case studies
const caseStudies = [
  {
    client: 'Madaus Pharma',
    description: 'Helped introduce their Derma and Gynaec products to India with market research.',
    industry: 'Pharmaceutical',
  },
  {
    client: 'Planet Hollywood',
    description: 'Assisted with market research to analyse feasibility of a new resort in Mumbai.',
    industry: 'Hospitality',
  },
  {
    client: 'Monginis',
    description: 'Helped identify new locations for outlets through comprehensive research.',
    industry: 'F&B Retail',
  },
]

// Testimonials
const testimonials = [
  {
    content: 'We appointed MARC to execute two very diverse tasks. One was into market research and the other was a premium inventory assessment and valuation. We were immensely satisfied with the attention to detailing in both the assignments.',
    author: 'Anand Chatterjee',
    position: 'GM, Planet Hollywood - Beach Resort, Goa',
  },
  {
    content: 'MARC brings a unique blend of big 4 exposure with a local lineage. That gives him a unique perspective and insight to add value to Goan corporates.',
    author: 'Deepak Tripathi',
    position: 'President - Tulip Diagnostics Pvt. Ltd.',
  },
  {
    content: 'We have worked with MARC on several occasions and they have consistently surpassed our expectations with their analytical, professional and thorough approach delivered on time and within budget.',
    author: 'Dale Menezes',
    position: 'Director, CMM Group',
  },
]

const AboutClientsSection = () => {
  const duplicatedLogos = [...clientLogos, ...clientLogos]

  return (
    <section id="clients" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
            Our Clientele
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-tight tracking-tight">
            A True Partnership is a Two-Way Street
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We ensure our clients not just our services, but our warm care and personalized understanding of how they want to run their business.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {[
            { value: '500+', label: 'Clients Served' },
            { value: '30+', label: 'Countries' },
            { value: '300+', label: 'SMEs Guided' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="font-serif text-3xl lg:text-4xl font-medium text-emerald-600 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Logo Marquee */}
        <div className="relative mb-20">
          <div className="marquee">
            <div className="marquee-track">
              {duplicatedLogos.map((client, index) => (
                <div key={index} className="client-tile">
                  <div className="client-logo-wrapper">
                    <img
                      src={client.logo}
                      alt={`${client.name} - MARC client`}
                      className="client-logo"
                    />
                  </div>
                  <div className="client-name">{client.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl font-medium text-gray-900 mb-8">Our Best Work</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-6 hover:bg-emerald-50 transition-colors duration-300"
              >
                <div className="text-xs text-emerald-600 font-semibold uppercase tracking-wider mb-2">
                  {study.industry}
                </div>
                <h4 className="font-serif text-xl font-medium text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {study.client}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{study.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-emerald-50 rounded-3xl p-8 lg:p-12">
          <h3 className="font-serif text-2xl font-medium text-gray-900 mb-8 text-center">Client Testimonials</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  "{testimonial.content}"
                </p>
                <footer>
                  <cite className="font-serif text-gray-900 font-medium not-italic block">
                    {testimonial.author}
                  </cite>
                  <span className="text-emerald-600 text-sm">{testimonial.position}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutClientsSection
