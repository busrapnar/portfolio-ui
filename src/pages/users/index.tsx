import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "../../components/ui/table";
import { Checkbox } from "../../components/ui/checkbox";

type Props = {};

const users = [
  { id: 1, name: "Ahmet", email: "ahmet@example.com", username: "djfhdfj" },
  { id: 2, name: "Mehmet", email: "mehmet@example.com", username: "djfhdfj" },
  { id: 3, name: "Ayşe", email: "ayse@example.com", username: "djfhdfj" },
];

const Users = (props: Props) => {
  return (
    <div className="mt-16">
      <Table>
        <TableHead className="text-xl">Users</TableHead>
        <TableRow className="text-xl text-gray-950">
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>E-Mail</TableHead>
        </TableRow>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="text-lg opacity-90">
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Users;
