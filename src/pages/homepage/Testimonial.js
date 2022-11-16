import React from 'react';

// quote
import quote from '../../assets/icons/quote.svg';

// images
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

function Testimonial() {
  return (
    <section className="my-8 bg-gray-100 text-gray-800">
      <div className="container flex justify-between mx-auto mb-12 md:p-10 md:px-12">
        <div className="space-y-4">
          <h1 className="text-xl font-semibold leading-none text-primary">
            Testimonial
          </h1>
          <p className="text-3xl font-medium italic leading-none text-muted">
            What Our Patients Says
          </p>
        </div>
        <figure>
          <img src={quote} alt="" className="object-contain w-24 lg:w-48" />
        </figure>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-blue-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-blue-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-muted text-gray-50">
            <img
              src={people1}
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">Winson Herry</p>
            <p className="text-sm uppercase">California</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-blue-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-blue-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-muted text-gray-50">
            <img
              src={people2}
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">Winson Herry</p>
            <p className="text-sm uppercase">California</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-blue-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-blue-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-muted text-gray-50">
            <img
              src={people3}
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  bg-gray-300"
            />
            <p className="text-xl font-semibold leading-tight">Winson Herry</p>
            <p className="text-sm uppercase">California</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
