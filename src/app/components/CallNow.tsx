import React from 'react';

const HeroCTA = () => {
  return (
    <section className="bg-gray-100 dark:bg-red-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="mb-4 font-bold text-3xl">Start Suing with Suzie!</h1>
        <p className="mb-16 text-xl">Don&apos;t wait, just litigate!</p>
        <a
          href="tel:2184966873"
          className="inline-block bg-red-600 text-white px-8 py-4 rounded-md font-bold text-xl shadow-xl hover:bg-red-700 transition duration-300"
        >
          CALL +1 (218) 496-6873
        </a>
      </div>
    </section>
  );
};

export default HeroCTA;