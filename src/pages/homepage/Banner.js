import React from 'react';

import img from '../../assets/images/chair.png';
import backgroundImage from '../../assets/images/bg.png';

// icons
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

function Banner() {
  const backgroundImageStyle = {
    backgroundImage: `url('${backgroundImage}')`,
    backgroundColor: '#f9f9f9',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="p-6 space-y-8">
        <div className="container mx-auto space-y-16">
          <div
            className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
            style={backgroundImageStyle}
          >
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-4xl font-bold leading-none sm:text-5xl text-muted">
                Your New Smile Starts Here
              </h1>
              <p className="italic mt-6 mb-8 text-base sm:mb-12 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                atque doloribus enim illo quas omnis neque!
              </p>
              <div className="flex flex-col space-y-4 sm:items-center  sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <button
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-base font-semibold italic outline-none rounded bg-gradient-to-r from-primary to-secondary text-gray-50"
                >
                  GET STARTED
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src={img}
                alt=""
                className="object-cover w-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
          </div>
          <section>
            <div className="grid gap-6 my-16 lg:grid-cols-3">
              <div className="flex items-center gap-6 p-8 space-y-4 rounded-md bg-gradient-to-r from-primary to-secondary">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full">
                  <img src={clock} alt="" />
                </div>
                <div>
                  <p className="text-xl font-semibold italic text-gray-50">
                    Opening Hours
                  </p>
                  <p className="text-base font-medium italic text-gray-50">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-8 space-y-4 rounded-md bg-muted">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full ">
                  <img src={marker} alt="" />
                </div>
                <div>
                  <p className="text-xl font-semibold italic text-gray-50">
                    Visit our location
                  </p>
                  <p className="text-base font-medium italic text-gray-50">
                    Brooklyn, NY 10036, United States
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-8 space-y-4 rounded-md bg-gradient-to-r from-primary to-secondary">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full ">
                  <img src={phone} alt="" />
                </div>
                <div>
                  <p className="text-xl font-semibold italic text-gray-50">
                    Contact us now
                  </p>
                  <p className="text-base font-medium italic text-gray-50">
                    +47 333 78 901
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Banner;
