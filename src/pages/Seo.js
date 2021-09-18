import React from 'react';
import { Helmet } from 'react-helmet-async';

const Seo = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>
        {title ||
          `We Do Renovation™ - Best Renovation, Construction & Painting Company since
      1960s`}
      </title>
      <meta
        name="description"
        content={
          description ||
          `We are the best Painting, Renovation and Construction service providers for more than 61 years as this being our family business since 1960. We are a group of contractors providing you the best quality of work with no compromises.
      We providing services like : Whitewash and Wall Painting/designs, P.O.P work, Mason & civil work water and heat proofing, Glass and Aluminium work, Wood Work & polishing, Metal Fabrication and welding work, Tiles & marble Flooring and polishing, Bathroom & kitchen Remodeling Interior decoration & Renovation, Fibre sheet and sunshed work, Plumbing, Electrical wiring etc To all Houses, Offices, Apartments, schools, colleges, factories, shops, showroom & Buildings etc.`
        }
      />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default Seo;
