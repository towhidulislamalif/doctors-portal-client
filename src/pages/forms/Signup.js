// react hook form
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

// react hot toast
import toast from 'react-hot-toast';

function Signup() {
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // use context
  const { signup, profile, googleSignin } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
            navigate('/');
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

  // google sign in
  const signinWithGoogle = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log('🚀 ~ file: Login.js ~ line 51 ~ .then ~ user', user);
        toast.success('User successfully created with Google...');
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
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
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={signinWithGoogle}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-600">
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
