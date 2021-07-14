import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <img src={logo} alt="homemakers" className="logo" />
      </Link>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  width: 10rem;
`;

export default Logo;
