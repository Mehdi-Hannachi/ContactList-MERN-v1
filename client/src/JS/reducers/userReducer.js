import {
  GET_USERS,
  GET_USERS_FAILED,
  GET_USERS_SUCCESS,
} from "../constants/actionstype";

const initialState = {
  loading: false,
  users: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        loading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
      };

    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
