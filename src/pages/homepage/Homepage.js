import React from 'react';

import About from './About';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Services from './Services';
import Testimonial from './Testimonial';

function Homepage() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="p-6 space-y-8">
        <main>
          <Banner />
          <Services />
          <About />
          {/* content */}
          <Testimonial />
          <ContactUs />
        </main>
      </div>
    </div>
  );
}

export default Homepage;
