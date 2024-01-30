import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { ContainerHeader, HeaderStyled } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/authSlice';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <HeaderStyled>
      <ContainerHeader>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </ContainerHeader>
    </HeaderStyled>
  );
};
