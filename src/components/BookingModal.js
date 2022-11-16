import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

// react hot toast
import toast from 'react-hot-toast';

function BookingModal({ selected, treatment, setTreatment, refetch }) {
  // ! treatment is just another name of appoinment options!
  const { _id, name, slots } = treatment;
  const date = format(selected, 'PPP');

  // use context
  const { user } = useContext(AuthContext);

  // form submit
  const formSubmit = (event) => {
    event.preventDefault();

    const slot = event.target.slot.value;
    const patient = event.target.username.value;
    const number = event.target.usernumber.value;
    const email = event.target.useremail.value;

    // console.log(slot, name, number, email);
    const booking = {
      appointment_date: date,
      treatment: name,
      slot,
      patient,
      number,
      email,
    };
    // console.log(booking);

    fetch('http://localhost:5000/bookingappointment', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setTreatment(null);
          refetch();
          toast.success('Booking placed');
        } else {
          toast.error('Booking placed');
        }
      });
  };
  //   console.log(treatment);
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold italic">{name}</h3>
          <form
            onSubmit={formSubmit}
            noValidate=""
            className="mt-4 space-y-4 ng-untouched ng-pristine ng-valid"
          >
            <div className="flex flex-col gap-4">
              <input
                id="date"
                type="text"
                defaultValue={date}
                readOnly
                required
                className="font-medium italic text-sm rounded placeholder:text-sm placeholder:italic border-gray-400 bg-gray-50 text-gray-800 focus:ring-blue-600 focus:border-blue-600 focus:ring-2"
              />
              <select
                name="slot"
                required
                className="select font-medium italic text-sm rounded placeholder:text-sm placeholder:italic border-gray-400 bg-gray-50 text-gray-800 focus:ring-blue-600 focus:border-blue-600 focus:ring-2"
              >
                {slots.map((slot, index) => (
                  <option key={index} defaultValue={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Full name"
                required
                className="font-medium italic text-sm rounded placeholder:text-sm placeholder:italic border-gray-400 bg-gray-50 text-gray-800 focus:ring-blue-600 focus:border-blue-600 focus:ring-2"
              />
              <input
                id="usernumber"
                name="usernumber"
                type="text"
                placeholder="Phone number"
                required
                className="font-medium italic text-sm rounded placeholder:text-sm placeholder:italic border-gray-400 bg-gray-50 text-gray-800 focus:ring-blue-600 focus:border-blue-600 focus:ring-2"
              />
              <input
                id="useremail"
                name="useremail"
                type="email"
                placeholder="Email address"
                defaultValue={user?.email}
                readOnly
                required
                className="font-medium italic text-sm rounded placeholder:text-sm placeholder:italic border-gray-400 bg-gray-50 text-gray-800 focus:ring-blue-600 focus:border-blue-600 focus:ring-2"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-3 space-x-2 font-medium italic text-sm rounded w-full placeholder:text-sm placeholder:italic border-gray-400 bg-muted text-gray-50 "
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingModal;
