import axios from 'axios';
const BASE = process.env.URL;
export const Api = (url,method) =>{
    return axios(BASE + url,{method:method});
};