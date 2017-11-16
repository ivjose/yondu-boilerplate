import { 
    call, 
    put, 
    // takeEvery, 
    takeLatest 
} from "redux-saga/effects";

import {
    REQUEST_API_DATA,
} from '../constants/Types'

import { receiveApiData } from "../actions";

import {fetchData} from '../utils/Api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {

    
    try {

        
        // do api call
        // const data = yield call(fetchData(action && action.url));
        const data = yield call(fetchData);
        console.log("My SAGA!!",action);
        
        yield put(receiveApiData(data));
    } catch (e) {
        // console.log("vallue",e);
        yield put(receiveApiData("Hello world from redux saga!"));
    }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData);
}





// import { all, fork } from "redux-saga/effects";

// // inefficient way
// // import { userSaga1, userSaga2 } from "./users";
// // import { accountSaga1, accountSaga2 } from "./accounts";

// // export default function* rootSaga() {
// //   yield all([
// //     fork(userSaga1),
// //     fork(userSaga2),
// //     fork(accountSaga1),
// //     fork(accountSaga2)
// //   ]);
// // }

// // { userSaga1: () => {} }
// import * as userSagas from "./users";
// import * as accountSagas from "./accounts";

// export default function* rootSaga() {
//   yield all(
//     [...Object.values(userSagas), ...Object.values(accountSagas)].map(fork)
//   );
// }