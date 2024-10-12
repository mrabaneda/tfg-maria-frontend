// -------------------------------------------------------
// Requirements
// -------------------------------------------------------

import axios from "axios";

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/`,
  withCredentials: true,
  maxBodyLength: Infinity,
});

// -------------------------------------------------------
// Public Interface
// -------------------------------------------------------

export { axiosInstance };
