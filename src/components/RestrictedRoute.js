import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'store/authSlice';

export const RestrictedRoute = ({ redirectTo = '/', component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
