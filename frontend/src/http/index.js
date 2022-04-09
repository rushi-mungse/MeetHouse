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

export default api;
