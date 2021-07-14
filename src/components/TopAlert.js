import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhoneAlt, FaTimes } from 'react-icons/fa';

const TopAlert = () => {
  // state
  const [isAlertOpen, setIsAlertOpen] = useState(true);

  // jsx
  return (
    <Wrapper>
      <div className={`${isAlertOpen ? 'section-center' : 'close-top-alert'}`}>
        <article>
          <span>
            <FaPhoneAlt />
          </span>
          <p>Call us at</p>
          <a href="tel:8800805388" className="link">
            8800805388
          </a>
          or
          <a href="tel:7982539093" className="link">
            7982539093
          </a>
        </article>

        <article>
          <span>
            <FaEnvelope />
          </span>
          <p>Email us at</p>
          <a href="mailto:sameerathomerenovation@gmail.com" className="link">
            sameerathomerenovation@gmail.com
          </a>
        </article>
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
    justify-content: space-around;
    flex-wrap: wrap;
    column-gap: 1rem;
  }

  .close-top-alert {
    display: none;
  }

  article {
    display: flex;
    gap: 0.25rem;
    color: var(--black);
    text-align: center;
    font-weight: 500;

    p {
      margin-bottom: 0;
      display: none;
    }

    svg {
      vertical-align: middle;
      font-size: 1.25rem;
    }

    .link {
      color: var(--black);
      text-decoration: underline;
      text-transform: lowercase;
      font-weight: bold;
    }

    @media (max-width: 660px) {
      font-size: 0.875rem;

      svg {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 992px) {
    article {
      p {
        display: block;
      }
    }
  }
`;

export default TopAlert;
