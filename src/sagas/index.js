import { 
    all, 
    // takeEvery, 
    fork 
} from "redux-saga/effects";


import userLoginSaga from '../containers/Login/UserLogin/userLoginSaga'

export default function* rootSaga() {
  // console.log("TEST SAGA");
  yield all([
    fork(userLoginSaga),

  ]);
}