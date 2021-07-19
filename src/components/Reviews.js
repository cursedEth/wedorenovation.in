import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from './_Title';
import reviewsImg from '../assets/reviews-bcg.webp';
import SingleReview from './_SingleReview';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { reviews } from '../utils/data';

// *COMPONENTS

// # REVIEWS
const Reviews = () => {
  // state
  const [index, setIndex] = useState(0);

  // setting up useEffect in case data entries run out
  useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (index > lastIndex) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(lastIndex);
    }
  }, [index]);

  // autoslide
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider); //cleanup function
  }, [index]);

  // jsx
  return (
    <Wrapper className="section">
      <Title
        title="our Reviews"
        description="See what people say about us! Here are a few of the many amazing feedbacks we get every week."
      />

      <div className="section-center">
        {reviews.map((review, reviewIndex) => (
          <SingleReview
            key={review.id}
            index={index}
            reviewIndex={reviewIndex}
            {...review}
          />
        ))}

        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FaChevronRight />
        </button>
      </div>
    </Wrapper>
  );
};

// * STYLES
const Wrapper = styled.section`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)),
    url(${reviewsImg}) center/cover no-repeat;
  color: var(--white);

  .title:hover .title-underline {
    background: var(--backgroundColor);
  }

  .section-center {
    text-align: center;
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
    height: 488px;
  }

  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    color: inherit;
    border-color: transparent;
    font-size: 1.25rem;
    cursor: pointer;
    transition: var(--transition);
    vertical-align: middle;
  }
  .prev:hover,
  .next:hover {
    background: var(--clr-primary-light);
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
`;

export default Reviews;
