import React from "react";

const UserCard = ({ user }) => {
  return (
    <div>
      <span>{user.fullName}</span>
      <span>{user.email}</span>
      <span>{user.tel}</span>
      <span>{user.adress}</span>
    </div>
  );
};

export default UserCard;
