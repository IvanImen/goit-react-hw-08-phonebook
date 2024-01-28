import { ContactsListItem } from 'components';
import React, { useEffect } from 'react';
import { ListStyled } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContactsAction,
  selectFilteredContacts,
} from 'store/phonebookSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(getContactsAction());
  }, [dispatch]);

  return (
    <ListStyled>
      {filteredContacts.map(({ id, name, phone }) => {
        return <ContactsListItem key={id} name={name} number={phone} id={id} />;
      })}
    </ListStyled>
  );
};
