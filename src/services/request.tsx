import Axios from "axios";
import { showGlobalSnackbar } from "../context/hooks";

const baseUrl = "http://localhost:4000/api/v1";
const JSON_HEADER = "application/json";
const REQ_TIMEOUT = 10 * 60 * 1000; // 10 minutes

const instance = Axios.create({
  baseURL: baseUrl,
  timeout: REQ_TIMEOUT,
});

instance.defaults.headers.common.Accept = JSON_HEADER;
instance.defaults.headers.common["Content-Type"] = JSON_HEADER;

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMsg =
      error?.response?.data?.message || error?.message || "An error occurred";
    showGlobalSnackbar("Error", errorMsg, "error");

    return Promise.reject(error);
  }
);

export default instance;
