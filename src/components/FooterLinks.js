import React from 'react';
import styled from 'styled-components';
import AboutLinks from './_AboutLinks';
import ServicesLinks from './_ServicesLinks';
import ContactLinks from './_ContactLinks';
import Logo from './_Logo';

const FooterLinks = () => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <article className="info-container">
          <Logo />
          <p>No Compromise Best Quality works since 1960</p>
        </article>

        <article className="links-container">
          <div>
            <h5>about</h5>
            <AboutLinks />
          </div>
          <div>
            <h5>services</h5>
            <ServicesLinks />
          </div>
          <div>
            <h5>contact</h5>
            <ContactLinks />
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--black);
  color: var(--grey-1);

  .section-center {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: left;

    @media (min-width: 992px) {
      grid-template-columns: auto 1fr;
      gap: 3rem;
    }

    @media (min-width: 1170px) {
      gap: 6rem;
    }
  }

  .info-container {
    p {
      margin-top: 1rem;
      max-width: 18rem;
      color: var(--grey-4);
    }
  }

  .links-container {
    display: grid;
    gap: 1.5rem;

    @media (min-width: 656px) {
      grid-template-columns: auto auto auto;
    }

    @media (min-width: 1170px) {
      gap: 4rem;
    }

    h5 {
      text-transform: uppercase;
    }
  }
`;

export default FooterLinks;
