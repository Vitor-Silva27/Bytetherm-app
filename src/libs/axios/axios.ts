import { storage } from "@/shared/storage/storage";
import axios from "axios";

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