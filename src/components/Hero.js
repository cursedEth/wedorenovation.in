import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { FaPhoneAlt } from 'react-icons/fa';

const Hero = () => {
  // data from context
  const { isAlertOpen } = useGlobalContext();

  // jsx
  return (
    <Wrapper
      style={{
        minHeight: `${
          isAlertOpen ? 'calc(100vh - 5rem - 48px)' : 'calc(100vh - 5rem)'
        }`,
      }}
    >
      <section className="section">
        <div className="section-center">
          <h1>
            providing you the <br /> <span>best quality of work</span>{' '}
          </h1>
          <h4>A group of contractors running a family business since 1960</h4>
          <a
            href="tel:8800454335"
            className="btn call-btn"
            title="Get an estimate and site visit for free!"
          >
            get a quote! <FaPhoneAlt />
          </a>
          <a
            href="mailto:wedohomerenovation@gmail.com?subject=An estimate required for the work&body=Hello Sameer! I wanted to discuss a few things about my renovation work. Please call us at the number <YOUR PHONE NUMBER>."
            className="btn mail-btn"
            title="Leave us your number & we'll get back to you within 24 hours."
          >
            get a quote! <FaPhoneAlt />
          </a>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(
      to bottom left,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.9)
    ),
    url('https://res.cloudinary.com/dds18bzdy/image/upload/v1628681096/sameer-renovation-website/local-assests/hero-bcg_vnlbrr.webp')
      center/cover fixed no-repeat;
  color: var(--white);
  display: grid;
  place-items: center;
  padding-bottom: 6rem;

  h1 {
    font-size: 4rem;
    line-height: 1.2;

    @media (max-width: 615px) {
      font-size: 3rem;
    }
    @media (max-width: 481px) {
      font-size: 2.75rem;
    }
    @media (max-width: 427px) {
      font-size: 2.25rem;
    }

    span {
      font-weight: bold;
    }
  }

  h4 {
    margin: 2rem 0;
    font-size: 1.25rem;
    max-width: 30rem;
    line-height: 1.25;

    @media (max-width: 615px) {
      font-size: 1rem;
    }
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    outline: 3px solid var(--clr-primary);
    outline-offset: 5px;
    background: var(--clr-primary);
    animation: bounce 4s linear infinite;

    @media (max-width: 481px) {
      padding: 0.5rem 1rem;
    }

    svg {
      vertical-align: middle;
    }

    &:hover {
      background: transparent;
      outline-color: var(--white);
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  /* changing btns for screen  */
  .mail-btn {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .mail-btn {
      display: inline-block;
    }
    .call-btn {
      display: none;
    }
  }
`;

export default Hero;
