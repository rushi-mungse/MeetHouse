import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050",
  withCredentials: true,
  headers: {
    ContentType: "application/json",
    Accept: "application/json",
  },
});

export const sendOtp = async (data) => api.post("/api/send-otp", data);
export const verifyOtp = async (data) => api.post("/api/verify-otp", data);

export default api;
