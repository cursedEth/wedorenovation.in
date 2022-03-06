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
  {
    id: 3,
    url: 'https://www.google.com/maps/place/We+do+Renovation+Construction+%26+painting+contractor/@28.5832066,77.3679235,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNqxQUtrZJq6szWHlce8pH7npvD41i7_AOND3KG!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNqxQUtrZJq6szWHlce8pH7npvD41i7_AOND3KG%3Dw530-h298-k-no!7i3643!8i2048!4m7!3m6!1s0x390ce5df460ceac9:0x2614a07af046a060!8m2!3d28.5832066!4d77.3679235!14m1!1BCgIgAQ',
    title: 'Work Images (Google)',
    text: 'Photos (google)',
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
