import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';

const AboutLinks = () => {
  return (
    <Wrapper>
      <h4>about</h4>

      <ul className="links">
        <li>
          <Link to="/about" className="link" title="About Us">
            <BiChevronRight />
            who we are
          </Link>
        </li>

        <li>
          <Link to="/faqs" className="link" title="Frequently Asked Questions">
            <BiChevronRight />
            FAQs
          </Link>
        </li>

        <li>
          <a
            href="https://g.page/r/CS0QIFzNBUnzEA0"
            target="_blank"
            rel="noreferrer"
            className="link"
            title="Visit Google-Business Page"
          >
            <BiChevronRight />
            g-business page
          </a>
        </li>

        <li>
          <a
            href="https://www.google.com/maps/contrib/102090102228901650856/reviews/@28.5912785,77.3625404,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1"
            target="_blank"
            rel="noreferrer"
            className="link"
            title="Reviews on G-Business"
          >
            <BiChevronRight />
            Reviews (Google)
          </a>
        </li>
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
