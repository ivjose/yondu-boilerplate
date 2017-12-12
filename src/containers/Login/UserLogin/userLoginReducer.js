import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FIELD_ERROR,
  USER_LOGIN_ERROR,
  
} from "./constants";

const initialState = {
  data: {},
  status: null,
  message: ""
};

const userLoginReducer = (state = initialState, { type, payload }) => {
  // console.log("my reducser",payload);

  switch (type) {
    case USER_LOGIN:
      return {
        status: "loading"
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        status: "success",
        message: "success",
        data: payload.data
      };
    case USER_LOGIN_FIELD_ERROR:
      return {
        ...state,
        status: "error",
        data: payload.data
      };
      case USER_LOGIN_ERROR:
      return {
        ...state,
        status: "error",
        message: payload
      };
    default:
      return state;
  }
};

export default userLoginReducer;
