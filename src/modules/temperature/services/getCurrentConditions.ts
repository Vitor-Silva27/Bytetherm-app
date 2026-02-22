import { api } from "@/libs/axios/axios";
import { RoomConditions } from "@/shared/types/Temperature";

export async function getCurrentConditions() {
    const response = await api.get<RoomConditions[]>("/room/current");
    return response.data;
}