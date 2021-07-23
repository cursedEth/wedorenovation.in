import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { FaAngleDown } from 'react-icons/fa';
import AboutLinks from './_AboutLinks';
import ServicesLinks from './_ServicesLinks';

const SidebarLinks = () => {
  // data from context
  const { menu, toggleAboutMenu, toggleServicesMenu, closeSidebar } =
    useGlobalContext();

  // jsx
  return (
    <Wrapper>
      {/* home */}
      <li>
        <Link to="/" className="sidebar-link" onClick={closeSidebar}>
          home
        </Link>
      </li>

      {/* about */}
      <li onClick={toggleAboutMenu}>
        <span className="sidebar-link">
          about <FaAngleDown />
        </span>
        <div onClick={closeSidebar}>{menu.aboutMenu && <AboutLinks />}</div>
      </li>

      {/* services */}
      <li onClick={toggleServicesMenu}>
        <span className="sidebar-link">
          services <FaAngleDown />
        </span>
        <div onClick={closeSidebar}>
          {menu.servicesMenu && <ServicesLinks />}
        </div>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  margin-bottom: 2rem;

  .sidebar-link {
    text-transform: uppercase;
    padding: 1rem;
    font-size: 1.25rem;
    letter-spacing: var(--letterSpacing);
    display: block;
    font-weight: bold;
    color: var(--clr-primary);
    background: var(--grey-1);
    cursor: pointer;
    transition: var(--transition);

    svg {
      vertical-align: middle;
    }

    &:hover {
      background: var(--clr-primary);
      color: var(--white);
      border-left: 4px solid var(--clr-secondary);
    }
  }

  li div ul {
    background: var(--clr-primary-light);

    li {
      background: var(--clr-primary-light);
      padding: 0.5rem;
      transition: var(--transition);

      &:hover {
        background: var(--clr-gradient);
        border-left: 4px solid var(--clr-secondary);
      }

      .link {
        display: block;
        color: var(--white);
        width: 100%;
      }
    }
  }
`;

export default SidebarLinks;
