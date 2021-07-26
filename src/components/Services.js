import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './_Title';
import { services } from '../utils/data';

const Services = () => {
  // states
  const [count, setCount] = useState(0);

  // destructuring single service
  const { name, title, desc, image } = services[count];

  // jsx
  return (
    <Wrapper className="section">
      <Title
        title="the services"
        description="We provide a large variety of services. Everything from construction, repair, waterproofing to painting, decoration, wood works, etc."
      />

      <div className="section-center">
        {/* service buttons */}
        <div className="btn-container">
          {services.map((service, index) => {
            return (
              <button
                key={index}
                onClick={() => setCount(index)}
                className={`service-btn ${index === count && 'active-btn'}`}
              >
                <span>{service.icon}</span>
                <h5> {service.name}</h5>
              </button>
            );
          })}
        </div>

        {/* service info */}
        <article className="service">
          <div className="img-container">
            <img src={image[0]} alt={name} />
          </div>

          <div className="info-container">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-center {
    text-align: center;
  }

  /* btns */
  .btn-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    @media (min-width: 792px) {
      grid-template-columns: repeat(6, 1fr);

      .service-btn:nth-child(1),
      .service-btn:nth-child(2),
      .service-btn:nth-child(3),
      .service-btn:nth-child(4),
      .service-btn:nth-child(5),
      .service-btn:nth-child(6) {
        border: 1px solid var(--grey-4);
        border-right: none;
      }
      .service-btn:nth-child(6) {
        border: 1px solid var(--grey-4);
      }

      .service-btn {
        padding: 2rem 1rem;
        border: 1px solid;
        svg {
          font-size: 2.5rem;
        }
        h5 {
          font-size: 0.875rem;
        }
      }
    }
  }

  /* btn borders */
  .service-btn:nth-child(1),
  .service-btn:nth-child(2),
  .service-btn:nth-child(4),
  .service-btn:nth-child(5) {
    border-right: none;
  }
  .service-btn:nth-child(4),
  .service-btn:nth-child(5),
  .service-btn:nth-child(6) {
    border-top: none;
  }

  .service-btn {
    cursor: pointer;
    background: transparent;
    border: 1px solid var(--grey-4);
    display: grid;
    place-items: center;
    padding: 1rem 0.5rem;
    transition: var(--transition);

    &:hover {
      background: var(--grey-2);
    }

    svg {
      font-size: 1.75rem;
    }

    h5 {
      text-transform: uppercase;
      margin-top: 0.5rem;
      margin-bottom: 0;
      font-size: 0.75rem;
      letter-spacing: 0;

      @media (max-width: 325px) {
        display: none;
      }
    }
  }

  .service-btn.active-btn {
    background: var(--white);
    position: relative;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 4px;
      background: var(--clr-primary);
      bottom: 0;
    }

    svg {
      color: var(--clr-primary);
    }
  }

  /* service */
  .service {
    margin-top: 3rem;
    display: grid;
    align-items: center;
    gap: 4rem;

    .img-container {
      display: none;
      box-shadow: var(--shadow-3);
      img {
        height: 25rem;
        border-radius: var(--borderRadius);
      }
    }
    .info-container {
      margin: 0 auto;
      p {
        margin-bottom: 0;
      }
    }

    @media (min-width: 792px) {
      grid-template-columns: 1fr 1fr;

      .img-container {
        display: block;
      }
      .info-container {
        text-align: left;
      }
    }
  }
`;

export default Services;
