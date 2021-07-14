import React from 'react';
import styled from 'styled-components';
import Logo from './_Logo';
import ContactBtn from './_ContactBtn';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Navbar = () => {
  // data from context
  const { openSidebar } = useGlobalContext();

  // jsx
  return (
    <NavContainer>
      <div className="nav-center">
        {/* nav-header */}
        <div className="nav-header">
          <Logo />
          <button type="button" className="nav-btn" onClick={openSidebar}>
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
        <ContactBtn />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  background: var(--clr-secondary);
  padding: 0 1rem;

  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--maxWidth);
    margin: 0 auto;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .nav-btn {
      cursor: pointer;
      background: transparent;
      border: none;
      transition: var(--transition);
      svg {
        font-size: 2rem;
        color: var(--white);
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .nav-links {
    display: none;
    justify-content: space-around;
    align-items: center;
    gap: 3rem;

    .link {
      color: var(--white);
      font-size: 1.25rem;
      letter-spacing: var(--letterSpacing);
      padding: 0.5rem;
      &:hover {
        color: var(--grey-4);
      }
    }
  }

  .contact-btn {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-header {
      width: auto;
    }
    .nav-btn {
      display: none;
    }
    .nav-links {
      display: flex;
    }
    .contact-btn {
      display: block;
    }
  }
`;

export default Navbar;
