import {
  ADD_USER,
  ADD_USER_FAILED,
  ADD_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAILED,
  DELETE_USER_SUCCESS,
  EDIT_USER,
  EDIT_USER_FAILED,
  EDIT_USER_SUCCESS,
  GET_USER,
  GET_USERS,
  GET_USERS_FAILED,
  GET_USERS_SUCCESS,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../constants/actionstype";

const initialState = {
  loading: false,
  users: null,

  errors: [],
  isEdit: false,
  user: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
    case ADD_USER:
    case EDIT_USER:
    case DELETE_USER:
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
    case EDIT_USER_SUCCESS:
    case DELETE_USER_SUCCESS:
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: payload,
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: payload,
      };

    case GET_USERS_FAILED:
    case ADD_USER_FAILED:
    case EDIT_USER_FAILED:
    case DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
        msg: payload,
      };

    case TOGGLE_TRUE:
      return {
        ...state,
        isEdit: true,
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
      };

    case TOGGLE_FALSE:
      return {
        ...state,
        isEdit: false,
      };

    default:
      return state;
  }
};

export default userReducer;
