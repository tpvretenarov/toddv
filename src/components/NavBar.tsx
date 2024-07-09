import { useState } from "react";
import styled from "styled-components";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import HamburgerIcon from "./HamburgerIcon";

const NavBar = () => {
  const [parent] = useAutoAnimate();
  const [open, setOpen] = useState(false);

  return (
    <NavContainer className="w-full p-4" ref={parent}>
      <div className="flex items-center justify-between">
        <div>
          <PageLink href="#intro">ToddV</PageLink>
        </div>
        <div className="hidden md:block">
          <PageLink href="#about" className="mx-3">
            About
          </PageLink>
          <PageLink href="#experience" className="mx-3">
            Experience
          </PageLink>
          <PageLink href="#work" className="mx-3">
            Work
          </PageLink>
          <PageLink href="#contact" className="mx-3">
            Contact
          </PageLink>
          <ButtonLink className="mx-3">Resume</ButtonLink>
        </div>
        <div className="block md:hidden">
          <HamburgerIcon open={open} onClick={setOpen} />
        </div>
      </div>
      {open ? (
        <div className="flex flex-col md:hidden">
          <PageLink href="#about" className="my-2">
            About
          </PageLink>
          <PageLink href="#experience" className="my-2">
            Experience
          </PageLink>
          <PageLink href="#work" className="my-2">
            Work
          </PageLink>
          <PageLink href="#contact" className="my-2">
            Contact
          </PageLink>
          <PageLink href="#resume" className="my-2">
            Resume
          </PageLink>
        </div>
      ) : null}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  background-color: #1f4158;
`;

const PageLink = styled.a`
  color: #fff;
  font-size: 14px;
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
`;

export default NavBar;
