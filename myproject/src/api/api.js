import axios from "axios";

const baseURL = "http://localhost:4000";

const axiosInstance /* Instance 실체화 란뜻 */ = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUser = async () => {
  try {
    const response = await axiosInstance.get("/user");
    return response.data;
  } catch (error) {
    throw error;
  }
};
