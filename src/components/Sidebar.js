import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import Logo from './_Logo';
import ContactBtn from './_ContactBtn';
import NavigationLinks from './_NavigationLinks';

const Sidebar = () => {
  // data from context
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  // jsx
  return (
    <SidebarContainer>
      <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
        {/* header */}
        <header className="sidebar-header">
          <Logo />
          <button type="button" className="sidebar-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </header>

        {/* sidebar-links */}
        <div className="sidebar-links" onClick={closeSidebar}>
          <NavigationLinks />
        </div>

        {/* Contact-btn */}
        <span onClick={closeSidebar}>
          <ContactBtn />
        </span>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  text-align: center;

  .sidebar-links {
    margin-bottom: 4rem;
    width: 100%;

    .links {
      width: 100%;
      display: grid;
      grid-template-rows: 200px 200px auto;
      gap: 1rem;
      align-items: flex-start;
      justify-content: stretch;
      background: var(--clr-gradient);

      ul {
        padding-top: 0;
      }

      .nav-link {
        text-transform: uppercase;
        padding: 1rem;
        font-size: 1rem;
        width: 100%;
        letter-spacing: var(--letterSpacing);
        display: block;
        font-weight: bold;
        a {
          color: var(--clr-white);
        }
        &:hover {
          background: var(--clr-gradient);
          color: var(--white);
          border-left: 4px solid var(--clr-secondary);
        }
      }
    }
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
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
