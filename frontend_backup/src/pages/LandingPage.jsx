import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import IndustriesSection from '../components/IndustriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import InsightsSection from '../components/InsightsSection';
import WhyUsSection from '../components/WhyUsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ClientsSection from '../components/ClientsSection'

const LandingPage = () => {
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
  );
};

export default LandingPage;
