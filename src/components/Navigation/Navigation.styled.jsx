import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
  display: flex;
  gap: 40px;
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
