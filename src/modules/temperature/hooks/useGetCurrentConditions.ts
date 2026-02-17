import { useQuery } from "@tanstack/react-query";
import { getCurrentConditions } from "@/modules/temperature/services/getCurrentConditions";

export function useGetRoomsConditions() {
  return useQuery({
    queryKey: ["roomsConditions"],
    queryFn: getCurrentConditions,
    staleTime: 1000 * 60,
    refetchInterval: 1000 * 60 * 5,
  });
}