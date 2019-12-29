import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import userService from "services/UsersService";

const UsersPage: React.FC = () => {
  useEffect(() => {
    loadAllUsersFromApi();
  }, []);

  const loadAllUsersFromApi = async () => {
    const usersPromise = userService.GetUsers();
    let users: any = {};
    await usersPromise.then(data => {
      users = data;
    });
    console.log("jaja", users);
  };

  return (
    <Container>
      <h3>Users</h3>
      <hr />
      <div style={{ marginTop: "20px" }}>
        <Button variant="outline-info" size="sm" onClick={loadAllUsersFromApi}>
          Reload users data
        </Button>
      </div>
    </Container>
  );
};

export default UsersPage;
