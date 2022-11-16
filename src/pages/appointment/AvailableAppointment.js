import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../../components/BookingModal';
import Loading from '../../components/Loading';

function AvailableAppointment({ selected }) {
  // const [appointmentoptions, setAppointmentoptions] = useState([]);
  // ! treatment is just another name of appoinment options!
  const [treatment, setTreatment] = useState(null);

  const date = format(selected, 'PPP');
  const {
    data: appointmentoptions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['appointmentoptions', date],
    queryFn: () =>
      fetch(`http://localhost:5000/appointmentoptions?date=${date}`).then(
        (res) => res.json()
      ),
  });

  // const { data: appointmentoptions = [] } = useQuery({
  //   queryKey: ['appointmentoptions'],
  //   queryFn: async () => {
  //     const res = await fetch('http://localhost:5000/appointmentoptions');
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  // useEffect(() => {
  // fetch('http://localhost:5000/appointmentoptions')
  //   .then((res) => res.json())
  //     .then((data) => setAppointmentoptions(data))
  //     .catch((error) => console.error(error.message));
  // }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="space-y-2 text-center">
          <p className="font-medium italic text-xl text-secondary">
            Available Appointments on {format(selected, 'PP')}.
          </p>
          ;
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {appointmentoptions.map((appointmentoption) => {
            const { _id, name, slots } = appointmentoption;
            return (
              //   <div
              //     key={_id}
              //     className="max-w-md mx-auto group hover:no-underline focus:no-underline bg-gray-50"
              //   >
              <div key={_id} className="text-center bg-gray-50 p-6 space-y-3">
                <h3 className="font-semibold italic text-2xl group-hover:underline group-focus:underline text-secondary">
                  {name}
                </h3>

                <p className="font-medium italic text-sm text-muted">
                  {slots.length > 0 ? slots[0] : 'Try another day!'}{' '}
                </p>
                <p className="font-medium italic text-sm text-muted">
                  {slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'}{' '}
                  Available
                </p>
                <label
                  onClick={() => setTreatment(appointmentoption)}
                  htmlFor="booking-modal"
                  disabled={slots.length === 0}
                  className="btn border-none outline-none  text-base font-semibold italic  rounded bg-gradient-to-r from-primary to-secondary text-gray-50"
                >
                  Book Appointment
                </label>
              </div>
              //   {/* </div> */}
            );
          })}
        </div>
      </div>
      {treatment && (
        <BookingModal
          selected={selected}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </section>
  );
}

export default AvailableAppointment;
