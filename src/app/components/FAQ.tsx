import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Got questions about how Suzie can help you cash in on your misfortunes? We’ve got answers!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-3">How much does it cost to hire Suzie?</h3>
            <p className="text-gray-700">
              Absolutely nothing upfront! Suzie works on a contingency fee basis, which means she only gets paid when YOU get paid. Our standard fee is 33% of your settlement, but honestly, when you’re getting millions for a paper cut, who’s counting?
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-3">How long will my case take?</h3>
            <p className="text-gray-700">
              Suzie is known for her lightning-fast settlements! While other lawyers might take years, Suzie has been known to settle cases during the initial consultation call. Our average case resolution time is 2-3 months, but some cases are so outrageous that defendants pay immediately just to make Suzie go away.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-3">What if I don’t have any injuries?</h3>
            <p className="text-gray-700">
              Not a problem! Suzie specializes in &quot;creative injury identification.&quot; Did you know that being mildly inconvenienced can cause invisible emotional trauma? Or that having to wait in line too long can lead to &quot;standing-related stress disorder&quot;? Suzie will help you discover injuries you never knew you had!
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-3">Do I have to go to court?</h3>
            <p className="text-gray-700">
              Rarely! Most defendants are so intimidated by Suzie&apos;s reputation and her signature red power suit that they settle immediately. In the unlikely event your case does go to trial, Suzie&apos;s dramatic courtroom performances are so entertaining that clients often say it was the highlight of their year.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-3">What types of cases does Suzie handle?</h3>
            <p className="text-gray-700">
              If it happened to you, Suzie can probably sue someone for it! While we specialize in personal injury cases like slip-and-falls, coffee burns, and emotional distress, Suzie has successfully argued cases involving bad haircuts, disappointing birthday parties, and even a lawsuit against a weatherman for an inaccurate forecast that ruined a picnic.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-3">What makes Suzie different from other lawyers?</h3>
            <p className="text-gray-700">
              Energy, creativity, and results! While other lawyers are busy reading law books, Suzie is inventing new legal theories that judges have never heard before. Her signature approach combines dramatic reenactments, emotional appeals, and her patented &quot;Million Dollar Stare&quot; that makes insurance adjusters reach for their checkbooks. Plus, she’s the only lawyer with her own energy drink line: &quot;Sue-per Charged!&quot;
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-3">Can I still sue if the accident was partially my fault?</h3>
            <p className="text-gray-700">
              Absolutely! Suzie specializes in what we call &quot;responsibility redirection.&quot; Even if you were texting while walking and fell into an open manhole, Suzie can convince a jury that the city should have installed special texting lanes or warning lights visible to downward-facing pedestrians. Your negligence is just someone else’s opportunity to have prevented it!
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-3">What should I bring to my initial consultation?</h3>
            <p className="text-gray-700">
              Just yourself and your story! Suzie has an uncanny ability to turn even the most mundane incidents into million-dollar cases. If you happen to have photos, videos, or witnesses, that’s great, but not necessary. Suzie once won a major settlement with nothing more than a client’s vivid description of how a store&apos;s &quot;excessive air conditioning&quot; caused them to shiver slightly.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Still have questions? Suzie has answers (and probably a lawsuit for that)!
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-md font-medium text-lg shadow-md hover:bg-red-700 transition duration-300"
          >
            Contact Suzie Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
