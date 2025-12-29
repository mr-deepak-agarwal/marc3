# Next.js Landing Page Components

This folder contains Next.js App Router compatible components converted from the original React landing page.

## Structure

```
nextjs-components/
├── globals.css                 # Global styles with Tailwind and animations
├── components/
│   ├── ui/                     # Reusable UI components
│   │   ├── Button.jsx          # Button component
│   │   ├── Input.jsx           # Input component
│   │   └── Textarea.jsx        # Textarea component
│   ├── Header.jsx              # Navigation header (CLIENT)
│   ├── HeroSection.jsx         # Hero section (CLIENT)
│   ├── AboutSection.jsx        # About section (CLIENT)
│   ├── ServicesSection.jsx     # Services grid (CLIENT)
│   ├── IndustriesSection.jsx   # Industries grid (CLIENT)
│   ├── WhyUsSection.jsx        # Why work with us (SERVER)
│   ├── TestimonialsSection.jsx # Testimonials carousel (CLIENT)
│   ├── ClientsSection.jsx      # Clients marquee (SERVER)
│   ├── InsightsSection.jsx     # Insights/blog grid (SERVER)
│   ├── ContactSection.jsx      # Contact form (CLIENT)
│   └── Footer.jsx              # Footer (CLIENT)
└── README.md
```

## Component Types

### Server Components (No "use client")
- `WhyUsSection.jsx` - Static content, no interactivity
- `ClientsSection.jsx` - CSS-only marquee animation
- `InsightsSection.jsx` - Static article grid

### Client Components ("use client")
- `Header.jsx` - Uses useState, useEffect for scroll detection and mobile menu
- `HeroSection.jsx` - Uses onClick for smooth scrolling
- `AboutSection.jsx` - Uses onClick for smooth scrolling
- `ServicesSection.jsx` - Uses useState for hover states
- `IndustriesSection.jsx` - Uses useState for active industry
- `TestimonialsSection.jsx` - Uses useState, useEffect for carousel
- `ContactSection.jsx` - Uses useState for form handling
- `Footer.jsx` - Uses onClick for scroll to top/section

## Usage in Next.js App Router

### 1. Copy files to your project

```bash
# Copy components to your Next.js project
cp -r nextjs-components/components/* your-nextjs-app/components/
cp nextjs-components/globals.css your-nextjs-app/app/globals.css
```

### 2. Add to your page.jsx

```jsx
// app/page.jsx
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

### 3. Configure next.config.js for external images

```js
// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'www.marcglocal.com',
      },
    ],
  },
}

module.exports = nextConfig
```

### 4. Add logo to public folder

Place your `marc_logo.png` in the `/public` folder.

## Dependencies

```bash
npm install lucide-react
# or
yarn add lucide-react
```

## SEO Best Practices Implemented

1. **Semantic HTML** - Uses `<section>`, `<article>`, `<header>`, `<nav>`, `<footer>`, `<address>`
2. **Proper heading hierarchy** - H1 in Hero, H2 for sections, H3 for cards
3. **Alt text** - Descriptive alt text for all images
4. **Aria labels** - Accessibility labels for interactive elements
5. **Server components** - Static sections render on server for faster FCP
6. **Next.js Image** - Optimized images with proper sizing
7. **Next.js Link** - Client-side navigation for internal links

## Performance Optimizations

1. **Code splitting** - Each component is a separate module
2. **Server components** - Reduces client-side JavaScript
3. **CSS animations** - Hardware-accelerated transforms
4. **Lazy loading** - Images use Next.js automatic optimization
5. **Font optimization** - Google Fonts loaded via CSS
