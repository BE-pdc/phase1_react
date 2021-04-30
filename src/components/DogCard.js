import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import placeholder from '../assets/placeholder_paw.png';

const DogCard = ({ dog }) => (
  <DogCardContainer>
    <DogImageContainer>
      <img src={dog.image} alt={`${dog.name} - ${dog.breed}`} />
    </DogImageContainer>
    <div className="dog-name-breed-color">
      <h2>{`${dog.name}`}</h2>
      <p>{`${dog.breed} - ${dog.color}`}</p>
    </div>
  </DogCardContainer>
);

const DogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  margin: 15px;
  padding: 5px;
`;

const DogImageContainer = styled.div`
  height: 300px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;

  & img {
    border-radius: 7px;
  }
`;

DogCard.propTypes = {
  dog: PropTypes.shape({
    name: PropTypes.string,
    breed: PropTypes.string,
    color: PropTypes.string,
    image: PropTypes.string,
  }),
};

DogCard.defaultProps = {
  dog: {
    name: 'Nameless',
    breed: 'undefined breed',
    color: 'Color not found',
    image: placeholder,
  },
};

export default DogCard;
