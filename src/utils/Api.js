import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.0.22/develop/api/';
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

// export function postData(url, values) {
//     return axios.post(url, values, {
//         headers: {'X-Auth-Token': token ? token : null },        
//     })
// }



export async function postData(url, values) {
    return axios.post(url, values, {
        headers: {'X-Auth-Token': token ? token : null },        
    }) 
}



// export const postData = async (url, values) => {
// alert("API CALL")

//     return axios.post(url, values, {
//         headers: {'X-Auth-Token': token ? token : null },        
//     })
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
