import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import ContactBtn from './_ContactBtn';

const Sidebar = () => {
  // data from context
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  // jsx
  return (
    <SidebarContainer>
      <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
        {/* header */}
        <header className="sidebar-header">
          <Link to="/">
            <img src={logo} alt="homemakers" className="logo" />
          </Link>
          <button type="button" className="sidebar-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </header>

        {/* sidebar-links */}
        <ul className="sidebar-links">
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

        {/* Contact-btn */}
        <ContactBtn />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  text-align: center;

  .sidebar-links {
    margin-bottom: 2rem;
  }

  .link {
    text-transform: uppercase;
    padding: 1rem;
    font-size: 1.25rem;
    letter-spacing: var(--letterSpacing);
    display: block;
    font-weight: bold;
    color: var(--clr-primary);
    background: var(--grey-1);

    &:hover {
      background: var(--clr-primary);
      color: var(--white);
      border-left: 4px solid var(--clr-secondary);
    }
  }

  .contact-btn {
    background: var(--clr-primary);
    margin: 0 auto;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: var(--clr-secondary);
    height: 5rem;
    border-bottom: 4px solid var(--clr-primary);

    .sidebar-btn {
      align-self: center;
      cursor: pointer;
      color: rgb(226, 39, 39);
      background: transparent;
      border: none;
      transition: var(--transition);
      outline: none;
      svg {
        font-size: 2rem;
      }
      &:hover {
        color: rgb(194, 14, 14);
        transform: scale(1.1);
      }
    }
  }
`;

export default Sidebar;
