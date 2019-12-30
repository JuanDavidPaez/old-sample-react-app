import React from "react";
import { IUser } from "../models/UsersModels";
import { Table } from "react-bootstrap";

interface IPropsUserTable {
  users: IUser[];
}

interface IPropsUserTableRow {
  user: IUser;
}

const UserTableRow: React.FC<IPropsUserTableRow> = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address?.street}</td>
      <td>{user.address?.city}</td>
    </tr>
  );
};

const UsersTable: React.FC<IPropsUserTable> = ({ users }) => {

  return (
    <Table size="sm" responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: IUser, i: number) => { return <UserTableRow key={i} user={user}></UserTableRow> })}
      </tbody>
    </Table>
  );
};

export default UsersTable;
