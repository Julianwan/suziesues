import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Client Testimonials</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear from our thrilled clients who got the compensation they deserved!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="pt-6">
              <p className="text-gray-700 mb-6 italic">
                &quot;I slipped on a banana peel at the grocery store and Suzie got me $1.2 million! Now I can afford to have my groceries delivered for the rest of my life!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-bold">TB</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Tom B.</h4>
                  <p className="text-gray-600 text-sm">Former Grocery Shopper</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="pt-6">
              <p className="text-gray-700 mb-6 italic">
                &quot;My neighbor&apos;s dog looked at me funny and Suzie argued it caused me emotional distress. $750,000 later, I&apos;m emotionally recovered and vacationing in Tahiti!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-bold">JS</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Jennifer S.</h4>
                  <p className="text-gray-600 text-sm">Professional Beach-Goer</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="pt-6">
              <p className="text-gray-700 mb-6 italic">
                &quot;My pizza was delivered 5 minutes late and Suzie sued the delivery company for &apos;time theft and hunger-related anxiety.&apos; We settled for $3.5 million!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-bold">MJ</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Mike J.</h4>
                  <p className="text-gray-600 text-sm">Punctual Food Enthusiast</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 4 - New */}
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="pt-6">
              <p className="text-gray-700 mb-6 italic">
                &quot;I stubbed my toe on my coffee table and Suzie claimed it was a &apos;hostile furniture attack.&apos; She got me $2.8 million, and now I live in a mansion with no sharp corners!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-bold">LW</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Linda W.</h4>
                  <p className="text-gray-600 text-sm">Interior Safety Advocate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 5 - New */}
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="pt-6">
              <p className="text-gray-700 mb-6 italic">
                &quot;My coffee was too hot at the drive-thru, and Suzie said it was &apos;scalding negligence.&apos; $4 million later, I’m sipping iced lattes on my private yacht!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-bold">CP</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Carl P.</h4>
                  <p className="text-gray-600 text-sm">Caffeine Connoisseur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 6 - New */}
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="pt-6">
              <p className="text-gray-700 mb-6 italic">
                &quot;A bird pooped on my car, and Suzie called it &apos;aerial vandalism.&apos; Thanks to her, I got $1.9 million and a lifetime supply of car washes!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-bold">RD</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Randy D.</h4>
                  <p className="text-gray-600 text-sm">Vehicular Pride Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;