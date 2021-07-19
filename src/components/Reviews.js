import React from 'react';
import styled from 'styled-components';
import Title from './_Title';
import reviewsImg from '../assets/reviews-bcg.webp';

const Reviews = () => {
  return (
    <Wrapper className="section">
      <Title
        title="our Reviews"
        description="See what people say about us! Here are a few of the many amazing feedbacks we get every week."
      />

      <div className="section-center">
        <h5>The Reviews - Under Construction!</h5>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)),
    url(${reviewsImg}) center/cover no-repeat;
  color: var(--white);

  .title:hover .title-underline {
    background: var(--backgroundColor);
  }
`;

export default Reviews;
