import React from 'react'
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <HomeContainer className="d-flex flex-column h-100">
      <NavBar />
      <Body className="d-flex flex-column container">
        <ParagraphText>Hi, my name is</ParagraphText>
        <TitleText>Todor Vretenarov.</TitleText>
        <TitleText>I'm a web developer with a passion for creating.</TitleText>
      </Body>
      {/* <Footer /> */}
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  background-color: #1f4158;
  color: #fff;
`;

const Body = styled.div`
  background-color: #1f4158;
  color: #fff;
`;

const TitleText = styled.h1`
  margin: 0px;
  font-size: clamp(40px, 8vw, 80px);
`;

const ParagraphText = styled.p`
  font-size: 16px;
`;

export default Home;