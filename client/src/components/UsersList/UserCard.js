import React from "react";
import { Link } from "react-router-dom";
import { deleteUser, getUser, toggleTrue } from "../../JS/actions/userActions";
import { useDispatch } from "react-redux";
import AddUser from "../AddUser/AddUser";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <span>{user.fullName}</span>
      <span>{user.email}</span>
      <span>{user.tel}</span>
      <span>{user.adress}</span>

      <Link to="/edit-user">
        <button
          onClick={() => {
            dispatch(getUser(user._id));
            dispatch(toggleTrue());
          }}
        >
          Edit User
        </button>
      </Link>
      <button onClick={() => dispatch(deleteUser(user._id))}>DELETE</button>
    </div>
  );
};

export default UserCard;
