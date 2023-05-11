import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedProps {
  isLoggedIn: boolean;
  // userRoles?: string[];
  // acceptedRoles?: string[];
  children: JSX.Element;
}

const Protected = (props: ProtectedProps) => {
  const { isLoggedIn } = props;

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }
  return props.children;
};
export default Protected;
