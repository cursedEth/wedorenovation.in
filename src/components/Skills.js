import React from 'react';
import styled from 'styled-components';
import { skills } from '../utils/data';

// *COMPONENTS
const Skills = () => {
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

        {/* skills */}
        <article className="icon-container">
          {skills.map((skill) => (
            <SingleSkill key={skill.id} {...skill} />
          ))}
        </article>
      </div>
    </Wrapper>
  );
};

const SingleSkill = ({ icon, text }) => {
  return (
    <div className="icon">
      {icon} <h4>{text}</h4>
    </div>
  );
};

// *STYLES
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
    gap: 2rem;

    h4 {
      line-height: 1.25;
    }

    svg {
      font-size: 2rem;
    }
  }
`;

export default Skills;
