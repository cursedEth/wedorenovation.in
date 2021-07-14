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
          <Link to="/services/renovation" className="link" title="Renovation">
            <BiChevronRight />
            renovation
          </Link>
        </li>

        <li>
          <Link to="/services/painting" className="link" title="Painting">
            <BiChevronRight />
            painting
          </Link>
        </li>

        <li>
          <Link
            to="/services/construction"
            className="link"
            title="Construction"
          >
            <BiChevronRight />
            construction
          </Link>
        </li>

        <li>
          <Link
            to="/services/decoration"
            className="link"
            title="Interior & Exterior Decoration"
          >
            <BiChevronRight />
            interior & exterior decoration
          </Link>
        </li>

        <li>
          <Link
            to="/services/remodeling-designing"
            className="link"
            title="Remodeling & Designing"
          >
            <BiChevronRight />
            remodeling & designing
          </Link>
        </li>

        <li>
          <Link
            to="/services/aluminium-glass-metal"
            className="link"
            title="Aluminum, Glass & Metal Works"
          >
            <BiChevronRight />
            aluminium, glass & metal
          </Link>
        </li>

        <li>
          <Link to="/services/wood-work" className="link" title="Wood Works">
            <BiChevronRight />
            wood work
          </Link>
        </li>

        <li>
          <Link to="/services/plumbing" className="link" title="Plumbing">
            <BiChevronRight />
            plumbing
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
