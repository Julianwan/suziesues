import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Winning Cases</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Suzie Suzalot has won MILLIONS for her clients in these unbelievable cases.
            You won&apos;t believe what she can do for YOU!
          </p>
        </div>

        <div className="space-y-16">
          {/* Case Study 1 */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-1 bg-gray-200 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="bg-primary text-white text-2xl font-bold rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    $2.5M
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Settlement Amount</h3>
                </div>
              </div>
              <div className="md:col-span-2 p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">The Coffee Cup Catastrophe</h3>
                <p className="text-gray-700 mb-4">
                  Our client, Mr. Johnson, was enjoying his morning coffee when the lid popped off, 
                  causing him to spill it on his new designer pants. Not only did he suffer first-degree burns, 
                  but his $200 pants were completely ruined!
                </p>
                <p className="text-gray-700 mb-4">
                  Suzie took on Big Coffee and argued that the lid design was &quot;criminally inadequate&quot; and 
                  &quot;a ticking time bomb of fashion destruction.&quot; The jury was moved to tears by Mr. Johnson&apos;s 
                  emotional testimony about his favorite pants.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Case settled in just 3 weeks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-1 bg-gray-200 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="bg-primary text-white text-2xl font-bold rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    $4.7M
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Settlement Amount</h3>
                </div>
              </div>
              <div className="md:col-span-2 p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">The Misleading Menu Mayhem</h3>
                <p className="text-gray-700 mb-4">
                  Mrs. Rodriguez ordered a &quot;garden fresh salad&quot; at a local restaurant, only to discover 
                  that the vegetables were actually from a garden that was planted two days ago! 
                  The psychological trauma of consuming such young vegetables was immeasurable.
                </p>
                <p className="text-gray-700 mb-4">
                  Suzie brilliantly argued that &quot;garden fresh&quot; implied vegetables of a mature age and 
                  that the restaurant&apos;s deceptive practices caused her client &quot;irreparable harm to her 
                  vegetable consumption confidence.&quot; The restaurant chain settled out of court.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Case settled in just 2 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-1 bg-gray-200 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="bg-primary text-white text-2xl font-bold rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    $8.3M
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Settlement Amount</h3>
                </div>
              </div>
              <div className="md:col-span-2 p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">The Haircut Horror</h3>
                <p className="text-gray-700 mb-4">
                  Mr. Thompson asked for &quot;just a little off the top&quot; at his local barber shop. 
                  To his horror, the barber interpreted this as &quot;give me a mohawk.&quot; Mr. Thompson, 
                  a middle school math teacher, had to face his students with this unexpected new look.
                </p>
                <p className="text-gray-700 mb-4">
                  Suzie&apos;s groundbreaking argument that &quot;barber-client communication standards must be 
                  held to the highest degree of precision&quot; revolutionized the hair cutting industry. 
                  The jury awarded damages for emotional distress, lost dignity, and hat expenses.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Case won in just 6 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-md font-medium text-lg shadow-md hover:bg-red-700 transition duration-300"
          >
            You Could Be Next! Contact Suzie Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
