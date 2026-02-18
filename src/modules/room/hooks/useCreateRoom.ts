import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { addNewRoom } from "../services/addNewRoom";


export function useCreateRoom() {
    const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: addNewRoom,
    onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["rooms"] });
      Toast.show({
        type: "success",
        text1: "Room created successfully",
        text2: `Room "${data.name}" has been created.`,
      });
    },
    onError: () => {
      Toast.show({
        type: "error",
        text1: "Error creating room",
        text2: "An error occurred while creating the room. Please try again.",
      });
    }
});
}