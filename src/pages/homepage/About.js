import React from 'react';

// image
import treatment from '../../assets/images/treatment.png';

function About() {
  return (
    <section className="p-4 lg:p-8 bg-gray-100 text-gray-800">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src={treatment}
            alt=""
            className="h-80 bg-gray-500 aspect-video object-cover "
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
            <h3 className="text-2xl font-semibold text-muted">
              Exceptional Dental Care, on Your Terms
            </h3>
            <p className="my-4 font-medium italic text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button
              type="button"
              className="self-start px-4 py-2 text-base font-semibold italic outline-none rounded bg-gradient-to-r from-primary to-secondary text-gray-50"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
