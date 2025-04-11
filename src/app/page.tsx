"use client";

import React, { useState } from 'react';
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
import HeroCTA from './components/CallNow';
import Suzy from "@/images/Suzy.png";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="rounded-full w-8 h-8 overflow-hidden relative">
                <Image
                  alt="Suzy Suzalot"
                  src={Suzy}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <span className="ml-3 text-2xl font-bold text-primary">Suzie Sues!</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-primary font-medium">Success Stories</a>
              <a href="#faq" className="text-gray-700 hover:text-primary font-medium">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-primary font-medium">Contact</a>
            </nav>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-primary focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white shadow-md`}
        >
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <a
              href="#"
              className="text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <HeroCTA />
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