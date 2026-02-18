import { api } from "@/libs/axios/axios";
import { CreateRoomForm } from "@/shared/types/room";

export async function addNewRoom(data: CreateRoomForm) {
    const response = await api.post("/room", data);
    return response.data;
}