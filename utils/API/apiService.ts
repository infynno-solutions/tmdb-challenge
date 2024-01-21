import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  timeout: 5000,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjU2ZmNiMDJkZTI0OGJlODM1NDE0MDIzZjA5YjIyMiIsInN1YiI6IjY1YWI4MGMxN2Q1NTA0MDEyNWQ1M2I4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6JYxlpvW3NTwpSBlxiexCrrBn6hfLXLx_qdf-a6dE6Y",
  },
});

const get = async <T>(url: string, params: any = {}): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export { get };
