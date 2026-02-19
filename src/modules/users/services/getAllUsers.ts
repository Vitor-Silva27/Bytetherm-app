import { api } from "@/libs/axios/axios";
import { User } from "@/shared/types/user";

export async function getAllUsers(): Promise<User[]> {
const response = await api.get(`/users`);
  return response.data;
}