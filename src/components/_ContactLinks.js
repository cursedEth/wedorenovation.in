import React from 'react';
import styled from 'styled-components';
import { contactLinks as links } from '../utils/constants';

const ContactLinks = () => {
  return (
    <Wrapper>
      <h4>Contact</h4>

      <ul className="links">
        {links.map(({ id, url, title, icon, text }) => {
          return (
            <li key={id}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="link"
                title={title}
              >
                {icon}&nbsp; {text}
              </a>
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
    svg {
      vertical-align: text-bottom;
      color: var(--clr-primary);
    }
    &:hover {
      color: var(--white);
    }
  }
`;

export default ContactLinks;
