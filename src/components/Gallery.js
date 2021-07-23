import React, { useState } from 'react';
import styled from 'styled-components';
import { galleryWorks } from '../utils/data';
import Title from './_Title';
import SingleGalleryImage from './_SingleGalleryImage';

// *COMPONENTS
const Gallery = () => {
  return (
    <Wrapper className="section">
      <Title
        title="recent works"
        description="Our team is constantly working every single day at several different sites. Here are the pictures of some of our recent works."
      />

      <div className="section-center gallery-center">
        {galleryWorks.map((image) => (
          <SingleGalleryImage key={image.id} {...image} />
        ))}
      </div>
    </Wrapper>
  );
};

// *STYLES
const Wrapper = styled.section`
  background: var(--clr-secondary);
  color: var(--backgroundColor);

  .title:hover .title-underline {
    background: var(--backgroundColor);
  }

  .gallery-center {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1170px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      grid-template-areas:
        'a a b b'
        'c d d e'
        'f f g g'
        'h i i j';

      .gallery-img:nth-child(1) {
        grid-area: a;
      }
      .gallery-img:nth-child(2) {
        grid-area: b;
      }
      .gallery-img:nth-child(3) {
        grid-area: c;
      }
      .gallery-img:nth-child(4) {
        grid-area: d;
      }
      .gallery-img:nth-child(5) {
        grid-area: e;
      }
      .gallery-img:nth-child(6) {
        grid-area: f;
      }
      .gallery-img:nth-child(7) {
        grid-area: g;
      }
      .gallery-img:nth-child(8) {
        grid-area: h;
      }
      .gallery-img:nth-child(9) {
        grid-area: i;
      }
      .gallery-img:nth-child(10) {
        grid-area: j;
      }
    }
  }
`;

export default Gallery;
