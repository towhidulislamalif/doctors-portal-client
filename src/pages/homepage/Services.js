import React from 'react';

// images
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';

function Services() {
  const data = [
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat inventore autem obcaecati earum illo. Beatae sint, eligendi fuga atque sapiente alias!',
      img: cavity,
      service_id: 101,
      service_name: 'Cavity Filling',
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat inventore autem obcaecati earum illo. Beatae sint, eligendi fuga atque sapiente alias!',
      img: fluoride,
      service_id: 102,
      service_name: 'Fluoride Treatment',
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat inventore autem obcaecati earum illo. Beatae sint, eligendi fuga atque sapiente alias!',
      img: whitening,
      service_id: 103,
      service_name: 'Teeth Whitening',
    },
  ];
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="space-y-2 text-center">
          <h2 className="text-sm font-bold text-primary">OUR SERVICES</h2>
          <p className="font-serif text-lg text-gray-600">
            Services We Provide
          </p>
        </div>

        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((d) => {
            const { desc, img, service_id, service_name } = d;
            return (
              <div
                key={service_id}
                rel="noopener noreferrer"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50"
              >
                <img
                  alt=""
                  className="object-contain p-4 w-full rounded h-44 "
                  src={img}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-semibold italic group-hover:underline group-focus:underline">
                    {service_name}
                  </h3>

                  <p className="font-medium italic text-sm text-muted">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
