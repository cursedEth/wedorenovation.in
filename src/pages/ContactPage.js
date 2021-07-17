import React from 'react';
import styled from 'styled-components';
import PageTitle from './_PageTitle';
import { Title } from '../components';

const ContactPage = () => {
  return (
    <Wrapper>
      <PageTitle title="get in touch" subtitle="contact" />
      <section className="section">
        <Title title="contact us" />
        <div className="section-center"></div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default ContactPage;
