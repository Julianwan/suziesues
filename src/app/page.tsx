import React from 'react';
import Image from 'next/image';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import PracticeAreas from './components/PracticeAreas';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image 
                src="/images/logo-placeholder.svg" 
                alt="Suzie Sues! Logo" 
                width={50} 
                height={50}
                className="mr-3"
              />
              <span className="text-2xl font-bold text-primary">Suzie Sues!</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-primary font-medium">Success Stories</a>
              <a href="#faq" className="text-gray-700 hover:text-primary font-medium">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-primary font-medium">Contact</a>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <PracticeAreas />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
