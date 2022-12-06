import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

function Navigation() {
  // use context
  const { user, signout } = useContext(AuthContext);

  //   sign out
  const signoutUser = () => {
    signout()
      .then()
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="p-6 space-y-8">
        <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded ">
          <Link rel="noopener noreferrer" to="/" aria-label="Homepage">
            <span className="font-medium italic text-primary">
              Doctors Portal
            </span>
          </Link>
          <div className="items-center hidden space-x-8 sm:flex">
            <div className="font-medium italic text-muted space-x-4">
              <Link rel="noopener noreferrer" to="/">
                Home
              </Link>
              <Link rel="noopener noreferrer" to="/appointment">
                Appointment
              </Link>
              {user?.uid && (
                <Link rel="noopener noreferrer" to="/dashboard">
                  Dashboard
                </Link>
              )}
              <Link rel="noopener noreferrer" to="/contact">
                Contacts
              </Link>
            </div>
            {user?.uid ? (
              <button
                onClick={signoutUser}
                className="font-medium italic px-3 py-2 rounded bg-muted text-gray-50"
              >
                Log out
              </button>
            ) : (
              <Link to="/login">
                <button className="font-medium italic px-3 py-2 rounded bg-secondary text-gray-50">
                  Log in
                </button>
              </Link>
            )}
          </div>
          <button className="flex items-center justify-center p-2 sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </header>
      </div>
    </div>
  );
}

export default Navigation;
