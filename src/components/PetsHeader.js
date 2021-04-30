import React from 'react';
import styled from 'styled-components';

import bgPets from '../assets/background_pets.jpg';

export default function PetsHeader() {
  const BackgroundPH = styled.div`
    background-image: url(${bgPets});
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;
    width: 50%;
    height: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

  return (
    <PetsHeaderWrapper>
      <h1>Pets</h1>
      <BackgroundPH />
    </PetsHeaderWrapper>
  );
}

const PetsHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  & h1 {
    font-size: 5em;
    font-weight: bold;
  }
`;
