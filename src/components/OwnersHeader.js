import React from 'react';
import styled from 'styled-components';

import bgPets from '../assets/background_pets_2.jpg';

export default function OwnersHeader() {
  const BackgroundOH = styled.div`
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
    <OwnersHeaderWrapper>
      <h1>Pet Owners</h1>
      <BackgroundOH />
    </OwnersHeaderWrapper>
  );
}

const OwnersHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  & h1 {
    font-size: 5em;
    font-weight: bold;
  }
`;
