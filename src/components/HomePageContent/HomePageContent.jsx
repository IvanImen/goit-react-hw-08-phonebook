import React from 'react';
import heroPhoto from '../../images/phonebook_hero.jpg';
import { TextStyled, TitleStyled } from './HomePageContent.styled';
import { useSelector } from 'react-redux';
import { selectUserName } from 'store/authSlice';

export const HomePageContent = () => {
  const userName = useSelector(selectUserName);
  return (
    <div>
      <img src={heroPhoto} alt="Phonebook and a pen" />
      <TitleStyled>Hello{userName && `, ${userName}`}!</TitleStyled>
      <TextStyled>
        Welcome to the Phonebook website. We are glad that you found us. Our
        website will help you keep all your contacts in one place so that you
        can easily find them in the future. We offer free registration and a
        simple interface so that you can quickly start using our service. We are
        always happy to help our users. Thank you for being with us!
      </TextStyled>
    </div>
  );
};
