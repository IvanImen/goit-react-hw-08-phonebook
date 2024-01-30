import styled from '@emotion/styled';

export const DivStyled = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const TextStyled = styled.p`
  color: #ffffff;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
`;

export const ButtonStyled = styled.button`
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
