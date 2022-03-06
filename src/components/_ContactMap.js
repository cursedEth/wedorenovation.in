import React from 'react';
import styled from 'styled-components';

const ContactMap = () => {
  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24085.132609848763!2d77.35904163974953!3d28.58301703185949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2614a07af046a060!2sWe%20do%20Renovation%20Construction%20%26%20painting%20contractor!5e0!3m2!1sen!2sin!4v1645397555405!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        title="Location on Google Maps"
        className="map"
      ></iframe>
    </MapContainer>
  );
};

const MapContainer = styled.article`
  width: 100%;
  text-align: center;
  line-height: 0;

  .map {
    border: none;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
    min-height: 21rem;
    width: 100%;
  }
`;

export default ContactMap;
