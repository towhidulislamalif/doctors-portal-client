import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

function AllUsers() {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(
        'https://doctors-portal-server-nu-one.vercel.app/users'
      );
      const data = await res.json();
      return data;
    },
  });

  const makeAdmin = (id) => {
    fetch(`https://doctors-portal-server-nu-one.vercel.app/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Update successfull...');
          refetch();
        }
      });
  };
  const Handledelete = (id) => {
    fetch(`https://doctors-portal-server-nu-one.vercel.app/users/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Update successfull...');
          refetch();
        }
      });
  };
  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">All users</h2>
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
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3 ">Admin</th>
              <th className="p-3 ">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              const { _id, email, name } = user;
              return (
                <tr
                  key={_id}
                  className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{name}</td>
                  <td className="p-3">{email}</td>
                  <td className="p-3 cursor-pointer">
                    {user?.role !== 'Admin' && (
                      <span
                        onClick={() => makeAdmin(_id)}
                        className="px-3 py-1 font-semibold rounded-md bg-blue-600 text-gray-50"
                      >
                        <span>Make Admin</span>
                      </span>
                    )}
                  </td>
                  <td className="p-3 cursor-pointer">
                    <span
                      onClick={() => Handledelete(_id)}
                      className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50"
                    >
                      <span>Delete</span>
                    </span>
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

export default AllUsers;
