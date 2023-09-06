import axios from "axios";

const service = axios.create({
  baseURL: "/api", // api base_url
  timeout: 65000, // 请求超时时间
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use((response) => {
  const res = response.data;
  return res;
}, err);

export default service;
