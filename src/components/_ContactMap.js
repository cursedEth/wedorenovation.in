import React from 'react';
import styled from 'styled-components';

const ContactMap = () => {
  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.8190047479345!2d77.36412009807005!3d28.59149523425598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5779518134b%3A0xf34905cd5c20102d!2sHOME%20%3A%20House%20Painting%2C%20Construction%2C%20Renovation%20and%20Remodeling%20Contractors%20In%20Noida!5e0!3m2!1sen!2sin!4v1626456803726!5m2!1sen!2sin"
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

  .map {
    border: none;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
    min-height: 21rem;
    width: 100%;
  }
`;

export default ContactMap;
