import {
  BtnStyled,
  FormStyled,
  InputStyled,
} from 'components/ContactForm/ContactForm.styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserAction } from 'store/authSlice';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value.trim());
        break;
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
    dispatch(createUserAction({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        type="text"
        name="name"
        onChange={handleChange}
        value={name}
        required
        placeholder="Enter contact name"
      />
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
      <BtnStyled type="submit">Register</BtnStyled>
    </FormStyled>
  );
};
