import React from 'react';
import { LinkStyled, NavStyled } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/authSlice';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavStyled>
      <LinkStyled to={'/'}>Home</LinkStyled>
      {isLoggedIn && <LinkStyled to={'/contacts'}>Contacts</LinkStyled>}
    </NavStyled>
  );
};
