import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const DivStyled = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const LinkStyled = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  &:hover {
    color: rgba(225, 225, 225, 0.4);
  }
`;

export const ButtonStyled = styled(NavLink)`
  background-color: rgba(142, 142, 142, 0.5);
  color: #ffffff;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  padding: 10px 24px;
  border: none;
  &:hover {
    background-color: rgba(183, 183, 183, 0.5);
  }
`;
