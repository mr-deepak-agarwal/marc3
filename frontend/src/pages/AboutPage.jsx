import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutStickyNav from '../components/about/AboutStickyNav'
import AboutHero from '../components/about/AboutHero'
import AboutStorySection from '../components/about/AboutStorySection'
import AboutTeamSection from '../components/about/AboutTeamSection'
import AboutLocationsSection from '../components/about/AboutLocationsSection'
import AboutClientsSection from '../components/about/AboutClientsSection'
import AboutPartnersSection from '../components/about/AboutPartnersSection'
import AboutCTA from '../components/about/AboutCTA'

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
