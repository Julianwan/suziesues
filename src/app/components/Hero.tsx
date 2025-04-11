import React from 'react'; 

const Hero = () => {
  return (
    <section className="relative bg-white py-32 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">
              Suzie Sues!
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-secondary mb-6">
              Personal Injury Law Like You’ve Never Seen Before
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Led by the legendary <span className="font-bold text-primary">Suzie Suzalot</span>, our firm has recovered 
              <span className="font-bold text-primary"> MILLIONS</span> for our clients. When you’re injured, 
              don’t just get mad — get <span className="italic font-bold text-primary">Suzie!</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="bg-primary text-white px-8 py-3 rounded-md font-medium text-lg shadow-md hover:bg-red-700 transition duration-300"
              >
                Free Consultation
              </a>
              <a 
                href="#services" 
                className="bg-secondary text-white px-8 py-3 rounded-md font-medium text-lg shadow-md hover:bg-gray-700 transition duration-300"
              >
                Our Success Stories
              </a>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500 text-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg font-medium">Suzie Suzalot</p>
                <p className="text-sm">Personal Injury Attorney Extraordinaire</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded" />
            <div className="absolute px-4 -translate-x-1/2 bg-white py-2  left-1/2">
              <span className="text-primary  font-bold text-3xl">🤑 $100+ MILLION RECOVERED 🤑</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="p-4">
              <p className="text-4xl font-bold text-primary">98%</p>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary">1,000+</p>
              <p className="text-gray-600">Cases Won</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary">24/7</p>
              <p className="text-gray-600">Availability</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary">$0</p>
              <p className="text-gray-600">Unless We Win</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
