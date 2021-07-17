import React from 'react';
import styled from 'styled-components';

const Title = ({ title, description }) => {
  return (
    <TitleContainer>
      <div className="title">
        <h2>{title}</h2>
        <div className="title-underline"></div>
        <p>{description}</p>
      </div>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  .title p {
    margin: 1rem auto 0;
  }

  &:hover .title-underline {
    width: 11rem;
    background: var(--textColor);
  }

  .title-underline {
    background: var(--clr-primary);
    width: 7rem;
    height: 0.25rem;
    margin: -0.5rem auto 0;
    transition: var(--transitionLong);
  }
`;

export default Title;
