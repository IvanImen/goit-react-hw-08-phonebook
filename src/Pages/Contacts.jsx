import { ContactForm, Filter } from 'components';
import { TitleStyled } from 'components/App/AppStyled';
import { ContactsWrapper } from 'components/Contacts/ContactsWrapper';
import React from 'react';

const Contacts = props => {
  return (
    <>
      <TitleStyled>Phonebook</TitleStyled>
      <ContactForm />
      <TitleStyled>Contacts</TitleStyled>
      <Filter />
      <ContactsWrapper />
    </>
  );
};

export default Contacts;
