import axios from 'axios';
import { API_URL_DOMAIN } from '../configs/UrlConfig';

var token = '';

const setToken = () : void => {

    if (localStorage.getItem('USER_LOGIN')) {
        let user = JSON.parse(localStorage.getItem('USER_LOGIN') || "");

        token = user.token;

    }
}

export const get = (url: string, ...params: any) => {
    setToken();

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
    }).catch(err => err.response.status === 401 || err.response.status === 403 && history.push("/login"))


}

export const post = (url, data) => {
    setToken();
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

    }).catch(err => err.response.status === 401 || err.response.status === 403 && history.push("/login"))
}

export const put = (url, data) => {
    setToken();
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
    }).catch(err => err.response.status === 401 || err.response.status === 403 && history.push("/login"))
}

export const remove = (url, ids) => {
    setToken();
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
    }).catch(err => err.response.status === 401 || err.response.status === 403 && history.push("/login"))
}

export const postForm = (url, data) => {
    setToken();
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

    }).catch(err => err.response.status === 401 || err.response.status === 403 && history.push("/login"))
}

export const putForm = (url, data) => {
    setToken();
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

    }).catch(err => err.response.status === 401 || err.response.status === 403 && history.push("/login"))
}

export const BaseApi = {
    get,
    post,
    put,
    remove,
    postForm,
    putForm
}