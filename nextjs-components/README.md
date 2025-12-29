# Next.js Landing Page Components

This folder contains Next.js App Router compatible components converted from the original React landing page.

## Structure

```
nextjs-components/
├── globals.css                     # Global styles with Tailwind and animations
├── README.md
└── components/
    ├── ui/                         # Reusable UI components
    │   ├── Button.jsx
    │   ├── Input.jsx
    │   └── Textarea.jsx
    │
    ├── [Landing Page Components]
    │   ├── Header.jsx              # Navigation header (CLIENT)
    │   ├── HeroSection.jsx         # Hero section (CLIENT)
    │   ├── AboutSection.jsx        # About section (CLIENT) - Homepage version
    │   ├── ServicesSection.jsx     # Services grid (CLIENT)
    │   ├── IndustriesSection.jsx   # Industries grid (CLIENT)
    │   ├── WhyUsSection.jsx        # Why work with us (SERVER)
    │   ├── TestimonialsSection.jsx # Testimonials carousel (CLIENT)
    │   ├── ClientsSection.jsx      # Clients marquee (SERVER)
    │   ├── InsightsSection.jsx     # Insights/blog grid (SERVER)
    │   ├── ContactSection.jsx      # Contact form (CLIENT)
    │   └── Footer.jsx              # Footer (CLIENT)
    │
    └── about/                      # Full About Page with storytelling navigation
        ├── index.jsx               # Main About page component
        ├── AboutStickyNav.jsx      # Sticky section navigation (CLIENT)
        ├── AboutHero.jsx           # About hero banner (SERVER)
        ├── AboutStorySection.jsx   # Company story, mission, vision, timeline (SERVER)
        ├── AboutTeamSection.jsx    # Team members with expandable bios (CLIENT)
        ├── AboutLocationsSection.jsx # Office locations grid (CLIENT)
        ├── AboutClientsSection.jsx # Client logos and testimonials (SERVER)
        ├── AboutPartnersSection.jsx # Global affiliations (SERVER)
        └── AboutCTA.jsx            # Call to action (CLIENT)
```

## About Page Features

The About page uses **Option C: Full Scroll with Sticky Nav** design pattern:

1. **Hero Section** - Full-width gradient with stats preview
2. **Sticky Navigation** - Appears on scroll, highlights active section
3. **Our Story** - Company intro, mission, vision, values, service verticals, timeline
4. **Our Team** - Directors (large cards with expandable bios), Key Team, Associates, Domain Experts
5. **Locations** - Headquarters feature card, international offices, India branches grid
6. **Clients** - Logo marquee, case studies, testimonials
7. **Partners** - Global affiliations with regional presence
8. **CTA** - Conversion section with credentials download

## Usage in Next.js App Router

### 1. Landing Page (app/page.jsx)

```jsx
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import IndustriesSection from '@/components/IndustriesSection'
import WhyUsSection from '@/components/WhyUsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ClientsSection from '@/components/ClientsSection'
import InsightsSection from '@/components/InsightsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <ClientsSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
```

### 2. About Page (app/about/page.jsx)

```jsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutPage from '@/components/about'

export const metadata = {
  title: 'About Us - MARC | Business Consulting Firm',
  description: 'Learn about MARC - a global strategy consultancy with 14+ years experience...',
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutPage />
      <Footer />
    </div>
  )
}
```

### 3. Configure next.config.js

```js
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'www.marcglocal.com' },
    ],
  },
}

module.exports = nextConfig
```

## Navigation

The Header component now supports both:
- **Page links** (like `/about`) - Uses Next.js `<Link>` component
- **Scroll links** (like `#services`) - Uses smooth scroll behavior

```js
const navLinks = [
  { label: 'About', href: '/about', isPage: true },  // Page navigation
  { label: 'Services', href: '#services' },           // Scroll navigation
  // ...
]
```

## Dependencies

```bash
yarn add lucide-react
```

## SEO & Performance

- ✅ Server components for static sections
- ✅ Semantic HTML (section, article, header, nav, footer)
- ✅ Proper heading hierarchy
- ✅ Descriptive alt text for images
- ✅ Aria labels for accessibility
- ✅ Next.js Image optimization
- ✅ CSS animations with hardware acceleration

