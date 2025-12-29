import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

const AboutCTA = () => {
  const navigate = useNavigate()

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-2xl" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-3xl lg:text-5xl font-medium text-white mb-6 leading-tight">
          Let us help you solve your toughest challenges and realize your greatest ambitions.
        </h2>
        <p className="text-lg text-emerald-100/80 mb-10 max-w-2xl mx-auto">
          Partner with MARC to make better decisions, seize opportunities, and achieve unprecedented growth.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => navigate('/#contact')}
            className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            Schedule a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <a
            href="https://marcglocal.com/wp-content/uploads/2025/06/MARC-Credentials-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-md font-medium hover:bg-white/10 transition-colors"
          >
            Download Credentials
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutCTA
