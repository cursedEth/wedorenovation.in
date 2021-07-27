import React from 'react';
import styled from 'styled-components';
import PageTitle from './_PageTitle';
import { Title } from '../components';
import { teamMembers } from '../utils/data';
import { FaComments, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// *COMPONENTS

const AboutPage = () => {
  return (
    <Wrapper className="page-100">
      <PageTitle title="who we are" subtitle="about us" />

      {/* WHO WE ARE */}
      <section className="section section-center">
        <p>
          Greetings from Home™ Renovation. We are the best Painting, Renovation
          and Construction service providers for more than 61 years as this
          being our family business since 1960. We are a group of contractors
          providing you the best quality of work with no compromises.
        </p>
        <br />
        <p>
          We providing services like : Whitewash and Wall Painting/designs,
          P.O.P work, Mason & civil work water and heat proofing, Glass and
          Aluminium work, Wood Work & polishing, Metal Fabrication and welding
          work, Tiles & marble Flooring and polishing, Bathroom & kitchen
          Remodeling Interior decoration & Renovation, Fibre sheet and sunshed
          work, Plumbing, Electrical wiring etc To all Houses, Offices,
          Apartments, schools, colleges, factories, shops, showroom & Buildings
          etc.
        </p>
        <br />
        <p>
          Book your free site visit now or get a free no obligation quote{' '}
          <Link to="/contact">here</Link>.
        </p>
      </section>

      {/* OUR TEAM */}
      <section className="section team">
        <Title
          title="Our Team"
          description="The work that we do requires a lot of manpower. Here are a few key members of our huge team that take care of everthing and make sure you get the best service possible."
        />

        <div className="section-center">
          {teamMembers.map((member) => (
            <SingleTeamMember key={member.id} {...member} />
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

const SingleTeamMember = ({ avatar, name, title, mail, social }) => {
  return (
    <article className="team-member">
      <div className="img-container">
        <img src={avatar} alt={name} loading="lazy" />
      </div>
      <h3>{name}</h3>
      <h5>{title}</h5>
      <div className="socials">
        <a href={`mailto:${mail}`} title="Email">
          <FaEnvelope />
        </a>
        <a href={social} title="Contact via Text">
          <FaComments />
        </a>
      </div>
    </article>
  );
};

// * STYLES
const Wrapper = styled.main`
  .section-center p {
    margin: 0 auto;
    text-align: center;

    a {
      color: var(--clr-primary);
      font-weight: bold;
      text-decoration: underline;
    }
  }

  .team {
    background: var(--grey-7);

    .title {
      color: var(--backgroundColor);
    }
    .title-underline {
      background: var(--backgroundColor);
    }

    .section-center {
      display: grid;
      gap: 4rem;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    .team-member {
      background: var(--white);
      text-align: center;
      border-radius: 0.25rem;
      box-shadow: var(--shadow-1);
      transition: var(--transition);

      &:hover {
        box-shadow: var(--shadow-3);
      }

      h3 {
        margin: 1rem 0;
        font-weight: bold;
      }

      h5 {
        text-transform: uppercase;
        font-style: italic;
        margin-bottom: 0;
      }

      .socials {
        display: flex;
        justify-content: space-evenly;
        padding: 1rem 0.5rem;

        svg {
          transition: var(--transition);
          color: var(--black);
          font-size: 2rem;
          &:hover {
            color: var(--clr-primary-light);
          }
        }
      }

      img {
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        aspect-ratio: 4/3;
      }
    }
  }
`;

export default AboutPage;
