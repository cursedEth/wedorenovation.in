import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { aboutLinks as links } from '../utils/constants';

const AboutLinks = () => {
  return (
    <Wrapper>
      <h5>about</h5>

      <ul className="links">
        {/* router links */}
        <li>
          <Link to="/about" className="link" title="About Us">
            {/* <BiChevronRight /> */}
            who we are
          </Link>
        </li>

        <li>
          <Link to="/faqs" className="link" title="Frequently Asked Questions">
            {/* <BiChevronRight /> */}
            FAQs
          </Link>
        </li>

        {/* rest anchor links */}
        {links.map(({ id, url, title, text }) => {
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

export default AboutLinks;
