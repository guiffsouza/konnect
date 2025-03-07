import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});
