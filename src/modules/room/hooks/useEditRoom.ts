import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { editRoom } from "../services/editRoom";


export function useEditRoom() {
    const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: editRoom,
    onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["rooms"] });
      Toast.show({
        type: "success",
        text1: "Room updated successfully",
        text2: `Room "${data.name}" has been updated.`,
      });
    },
    onError: (error) => {
      console.error("Error updating room:", error);
      
      Toast.show({
        type: "error",
        text1: "Error updating room",
        text2: "An error occurred while updating the room. Please try again.",
      });
    }
});
}