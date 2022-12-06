// react hook form
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

// react hot toast
import toast from 'react-hot-toast';
import useToken from '../hooks/useToken';

function Signup() {
  // state
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  // use context
  const { signup, profile } = useContext(AuthContext);

  // navigate
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  // use token
  const [token] = useToken(email);
  if (token) {
    navigate(from, { replace: true });
  }

  // react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // form submit
  const formSubmit = (data) => {
    const name = data.username;
    const email = data.useremail;
    const password = data.password;

    // signup
    setError('');
    signup(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('🚀 ~ file: Signup.js ~ line 28 ~ .then ~ user', user);
        toast.success('User successfully created...');
        profile(name)
          .then(() => {
            usersdata(name, email);
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // save users data
  const usersdata = (name, email) => {
    const user = { name, email };

    fetch('https://doctors-portal-server-nu-one.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmail(email);
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="flex justify-center my-32">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
        <h1 className="text-2xl font-bold text-center">Signup</h1>
        <form
          onSubmit={handleSubmit(formSubmit)}
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
              htmlFor="password"
              className="block  font-medium italic text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              {...register('password', {
                required: 'Please fill out this field.',
                minLength: {
                  value: 6,
                  message: 'Please lengthen this text to 6 characters or more.',
                },
                pattern: {
                  value: /(?=.*\d)/,
                  message: 'should contain at least one digit',
                },
              })}
              id="password"
              placeholder="Password"
              className="w-full px-3 py-3 font-medium italic text-sm rounded placeholder:text-sm placeholder:italic border-gray-400 bg-gray-50 text-gray-800 focus:ring-blue-600 focus:border-blue-600 focus:ring-2"
            />
            {errors.password && (
              <p className="font-medium italic test-sm text-red-500">
                {errors.password?.message}
              </p>
            )}
            <div className="flex justify-start  font-medium italic text-xs text-gray-600">
              {error && (
                <p className="font-medium italic text-sm text-red-500">
                  {error}
                </p>
              )}
            </div>
          </div>
          <button className="block font-medium italic uppercase w-full p-3 text-center rounded-sm text-gray-50 bg-muted">
            Signup
          </button>
        </form>
        <p className="text-xs pt-4 text-center sm:px-6 text-gray-600">
          Already have an account?
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="underline text-secondary"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
