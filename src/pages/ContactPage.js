import React from 'react';
import styled from 'styled-components';
import PageTitle from './_PageTitle';
import { Title, ContactMap } from '../components';
import { contactLinks as links } from '../utils/constants';

const ContactPage = () => {
  return (
    <Wrapper className="page-100">
      <PageTitle title="get in touch" subtitle="contact" />

      <section className="section-center">
        <div className="info">
          <Title title="contact us" />

          {links.map(({ id, url, icon, title, text }) => {
            return (
              <div className="info-item" key={id}>
                <h5>{title}</h5>
                <h3>
                  {icon}{' '}
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                    title={title}
                  >
                    {text}
                  </a>
                </h3>
                <hr />
              </div>
            );
          })}
        </div>
      </section>

      {/* map */}
      <ContactMap />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .map {
    min-height: 31.5rem;
  }

  .info {
    margin: 4rem 0;
    padding: 2rem 1rem;
    text-align: center;
    background: var(--white);
    box-shadow: var(--shadow-1);
  }

  hr {
    margin: 2rem auto;
    width: 50%;
    border: none;
    border-bottom: 1px solid var(--grey-5);
  }

  .info-item:last-child hr:last-of-type {
    border-bottom: none;
  }

  h3 {
    text-transform: unset;
    letter-spacing: 0;
    transition: var(--transition);
    a {
      color: var(--textColor);
    }
    svg {
      vertical-align: middle;
    }
    &:hover {
      transform: scale(1.05);
    }
    @media (max-width: 481px) {
      font-size: 1.2rem;
    }
    @media (max-width: 389px) {
      font-size: 1rem;
    }
  }

  h5 {
    text-transform: uppercase;
  }
`;

export default ContactPage;
