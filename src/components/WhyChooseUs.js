import React from 'react';
import {
  FaRegClock,
  FaRegThumbsUp,
  FaUsers,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { AiOutlineSafetyCertificate, AiOutlineBarChart } from 'react-icons/ai';
import styled from 'styled-components';

const WhyChooseUs = () => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        {/* info */}
        <article className="info-container">
          <h2>
            why choose <strong>Home™ Renovation</strong>?
          </h2>
          <p>No Compromise Best Quality works since 1960</p>
        </article>

        {/* icons */}
        <article className="icon-container">
          <div className="icon">
            <FaRegClock />
            <h4>always on time</h4>
          </div>

          <div className="icon">
            <FaMapMarkerAlt />
            <h4>locally owned</h4>
          </div>

          <div className="icon">
            <AiOutlineBarChart />
            <h4>top quality</h4>
          </div>

          <div className="icon">
            <FaRegThumbsUp />
            <h4>trusted services</h4>
          </div>

          <div className="icon">
            <FaUsers />
            <h4>experienced team</h4>
          </div>

          <div className="icon">
            <AiOutlineSafetyCertificate />
            <h4>certified team</h4>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-gradient);
  color: var(--white);

  .section-center {
    display: grid;
    place-items: center;
    gap: 3rem;

    @media (min-width: 792px) {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }

  .info-container {
    align-self: center;
  }

  .icon-container {
    text-align: center;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 3rem;

    h4 {
      line-height: 1.25;
    }

    svg {
      font-size: 2rem;
    }
  }
`;

export default WhyChooseUs;
