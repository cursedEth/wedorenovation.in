import React, { useState } from 'react';
import styled from 'styled-components';
import PageTitle from './_PageTitle';
import { Title } from '../components';
import { questions } from '../utils/data';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import Seo from './Seo';

//* COMPONENTS

const FAQsPage = () => {
  return (
    <>
      <Seo title="Frequently Asked Questions | We Do Renovation™" />

      <Wrapper className="page-100">
        <PageTitle title="Frequently Asked Questions" subtitle="FAQs" />

        <div className="section section-center">
          <Title
            title="FAQs"
            description="Here are a few of the common questions we get asked everyday."
          />

          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </div>
      </Wrapper>
    </>
  );
};

const SingleQuestion = ({ ques, ans }) => {
  // state
  const [isQuesOpen, setIsQuesOpen] = useState(false);

  // toggle ques function
  const toggleQuestion = () => setIsQuesOpen(!isQuesOpen);

  // jsx
  return (
    <article className="question" onClick={toggleQuestion}>
      <header>
        <h4>{ques}</h4>
        <button className="question-btn">
          {isQuesOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </header>
      <p className={isQuesOpen ? 'show' : ''}>{ans}</p>
      <hr />
    </article>
  );
};

//* STYLES

const Wrapper = styled.section`
  .question {
    max-width: 60rem;
    margin: 0 auto;
    cursor: pointer;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      padding: 0 1.5rem;
      text-align: left;
    }

    h4 {
      text-transform: none;
      margin-bottom: 0;
    }
    p {
      margin-bottom: 0;
      max-width: unset;
      padding: 0 1.5rem;
      height: 0;
      overflow: hidden;
      transition: all 0.2s ease-in-out;
    }
    p.show {
      margin-top: 1.5rem;
      height: auto;
    }

    .question-btn {
      background: transparent;
      border-color: transparent;
      color: var(--clr-primary);
    }

    hr {
      margin: 1.5rem auto;
      border: none;
      border-bottom: 1px solid var(--grey-5);
    }

    &:last-child hr:last-of-type {
      border-bottom: none;
      margin-bottom: 0;
    }
  }
`;

export default FAQsPage;
