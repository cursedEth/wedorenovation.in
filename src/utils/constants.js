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
    url: 'https://www.google.com/maps/place/HOME+:+House+Painting,+Construction,+Renovation+and+Remodeling+Contractors+In+Noida/@28.591414,77.3624893,17z/data=!4m7!3m6!1s0x390ce5779518134b:0xf34905cd5c20102d!8m2!3d28.5914177!4d77.3646746!9m1!1b1',
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
    text: 'waterproofing',
    url: '/services/waterproofing',
    title: 'Water & Heat Proofing',
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
  {
    id: 9,
    text: 'decoration',
    url: '/services/decoration',
    title: 'Interior & Exterior Decoration',
  },
];

// contact links
export const contactLinks = [
  {
    id: 1,
    url: 'https://g.page/Wedohomepaintingandrenovation?share',
    title: 'Location',
    icon: <FaMapMarkerAlt />,
    text: 'C-82, Shop -1, Vikrant Chauhan Market, Sector 53, Noida',
  },
  {
    id: 2,
    url: 'tel:8800805388',
    title: 'Phone',
    icon: <FaPhoneAlt />,
    text: '(+91) 8800805388',
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
