import { useState } from "react";
import styled from "styled-components";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import HamburgerIcon from "./HamburgerIcon";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return { isOpen, toggle };
};

const NavBar = () => {
  const [parent] = useAutoAnimate();
  const { isOpen, toggle } = useMobileMenu();

  return (
    <nav className="w-full bg-[#1f4158] p-4" ref={parent}>
      <div className="flex items-center justify-between">
        <div>
          <a
            href="#intro"
            className="font-mono text-sm text-white hover:text-[#64ffda]"
          >
            ToddV
          </a>
        </div>
        <div className="hidden md:block">
          <NavLinks className="mx-3 font-mono text-sm text-white hover:text-[#64ffda]" />
          <button className="mx-3 rounded border border-[#64ffda] bg-[#1f4158] px-2 py-1 font-mono text-[#64ffda] hover:bg-[#64ffda] hover:text-[#1f4158]">
            Resume
          </button>
        </div>
        <div className="block md:hidden">
          <HamburgerIcon open={isOpen} onClick={toggle} />
        </div>
      </div>
      {isOpen ? (
        <div className="flex flex-col md:hidden">
          <NavLinks className="my-2 font-mono text-sm text-white hover:text-[#64ffda]" />
          <a
            href="#resume"
            className="my-2 font-mono text-sm text-white hover:text-[#64ffda]"
          >
            Resume
          </a>
        </div>
      ) : null}
    </nav>
  );
};

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

const NavLinks = ({ className }: { className?: string }) => (
  <>
    {NAV_ITEMS.map((item) => (
      <PageLink key={item.href} href={item.href} className={className}>
        {item.label}
      </PageLink>
    ))}
  </>
);

export default NavBar;
