import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        {/* nav-header */}
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="homemakers" />
          </Link>
          <button type="button" className="nav-btn">
            <FaBars />
          </button>
        </div>

        {/* nav-links */}
        <ul className="nav-links">
          <li>
            <Link to="/" className="link">
              home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              about
            </Link>
          </li>
          <li>
            <Link to="/services/12" className="link">
              services
            </Link>
          </li>
        </ul>

        {/* contact-btn */}
        <Link to="/contact" className="btn contact-btn link">
          Contact
        </Link>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  background: var(--clr-secondary);

  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 1rem;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-btn {
      display: none;
    }
  }

  .nav-links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 3rem;

    .link {
      color: white;
      font-size: 1.25rem;

      &:hover {
        color: var(--clr-primary);
      }
    }
  }

  .contact-btn {
    background: transparent;
    border: 2px solid var(--clr-primary);
    padding: 0.5rem 1.5rem;
    &:hover {
      background: var(--clr-primary);
    }
  }
`;

export default Navbar;
