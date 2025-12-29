// About Page - Main Component
// Combines all About sections into a single storytelling page

import AboutStickyNav from './AboutStickyNav'
import AboutHero from './AboutHero'
import AboutStorySection from './AboutStorySection'
import AboutTeamSection from './AboutTeamSection'
import AboutLocationsSection from './AboutLocationsSection'
import AboutClientsSection from './AboutClientsSection'
import AboutPartnersSection from './AboutPartnersSection'
import AboutCTA from './AboutCTA'

export default function AboutPage() {
  return (
    <>
      <AboutStickyNav />
      <AboutHero />
      <main>
        <AboutStorySection />
        <AboutTeamSection />
        <AboutLocationsSection />
        <AboutClientsSection />
        <AboutPartnersSection />
        <AboutCTA />
      </main>
    </>
  )
}

// Also export individual components for flexibility
export {
  AboutStickyNav,
  AboutHero,
  AboutStorySection,
  AboutTeamSection,
  AboutLocationsSection,
  AboutClientsSection,
  AboutPartnersSection,
  AboutCTA,
}
