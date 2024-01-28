import { ContactForm, ContactsList, Filter } from 'components';
import {
  ContainerStyled,
  ErrorStyled,
  TitleStyled,
} from 'components/App/AppStyled';
import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { selectIsLoading } from 'store/phonebookSlice';

export const Contacts = () => {
  return (
    <ContainerStyled>
      <TitleStyled>Phonebook</TitleStyled>
      <ContactForm />
      <TitleStyled>Contacts</TitleStyled>
      <Filter />
      {selectIsLoading && <Loader />}
      {error && <ErrorStyled>{error}</ErrorStyled>}
      <ContactsList />
    </ContainerStyled>
  );
};
