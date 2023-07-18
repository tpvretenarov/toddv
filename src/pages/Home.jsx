import React from 'react'
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <HomeContainer className="d-flex flex-column h-100">
      <NavBar />
      <Body className="h-100 mx-4">
        <IntroPage>
          <ParagraphText>Hi, my name is</ParagraphText>
          <TitleText>Todor Vretenarov.</TitleText>
          <TitleText>Web Developer.</TitleText>
        </IntroPage>
        <PageDiv>About</PageDiv>
        <PageDiv>Experience</PageDiv>
        <PageDiv>Work</PageDiv>
        <PageDiv>Contact</PageDiv>
      </Body>
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
  overflow: scroll;
  scroll-snap-type: y proximity;
`;

const IntroPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  scroll-snap-align: center;
`;

const PageDiv = styled.div`
  height: 100%;
  width: 100%;
  scroll-snap-align: start;
`;

const TitleText = styled.h1`
  margin: 0px;
  font-size: clamp(40px, 8vw, 80px);
`;

const ParagraphText = styled.p`
  font-size: 16px;
  color: #64ffda;
  text-decoration: none;
  font-family: "Lucida Console", monospace;
`;

export default Home;