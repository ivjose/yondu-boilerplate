import axios from 'axios';


axios.defaults.baseURL = 'https://randomuser.me/api/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const token = ""

// export default class Api {
   

//     static Post(url, values) {
//         return axios.post(url, values, {
//             headers: { 'X-Auth-Token': token ? token : null }
//         })
//     }
//     static Put() {
//         return 'Static method has been called';
//     }

//     static Get = async (url) => {
//         console.log( "my URl",url);
//         try {
//             let response = await axios.get(url, {
//                 // headers: {'X-Auth-Token': token ? token : null },
                
//             })
//             let data = await response.json
//             console.log("retrune value",data);
//             return data
            
//         } catch (error) {
//             console.log("ERROR", error)
//             return error
//         }
//     }
//     static Delete() {
//         return 'Static method has been called';
//     }
// }


export const fetchData = async (url) => {
    try {
        let response = await axios.get(url, {
            headers: {'X-Auth-Token': token ? token : null },

        })
        let data = await response.data
        console.log("request data",data);
        return data

    } catch (error) {
        console.log("ERROR", error)
        return error
    }
};
