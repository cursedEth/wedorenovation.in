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
  background: var(--clr-gradient);
  display: inline-block;
  border-radius: var(--borderRadius);

  .contact-btn {
    background: var(--clr-gradient);
    border: 2px solid var(--clr-primary);
    padding: 0.4rem 1.5rem;
    margin: 0 auto;

    &:hover {
      background: var(--clr-secondary);
    }
  }
`;

export default ContactBtn;
