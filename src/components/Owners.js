import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import OwnersHeader from './OwnersHeader';

const OWNERS = gql`
  query owners {
    owners {
      _id
      firstname
      lastname
      dob
      dogs {
        name
        breed
        color
        image
      }
    }
  }
`;

const Owners = () => {
  const { loading, error, data } = useQuery(OWNERS);

  if (loading) {
    return <p>Loading...getting owner data</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <OwnersContainer>
      <OwnersHeader />
      <ul>
        {data.owners.map((owner) => {
          const dob = new Date(owner.dob);
          return (
            <li key={owner._id}>
              {`${owner.firstname} ${owner.lastname} - ${dob.toLocaleDateString(
                'nl-be'
              )}`}
              <ul className="owner-pets-dogs">
                {owner.dogs.map((dog) => (
                  <li key={dog.name}>
                    <img src={dog.image} alt={`${dog.name} - ${dog.breed}`} />
                    <div className="dog-name-breed">
                      <DogInfo>
                        <h3>Name</h3>
                        <span>{dog.name}</span>
                      </DogInfo>
                      <DogInfo>
                        <h3>Breed</h3>
                        <span>{dog.breed}</span>
                      </DogInfo>
                      <DogInfo>
                        <h3>Color</h3>
                        <span>{dog.color}</span>
                      </DogInfo>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="owner-pets-cats">
                {owner.cats?.map((cat) => (
                  <li key={cat.name}>
                    <img src={cat.image} alt={`${cat.name} - ${cat.breed}`} />
                    <p>{`${cat.name} ${cat.breed}`}</p>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </OwnersContainer>
  );
};

const OwnersContainer = styled.div`
  padding: 50px;

  & .dog-name-breed {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: lightgray;
    width: 800px;
    text-align: center;

    & span {
      padding: 10px;
      font-size: 3em;
    }
  }

  & li {
    text-align: center;
    font-size: 3em;
    list-style-type: none;
    margin: 50px;
  }

  & .owner-pets-dogs,
  & .owner-pets-cats {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    & li {
      display: flex;
      justify-content: center;
      margin: 25px 0;
    }
  }
`;

const DogInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h3 {
    font-size: 2em;
    color: rgba(31, 207, 204, 1);
  }
`;

export default Owners;
