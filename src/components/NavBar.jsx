import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <NavContainer className="d-flex p-4 justify-content-between align-items-center">
      <div>
        <PageLink>ToddV</PageLink>
      </div>
      <div>
        <PageLink>About</PageLink>
        <PageLink>Experience</PageLink>
        <PageLink>Work</PageLink>
        <PageLink>Contact</PageLink>
        <PageLink>Resume</PageLink>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  background-color: #1f4158;
`;

const PageLink = styled.a`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  margin: 1rem;
  font-family: "Lucida Console", monospace;

  :hover {
    color: #64ffda;
  }
`;

export default NavBar;
