import React, { useState } from 'react';
import styled from 'styled-components';
import MobileMenuButton from './MobileMenuButton';
import './styles/navbar.css';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <NavContainer className="d-flex p-4 justify-content-between align-items-center">
      <div>
        <PageLink>ToddV</PageLink>
      </div>
      <div className='d-none d-sm-block'>
        <PageLink>About</PageLink>
        <PageLink>Experience</PageLink>
        <PageLink>Work</PageLink>
        <PageLink>Contact</PageLink>
        <ResumeButton>Resume</ResumeButton>
      </div>
      <MobileMenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </NavContainer>
  );
};

const NavContainer = styled.div`
  background-color: #1f4158;
`;

const PageLink = styled.a`
  color: #fff;
  font-size:14px;
  cursor: pointer;
  text-decoration: none;
  margin: 1rem;
  font-family: "Lucida Console", monospace;

  :hover {
    color: #64ffda;
  }
`;

const ResumeButton = styled.button`
  background-color: transparent;
  border: 1px solid #64ffda;
  border-radius: 5px;
  color: #64ffda;

  :hover {
    color: #1f4158;
    background-color: #64ffda; 
  }
`;

export default NavBar;
