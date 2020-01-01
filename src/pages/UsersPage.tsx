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
    };
  }, []);

  const loadAllUsersFromApi = () => {
    setUsers([]);
    userService.GetUsers().then(usersData => {
      if (isMounted.current) {
        setUsers(usersData);
      }
    });
  };

  const callANotFoundEndPoint = () => {
    userService
      .GetUserById(999)
      .then(data => {
        console.log("CallANotFoundEndPoint method has finalize!");
      })
      .catch(error => {
        console.log("Ocurrio error", error, error.response);
      });
  };

  const callWrongEndPoint = () => {
    userService
      .CallAWrongEndPoint()
      .then(data => {
        console.log("callWrongEndPoint method has finalize!");
      })
      .catch(error => {
        console.log("Ocurrio error", error, error.response);
      });
  };

  const callApiAndThrowErrorOnParse = () => {
    userService
      .GetUsersParsingError()
      .then(data => {
        console.log(data);
        console.log("callApiAndThrowErrorOnParse method has finalize");
        setUsers(data); //generates error because the data received does not match the IUser interface
      })
      .catch(error => {
        console.log("Ocurrio error", error, error.response);
      });
  };

  const btnStyle = {
    marginLeft: "10px"
  };

  return (
    <Container>
      <h3>Users</h3>
      <hr />
      <div style={{ marginTop: "20px" }}>
        Fetch
        <Button
          variant="outline-info"
          size="sm"
          style={btnStyle}
          onClick={loadAllUsersFromApi}
        >
          Load users data!
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          style={btnStyle}
          onClick={callANotFoundEndPoint}
        >
          Not found endpoint
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          style={btnStyle}
          onClick={callWrongEndPoint}
        >
          Wrong endpoint
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          style={btnStyle}
          onClick={callApiAndThrowErrorOnParse}
        >
          Throw error on parsing response{" "}
        </Button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <UsersTable users={users}></UsersTable>
      </div>
    </Container>
  );
};

export default UsersPage;
