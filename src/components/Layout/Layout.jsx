import { SectionStyled } from 'components/App/AppStyled';
import { AppBar } from 'components/AppBar/AppBar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <SectionStyled>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </SectionStyled>
    </div>
  );
};
