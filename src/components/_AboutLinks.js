import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//--- import { aboutLinks as links } from '../utils/constants';

const AboutLinks = () => {
  return (
    <Wrapper>
      {/* router links */}
      <li>
        <Link to="/about" className="link" title="About Us">
          who we are
        </Link>
      </li>

      <li>
        <Link to="/faqs" className="link" title="Frequently Asked Questions">
          FAQs
        </Link>
      </li>

      <li>
        <Link to="/reviews" className="link" title="Reviews">
          Reviews
        </Link>
      </li>

      {/* rest anchor links */}
      {/*--- {links.map(({ id, url, title, text }) => {
        return (
          <li key={id}>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="link"
              title={title}
            >
              {text}
            </a>
          </li>
        );
      })} */}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  .link {
    color: var(--grey-4);
    text-transform: capitalize;
    &:hover {
      color: var(--white);
    }
  }
`;

export default AboutLinks;
