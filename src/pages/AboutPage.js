import React from 'react';
import styled from 'styled-components';
import PageTitle from './_PageTitle';
import { Title } from '../components';
import { teamMembers } from '../utils/data';

const AboutPage = () => {
  return (
    <Wrapper>
      <PageTitle title="who we are" subtitle="about us" />
      {/* WHO WE ARE */}
      <section className="section section-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae illo
          ducimus ut! Eveniet, mollitia dignissimos ipsum ducimus expedita nihil
          quas et, cum eum distinctio ex sequi error nisi est culpa maiores
          reprehenderit. Quibusdam rerum non sapiente incidunt error autem quia
          iste, ab dolore doloribus est veritatis totam nobis sunt sint placeat
          voluptates voluptatibus debitis vel quo minima officiis maxime.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam et
          culpa recusandae est, iusto cupiditate neque reiciendis praesentium
          tenetur? Rerum eligendi quibusdam nihil. Et temporibus aspernatur,
          maiores deserunt voluptas nemo voluptatem dolores voluptatum fugiat
          repudiandae voluptate commodi aliquid beatae.
        </p>
      </section>

      {/* OUT TEAM */}
      <section className="section team">
        <Title
          title="Our Team"
          description="The work that we do requires a lot of manpower. Here are a few key members of our huge team that take care of everthing and make sure you get the best service possible."
        />
        <div className="section-center">
          {teamMembers.map(({ id, avatar, name, title }) => {
            return (
              <article className="team-member" key={id}>
                <div className="img-container">
                  <img src={avatar} alt={name} />
                </div>
                <h3>{name}</h3>
                <h5>{title}</h5>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .section-center p {
    margin: 0 auto;
    text-align: center;
  }

  .team {
    background: var(--clr-primary-light);

    .title {
      color: var(--backgroundColor);
    }
    .title-underline {
      background: var(--backgroundColor);
    }

    .section-center {
      display: grid;
      gap: 4rem;
      grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    }

    .team-member {
      background: var(--white);
      text-align: center;
      border-radius: 1rem;
      box-shadow: var(--shadow-3);
      transition: var(--transition);

      &:hover {
        box-shadow: var(--shadow-4);
      }

      h3 {
        margin: 1rem 0;
        font-weight: bold;
      }

      h5 {
        text-transform: uppercase;
        font-style: italic;
      }

      img {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
      }
    }
  }
`;

export default AboutPage;
