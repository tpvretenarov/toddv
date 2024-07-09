import styled from "styled-components";
import NavBar from "./components/NavBar.tsx";

function App() {
  return (
    <HomeContainer className="flex h-full flex-col">
      <NavBar />
      <Body className="mx-4 h-full">
        <IntroPage id="intro">
          <ParagraphText>Hi, my name is</ParagraphText>
          <TitleText>Todor Vretenarov.</TitleText>
          <TitleText>Software Engineer.</TitleText>
        </IntroPage>
        <PageDiv id="about">About</PageDiv>
        <PageDiv id="experience">Experience</PageDiv>
        <PageDiv id="work">Work</PageDiv>
        <PageDiv id="contact">Contact</PageDiv>
      </Body>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background-color: #1f4158;
  color: #fff;
`;

const Body = styled.div`
  background-color: #1f4158;
  color: #fff;
  overflow: scroll;
`;

const IntroPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const PageDiv = styled.section`
  height: 100%;
  width: 100%;
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

export default App;
