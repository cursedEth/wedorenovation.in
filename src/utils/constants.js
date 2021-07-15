import React from 'react';
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaRegEnvelope,
} from 'react-icons/fa';

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
    url: 'https://www.google.com/maps/contrib/102090102228901650856/reviews/@28.5912785,77.3625404,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1',
    title: 'Reviews on G-Business',
    text: 'reviews (google)',
  },
];

// services links
export const servicesLinks = [
  {
    id: 1,
    text: 'renovation',
    url: '/services/renovation',
    title: 'Renovation',
  },
  {
    id: 2,
    text: 'painting',
    url: '/services/painting',
    title: 'Painting',
  },
  {
    id: 3,
    text: 'construction',
    url: '/services/construction',
    title: 'construction',
  },
  {
    id: 4,
    text: 'decoration',
    url: '/services/decoration',
    title: 'Interior & Exterior Decoration',
  },
  {
    id: 5,
    text: 'remodeling & designing',
    url: '/services/remodeling-designing',
    title: 'Remodeling & Designing',
  },
  {
    id: 6,
    text: 'aluminium, glass & metal',
    url: '/services/aluminium-glass-metal',
    title: 'Aluminum, Glass & Metal Works',
  },
  {
    id: 7,
    text: 'wood work',
    url: '/services/wood-work',
    title: 'Wood Works',
  },
  {
    id: 8,
    text: 'plumbing',
    url: '/services/plumbing',
    title: 'plumbing',
  },
];

// contact links
export const contactLinks = [
  {
    id: 1,
    url: 'https://g.page/Wedohomepaintingandrenovation?share',
    title: 'Location on G-Map',
    icon: <FaMapMarkerAlt />,
    text: 'C-82, Shop -1, Vikrant Chauhan Market, Sector 53, Noida',
  },
  {
    id: 2,
    url: 'tel:8800805388',
    title: 'Call Office',
    icon: <FaPhoneAlt />,
    text: '(+91) 8800805388',
  },
  {
    id: 3,
    url: 'tel:7982539093',
    title: 'Call Personal',
    icon: <FaMobileAlt />,
    text: '(+91) 7982539093',
  },
  {
    id: 4,
    url: 'mailto:wedohomerenovation@gmail.com',
    title: 'Email Office',
    icon: <FaEnvelope />,
    text: 'wedohomerenovation@gmail.com',
  },
  {
    id: 5,
    url: 'mailto:sameerathomerenovation@gmail.com',
    title: 'Email Personal',
    icon: <FaRegEnvelope />,
    text: 'sameerathomerenovation@gmail.com',
  },
];
