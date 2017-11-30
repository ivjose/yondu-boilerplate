import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from "./constants";

const initialState = {
  data: new Object(),
  status: null
};

export const userLoginReducer = (state = initialState, { type, payload }) => {
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
        data: payload.data
      };
      case USER_LOGIN_ERROR:
      return {
        ...state,
        status: "success",
        data: payload.data
      };
    default:
      return state;
  }
};
