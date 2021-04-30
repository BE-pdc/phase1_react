import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

import CatCard from './CatCard';

const CATS = gql`
  query cats {
    cats {
      _id
      name
      breed
      image
    }
  }
`;

const Cats = () => {
  const { loading, error, data } = useQuery(CATS);

  if (loading) {
    return <p>Loading...getting cat data</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <CatContainer>
      <CatsHeader>cats</CatsHeader>
      <ul>
        {data.cats.map((cat) => (
          <CatCard cat={cat} />
        ))}
      </ul>
    </CatContainer>
  );
};

const CatsHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(31, 207, 204, 1);
  width: 100%;
  height: 80px;
  justify-content: center;
  margin: 20px 0;
  color: #fff;
  font-size: 4em;
  font-weight: bold;
  margin-top: 100px;

  & .reverse-image {
    transform: scaleX(-1);
  }
`;

const CatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 5em;
  }

  & ul {
    width: 70%;
    margin: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;

    & .cat-name-breed {
      width: 100%;
      padding: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;

      & h2 {
        font-size: 3em;
      }

      & p {
        font-size: 1.6em;
      }
    }
  }
`;

export default Cats;
