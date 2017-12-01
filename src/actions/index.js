


import {
    REQUEST_API_DATA,
    RECEIVE_API_DATA,
    REQUEST_HELLO_WORLD,
    RECEIVE_HELLO_WORLD,


    SUBMIT_FORM,

  } from '../constants/Types'



export const requestApiData = (url) => ({
    type: REQUEST_API_DATA,
    url
})


export const receiveApiData = (data) => ({
    type: RECEIVE_API_DATA,
    data
})

export const requestHelloWorld = (url) => ({
    type: REQUEST_HELLO_WORLD,
    url
})

export const receiveHelloWorld = (text) => ({
    type: RECEIVE_HELLO_WORLD,
    text
})






export function submitFormAction (url, values, formName, token) {  
    
console.log(url, values);
    return {
    type: SUBMIT_FORM,
    url,
    values,
    formName,
    token
    }
}
    
    



