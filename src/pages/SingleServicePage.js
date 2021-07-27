import React, { useEffect, useState } from 'react';
import { services } from '../utils/data';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageTitle from './_PageTitle';
import ServiceGallery from './_ServiceGallery';

//* COMPONENTS
const SingleServicePage = () => {
  // state
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);

  // get the service from the url
  const { serviceURL } = useParams();

  // useEffect
  useEffect(() => {
    const newService = services.find((service) => service.url === serviceURL);
    setService(newService);
    setLoading(false);
  }, [serviceURL]);

  // destructuring
  const { title, desc, image } = service;

  // jsx
  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <Wrapper>
      <PageTitle title={title} subtitle="services" />

      <div className="section section-center">
        <div className="service-center">
          <ServiceGallery images={image} title={title} />
          <div className="info">
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
        </div>
        <div className="btn-container">
          <Link to="/" className="btn">
            back to home
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

// *STYLES
const Wrapper = styled.section`
  .btn-container {
    margin-top: 3rem;
    text-align: center;
  }

  .service-center {
    display: grid;
    gap: 3rem;

    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;

      .info p {
        margin: 0;
      }
    }
  }

  .info {
    text-align: center;

    h2 {
      line-height: 1.3;
    }
    p {
      margin: 0 auto;
      line-height: 2;
    }
  }
`;

export default SingleServicePage;
