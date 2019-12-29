import React from "react";
import logo from "./../images/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  & img {
    display: inline;
    vertical-align: middle;
  }
`;

const StyledTitle = styled.h2`
  display: inline;
  vertical-align: middle;
`;

const StyledNav = styled.nav`
  margin-left: 2rem;
  & ul {
    margin: 20px 0;
    padding: 0;
    list-style: none;
  }
  & li {
    display: inline;
    padding: 2px 2px;
    position: relative;
    margin: 0 5px;
  }
  & a {
    padding: 0 8px;
    display: inline-block;
    color: #888 !important;
    font-size: 0.85rem;
    font-weight: 500;
  }
  & a:hover {
    color: #000 !important;
  }
`;

const Header: React.FC = () => {
  return (
    <div className="App">
      <StyledHeader>
        <img src={logo} className="App-logo" alt="logo" />
        <StyledTitle>Sample react app</StyledTitle>
      </StyledHeader>
      <StyledNav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </StyledNav>
    </div>
  );
};

export default Header;
