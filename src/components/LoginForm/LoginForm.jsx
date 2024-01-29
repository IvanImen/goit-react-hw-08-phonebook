import {
  BtnStyled,
  FormStyled,
  InputStyled,
} from 'components/ContactForm/ContactForm.styled';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { loginUserAction } from 'store/authSlice';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value.trim());
        break;
      case 'password':
        setPassword(value.trim());
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUserAction({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        type="email"
        name="email"
        onChange={handleChange}
        value={email}
        required
        placeholder="Enter your e-mail"
      />
      <InputStyled
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
        required
        placeholder="Enter your password"
      />
      <BtnStyled type="submit">Login</BtnStyled>
    </FormStyled>
  );
};
