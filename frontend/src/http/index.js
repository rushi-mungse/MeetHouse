import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050",
  headers: {
    ContentType: "application/json",
    Accept: "application/json",
  },
});

export const sendOtp = async (data) => api.post("/api/send-otp", data);

export default api;
