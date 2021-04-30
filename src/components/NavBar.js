import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../assets/dog_cat_logo.png';

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    document.title = currentPage;
    const element = document.getElementById(
      `${currentPage.toLowerCase()}-link`
    );
    element.classList.add('current');
    return () => {
      element.classList.remove('current');
    };
  }, [currentPage]);

  return (
    <SiteNav>
      <Link onClick={() => setCurrentPage('Home')} exact to="/">
        <img src={Logo} alt="logo" height="50" />
      </Link>
      <StyledLink
        id="home-link"
        onClick={() => setCurrentPage('Home')}
        exact
        to="/"
      >
        Home
      </StyledLink>
      <StyledLink
        id="owners-link"
        onClick={() => setCurrentPage('Owners')}
        to="/owners"
      >
        Owners
      </StyledLink>
      <StyledLink
        id="pets-link"
        onClick={() => setCurrentPage('Pets')}
        to="/pets"
      >
        Pets
      </StyledLink>
    </SiteNav>
  );
};

const SiteNav = styled.nav`
  display: flex;
  align-items: flex-end;
  height: 50px;

  & .current {
    border-bottom: 3px solid rgba(31, 207, 204, 1);
  }
`;

const StyledLink = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: rgba(31, 207, 204, 0);
  color: rgba(31, 207, 204, 1);
  padding: 20px;

  border-bottom: 3px solid rgba(31, 207, 204, 0);
  margin: 0 5px;
  font-size: 2em;
  font-weight: bold;
  transition: background-color ease-out 0.4s;

  &:hover {
    color: rgba(31, 207, 204, 1);
    border-bottom: 3px solid rgba(31, 207, 204, 1);
  }
`;

export default NavBar;
