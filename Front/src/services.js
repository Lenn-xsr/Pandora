import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
});

axiosInstance.interceptors.response.use((response) => response);

export const api = {
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  get(endpoint, body) {
    return axiosInstance.get(endpoint, body);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  delete(endpoint, data) {
    return axiosInstance.delete(endpoint, { data });
  },
};
