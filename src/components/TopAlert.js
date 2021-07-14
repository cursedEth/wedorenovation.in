import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const TopAlert = () => {
  // data from context
  const { isAlertOpen, closeAlert } = useGlobalContext();

  // jsx
  return (
    <Wrapper>
      <section className={`${isAlertOpen ? 'container' : 'close-top-alert'}`}>
        <p>Book a free site visit. Call us at &nbsp;</p>
        <a href="tel:8800805388" className="link">
          8800805388
        </a>
      </section>

      <span className="close-alert" onClick={closeAlert}>
        <FaTimes />
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;

  .container {
    background: var(--clr-primary);
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close-alert {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    svg {
      vertical-align: middle;
      color: var(--grey-9);
    }
  }

  p {
    margin-bottom: 0;
  }

  .link {
    color: var(--black);
    text-decoration: underline;
    font-weight: bold;
  }

  .close-top-alert {
    display: none;
  }
`;

export default TopAlert;
