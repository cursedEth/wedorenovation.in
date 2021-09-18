import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <img src={logo} alt="Home™ Renovation" className="logo" />
      </Link>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  .logo {
    width: 7rem;
    height: 5rem;
    padding-top: 0.5rem;
  }
`;

export default Logo;
