
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
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from "./constants";

import { postData } from '../../../utils/Api'

import { userLogin } from './actions'


function* logout () {
}
  
function* loginFlow ({url, values, formName }) {
    try {
      const response = yield call(()=> postData(url, values))
  
      yield delay(1000)
      yield put({ type: USER_LOGIN_SUCCESS, payload: response.data })
  
      localStorage.setItem('token', JSON.stringify(response.data.data))
  
      // yield put(push('/widgets'))
    } catch (error) {
      console.log("MALI!!",error, formName);


      if (error.response.status === 422) {
        const errorData = []
        for (let prop in error.response.data.message) {
          if (error.response.data.message[prop]) {
            console.log(prop);
            errorData[prop] = error.response.data.message[prop];
          }
        }

        yield delay(1000)
        yield put({ type: USER_LOGIN_ERROR, payload: error.response })
        //Throw Error Message
        yield put(stopSubmit(formName ,errorData));
    
      }


    

    } finally {
      if (yield cancelled()) {
        // yield put(push('/login'))
      }
    }
    
}

function* userLoginSaga () {

    yield takeLatest('USER_LOGIN', loginFlow)

}




export default userLoginSaga 