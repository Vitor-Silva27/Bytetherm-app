import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { deleteRoom } from "../services/deleteRoom";


export function useDeleteRoom() {
    const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["rooms"] });
      Toast.show({
        type: "success",
        text1: "Room deleted successfully",
      });
    },
    onError: () => {
      Toast.show({
        type: "error",
        text1: "Error deleting room",
        text2: "An error occurred while deleting the room. Please try again.",
      });
    }
});
}