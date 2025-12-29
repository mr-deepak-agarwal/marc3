import React, { useState } from 'react'
import { MapPin, Phone, Mail, Globe, ChevronRight } from 'lucide-react'

// Location data
const locations = {
  headquarters: {
    name: 'Panaji, Goa',
    type: 'Headquarters',
    address: '2nd Floor, CMM Building, Above Sarvaa Restaurant, Rua de Ourem, Panaji, Goa 403001',
    phone: '+91-93596 28675',
    email: 'contact@marcglocal.com',
  },
  international: [
    {
      name: 'MARC Glocal Inc, USA',
      type: 'USA Office',
      address: '16192 Coastal Highway, Lewes, Delaware 19958, County of Sussex, USA',
      phone: '+91-93596 28675',
      email: 'md@marcglocal.com',
      flag: '🇺🇸',
    },
    {
      name: 'Mundi Consulting, Portugal',
      type: 'Partner',
      address: 'Rua Jose Dias Coelho, 36 B 1300-329 Lisboa – Portugal',
      phone: '+351 21 361 72 30',
      email: 'mundiconsulting@mundiconsulting.net',
      flag: '🇵🇹',
    },
  ],
  branches: [
    { city: 'Mumbai', state: 'Maharashtra', email: 'mumbai@marcglocal.com', phone: '+91-90295 03690' },
    { city: 'Pune', state: 'Maharashtra', email: 'pune@marcglocal.com', phone: '+91-91194 59098' },
    { city: 'Kolkata', state: 'West Bengal', email: 'kolkata@marcglocal.com', phone: '+91-83368 25469' },
    { city: 'Kochi', state: 'Kerala', email: 'kochi@marcglocal.com', phone: '+91-98461 67761' },
    { city: 'Ahmedabad', state: 'Gujarat', email: 'ahmedabad@marcglocal.com', phone: '+91-90295 03690' },
    { city: 'Indore', state: 'Madhya Pradesh', email: 'indore@marcglocal.com', phone: '+91-98605 29838' },
    { city: 'Agartala', state: 'Tripura', email: 'agartala@marcglocal.com', phone: '+91-72008 21023' },
    { city: 'Mangaluru', state: 'Karnataka', email: 'roopa@marcglocal.com', phone: '+91-82963 47983' },
  ],
}

const AboutLocationsSection = () => {
  const [selectedBranch, setSelectedBranch] = useState(null)

  return (
    <section id="locations" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
            Our Locations
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-tight tracking-tight">
            PAN India & Global Presence
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our local presence gives us an additional edge to local resources, knowledge and professional expertise to assist you with tailored advisory and consulting services.
          </p>
        </div>

        {/* Headquarters Feature Card */}
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 lg:p-10 mb-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/20 rounded-full blur-2xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-emerald-100 text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" />
                {locations.headquarters.type}
              </div>
              <h3 className="font-serif text-3xl font-medium mb-4">{locations.headquarters.name}</h3>
              <p className="text-emerald-100/80 mb-6 leading-relaxed">{locations.headquarters.address}</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${locations.headquarters.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {locations.headquarters.phone}
                </a>
                <a
                  href={`mailto:${locations.headquarters.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {locations.headquarters.email}
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-emerald-200 mx-auto mb-4" />
                  <p className="text-emerald-100 font-medium">Goa, India</p>
                  <p className="text-emerald-200/60 text-sm">Coastal Paradise • Business Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* International Offices */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-medium text-gray-900 mb-6">International Presence</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {locations.international.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{office.flag}</div>
                  <div className="flex-1">
                    <div className="text-xs text-emerald-600 font-semibold uppercase tracking-wider mb-1">
                      {office.type}
                    </div>
                    <h4 className="font-serif text-xl font-medium text-gray-900 mb-2">{office.name}</h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{office.address}</p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`tel:${office.phone}`}
                        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-emerald-600 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        {office.phone}
                      </a>
                      <a
                        href={`mailto:${office.email}`}
                        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-emerald-600 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* India Branches Grid */}
        <div>
          <h3 className="font-serif text-2xl font-medium text-gray-900 mb-6">India Branches</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.branches.map((branch, index) => (
              <button
                key={index}
                onClick={() => setSelectedBranch(selectedBranch === index ? null : index)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                  selectedBranch === index
                    ? 'bg-emerald-50 border-emerald-300 shadow-md'
                    : 'bg-white border-gray-100 hover:border-emerald-200 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif text-lg font-medium text-gray-900">{branch.city}</h4>
                  <ChevronRight
                    className={`w-4 h-4 text-emerald-600 transition-transform duration-300 ${
                      selectedBranch === index ? 'rotate-90' : ''
                    }`}
                  />
                </div>
                <p className="text-gray-500 text-sm mb-3">{branch.state}</p>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    selectedBranch === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-3 border-t border-emerald-200 space-y-2">
                    <a
                      href={`tel:${branch.phone}`}
                      className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {branch.phone}
                    </a>
                    <a
                      href={`mailto:${branch.email}`}
                      className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {branch.email}
                    </a>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutLocationsSection
