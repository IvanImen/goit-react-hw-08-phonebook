import { TitleStyled } from 'components/App/AppStyled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import React from 'react';

const Register = props => {
  return (
    <div>
      <TitleStyled>Registration</TitleStyled>
      <RegisterForm />
    </div>
  );
};

export default Register;
