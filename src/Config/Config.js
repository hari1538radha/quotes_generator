import axios from "axios";

export const axiosSearch = axios.create({
  baseURL: "https://api.quotable.io",
  headers: {
    "X-Custom-Header": "foobar",
    Accept: "application/json",
    "Content-Type": undefined,
  },
});