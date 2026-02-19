import { api } from "@/libs/axios/axios";
import { EditRoomForm } from "@/shared/types/room";

export async function editRoom(data: EditRoomForm) {
    const response = await api.put(`/room/${data._id}`, {
        name: data.name,
        microcontrollerId: data.microcontrollerId,
    });
    return response.data;
}