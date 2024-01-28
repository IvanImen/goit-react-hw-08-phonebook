import React from 'react';
import {
  DivStyled,
  ItemStyled,
  LinkStyled,
  SubtitleStyled,
  TextStyled,
} from './ContactsListItem.styled';
import { FiPhone } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteContactAction } from 'store/phonebookSlice';

export const ContactsListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(deleteContactAction(id));
  };

  return (
    <ItemStyled>
      <FiPhone color="#ffffff" size="32px" title="phone icon" />
      <DivStyled>
        <SubtitleStyled>{name} </SubtitleStyled>
        <TextStyled>{number}</TextStyled>
      </DivStyled>
      <LinkStyled type="button" onClick={() => deleteContact(id)}>
        <RiDeleteBin5Line />
        Delete
      </LinkStyled>
    </ItemStyled>
  );
};
