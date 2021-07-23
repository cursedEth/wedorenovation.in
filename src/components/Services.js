import React from 'react';
import styled from 'styled-components';
import Title from './_Title';

const Services = () => {
  return (
    <Wrapper className="section">
      <Title
        title="the services"
        description="We provide a large variety of services. Everything from construction, repair, waterproofing to painting, decoration, wood works, etc."
      />

      <div className="section-center">
        <h5>List of services - Getting them Ready :{')'}</h5>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;

  .section-center {
    text-align: center;
  }
`;

export default Services;
