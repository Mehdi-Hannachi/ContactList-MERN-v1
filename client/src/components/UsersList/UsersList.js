import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";

const UsersList = () => {
  const users = useSelector((state) => state.userReducer.users);
  const loading = useSelector((state) => state.userReducer.loading);

  return loading ? (
    <h1> Please wait </h1>
  ) : (
    <div>{users && users.users.map((user) => <UserCard user={user} />)}</div>
  );
};

export default UsersList;
