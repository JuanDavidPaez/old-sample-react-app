import React, { useEffect, useState, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import userService from "services/UsersService";
import { IUser } from "models/UsersModels";
import UsersTable from "components/UsersTable";

const UsersPage: React.FC = () => {

  const [users, setUsers] = useState<IUser[]>([]);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    loadAllUsersFromApi();
    return () => {
      isMounted.current = false;
    }
  }, []);

  const loadAllUsersFromApi = () => {
    setUsers([]);
    userService.GetUsers()
      .then(usersData => {
        if (isMounted.current) {
          setUsers(usersData);
        }
      });
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
      <div style={{ marginTop: "20px" }}>
        <UsersTable users={users}></UsersTable>
      </div>
    </Container>
  );
};

export default UsersPage;
