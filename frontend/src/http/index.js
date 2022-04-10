import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  headers: {
    ContentType: "application/json",
    Accept: "application/json",
  },
});

export const sendOtp = async (data) => api.post("/api/send-otp", data);
export const verifyOtp = async (data) => api.post("/api/verify-otp", data);
export const activate = async (data) => api.post("/api/activate", data);
export const logout = async () => api.post("/api/logout");

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log(error);
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/api/refresh`, {
          withCredentials: true,
        });
        return api.request(originalRequest);
      } catch (error) {
        console.log(error.message);
      }
    }
    throw error;
  }
);

export default api;
