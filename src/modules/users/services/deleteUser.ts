import { api } from "@/libs/axios/axios";

export async function deleteUser({ userId }: { userId: string; }){
const response = await api.delete(`/user/${userId}`);

  return response.data;
}