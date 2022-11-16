import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

function Appointment() {
  const [selected, setSelected] = useState(new Date());

  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="p-6 space-y-8">
        <main>
          <AppointmentBanner selected={selected} setSelected={setSelected} />
          <AvailableAppointment selected={selected} />
          {/* <About /> */}
          {/* content */}
          {/* <Testimonial /> */}
          {/* <ContactUs /> */}
        </main>
      </div>
    </div>
  );
}

export default Appointment;
