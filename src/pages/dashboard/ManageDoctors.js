import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../components/Loading';
import ModalConfirmation from '../../components/ModalConfirmation';

function ManageDoctors() {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  //   close modal
  const modalClose = () => {
    setDeleteDoctor(null);
  };

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      try {
        const res = await fetch(
          'https://doctors-portal-server-nu-one.vercel.app/doctors',
          {
            headers: {
              authorization: `bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  //   action delete
  const action = (doctor) => {
    fetch(
      `https://doctors-portal-server-nu-one.vercel.app/doctors/${doctor._id}`,
      {
        method: 'DELETE',
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Doctor ${doctor.name} deleted...`);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">
        Manage Doctors
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
              <th className="p-3">#INDEX</th>
              <th className="p-3">AVATAR</th>
              <th className="p-3">NAME</th>
              <th className="p-3">SPECIALITY</th>
              <th className="p-3">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => {
              //   console.log(doctor);
              return (
                <tr
                  key={doctor._id}
                  className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                >
                  <td className="font-medium italic p-3">
                    <p> {index + 1} </p>
                  </td>
                  <td className="p-3">
                    <img
                      src={doctor.image}
                      alt=""
                      className="w-12 h-12 border rounded-full bg-gray-500 border-gray-300"
                    />
                  </td>
                  <td className="font-medium italic text-sm p-3">
                    <p> {doctor.name} </p>
                  </td>
                  <td className="font-medium italic text-sm p-3">
                    <p> {doctor.specialty} </p>
                  </td>
                  <td className="font-medium italic text-sm p-3">
                    <label
                      onClick={() => setDeleteDoctor(doctor)}
                      htmlFor="modal-confirmation"
                      className="cursor-pointer px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50"
                    >
                      Delete
                    </label>
                    {/* <span className="cursor-pointer px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50">
                      <span>Delete</span>
                    </span> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <ModalConfirmation
          title={'Are you sure!!!'}
          message={''}
          action={action}
          data={deleteDoctor}
          modalClose={modalClose}
        />
      )}
    </div>
  );
}

export default ManageDoctors;
