import React from "react";
import { Container } from "react-bootstrap";

const HomePage: React.FC = () => {
  return (
    <>
      <Container>
        <h3>Home page</h3>
      </Container>
      <Container>
        <p>
          Hi this is a simple sample react application to show good coding
          practices and to use as some kind of helpful reference material to new
          projects.
          <br />
          <b>Hope you find it useful!</b>
        </p>
      </Container>
    </>
  );
};

export default HomePage;
