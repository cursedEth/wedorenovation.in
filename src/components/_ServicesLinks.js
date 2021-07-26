import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { servicesLinks as links } from '../utils/constants';

// * COMPONENTS
const ServicesLinks = () => {
  return (
    <Wrapper>
      {links.map(({ id, url, title, text }) => {
        return (
          <li key={id}>
            <Link to={url} className="link" title={title}>
              {text}
            </Link>
          </li>
        );
      })}
    </Wrapper>
  );
};

// * STYLES
const Wrapper = styled.ul`
  .link {
    color: var(--grey-4);
    text-transform: capitalize;
    &:hover {
      color: var(--white);
    }
  }
`;

export default ServicesLinks;
