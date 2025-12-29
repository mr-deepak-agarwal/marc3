import Image from 'next/image'
import { Award, Zap, UserCheck, Briefcase } from 'lucide-react'

// Static data
const whyWorkWithUs = [
  {
    id: 1,
    title: 'Industry Experience',
    description: 'We have more than a decade of market research experience across industries and geographies.',
  },
  {
    id: 2,
    title: 'Fast And Effective Solutions',
    description: 'We offer Customized Market Research Solutions cost-effectively in the fastest turnaround time.',
  },
  {
    id: 3,
    title: 'Personalized to your Needs',
    description: 'MARC does an in-depth review of your capabilities and pain points and goals to offer a personalized service.',
  },
  {
    id: 4,
    title: 'Big 4 Experience',
    description: 'Our Management has been part of the PWC due diligence division, giving us an extra edge and world class standard.',
  },
]

const icons = [Award, Zap, UserCheck, Briefcase]

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
              Our Values
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-tight tracking-tight">
              Why Work With Us
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              MARC has set foot into an ocean of requirements that potential customers seek to enhance in their business. We ensure our clients that the business consulting services we provide come with warm care and personalized understanding.
            </p>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/3810753/pexels-photo-3810753.jpeg?w=800&auto=format&fit=crop"
                alt="MARC Consultants Team - Expert business advisors collaborating"
                width={800}
                height={300}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid gap-6">
            {whyWorkWithUs.map((item, index) => {
              const Icon = icons[index]
              return (
                <article
                  key={item.id}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-gray-900 mb-2 tracking-tight group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
