import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()} <span>HomeMakers</span>.
      </h5>
      <h5>&nbsp;all rights reserved</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 4rem;
  text-align: center;
  background: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 0.25rem;

  span {
    color: var(--clr-primary);
  }

  h5 {
    color: var(--white);
    margin-bottom: 0;
  }
`;

export default Footer;
