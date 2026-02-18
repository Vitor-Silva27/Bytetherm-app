import { api } from "@/libs/axios/axios";
import { RoomReadingsResponse } from "@/shared/types/room";

export async function getRoomDetails({ roomId, startDate, endDate }: { roomId: string; startDate: string; endDate: string }): Promise<RoomReadingsResponse> {
const response = await api.get(`/room/${roomId}/report`, {
    params: {
      startDate,
      endDate,
    },
  });
  return response.data;
}