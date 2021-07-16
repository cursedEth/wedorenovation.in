import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { servicesLinks as links } from '../utils/constants';

const ServicesLinks = () => {
  return (
    <Wrapper>
      <h5>services</h5>

      <ul className="links">
        {links.map(({ id, url, title, text }) => {
          return (
            <li key={id}>
              <Link to={url} className="link" title={title}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .link {
    color: var(--grey-4);
    text-transform: capitalize;
    svg {
      vertical-align: text-bottom;
      color: var(--clr-primary);
    }
    &:hover {
      color: var(--white);
    }
  }
`;

export default ServicesLinks;
