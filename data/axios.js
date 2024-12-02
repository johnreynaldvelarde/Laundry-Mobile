import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fallbackURL = "https://web-production-dd1d.up.railway.app/api";
export const BASE_URL = fallbackURL;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle any errors
    console.error(
      "API Error:",
      error.response ? error.response.data : error.message
    );
    return Promise.reject(error);
  }
);
