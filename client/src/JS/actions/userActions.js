import axios from "axios";

const {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  GET_USER,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} = require("../constants/actionstype");

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS });

  try {
    const res = await axios.get("/user/users");
    dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_USERS_FAILED, payload: error.response.data });
  }
};

export const addUser = (newUser) => async (dispatch) => {
  dispatch({ type: ADD_USER });

  try {
    const res = await axios.post("/user/register", newUser);
    console.log(res.data);

    dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
    // alert(res.data.msg);
    dispatch(getUsers());
  } catch (error) {
    console.log(error.response);
    dispatch({ type: ADD_USER_FAILED, payload: error.response.data });
    console.log(error.response.data);
    error.response.data.errors.map((err) => alert(err.msg));
  }
};

export const editUser = (id, editUser) => async (dispatch) => {
  dispatch({ type: EDIT_USER });

  try {
    const res = await axios.put(`/user/${id}`, editUser);

    dispatch({ type: EDIT_USER_SUCCESS, payload: res.data });
    dispatch(getUsers());
  } catch (error) {
    console.log(error);
    dispatch({ type: EDIT_USER_FAILED, payload: error.response.data });
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/user/${id}`);

    dispatch({ type: GET_USER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: DELETE_USER });

  try {
    const res = await axios.delete(`/user/${id}`);

    dispatch({ type: DELETE_USER_SUCCESS, payload: res.data });
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: DELETE_USER_FAILED, payload: error.response.data });
  }
};

export const toggleTrue = () => {
  return { type: TOGGLE_TRUE };
};
export const toggleFalse = () => {
  return { type: TOGGLE_FALSE };
};
