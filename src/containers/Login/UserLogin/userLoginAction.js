
import {
  USER_LOGIN,

} from './constants'


// export const userLogin = (url, data) => ({


//   type: USER_LOGIN,
//   url,
//   data
// })

export function userLoginAction (url, values, formName) {  

console.log("ACTION!!",url, values);
  return {
    type: USER_LOGIN,
    url,
    values,
    formName
  }
}
