import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../services/getAllUsers";

export function useGetAllUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
    staleTime: 1000 * 60 * 5,
  });
}