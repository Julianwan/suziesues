import React from 'react';

const Process = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Winning Process</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            At Suzie Sues!, we&apos;ve perfected the art of turning your misfortunes into massive paydays.
            Here&apos;s how we do it:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Free Consultation</h3>
            <div className="bg-gray-200 h-40 w-full rounded-md flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </div>
            <p className="text-gray-700">
              Tell Suzie about your &quot;injury&quot; and she&apos;ll immediately spot at least three ways to sue. No injury is too small!
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Investigation</h3>
            <div className="bg-gray-200 h-40 w-full rounded-md flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <p className="text-gray-700">
              Our team of &quot;investigators&quot; will document everything, dramatize where necessary, and build an airtight case.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Negotiation</h3>
            <div className="bg-gray-200 h-40 w-full rounded-md flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </div>
            <p className="text-gray-700">
              Suzie&apos;s legendary negotiation tactics include dramatic courtroom reenactments and her signature move: &quot;The Million Dollar Stare.&quot;
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Compensation</h3>
            <div className="bg-gray-200 h-40 w-full rounded-md flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            </div>
            <p className="text-gray-700">
              Watch as the settlement checks roll in! Suzie&apos;s clients often receive compensation that&apos;s exponentially larger than their actual damages.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-md font-medium text-lg shadow-md hover:bg-red-700 transition duration-300"
          >
            Start Your Journey to Millions Today!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
