import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, toggleFalse } from "./JS/actions/userActions";
import UsersList from "./components/UsersList/UsersList";
import { Route, Link } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";

function App() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.userReducer.loading);
  console.log(loading);

  const getAllUsers = () => {
    dispatch(getUsers());
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <Link to="/users">
        <button>Users List</button>
      </Link>

      <Link to="/add-user">
        <button onClick={() => dispatch(toggleFalse())}>Add User</button>
      </Link>

      <Route exact path="/users" render={() => <UsersList />} />
      <Route exact path="/(add-user|edit-user)/" render={() => <AddUser />} />
    </div>
  );
}

export default App;
