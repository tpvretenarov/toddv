import React, { useState } from 'react';
import styled from 'styled-components';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import HamburgerIcon from './HamburgerIcon';

const NavBar = () => {
  const [parent] = useAutoAnimate();
  const [open, setOpen] = useState(false);

  return (
    <NavContainer className="p-4 w-100" ref={parent}>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <PageLink>ToddV</PageLink>
        </div>
        <div className='d-none d-md-block'>
          <PageLink className='mx-3'>About</PageLink>
          <PageLink className='mx-3'>Experience</PageLink>
          <PageLink className='mx-3'>Work</PageLink>
          <PageLink className='mx-3'>Contact</PageLink>
          <ButtonLink className='mx-3'>Resume</ButtonLink>
        </div>
        <div className='d-block d-md-none'>
          <HamburgerIcon open={open} onClick={setOpen} />
        </div>
      </div>
      {open ?
        <div className='d-block d-md-none d-flex flex-column'>
          <PageLink className='my-2'>About</PageLink>
          <PageLink className='my-2'>Experience</PageLink>
          <PageLink className='my-2'>Work</PageLink>
          <PageLink className='my-2'>Contact</PageLink>
          <PageLink className='my-2'>Resume</PageLink>
        </div>
        : null}
    </NavContainer >
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
  font-family: "Lucida Console", monospace;

  :hover {
    color: #64ffda;
  }
`;

const ButtonLink = styled.button`
  border: 1px solid #64ffda;
  font-family: "Lucida Console", monospace;
  color: #64ffda;
  background-color: #1f4158;
  border-radius: 4px;
  padding: 5px;

  :hover {
    color: #1f4158;
    background-color: #64ffda;
  }
`

export default NavBar;
