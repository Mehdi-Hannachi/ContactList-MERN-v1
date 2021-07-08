import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./JS/actions/userActions";
import UsersList from "./components/UsersList/UsersList";
import { Route, Link } from "react-router-dom";

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
      <button>Add User</button>

      <Route exact path="/users" render={() => <UsersList />} />
    </div>
  );
}

export default App;
