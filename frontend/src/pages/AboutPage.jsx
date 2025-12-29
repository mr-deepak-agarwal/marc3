import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import AboutStickyNav from './AboutStickyNav'
import AboutHero from './AboutHero'
import AboutStorySection from './AboutStorySection'
import AboutTeamSection from './AboutTeamSection'
import AboutLocationsSection from './AboutLocationsSection'
import AboutClientsSection from './AboutClientsSection'
import AboutPartnersSection from './AboutPartnersSection'
import AboutCTA from './AboutCTA'

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutStickyNav />
      <main>
        <AboutHero />
        <AboutStorySection />
        <AboutTeamSection />
        <AboutLocationsSection />
        <AboutClientsSection />
        <AboutPartnersSection />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
