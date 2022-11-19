import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../pages/hooks/useAdmin';
import Navigation from '../pages/shared/Navigation';

function DashboardRoot() {
  // use context
  const { user } = useContext(AuthContext);

  // use admin
  const [isAdmin] = useAdmin(user?.email);
  return (
    <>
      <Navigation />

      {/* sidebar */}
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
        <div className="h-full sm:min-h-screen w-full sm:w-60 p-3 space-y-2 bg-gray-50 text-gray-800">
          <div className="flex items-center p-2 space-x-4">
            <img
              src={
                user?.photoURL ||
                'https://source.unsplash.com/100x100/?portrait'
              }
              alt=""
              className="w-12 h-12 rounded-full bg-gray-500"
            />
            <div>
              <h2 className="text-base font-semibold italic">
                {user?.displayName}
              </h2>
            </div>
          </div>
          <div>
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="bg-gray-100 text-gray-900">
                <Link
                  rel="noopener noreferrer"
                  to="/dashboard"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current text-gray-600"
                  >
                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                  </svg>
                  <span>My Appointment</span>
                </Link>
              </li>
              {isAdmin && (
                <>
                  <li className="bg-gray-100 text-gray-900">
                    <Link
                      rel="noopener noreferrer"
                      to="/dashboard/allusers"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current text-gray-600"
                      >
                        <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                      </svg>
                      <span>All users</span>
                    </Link>
                  </li>
                  <li className="bg-gray-100 text-gray-900">
                    <Link
                      rel="noopener noreferrer"
                      to="/dashboard/add-doctors"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current text-gray-600"
                      >
                        <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                      </svg>
                      <span>Add Doctors</span>
                    </Link>
                  </li>
                  <li className="bg-gray-100 text-gray-900">
                    <Link
                      rel="noopener noreferrer"
                      to="/dashboard/manage-doctors"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current text-gray-600"
                      >
                        <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                      </svg>
                      <span>Manage Doctors</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      {/* sidebar end*/}
    </>
  );
}

export default DashboardRoot;
