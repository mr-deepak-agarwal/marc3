import Image from 'next/image'

// Static data
const clients = [
  { name: 'Maduas', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/06/maduas.png' },
  { name: 'E P Kamat', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/Kamat.png' },
  { name: 'The Park Hotels', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/07/The-park-hotels.png' },
  { name: 'Kineco', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/logo5.png' },
  { name: 'Magsons', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6.png' },
  { name: 'Taj', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/08/Taj-1.png' },
  { name: 'Isha Yoga', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6-223.png' },
  { name: 'Danlow', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6-32.png' },
]

export default function ClientsSection() {
  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
            Our Clients
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
            Trusted Partners in Business Consulting
          </h2>
          <p className="text-lg text-gray-600">
            Organizations that rely on MARC for strategic clarity and execution.
          </p>
        </header>

        {/* Marquee */}
        <div className="relative">
          <div className="marquee">
            <div className="marquee-track">
              {duplicatedClients.map((client, index) => (
                <div key={index} className="client-tile">
                  <div className="client-logo-wrapper">
                    <Image
                      src={client.logo}
                      alt={`${client.name} - MARC client partner`}
                      width={140}
                      height={60}
                      className="client-logo"
                    />
                  </div>
                  <div className="client-name">{client.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
