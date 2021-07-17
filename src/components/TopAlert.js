import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const TopAlert = () => {
  // state
  const [shouldFix, setShouldFix] = useState(false);

  // data from context
  const { isAlertOpen, closeAlert } = useGlobalContext();

  // scroll function
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 128) {
      setShouldFix(true);
    } else {
      setShouldFix(false);
    }
  });

  // jsx
  return (
    <Wrapper>
      <section
        className={`${isAlertOpen ? 'container' : 'close-top-alert'} ${
          shouldFix ? 'fixed' : ''
        }`}
      >
        <div>
          <p>
            Book a free site visit. Call us at &nbsp;
            <a href="tel:8800805388" className="link" title="Call Us Now!">
              8800805388
            </a>
          </p>
        </div>

        <span className="close-alert" onClick={closeAlert}>
          <FaTimes />
        </span>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    background: var(--clr-primary);
    height: 48px;
    display: grid;
    grid-template-columns: 1fr auto;
    place-items: center;
  }

  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-4);
    z-index: 10;
  }

  .close-alert {
    cursor: pointer;
    margin-right: 1rem;
    svg {
      vertical-align: middle;
      color: var(--grey-3);
    }
  }

  p {
    margin-bottom: 0;
    color: var(--white);
  }

  .link {
    color: var(--white);
    text-decoration: underline;
    letter-spacing: var(--letterSpacing);
  }

  .close-top-alert {
    display: none;
  }
`;

export default TopAlert;
