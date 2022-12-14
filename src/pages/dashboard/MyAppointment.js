import { useQuery } from '@tanstack/react-query';

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

function MyAppointment() {
  // use context
  const { user } = useContext(AuthContext);

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookingappointment', user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-nu-one.vercel.app/bookingappointment?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(bookings);
  //   console.log(data);
  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">
        My Appointment
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          {/* <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup> */}
          <thead className="bg-gray-300">
            <tr className="text-left">
              <th className="p-3">#Index</th>
              <th className="p-3">Patient</th>
              <th className="p-3">Treatment</th>
              <th className="p-3">Appointment_date</th>
              <th className="p-3">Slot</th>
              <th className="p-3">Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => {
              const { _id, appointment_date, treatment, slot, price, patient } =
                booking;

              return (
                <tr
                  key={_id}
                  className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{patient}</td>
                  <td className="p-3">{treatment}</td>
                  <td className="p-3">{appointment_date}</td>
                  <td className="p-3">{slot}</td>
                  <td className="p-3">
                    {price && !booking.paid && (
                      <Link to={`/dashboard/payment/${_id}`}>
                        <button className="cursor-pointer px-3 py-1 font-semibold rounded-md bg-cyan-600 text-gray-50">
                          Pay
                        </button>
                      </Link>
                    )}
                    {price && booking.paid && (
                      <span className="font-medium italic text-base bg-green-600 text-gray-50">
                        Paid
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyAppointment;
