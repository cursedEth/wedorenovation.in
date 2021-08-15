import React from 'react';
import styled from 'styled-components';

const ContactMap = () => {
  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0330954381066!2d77.36209831507982!3d28.50865198246672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzMxLjIiTiA3N8KwMjEnNTEuNCJF!5e0!3m2!1sen!2sin!4v1629056452534!5m2!1sen!2sin"
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
