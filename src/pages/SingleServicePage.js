import React, { useEffect, useState } from 'react';
import { services } from '../utils/data';
import { Link, useParams } from 'react-router-dom';

const SingleServicePage = () => {
  // state
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // get the service from the url
  const { serviceURL } = useParams();

  // useEffect
  useEffect(() => {
    const newService = services.find((service) => service.url === serviceURL);
    setService(newService);
    setLoading(false);
  }, [serviceURL]);

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <h1>{service.name} page</h1>
      <Link to="/" className="btn">
        Back to home
      </Link>
    </>
  );
};

export default SingleServicePage;
