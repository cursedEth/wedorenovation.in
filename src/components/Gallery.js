import React from 'react';
import styled from 'styled-components';
import Title from './_Title';

const Gallery = () => {
  return (
    <Wrapper className="section">
      <Title
        title="recent works"
        description="Our team is constantly working every single day at several different sites. Here are the pictures of some of our recent works."
      />

      <div className="section-center">
        <h5>Gallery Pictures - Soon to be Uploaded!</h5>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-secondary);
  color: var(--backgroundColor);
  min-height: 60vh;

  .title:hover .title-underline {
    background: var(--backgroundColor);
  }

  .section-center {
    text-align: center;
  }
`;

export default Gallery;
