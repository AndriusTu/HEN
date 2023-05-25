import React from 'react';
import { Navigate } from 'react-router-dom';
import ROUTES from '../routes';
import { getUserRole } from '../services/api/accountService';
import authService from '../services/api/authService';

interface ProtectedProps {
  acceptedRoles?: string[];
  children: JSX.Element;
}

const Protected = (props: ProtectedProps) => {
  const { acceptedRoles, children } = props;
  const isLoggedIn = authService.isLoggedIn();
  const userRole = getUserRole();

  if (!isLoggedIn) {
    return (
      <Navigate
        to={ROUTES.LOGIN}
        replace
      />
    );
  }

  if (acceptedRoles && !acceptedRoles.includes(userRole)) {
    return (
      <Navigate
        to={ROUTES.CREATE_PARCEL}
        replace
      />
    );
  }

  return children;
};
export default Protected;
