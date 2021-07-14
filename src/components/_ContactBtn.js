import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContactBtn = () => {
  return (
    <Wrapper>
      <Link to="/contact" className="btn contact-btn">
        Contact
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .contact-btn {
    background: transparent;
    border: 2px solid var(--clr-primary);
    padding: 0.4rem 1.5rem;
    &:hover {
      background: var(--clr-primary);
    }
  }
`;

export default ContactBtn;
