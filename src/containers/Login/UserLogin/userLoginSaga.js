import { delay } from "redux-saga";
import {
  call,
  takeLatest,
  takeEvery,
  put,
  take,
  fork,
  cancelled
} from "redux-saga/effects";
import { push } from 'react-router-redux'
import { SubmissionError, stopSubmit } from "redux-form";
import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FIELD_ERROR,
  USER_LOGIN_ERROR
} from "./constants";

import { postData } from "../../../utils/Api";

function* logout() {}

function* loginFlow({ url, values, formName }) {
  alert("HELLO!!");
  try {
    const response = yield call(() => postData(url, values));


    console.log("reqest Data",response.data, response.data.data.first_login);
      

      if (response.data && response.data.data && (response.data.data.first_login === true || response.data.data.first_login === 1)) {
       
        yield delay(500);
        yield put({ type: USER_LOGIN_SUCCESS, payload: response.data });
        yield put(push('/change-password'))
        
      } else {

        if (values.remember_me === true) { 
          localStorage.setItem("token", JSON.stringify(response.data.data));
        }
        yield delay(500);
        yield put({ type: USER_LOGIN_SUCCESS, payload: response.data });
        yield put(push('/dashboard'))

      }

 



   

    
    
    
   

    // yield put(push('/widgets'))
  } catch (error) {
    console.log("MALI!!", error, formName);

    if (error.response && error.response.status === 422) {
      const errorData = [];
      for (let prop in error.response.data.message) {
        if (error.response.data.message[prop]) {
          console.log(prop);
          errorData[prop] = error.response.data.message[prop];
        }
      }

      yield delay(500);
      yield put({ type: USER_LOGIN_FIELD_ERROR, payload: error.response });
      //Throw Error Message
      yield put(stopSubmit(formName, errorData));
    } else {
      if (error.response && error.response.data) {
        yield put({ type: USER_LOGIN_ERROR, payload: error.response.data });
      } else {
        yield put({ type: USER_LOGIN_ERROR, payload: error });
      }
    }
  } finally {
    if (yield cancelled()) {
      // yield put(push('/login'))
    }
  }
}

function* userLoginSaga() {
  yield takeLatest(USER_LOGIN, loginFlow);
}

export default userLoginSaga;
