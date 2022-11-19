import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';

function AdminRoutes({ children }) {
  // use context
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  if (loading || isAdminLoading) {
    return <Loading />;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AdminRoutes;
