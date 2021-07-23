import React, { useState } from 'react';
import styled from 'styled-components';

const SingleGalleryImage = ({ title, url }) => {
  // state
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // function
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // jsx
  return (
    <ImageContainer className="gallery-img">
      <h3>{title}</h3>
      <img
        src={url}
        alt={title}
        loading="lazy"
        className="image"
        onClick={openPopup}
      />

      {/* popup */}
      <div
        className={`popup-overlay ${isPopupOpen ? 'show-popup' : ''}`}
        onClick={closePopup}
      >
        <div className="popup-container">
          <img src={url} alt={title} loading="lazy" />
        </div>
      </div>
    </ImageContainer>
  );
};

const ImageContainer = styled.article`
  border: 1px solid var(--white);
  background: linear-gradient(
    to bottom right,
    var(--clr-primary),
    var(--black)
  );
  position: relative;
  text-align: center;
  height: 25rem;

  &:hover h3 {
    transform: translate(-50%, -50%) scale(1);
  }
  &:hover .image {
    opacity: 0.2;
    cursor: pointer;
  }

  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: var(--transition);
    color: var(--white);
    text-transform: uppercase;
    line-height: 1.5;
  }

  .image {
    transition: var(--transition);
    height: 100%;
  }

  /* popup */

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: grid;
    place-items: center;
    visibility: hidden;
    transition: var(--transition);
    z-index: -1;
    padding: 1rem;
  }
  /* OPEN/CLOSE popup */
  .show-popup {
    visibility: visible;
    z-index: 10;

    .popup-container {
      transform: scale(1);
    }
  }
  .popup-container {
    transform: scale(0);
    transition: var(--transition);
  }
`;

export default SingleGalleryImage;
