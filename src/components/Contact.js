import React from 'react';
import styled from 'styled-components';
import Title from './_Title';
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
        <article className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.8190047479345!2d77.36412009807005!3d28.59149523425598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5779518134b%3A0xf34905cd5c20102d!2sHOME%20%3A%20House%20Painting%2C%20Construction%2C%20Renovation%20and%20Remodeling%20Contractors%20In%20Noida!5e0!3m2!1sen!2sin!4v1626456803726!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            title="Our Location Google Maps"
          ></iframe>
        </article>
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

      span {
        font-weight: bold;
      }
    }
  }

  .contact-map {
    width: 100%;
    text-align: center;
    overflow: hidden;

    iframe {
      border: none;
      border-radius: var(--borderRadius);
      box-shadow: var(--shadow-1);
      min-height: 21rem;
      width: 100%;
      overflow: hidden;
    }
  }
`;

export default Contact;
