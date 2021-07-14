import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

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
        <hr />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
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

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: var(--clr-secondary);
    height: 5rem;

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
      }
    }
  }
`;

export default Sidebar;
