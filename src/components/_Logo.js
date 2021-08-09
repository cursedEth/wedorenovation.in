import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
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
    width: 10rem;
  }
`;

export default Logo;
