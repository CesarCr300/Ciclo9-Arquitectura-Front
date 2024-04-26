import axios from "axios";
import { createPopUpWithIcon } from "../utils/pop-up.util";

const user = localStorage.getItem("user");
const token = user ? JSON.parse(user).token : null;

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
    accept: "*/*",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    //If any request is aborted
    if (error.code == "ERR_CANCELED") {
      return Promise.reject();
    }
    if (error.response?.status === 401) {
      //logout
    }
    const message = error?.response?.data?.message
      ? error?.response?.data?.message
      : error?.response?.message || "Hubo un error inesperado";
    createPopUpWithIcon("Error", message, "error");
    return Promise.reject(message);
  }
);
