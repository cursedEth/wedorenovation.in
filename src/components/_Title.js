import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
  return (
    <TitleContainer>
      <div className="title">
        <h2>{title}</h2>
        <div className="title-underline"></div>
      </div>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  &:hover .title-underline {
    width: 11rem;
    background: var(--primary-6);
  }

  .title-underline {
    background: var(--primary-5);
    width: 7rem;
    height: 0.25rem;
    margin: -1rem auto 0;
    transition: var(--transitionLong);
  }
`;

export default Title;
