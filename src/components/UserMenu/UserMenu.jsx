import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserName } from 'store/authSlice';

export const UserMenu = () => {
  const logOutUser = () => {};

  const user = useSelector(selectUserName);
  return (
    <div>
      <p>Wellcome, {user}</p>
      <button type="button" onClick={logOutUser}>
        Logout
      </button>
    </div>
  );
};
