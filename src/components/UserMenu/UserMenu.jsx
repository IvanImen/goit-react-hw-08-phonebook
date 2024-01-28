import React from 'react';

export const UserMenu = () => {
  const logOutUser = () => {};

  return (
    <div>
      <p>Wellcome, {user}</p>
      <button type="button" onClick={logOutUser}>
        Logout
      </button>
    </div>
  );
};
