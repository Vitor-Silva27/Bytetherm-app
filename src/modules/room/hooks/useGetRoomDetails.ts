import { useQuery } from "@tanstack/react-query";
import { getRoomDetails } from "../services/getRoomDetails";

export function useGetRoomDetails(roomId: string, startDate: string, endDate: string) {
  return useQuery({
    queryKey: ["roomReport", roomId, startDate, endDate],
    queryFn: () => getRoomDetails({ roomId, startDate, endDate }),
    enabled: !!roomId,
    staleTime: 1000 * 60 * 5,
  });
}