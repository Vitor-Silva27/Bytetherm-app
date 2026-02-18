import { api } from "@/libs/axios/axios";
import { Room } from "@/shared/types/room";

export async function getAllRooms(): Promise<Room[]> {
const response = await api.get(`/rooms`);
  return response.data;
}