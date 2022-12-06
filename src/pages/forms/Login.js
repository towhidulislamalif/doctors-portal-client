import React, { useContext, useState } from 'react';

// react hook form
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

// react hot toast
import toast from 'react-hot-toast';
import useToken from '../hooks/useToken';

function Login() {
  // state
  const [error, setError] = useState('');
  const [reset, setReset] = useState('');
  const [email, setEmail] = useState('');

  // use context
  const { signin, resetPass } = useContext(AuthContext);

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
    const email = data.useremail;
    const password = data.password;

    // signin
    setError('');
    signin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log('🚀 ~ file: Login.js ~ line 28 ~ .then ~ user', user);
        toast.success('User successfully login...');
        setEmail(email);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //
  const handleReset = () => {
    resetPass(reset)
      .then(() => {
        toast.success('Password reset email sent!');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="flex justify-center my-32">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          onSubmit={handleSubmit(formSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
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
              onBlur={(event) => setReset(event.target.value)}
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
            <div className="flex justify-between items-center font-medium italic text-xs text-gray-600">
              {error && (
                <p className="font-medium italic text-sm text-red-500">
                  {error}{' '}
                </p>
              )}
              <p onClick={handleReset} rel="noopener noreferrer" href="#">
                Forgot Password?
              </p>
            </div>
          </div>
          <button className="block font-medium italic uppercase w-full p-3 text-center rounded-sm text-gray-50 bg-muted">
            Login
          </button>
        </form>
        <p className="text-xs pt-4 text-center sm:px-6 text-gray-600">
          New to Doctors Portal?
          <Link
            rel="noopener noreferrer"
            to="/signup"
            className="underline text-secondary"
          >
            Create new account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
