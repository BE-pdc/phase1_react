import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

import DogCard from './DogCard';
// import DogCard from './DogCard';

const DOGS = gql`
  query dogs {
    dogs {
      _id
      name
      breed
      color
      image
    }
  }
`;

const Dogs = () => {
  const { loading, error, data } = useQuery(DOGS);

  if (loading) {
    return <p>Loading...getting dog data</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <DogsContainer>
      <DogHeader>dogs</DogHeader>
      <ul>
        {data.dogs.map((dog) => (
          <DogCard dog={dog} />
        ))}
      </ul>
    </DogsContainer>
  );
};

const DogHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(31, 207, 204, 1);
  width: 100%;
  height: 80px;
  justify-content: center;
  color: #fff;
  font-size: 4em;
  font-weight: bold;

  & .reverse-image {
    transform: scaleX(-1);
  }
`;

const DogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 5em;
  }

  & ul {
    padding: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;

    & .dog-name-breed-color {
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

export default Dogs;
