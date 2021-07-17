import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section className="section section-center">
        <h1>404</h1>
        <h5>OOPS! The page you are looking for does not exist!</h5>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  place-items: center;

  .section-center {
    text-align: center;

    h1 {
      font-size: 8rem;
    }

    .btn {
      margin-top: 2rem;
    }
  }
`;

export default ErrorPage;
