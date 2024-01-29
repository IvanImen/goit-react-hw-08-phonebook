import { ContactsList } from 'components';
import { ErrorStyled } from 'components/App/AppStyled';
import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'store/phonebookSlice';

export const ContactsWrapper = () => {
  const error = useSelector(selectError);

  return (
    <>
      {selectIsLoading && <Loader />}
      {error && <ErrorStyled>{error}</ErrorStyled>}
      <ContactsList />
    </>
  );
};
