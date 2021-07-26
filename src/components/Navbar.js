import React from 'react';
import styled from 'styled-components';
import Logo from './_Logo';
import ContactBtn from './_ContactBtn';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import NavbarLinks from './_NavbarLinks';

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
        <NavbarLinks />

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

  .contact-btn {
    display: none;
    background: transparent;
  }

  @media (min-width: 992px) {
    .nav-header {
      width: auto;
    }
    .nav-btn {
      display: none;
    }
    .contact-btn {
      display: block;
      background: var(--clr-secondary);

      &:hover {
        background: var(--clr-primary);
      }
    }
  }
`;

export default Navbar;
