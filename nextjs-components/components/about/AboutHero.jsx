import Image from 'next/image'

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800">
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
      <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-400/10 backdrop-blur-md border border-emerald-400/20 text-emerald-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          About MARC
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white/95 mb-6 leading-tight tracking-tight">
          We Shape Decisions
          <br />
          <span className="text-emerald-300">For the Better</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          MARC is a global strategy consultancy working with business leaders to seize competitive advantage and amplify growth through actionable, objective insights.
        </p>

        {/* Stats Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: '14+', label: 'Years Experience' },
            { value: '500+', label: 'Clients Served' },
            { value: '10+', label: 'Locations' },
            { value: '100+', label: 'Colleagues' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-serif text-3xl lg:text-4xl font-medium text-white mb-1">
                {stat.value}
              </div>
              <div className="text-emerald-300/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-emerald-400/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
