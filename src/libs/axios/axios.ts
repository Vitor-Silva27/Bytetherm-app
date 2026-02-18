import { storage } from "@/shared/storage/storage";
import axios from "axios";

let signOutRequest: (() => void) | null = null;

export function registerSignOutCallback(callback: () => void) {
  signOutRequest = callback;
}

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  const token = storage.getString("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      if (signOutRequest) {
        signOutRequest(); 
      } else {
        storage.remove("token");
      }
    }

    return Promise.reject(error);
  }
);