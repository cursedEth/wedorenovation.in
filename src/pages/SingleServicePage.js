import React, { useEffect, useState } from 'react';
import { services } from '../utils/data';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PageTitle from './_PageTitle';
import ServiceGallery from './_ServiceGallery';
import ErrorPage from './ErrorPage';

//* COMPONENTS
const SingleServicePage = () => {
  // state
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // get the service from the url
  const { serviceURL } = useParams();
  const history = useHistory();

  // useEffect to update single service
  useEffect(() => {
    const newService = services.find((service) => service.url === serviceURL);
    if (newService) {
      setService(newService);
    } else {
      setError(true);
    }
    setLoading(false);
  }, [serviceURL]);

  // useEffect to push user back to home
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  }, [error, history]);

  // jsx
  if (error) {
    return <ErrorPage />;
  }
  if (loading) {
    return <div className="loading"></div>;
  }

  // destructuring
  const { title, desc, image, quote } = service;

  console.log(title);

  return (
    <Wrapper>
      <PageTitle title={title} subtitle="services" />

      <div className="section section-center">
        <div className="service-center">
          <ServiceGallery images={image} title={title} />
          <div className="info">
            <h2>{title}</h2>
            <p>{desc}</p>
            <blockquote>{quote}</blockquote>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

// *STYLES
const Wrapper = styled.section`
  .service-center {
    display: grid;
    gap: 3rem;

    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;

      .info {
        text-align: left;
        p {
          margin: 0;
        }
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
