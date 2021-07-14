import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';

const ServicesLinks = () => {
  return (
    <Wrapper>
      <h4>services</h4>

      <ul className="links">
        <li>
          <Link to="/services/renovation" className="link">
            <BiChevronRight />
            renovation
          </Link>
        </li>

        <li>
          <Link to="/services/painting" className="link">
            <BiChevronRight />
            painting
          </Link>
        </li>

        <li>
          <Link to="/services/construction" className="link">
            <BiChevronRight />
            construction
          </Link>
        </li>

        <li>
          <Link to="/services/decoration" className="link">
            <BiChevronRight />
            interior & exterior decoration
          </Link>
        </li>

        <li>
          <Link to="/services/remodeling-designing" className="link">
            <BiChevronRight />
            remodeling & designing
          </Link>
        </li>

        <li>
          <Link to="/services/aluminium-glass-metal" className="link">
            <BiChevronRight />
            aluminium, glass & metal works
          </Link>
        </li>

        <li>
          <Link to="/services/wood-work" className="link">
            <BiChevronRight />
            wood work
          </Link>
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

export default ServicesLinks;
