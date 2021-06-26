import React from 'react';
// import './homepage.styles.scss';
import Directory from '../Components/directory/directory.component';
import { HomePageContainer } from './HomePage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory></Directory>
    </HomePageContainer>
  );
};

export default HomePage;
