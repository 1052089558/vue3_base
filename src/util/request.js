


import axios from "axios";

const http = axios.create({
  // axios.defaults.baseURL = '',  //正式
  baseURL: "http://localhost:3000", //测试
  timeout: 10000, // request timeout
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});


http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
