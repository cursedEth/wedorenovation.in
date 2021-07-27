import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import Logo from './_Logo';
import ContactBtn from './_ContactBtn';
import SidebarLinks from './_SidebarLinks';

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
        <SidebarLinks />

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

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: var(--grey-8);
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
    border-bottom: 4px solid rgb(226, 39, 39);

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
