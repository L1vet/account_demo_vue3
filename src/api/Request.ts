import axios, { type AxiosInstance } from "axios";

let request: AxiosInstance;

export default function getRequest() {
  if (!request) throw new Error("Request is not initialized");
  return request;
}

export function createRequest(config: { base_parth: string }) {
  request = axios.create({
    baseURL: config.base_parth,
    withCredentials: true,
  });
  return request;
}
