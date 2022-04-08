import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    ContentType: "application/json",
    Accept: "application/json",
  },
});

export const sendOtp = async (data) => api.post("/api/send-otp", data);

export default api;
