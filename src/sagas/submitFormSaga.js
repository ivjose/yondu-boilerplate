
import { delay } from 'redux-saga'
import { 
  call, 
  takeLatest, 
  takeEvery,
  put ,
  take,
  fork,
  cancelled
} from "redux-saga/effects";
import { SubmissionError, stopSubmit} from 'redux-form';


import {
  SUBMIT_FORM,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FIELD_ERROR,
  SUBMIT_FORM_ERROR
} from "../constants/Types";

import { postData } from '../utils/Api'



function* logout () {
}
  
function* submitForm ({url, values, formName }) {
  alert("HELLO!!")
    try {
      const response = yield call(()=> postData(url, values))
  
      yield delay(500)
      yield put({ type: SUBMIT_FORM_SUCCESS, payload: response.data })
  
      localStorage.setItem('token', JSON.stringify(response.data.data))
  
      // yield put(push('/widgets'))
    } catch (error) {
      console.log("MALI!!",error, formName);


      if (error.response && error.response.status === 422) {
        const errorData = []
        for (let prop in error.response.data.message) {
          if (error.response.data.message[prop]) {
            console.log(prop);
            errorData[prop] = error.response.data.message[prop];
          }
        }

        yield delay(500)
        yield put({ type: SUBMIT_FORM_FIELD_ERROR, payload: error.response })
        //Throw Error Message
        yield put(stopSubmit(formName ,errorData));
    
      } else {
       

        if (error.response && error.response.data && error.response.data.data) {

          yield put({ type: SUBMIT_FORM_ERROR, payload:  error.response.data })
        } else {
     
          let errorMessage = ""
          if (error.response && error.response.data) {
            errorMessage = error.response.data.message
          } else {
            errorMessage = error.message
          }
 
          yield put({ type: SUBMIT_FORM_ERROR, payload: errorMessage})
        }
    
       
      }


    

    } finally {
      if (yield cancelled()) {
        // yield put(push('/login'))
      }
    }
    
}

function* submitFormSaga () {

    yield takeLatest(SUBMIT_FORM, submitForm)

}




export default submitFormSaga 