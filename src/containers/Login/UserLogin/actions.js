
import {
  USER_LOGIN,
  RECEIVE_API_DATA,
  REQUEST_HELLO_WORLD,
  RECEIVE_HELLO_WORLD
} from './constants'


// export const userLogin = (url, data) => ({


//   type: USER_LOGIN,
//   url,
//   data
// })

export function userLogin (url, values, formName) {  

console.log(url, values);
  return {
    type: USER_LOGIN,
    url,
    values,
    formName
  }
}
