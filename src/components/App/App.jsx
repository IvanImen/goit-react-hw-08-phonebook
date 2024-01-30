import React, { lazy, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { getInformationAction, selectIsRefreshing } from 'store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

const HomePage = lazy(() => import('../../Pages/Home'));
const RegisterPage = lazy(() => import('../../Pages/Register'));
const LoginPage = lazy(() => import('../../Pages/Login'));
const ContactsPage = lazy(() => import('../../Pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(getInformationAction());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    )
  );
};
