import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer className="d-flex justify-content-center align-items-center">
      footer
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #1f4158;
  color: #d4d5f1;
  height: 50px;
  bottom: 0;
`;

export default Footer;
