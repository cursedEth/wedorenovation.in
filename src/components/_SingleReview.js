import React from 'react';
import styled from 'styled-components';
import { reviews } from '../utils/data';
import Ratings from './_Ratings';

const SingleReview = ({ index, reviewIndex, name, image, text, stars }) => {
  // figuring slide positions
  let slidePosition = 'nextSlide';
  if (reviewIndex === index) {
    slidePosition = 'activeSlide';
  }
  if (
    reviewIndex === index - 1 ||
    (index === 0 && reviewIndex === reviews.length - 1)
  ) {
    slidePosition = 'lastSlide';
  }

  // jsx
  return (
    <Wrapper className={slidePosition}>
      <div className="container">
        <article className="img-container">
          <img src={image} alt={name} className="person-img" loading="lazy" />
        </article>
        <article className="review-info">
          <Ratings stars={stars} />
          <p className="text">&#8220;{text}&#8221;</p>
          <h5 className="name">~ {name}</h5>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: absolute;
  transform: translateX(50%);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: var(--transition);
  display: grid;
  place-items: center;

  &.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  &.lastSlide {
    transform: translateX(-100%);
  }
  &.nextSlide {
    transform: translateX(100%);
  }

  .container {
    background: var(--clr-gradient);
    box-shadow: var(--shadow-4);
    -webkit-clip-path: polygon(
      100% 0,
      100% 75%,
      35% 75%,
      35% 100%,
      20% 75%,
      0 75%,
      0 0
    );
    clip-path: polygon(
      100% 0,
      100% 75%,
      35% 75%,
      35% 100%,
      20% 75%,
      0 75%,
      0 0
    );
    border-radius: var(--borderRadius);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 3rem 2rem 12rem;
    text-align: left;

    @media (max-width: 792px) {
      flex-direction: column;
      text-align: center;
      gap: 1rem;
      padding-bottom: 3rem;
      clip-path: none;
      -webkit-clip-path: none;

      .stars {
        margin: 0 auto;
      }
    }
  }

  .img-container {
    padding: 1rem 0;
    /* min-width: 50%; */
  }

  img {
    box-shadow: var(--shadow-3);
    object-fit: cover;
    height: 17rem;
  }

  .name {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

export default SingleReview;
