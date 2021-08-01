import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import heroImg from '../assets/hero-bcg.jpeg';

const PageTitle = ({ title, subtitle }) => {
  return (
    <TitleConatiner className="section">
      <div className="section-center">
        <h1>{title}</h1>
        <h5>
          <Link to="/" title="Back to Home">
            home
          </Link>{' '}
          / {subtitle}
        </h5>
      </div>
    </TitleConatiner>
  );
};

const TitleConatiner = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)),
    url(${heroImg}) center/cover no-repeat;
  color: var(--white);

  .section-center {
    text-align: center;

    h1 {
      text-shadow: 1px 2px 2px var(--clr-primary);
    }

    h5 {
      color: var(--clr-primary);
      text-shadow: 2px 2px 2px var(--clr-secondary);
      text-transform: uppercase;
      margin-bottom: 0;
    }

    a {
      color: var(--grey-4);
      transition: var(--transition);

      &:hover {
        color: var(--white);
      }
    }
  }
`;

export default PageTitle;
