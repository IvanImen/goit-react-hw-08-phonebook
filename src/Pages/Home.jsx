import { HomePageContent } from 'components/HomePageContent/HomePageContent';
import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'store/phonebookSlice';

export const Home = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <HomePageContent />
    </>
  );
};

export default Home;
