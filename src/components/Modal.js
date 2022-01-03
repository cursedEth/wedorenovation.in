import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import modalImg from '../assets/modal-img.svg';

const Modal = () => {
  // state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // functions
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);
  }, []);

  // jsx
  return (
    <Wrapper>
      <div
        className={`${
          isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <article className="modal-container">
          <img src={modalImg} alt="45-Days-Only" />
          <div className="modal-info">
            <h2>45-Day Delivery</h2>
            <p>
              Get your Home Renovation done within just 45 days. That's our
              delivery guarantee.
            </p>
            <p>
              Call now <a href="tel:8800454335">8800454335</a> 📞
            </p>
            <button className="close-modal-btn" onClick={closeModal}>
              <FaTimes />
            </button>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    transition: var(--transition);
    visibility: hidden;
    z-index: -1;
  }
  /* OPEN/CLOSE MODAL */
  .show-modal {
    visibility: visible;
    z-index: 10;
  }
  .modal-container {
    transform: scale(0);
    transition: var(--transition);
    background: var(--clr-gradient);
    border-radius: var(--borderRadius);
    color: var(--white);
    width: 90vw;
    /* height: 30vh; */
    max-width: 768px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 1.5rem;
    padding: 4rem 1.5rem;

    @media (max-width: 592px) {
      flex-direction: column;
    }

    img {
      width: 15rem;
    }

    a {
      text-decoration: underline;
      color: var(--white);
    }
  }
  .show-modal .modal-container {
    transform: scale(1);
  }
  .close-modal-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    color: var(--red-dark);
    cursor: pointer;
  }
`;

export default Modal;
