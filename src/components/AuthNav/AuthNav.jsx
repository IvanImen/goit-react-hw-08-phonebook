import React from 'react';
import { ButtonStyled, DivStyled, LinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <DivStyled>
      <LinkStyled to="/register">Register</LinkStyled>
      <ButtonStyled to="/login">Login</ButtonStyled>
    </DivStyled>
  );
};
