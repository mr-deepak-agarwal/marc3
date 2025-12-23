import React from 'react'

/**
 * Put logos inside /public/clients/
 * Example:
 * public/clients/kineco.png
 * public/clients/magsons.png
 * public/clients/taj.png
 * public/clients/isha.png
 */

const clients = [
  { name: 'Kineco', logo: '/clients/kineco.png' },
  { name: 'Magsons', logo: '/clients/magsons.png' },
  { name: 'Taj', logo: '/clients/taj.png' },
  { name: 'Isha Yoga', logo: '/clients/isha.png' },
  { name: 'Client Name', logo: '/clients/client5.png' },
]

const ClientsSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
            Our Clients
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Trusted Partners in Business Consulting
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Organizations that rely on MARC for strategic clarity and execution.
          </p>
        </div>

        {/* ===== MARQUEE ===== */}
        <div className="relative">
          <div className="marquee">
            <div className="marquee-track">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="client-tile"
                >
                  <div className="client-logo-wrapper">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="client-logo"
                    />
                  </div>
                  <div className="client-name">
                    {client.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ClientsSection
