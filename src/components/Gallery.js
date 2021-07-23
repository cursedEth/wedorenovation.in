import React from 'react';
import styled from 'styled-components';
import { galleryWorks } from '../utils/data';
import Title from './_Title';

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

const SingleGalleryImage = ({ title, url }) => {
  return (
    <article className="gallery-img">
      <h3>{title}</h3>
      <img src={url} alt={title} loading="lazy" />
    </article>
  );
};

// *STYLES
const Wrapper = styled.section`
  background: var(--clr-secondary);
  /* background: var(--grey-9); */
  color: var(--backgroundColor);
  /* padding-bottom: 0; */

  .title:hover .title-underline {
    background: var(--backgroundColor);
  }

  .gallery-center {
    display: grid;
    /* place-items: center; */
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

  .gallery-img {
    border: 1px solid var(--white);
    background: linear-gradient(
      to bottom right,
      var(--clr-primary),
      var(--black)
    );
    /* background: var(--black); */
    position: relative;
    text-align: center;
    height: 25rem;

    &:hover h3 {
      transform: translate(-50%, -50%) scale(1);
    }
    &:hover img {
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

    img {
      transition: var(--transition);
      height: 100%;
    }
  }
`;

export default Gallery;
