import React from 'react';
import styled from 'styled-components';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaMobileAlt,
  FaEnvelope,
  FaRegEnvelope,
} from 'react-icons/fa';

const ContactLinks = () => {
  return (
    <Wrapper>
      <h4>Contact</h4>

      <ul className="links">
        <li>
          <a
            href="https://g.page/Wedohomepaintingandrenovation?share"
            target="_blank"
            rel="noreferrer"
            className="link"
            title="Location on G-Map"
          >
            <FaMapMarkerAlt />
            &nbsp; C-82, Shop -1, Vikrant Chauhan Market, Sector 53, Noida,
            Uttar Pradesh 201301
          </a>
        </li>

        <li>
          <a
            href="tel:8800805388"
            target="_blank"
            rel="noreferrer"
            className="link"
            title="Call Office"
          >
            <FaPhoneAlt />
            &nbsp; (+91) 8800805388
          </a>
        </li>

        <li>
          <a
            href="tel:7982539093"
            target="_blank"
            rel="noreferrer"
            className="link"
            title="Call Personal"
          >
            <FaMobileAlt />
            &nbsp; (+91) 7982539093
          </a>
        </li>

        <li>
          <a
            href="mailto:sameerathomerenovation@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="link"
            title="Email Office"
          >
            <FaEnvelope />
            &nbsp; wedohomerenovation@gmail.com
          </a>
        </li>

        <li>
          <a
            href="mailto:sameerathomerenovation@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="link"
            title="Email Personal"
          >
            <FaRegEnvelope />
            &nbsp; sameerathomerenovation@gmail.com
          </a>
        </li>
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
