import { TitleStyled } from 'components/App/AppStyled';
import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';

const Login = props => {
  return (
    <div>
      <TitleStyled>Login</TitleStyled>
      <LoginForm />
    </div>
  );
};

export default Login;
