import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Suzie Suzalot</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Meet the legal powerhouse who’s changing the personal injury game forever.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            {/* Placeholder for Suzie's image */}
            <div className="text-gray-500 text-center p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lg font-medium">Suzie Suzalot Portrait</p>
              <p className="text-sm">Image placeholder</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">The Legend Behind the Lawsuits</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Suzie Suzalot isn’t just a lawyer—she’s a force of nature in the courtroom. With her signature red power suit and unmatched energy, Suzie has been turning the personal injury world upside down for over 15 years.
              </p>
              <p>
                After graduating top of her class from Prestigious Law University, Suzie quickly realized that traditional law firms were too stuffy and slow for her lightning-fast legal mind. That’s when she founded &quot;Suzie Sues!&quot; with one mission: get maximum compensation for her clients with minimum waiting time.
              </p>
              <p>
                What sets Suzie apart? Her uncanny ability to find liability where others see accidents. Her legendary closing arguments have been known to move jurors to tears, insurance adjusters to surrender, and judges to bang their gavels in enthusiastic agreement.
              </p>
              <p>
                When she’s not in court fighting for justice, Suzie can be found practicing her courtroom gestures, inventing new legal theories, or starring in her viral TikTok series &quot;Sue-per Tips&quot; where she shares everyday situations you could probably sue someone for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
