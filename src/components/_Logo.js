import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <img src={logo} alt="We Do Renovation™" className="logo" />
      </Link>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  .logo {
    width: 9rem;
    height: 7rem;
    padding: 1rem 0 0.5rem;
    object-fit: contain;
  }
`;

export default Logo;
