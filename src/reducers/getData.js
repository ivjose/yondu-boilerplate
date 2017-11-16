
import { RECEIVE_API_DATA } from '../constants/Types'


export default (state = {}, { type, data }) => {

  console.log("reducers!!",data);
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};