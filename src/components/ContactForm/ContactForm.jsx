import React, { useState } from 'react';
import { BtnStyled, FormStyled, InputStyled } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction, selectContacts } from 'store/phonebookSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value.trim());
        break;
      case 'number':
        setNumber(value.trim());
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  const addContact = (name, number) => {
    const isPresent = contacts.find(contact => contact.name === name);

    if (isPresent) {
      alert(`${name} is already in the phonebook`);
      return;
    }

    dispatch(addContactAction({ name, number }));
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
        type="tel"
        name="number"
        onChange={handleChange}
        value={number}
        required
        placeholder="Enter contact phone"
      />
      <BtnStyled type="submit">Add contact</BtnStyled>
    </FormStyled>
  );
};
