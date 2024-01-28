import { InputStyled } from 'components/ContactForm/ContactForm.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilterAction } from 'store/phonebookSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(setFilterAction(e.target.value.trim().toLowerCase()));
  };

  return (
    <InputStyled
      placeholder="Filter contact numbers"
      type="text"
      name="filter"
      onChange={handleFilterChange}
      value={filter}
    />
  );
};
