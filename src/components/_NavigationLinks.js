import React, { useState } from 'react';
import styled from 'styled-components';
import AboutLinks from './_AboutLinks';
import ServicesLinks from './_ServicesLinks';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';

const NavigationLinks = () => {
  // state
  const [showDropdown, setShowDropdown] = useState({});

  // jsx
  return (
    <Wrapper>
      {/* home */}
      <article>
        <Link to="/">
          <button className="nav-link">home</button>
        </Link>
      </article>

      {/* about */}
      <article
        className="about-links"
        onMouseEnter={() => setShowDropdown({ aboutMenu: true })}
        onMouseLeave={() => setShowDropdown({ aboutMenu: false })}
        onClick={() => setShowDropdown({ aboutMenu: false })}
      >
        <button className="nav-link">
          about <FaAngleDown />
        </button>
        <div
          className={`dropdown ${
            showDropdown.aboutMenu ? 'show-dropdown' : ''
          }`}
        >
          <AboutLinks />
        </div>
      </article>

      {/* services */}
      <article
        className="services-links"
        onMouseEnter={() => setShowDropdown({ servicesMenu: true })}
        onMouseLeave={() => setShowDropdown({ servicesMenu: false })}
        onClick={() => setShowDropdown({ servicesMenu: false })}
      >
        <button className="nav-link">
          services <FaAngleDown />
        </button>
        <div
          className={`dropdown ${
            showDropdown.servicesMenu ? 'show-dropdown' : ''
          }`}
        >
          <ServicesLinks />
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;

  @media (min-width: 992px) {
    display: flex;
  }

  .nav-link {
    cursor: pointer;
    background: transparent;
    border: none;
    color: var(--grey-4);
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: var(--letterSpacing);
    padding: 0.5rem;
    transition: var(--transition);

    svg {
      vertical-align: middle;
      font-size: 1rem;
    }

    &:hover {
      color: var(--white);
    }
  }

  /* creating dropdown nav */
  .about-links,
  .services-links {
    position: relative;

    .dropdown {
      transition: var(--transition);
      transform: translateY(-0.5rem);
      opacity: 0;
      pointer-events: none;
      display: grid;
      justify-items: center;
    }
    .show-dropdown {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    }

    ul {
      cursor: pointer;
      position: absolute;
      width: 300px;
      background: transparent;
      padding-top: 0.5rem;
      text-align: center;

      li {
        background: var(--clr-primary);
      }

      a {
        display: block;
        background: var(--clr-primary);
        padding: 0.35rem 1rem;
        color: var(--white);
        &:hover {
          background: var(--clr-gradient);
        }
      }
    }
  }

  /* end of dropdown menu */
`;

export default NavigationLinks;
