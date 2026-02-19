import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { createUser } from "../services/createUser";
import { AxiosError } from "axios";


export function useCreateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createUser,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
            Toast.show({
                type: "success",
                text1: "User created successfully",
                text2: `User "${data.name}" has been created.`,
            });
        },
        onError: (error: AxiosError<{ erro: string }>) => {
            const errorMessage = error.response?.data?.erro || "ocurred an error while creating the user. Please try again.";
            Toast.show({
                type: "error",
                text1: "Error creating user",
                text2: errorMessage,
            });
        }
    });
}