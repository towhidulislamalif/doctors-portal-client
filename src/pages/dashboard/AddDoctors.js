import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

function AddDoctors() {
  // state
  const [error, setError] = useState('');

  // navigate
  const navigate = useNavigate();

  // react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //   react query
  const { data: specialties, isLoading } = useQuery({
    queryKey: ['specialty'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/specialty');
      const data = await res.json();
      return data;
    },
  });

  // form submit
  const handleAddDoctors = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        // console.log(data);
        if (imgdata.success) {
          console.log(imgdata.data.display_url);
          const doctor = {
            name: data.username,
            email: data.useremail,
            specialty: data.specialty,
            image: imgdata.data.display_url,
          };
          console.log(doctor);
          fetch('http://localhost:5000/doctors', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.username} Successfully added...`);
              navigate('/dashboard/manage-doctors');
            })
            .catch((error) => console.error(error.message));
        }
      })
      .catch((error) => console.error(error.message));
  };

  //   react query
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex justify-center my-32">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
        <h1 className="text-2xl font-bold text-center">Signup</h1>
        <form
          onSubmit={handleSubmit(handleAddDoctors)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label
              htmlFor="username"
              className="block  font-medium italic text-sm text-gray-600"
            >
              Full name
            </label>
            <input
              type="text"
              //   {...register('useremail', { required: true })}
              {...register('username', {
                required: 'Please fill out this field.',
                minLength: {
                  value: 6,
                  message: 'Please lengthen this text to 6 characters or more.',
                },
              })}
              id="username"
              placeholder="Full name"
              className="w-full px-3 py-3 font-medium italic text-sm rounded placeholder:text-sm placeholder:italic border-gray-400 bg-gray-50 text-gray-800 focus:ring-blue-600 focus:border-blue-600 focus:ring-2"
            />
            {errors.username && (
              <p className="font-medium italic test-sm text-red-500">
                {errors.username?.message}
              </p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="useremail"
              className="block  font-medium italic text-sm text-gray-600"
            >
              Email or username
            </label>
            <input
              type="email"
              {...register('useremail', {
                required: 'Please fill out this field.',
              })}
              id="useremail"
              placeholder="Email or username"
              className="w-full px-3 py-3 font-medium italic text-sm rounded placeholder:text-sm placeholder:italic border-gray-400 bg-gray-50 text-gray-800 focus:ring-blue-600 focus:border-blue-600 focus:ring-2"
            />
            {errors.useremail && (
              <p className="font-medium italic test-sm text-red-500">
                {errors.useremail?.message}
              </p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="specialty"
              className="block  font-medium italic text-sm text-gray-600"
            >
              Specialty
            </label>
            <select
              {...register('specialty')}
              className="w-full px-3 py-3 font-medium italic text-sm rounded placeholder:text-sm placeholder:italic border-gray-400 bg-gray-50 text-gray-800 focus:ring-blue-600 focus:border-blue-600 focus:ring-2"
            >
              {specialties.map((specialty) => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
            </select>
            {errors.specialty && (
              <p className="font-medium italic test-sm text-red-500">
                {errors.specialty?.message}
              </p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="image"
              className="block  font-medium italic text-sm text-gray-600"
            >
              Upload Your Photo
            </label>
            <input
              type="file"
              {...register('image')}
              id="image"
              placeholder="Upload Your Photo"
              required
              className="w-full px-3 py-3 font-medium italic text-sm rounded placeholder:text-sm placeholder:italic border-gray-400 bg-gray-50 text-gray-800 focus:ring-blue-600 focus:border-blue-600 focus:ring-2"
            />
            {errors.specialty && (
              <p className="font-medium italic test-sm text-red-500">
                {errors.specialty?.message}
              </p>
            )}
          </div>
          <button className="block font-medium italic uppercase w-full p-3 text-center rounded-sm text-gray-50 bg-muted">
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDoctors;
