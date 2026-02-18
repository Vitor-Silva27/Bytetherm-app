import { api } from "@/libs/axios/axios";

export async function getRoomDetails({ roomId, startDate, endDate }: { roomId: string; startDate: string; endDate: string }) {
const response = await api.get(`/room/${roomId}/report`, {
    params: {
      startDate,
      endDate,
    },
  });
  return response.data;
}