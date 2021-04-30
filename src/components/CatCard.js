import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import placeholder from '../assets/placeholder_paw.png';

const CatCard = ({ cat }) => (
  <CatCardContainer>
    <CatImageContainer>
      <img height="300" src={cat.image} alt={`${cat.name} - ${cat.breed}`} />
    </CatImageContainer>
    <div className="cat-name-breed">
      <h2>{`${cat.name}`}</h2>
      <p>{`${cat.breed}`}</p>
    </div>
  </CatCardContainer>
);

const CatCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  margin: 15px;
  height: 500px;
  padding: 5px;
`;

const CatImageContainer = styled.div`
  height: 300px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;

  & img {
    border-radius: 7px;
  }
`;

CatCard.propTypes = {
  cat: PropTypes.shape({
    name: PropTypes.string,
    breed: PropTypes.string,
    image: PropTypes.string,
  }),
};

CatCard.defaultProps = {
  cat: {
    name: 'Nameless',
    breed: 'undefined breed',
    image: placeholder,
  },
};

export default CatCard;
