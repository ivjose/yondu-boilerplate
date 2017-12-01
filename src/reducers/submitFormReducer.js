import {
  SUBMIT_FORM,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FIELD_ERROR,
  SUBMIT_FORM_ERROR
} from "../constants/Types";

const initialState = {
  data: {},
  status: null
};

const submitFormReducer = (state = initialState, { type, payload }) => {
  // console.log("my reducser",payload);

  switch (type) {
    case SUBMIT_FORM:
      return {
        status: "loading"
      };

    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        status: "success",
        message: "success",
        data: payload.data
      };
    case SUBMIT_FORM_FIELD_ERROR:
      return {
        ...state,
        status: "error",
        data: payload.data
      };
    case SUBMIT_FORM_ERROR:
      return {
        ...state,
        status: "error",
        message: payload.message
      };
    default:
      return state;
  }
};

export default submitFormReducer;
