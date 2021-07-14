import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const TopAlert = () => {
  // state
  const [isAlertOpen, setIsAlertOpen] = useState(true);

  // jsx
  return (
    <Wrapper>
      <div className={`${isAlertOpen ? 'section-center' : 'close-top-alert'}`}>
        <p>Book a free site visit. Call us at &nbsp;</p>
        <a href="tel:8800805388" className="link">
          8800805388
        </a>
      </div>

      <span className="close-alert" onClick={() => setIsAlertOpen(false)}>
        <FaTimes />
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary);
  text-align: center;
  position: relative;

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

  .section-center {
    padding: 0.25rem;
    max-width: 992px;
    display: flex;
    justify-content: center;

    p {
      margin-bottom: 0;
    }

    .link {
      color: var(--black);
      text-decoration: underline;
      font-weight: bold;
    }
  }

  .close-top-alert {
    display: none;
  }
`;

export default TopAlert;
