import React from 'react';

import backgroundImage from '../../assets/images/appointment.png';

function ContactUs() {
  const backgroundImageStyle = {
    backgroundImage: `url('${backgroundImage}')`,
    backgroundColor: '#f9f9f9',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
    <div>
      <section
        className="p-6 container w-full  mx-auto space-y-6 rounded"
        style={backgroundImageStyle}
      >
        <form
          noValidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-xl font-semibold text-center leading-tight text-secondary">
            Contact us
          </h2>
          <p className="w-full text-3xl font-medium italic text-center leading-tight text-gray-50">
            Stay connected with us
          </p>
          <div>
            <input
              id="useremail"
              type="email"
              placeholder="Email or username"
              required=""
              className="block w-full p-2 rounded placeholder:text-sm placeholder:italic focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-600 bg-gray-100"
            />
          </div>
          <div>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              required=""
              className="block w-full p-2 rounded placeholder:text-sm placeholder:italic focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-600 bg-gray-100"
              data-temp-mail-org="2"
            />
          </div>
          <div>
            <textarea
              id="message"
              type="text"
              placeholder="Your message..."
              className="block w-full p-2 rounded placeholder:text-sm placeholder:italic autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-600 bg-gray-100"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-32 px-4 py-2 font-semibold italic rounded shadow  focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-blue-600 focus:ring-blue-600 hover:ring-blue-600 bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-50"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ContactUs;
