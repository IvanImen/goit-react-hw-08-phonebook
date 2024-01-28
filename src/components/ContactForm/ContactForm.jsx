import React, { useState } from 'react';
import { BtnStyled, FormStyled, InputStyled } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction, selectContacts } from 'store/phonebookSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value.trim());
        break;
      case 'phone':
        setPhone(value.trim());
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, phone);
    setName('');
    setPhone('');
  };

  const addContact = (name, phone) => {
    const isPresent = contacts.find(contact => contact.name === name);

    if (isPresent) {
      alert(`${name} is already in the phonebook`);
      return;
    }

    dispatch(addContactAction({ name, phone }));
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
        name="phone"
        onChange={handleChange}
        value={phone}
        required
        placeholder="Enter contact phone"
      />
      <BtnStyled type="submit">Add contact</BtnStyled>
    </FormStyled>
  );
};
