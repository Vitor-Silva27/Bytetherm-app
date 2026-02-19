import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { deleteUser } from "../services/deleteUser";


export function useDeleteUser() {
    const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      Toast.show({
        type: "success",
        text1: "User deleted successfully",
      });
    },
    onError: () => {
      Toast.show({
        type: "error",
        text1: "Error deleting user",
        text2: "An error occurred while deleting the user. Please try again.",
      });
    }
});
}