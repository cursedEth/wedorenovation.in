import React from 'react';
import styled from 'styled-components';
import heroImg from '../assets/hero-img.webp';
import { useGlobalContext } from '../context';

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
        <div className="section-center">Hero</div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)),
    url(${heroImg}) center/cover no-repeat;
`;

export default Hero;
