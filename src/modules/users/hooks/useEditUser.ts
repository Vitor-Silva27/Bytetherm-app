import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { editUser } from "../services/editUser";
import { AxiosError } from "axios";


export function useEditUser() {
    const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: editUser,
    onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      Toast.show({
        type: "success",
        text1: "User updated successfully",
        text2: `User "${data.name}" has been updated.`,
      });
    },
    onError: (error: AxiosError<{ erro: string }>) => {
    const errorMessage = error.response?.data?.erro || "An error occurred while updating the user. Please try again.";
      Toast.show({
        type: "error",
        text1: "Error updating user",
        text2: errorMessage,
      });
    }
});
}