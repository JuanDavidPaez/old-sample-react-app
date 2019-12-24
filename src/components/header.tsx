import React from "react";
import logo from "./../images/logo.svg";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const StyledHeader = styled.header`
  & img {
    display: inline;
    vertical-align: middle;
  }
  & h1 {
    display: inline;
    vertical-align: middle;
  }
`;

const StyledTitle = styled.h1``;

const Header: React.FC = () => {
  return (
    <div className="App">
      <StyledHeader>
        <img src={logo} className="App-logo" alt="logo" />
        <StyledTitle>Sample react app</StyledTitle>
      </StyledHeader>
    </div>
  );
};

export default Header;
