import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContactBtn = () => {
  return (
    <Wrapper>
      <Link to="/contact" className="btn contact-btn" title="Contact Details">
        Contact
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .contact-btn {
    background: var(--clr-secondary);
    border: 2px solid var(--clr-primary);
    padding: 0.4rem 1.5rem;
    margin: 0 auto;

    &:hover {
      background: var(--clr-gradient);
    }
  }
`;

export default ContactBtn;
