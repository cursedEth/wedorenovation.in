import React from 'react';
import styled from 'styled-components';
import infoImg from '../assets/info-img.svg';

const Info = () => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        {/* info */}
        <article className="info-container">
          <h2>want to get your favourite place renovated?</h2>
          <p>
            We have been the best <strong>Painting</strong>,{' '}
            <strong>Renovation</strong>, and <strong>Construction</strong>{' '}
            services provider for 60+ years as this being our family business.
            We are a group of contractors providing who make sure you get the
            top quality of work with no compromises.
          </p>
          <p>
            In addition to the above mentioned, we provide a large variety of
            services like waterproofing, interior decoration, all types of false
            ceiling and POP work, uPVC/Aluminum and glass work, Modular kitchen
            and wood work, Plumbing, electrical work and many more to all kinds
            of houses, offices, apartments, schools, colleges, factories, shops,
            showrooms, and buildings.
          </p>
        </article>

        {/* image */}
        <article className="img-container">
          <img
            src={infoImg}
            alt="Painting, Renovation & Construction Services"
            loading="lazy"
          />
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-center {
    display: grid;
    align-items: center;
    gap: 3rem;

    @media (min-width: 792px) {
      grid-template-columns: 1fr 1fr;

      .img-container {
        display: block;
      }
    }
  }

  .info-container {
    h2 {
      margin-bottom: 2rem;
    }
    p {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .img-container {
    display: none;

    img {
      max-height: 28rem;
      border-radius: var(--borderRadius);
    }
  }
`;

export default Info;
