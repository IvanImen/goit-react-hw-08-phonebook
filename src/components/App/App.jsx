import React, { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const HomePage = lazy(() => import('../../Pages/Home'));
const RegisterPage = lazy(() => import('../../Pages/Register'));
const LoginPage = lazy(() => import('../../Pages/Login'));
const ContactsPage = lazy(() => import('../../Pages/Contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
