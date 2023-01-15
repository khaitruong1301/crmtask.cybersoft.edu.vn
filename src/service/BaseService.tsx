import axios from 'axios';
import { API_URL_DOMAIN } from '../configs/UrlConfig';

var token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyZWQiOiIxLzE0LzIwNDYgMTE6NDc6MDkgUE0iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZmFmYjEyYjktZDZkMS00YWNhLWExMTItNzliNjhmOWQ4ZWQzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiaG9hbmcubmhoMTk5MUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUUxfQk0iLCJDSEVDS19NRU5UT1JfTE9QIiwiUl9MT1AiLCJRTF9HQyIsIlFMX0NIVEwiLCJRTF9STSIsIlFMX1RLRCIsIlFMX0xDTiIsIkRfQlQiLCJGX0dDIiwiUl9WTCIsIlJfQkgiLCJGX0xPUCIsIkFOWSIsIkRfTkQiLCJVX05EIiwiQ19ORCIsIlJfTkQiLCJEX0tIIiwiVV9LSCIsIkNfS0giLCJSX0tIIiwiR0RfTEgiLCJYX0tIX0wiLCJRTF9ITVQiLCJEX0RBTkgiLCJRTF9DTCIsIlFMX0JMIiwiUUxfTFQiLCJRTF9LSCIsIkNfTE9QIiwiVV9MT1AiLCJLX0NIRUNLX0wiLCJRTF9DQ04iLCJYTF9NVCIsIlFMX0tLSFYiLCJVX05HQVlfQkgiXSwibmJmIjoxNjczNzE0ODI5LCJleHAiOjE2NzM3MTg0Mjl9.I_Iw8YF7r8xACe7k7xWm_L92DDxdSCcZqhxgf3pVK1Y';

// const setToken = () : void => {

//     if (localStorage.getItem('USER_LOGIN')) {
//         let user = JSON.parse(localStorage.getItem('USER_LOGIN') || "");

//         token = user?.token;

//     }
// }

export const get = (url: string, ...params: any) => {
    // setToken();

    return axios({
        baseURL: API_URL_DOMAIN,
        url: url,
        params: params,
        method: 'GET',
        responseType: 'json',
        responseEncoding: 'utf8',
        headers: {
      
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    }).catch(err => err)


}

export const post = (url: string, data : any) => {
    // setToken();
    return axios({
        baseURL: API_URL_DOMAIN,
        url: url,
        method: 'POST',
        responseType: 'json',
        responseEncoding: 'utf8',
        headers: {
        
            'Authorization': 'Bearer ' + token,

            'Content-Type': 'application/json'
        },
        // timeout: 1000,
        data: JSON.stringify(data)

    }).catch(err => err)
}

export const put = (url : string, data: any) => {
    // setToken();
    return axios({
        baseURL: API_URL_DOMAIN,
        url: url,
        method: 'PUT',
        responseType: 'json',
        responseEncoding: 'utf8',
        headers: {
           
            'Authorization': 'Bearer ' + token,

            'Content-Type': 'application/json'
        },
        // timeout: 1000,
        data: JSON.stringify(data)
    }).catch(err => err)
}

export const remove = (url : string, ids : any) => {
    // setToken();
    return axios({
        baseURL: API_URL_DOMAIN,
        url: url,
        method: 'DELETE',
        responseType: 'json',
        responseEncoding: 'utf8',
        headers: {
          
            'Authorization': 'Bearer ' + token,

            'Content-Type': 'application/json'
        },
        data: JSON.stringify(ids)
        // timeout: 1000
    }).catch(err => err)
}

export const postForm = (url : string, data : any) => {
    // setToken();
    return axios({
        baseURL: API_URL_DOMAIN,
        url: url,
        method: 'POST',
        responseType: 'json',
        responseEncoding: 'utf8',
        headers: {
      
            'Authorization': 'Bearer ' + token,

            'Content-Type': 'application/json'
        },
        // timeout: 1000,
        data: data

    }).catch(err => err)
}

export const putForm = (url : string, data : any) => {
    // setToken();
    // console.log(url,"url","data",data)
    return axios({
        baseURL: API_URL_DOMAIN,
        url: url,
        method: 'POST',
        responseType: 'json',
        responseEncoding: 'utf8',
        headers: {
       
            'Authorization': 'Bearer ' + token,

            'Content-Type': 'application/json'
        },
        // timeout: 1000,
        data: data

    }).catch(err => err)
}

export const BaseApi = {
    get,
    post,
    put,
    remove,
    postForm,
    putForm
}