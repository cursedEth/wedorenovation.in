import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ServiceGallery = ({ images, title }) => {
  // states
  const [mainImg, setMainImg] = useState(images[0]);

  // useEffect
  useEffect(() => {
    setMainImg(images[0]);
  }, [images]);

  // jsx
  return (
    <Wrapper>
      <img src={mainImg} alt={title} loading="lazy" className="main-img" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt="service"
              loading="lazy"
              onClick={() => setMainImg(images[index])}
              className={`${image === mainImg && 'active'}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-img {
    height: 300px;
  }
  img {
    border-radius: var(--borderRadius);
  }

  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    img {
      height: 75px;
      cursor: pointer;
    }
  }

  .active {
    border: 4px solid var(--clr-primary);
  }

  @media (min-width: 600px) {
    .main-img {
      height: 400px;
    }
    .gallery img {
      height: 100px;
    }
  }
`;

export default ServiceGallery;
