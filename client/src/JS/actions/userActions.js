import axios from "axios";

const {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
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
