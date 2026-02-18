import { useQuery } from "@tanstack/react-query";
import { getAllRooms } from "../services/getAllRooms";

export function useGetAllRooms() {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: () => getAllRooms(),
    staleTime: 1000 * 60 * 5,
  });
}