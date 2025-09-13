import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import PlansSection from './components/PlansSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
export function App() {
  // Add smooth scrolling behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);
  return <div className="font-poppins text-text w-full min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <PlansSection />
        <ContactForm />
      </main>
      <Footer />
    </div>;
}