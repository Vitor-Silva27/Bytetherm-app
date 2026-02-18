import { api } from "@/libs/axios/axios";

export async function deleteRoom({ roomId }: { roomId: string; }){
const response = await api.delete(`/room/${roomId}`);

  return response.data;
}