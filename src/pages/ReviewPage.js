import React from 'react';
import { Reviews } from '../components';
import PageTitle from './_PageTitle';

const ReviewPage = () => {
  return (
    <section className="page-100">
      <PageTitle title="What They Say" subtitle="Reviews" />
      <Reviews />
    </section>
  );
};

export default ReviewPage;
