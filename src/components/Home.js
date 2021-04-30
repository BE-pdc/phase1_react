import React from 'react';
import styled from 'styled-components';

function Home() {
  return <HomeDiv>Home Page</HomeDiv>;
}

const HomeDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 5em;
  font-weight: bold;
  padding-top: 100px;
`;

export default Home;
