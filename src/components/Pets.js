import React from 'react';
import styled from 'styled-components';
import Cats from './Cats';
import Dogs from './Dogs';
import PetsHeader from './PetsHeader';

const Pets = () => (
  <PetsContainer>
    <PetsHeader />
    <StyledCats />
    <StyledDogs />
  </PetsContainer>
);

const PetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;

  img {
    display: block;
  }
`;

const StyledCats = styled(Cats)``;

const StyledDogs = styled(Dogs)``;

export default Pets;
