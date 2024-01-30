import { useDispatch, useSelector } from 'react-redux';
import { logOutUserAction, selectUserName } from 'store/authSlice';
import { ButtonStyled, DivStyled, TextStyled } from './UserMenu.styled';
import { clearContactsAction } from 'store/phonebookSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const logOutUser = () => {
    dispatch(logOutUserAction());
    dispatch(clearContactsAction());
  };

  const user = useSelector(selectUserName);
  return (
    <DivStyled>
      <TextStyled>Wellcome, {user}</TextStyled>
      <ButtonStyled type="button" onClick={logOutUser}>
        Logout
      </ButtonStyled>
    </DivStyled>
  );
};
