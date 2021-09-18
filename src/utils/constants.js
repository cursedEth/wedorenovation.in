import React from 'react';
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaRegEnvelope,
} from 'react-icons/fa';
import { services } from './data';

// about links
export const aboutLinks = [
  {
    id: 1,
    url: 'https://g.page/r/CS0QIFzNBUnzEA0',
    title: 'Visit Google-Business Page',
    text: 'g-business page',
  },
  {
    id: 2,
    url: 'https://www.google.com/search?hl=en-AU&gl=au&q=HOME+:+House+Painting,+Construction,+Renovation+and+Remodeling+Contractors+In+Noida,+C-82,Shop+-1,Vikrant+Chauhan+Market,+Sector+53,+Noida&ludocid=17530549404088406061&#lrd=0x390ce5779518134b:0xf34905cd5c20102d,1,,,&wptab=s:H4sIAAAAAAAAAONgVuLVT9c3NMxJrygrqSpIe8RowS3w8sc9YSn9SWtOXmPU5OIKzsgvd80rySypFJLmYoOyBKX4uVB18uxi4vfJT07MCcjPDEoty0wtL17E2sqYkZ-bqlCUmpdflliSmZ-nU5CYCTQhL10hMS9FITk_r7ikqDQZJKNQnFpUlpmcWmylAFajo1Cen5-io1CSmZNaDFGdWZaZAxQtygZpLClKTC7JL1LIzFPIy89MSdRJSc3JyFTISy7SUUgvLSpNL0rMBVoMdggAfNG14OcAAAA',
    title: 'Reviews on Google Business',
    text: 'reviews (google)',
  },
];

// services links
export const servicesLinks = services.map((service) => {
  const { id, url, name, title } = service;
  return {
    id,
    url,
    name,
    title,
  };
});

// contact links
export const contactLinks = [
  {
    id: 1,
    url: 'https://goo.gl/maps/GFUQ2qLoFstCjv849',
    title: 'Location',
    icon: <FaMapMarkerAlt />,
    text: 'Q-95, KP 2 Jaypee Wish Town, Sector 131, Noida, UP',
  },
  {
    id: 2,
    url: 'tel:8800454335',
    title: 'Phone',
    icon: <FaPhoneAlt />,
    text: '(+91) 8800454335',
  },
  {
    id: 3,
    url: 'tel:7982539093',
    title: 'Mobile',
    icon: <FaMobileAlt />,
    text: '(+91) 7982539093',
  },
  {
    id: 4,
    url: 'mailto:wedohomerenovation@gmail.com',
    title: 'Office Email',
    icon: <FaEnvelope />,
    text: 'wedohomerenovation@gmail.com',
  },
  {
    id: 5,
    url: 'mailto:sameerathomerenovation@gmail.com',
    title: 'Personal Email',
    icon: <FaRegEnvelope />,
    text: 'sameerathomerenovation@gmail.com',
  },
];
