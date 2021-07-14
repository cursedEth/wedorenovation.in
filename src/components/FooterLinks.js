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
          <p>Spreading smiles since 1969</p>
        </article>

        <article className="links-container">
          <AboutLinks />
          <ServicesLinks />
          <ContactLinks />
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

    @media (min-width: 992px) {
      grid-template-columns: auto 1fr;
      gap: 3rem;
    }

    @media (min-width: 1170px) {
      gap: 6rem;
    }
  }

  .info-container .logo {
    margin-bottom: 1rem;
  }

  .links-container {
    display: grid;
    gap: 1.5rem;

    @media (min-width: 656px) {
      grid-template-columns: auto auto auto;
    }

    @media (min-width: 1170px) {
      gap: 3rem;
    }
  }
`;

export default FooterLinks;
