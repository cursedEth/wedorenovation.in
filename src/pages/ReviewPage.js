import React from 'react';
import { Reviews } from '../components';
import PageTitle from './_PageTitle';
import Seo from './Seo';

const ReviewPage = () => {
  return (
    <>
      <Seo title="Our Reviews | We Do Renovation™" />

      <section className="page-100">
        <PageTitle title="What They Say" subtitle="Reviews" />
        <Reviews />
      </section>
    </>
  );
};

export default ReviewPage;
