import React from 'react';
import styled from 'styled-components';
import Title from './_Title';
import ContactMap from './_ContactMap';
import { contactLinks as links } from '../utils/constants';

const Contact = () => {
  return (
    <Wrapper className="section">
      <Title title={'contact us'} />
      <div className="section-center">
        {/* info */}
        <article className="contact-info">
          {' '}
          <p>
            Please use the details below to book a free site visit now. We get
            most of our business via calls but alternatively, you can also send
            us an email and we'll get back to you within 24 hours.
          </p>
          <ul className="contact-links">
            {links.map(({ id, icon, title, text }) => {
              return (
                <li key={id}>
                  <h5>
                    <span>
                      {icon} {title}:
                    </span>{' '}
                    {text}
                  </h5>
                </li>
              );
            })}
          </ul>
        </article>

        {/* map */}
        <ContactMap />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-center {
    display: grid;
    place-items: center;
    gap: 3rem;

    @media (min-width: 992px) {
      margin-top: 0;
      grid-template-columns: 1fr 1fr;
    }
  }

  .contact-links {
    li {
      border: 1px solid;
      border-bottom: none;
      padding: 0.5rem 1rem;
      text-align: left;

      &:last-child {
        border: 1px solid;
      }

      svg {
        vertical-align: middle;
      }
    }
    h5 {
      text-transform: unset;
      margin-bottom: 0;

      @media (max-width: 325px) {
        font-size: 0.65rem;
      }

      span {
        font-weight: bold;
      }
    }
  }
`;

export default Contact;
