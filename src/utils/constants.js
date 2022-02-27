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
    url: 'https://g.page/r/CWCgRvB6oBQmEA0',
    title: 'Visit Google-Business Page',
    text: 'g-business page',
  },
  {
    id: 2,
    url: 'https://www.google.com/search?q=wedorenovation&rlz=1C1ONGR_enIN993IN993&oq=wedorenovation&aqs=chrome.0.69i59j35i39j69i60l4.2781j0j7&sourceid=chrome&ie=UTF-8#lrd=0x390ce5df460ceac9:0x2614a07af046a060,1,,,',
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
    url: 'https://goo.gl/maps/9NtqtSGMUXTfZjhy7',
    title: 'Location',
    icon: <FaMapMarkerAlt />,
    text: '5th floor ,Dharam sweets, Gali Number 5, Hoshiyarpur, Sector 51, Noida, Uttar Pradesh 201301',
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
    url: 'tel:8800805388',
    title: 'Mobile',
    icon: <FaMobileAlt />,
    text: '(+91) 8800805388',
  },
  {
    id: 4,
    url: 'mailto:wedohomerenovation@gmail.com?subject=An estimate required for the work&body=Hello Sameer! I wanted to discuss a few things about my renovation work. Please call us at the number <YOUR PHONE NUMBER>.',
    title: 'Office Email',
    icon: <FaEnvelope />,
    text: 'wedohomerenovation@gmail.com',
  },
  {
    id: 5,
    url: 'mailto:sameerathomerenovation@gmail.com?subject=An estimate required for the work&body=Hello Sameer! I wanted to discuss a few things about my renovation work. Please call us at the number <YOUR PHONE NUMBER>.',
    title: 'Personal Email',
    icon: <FaRegEnvelope />,
    text: 'sameerathomerenovation@gmail.com',
  },
];
