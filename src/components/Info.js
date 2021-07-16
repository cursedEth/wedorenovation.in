import React from 'react';
import styled from 'styled-components';
import infoImg from '../assets/info-img.webp';

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
            services like <em>decoration</em>, <em>plumbing</em>,{' '}
            <em>glass work</em>, <em>wood work</em>, etc. to all kinds of
            houses, offices, apartments, schools, colleges, factories, shops,
            showrooms, and buildings.
          </p>
        </article>

        {/* image */}
        <article className="img-container">
          <img
            src={infoImg}
            alt="Painting, Renovation & Construction Services"
          />
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-center {
    display: grid;
    place-items: center;
    gap: 1rem;

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
    span {
      color: var(--clr-primary);
    }
    p {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .img-container {
    display: none;
    box-shadow: var(--shadow-3);

    img {
      max-height: 30rem;
      border-radius: var(--borderRadius);
    }
  }
`;

export default Info;
