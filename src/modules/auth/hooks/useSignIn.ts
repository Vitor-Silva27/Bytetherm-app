import { useMutation } from "@tanstack/react-query";
import { signInService } from "../services/sigIn";
import { storage } from "@/shared/storage/storage";
import Toast from "react-native-toast-message";
import { useAuth } from "./useAuth";


export function useSignIn() {

  const { signIn } = useAuth();
  
  return useMutation({
    mutationFn: signInService,
    onSuccess: (data) => {
      storage.set("token", data.token);
      storage.set("user", JSON.stringify(data.user));
      signIn(data.token);
    },
    onError: () => {
      Toast.show({
        type: "error",
        text1: "Error signing in",
        text2: "Invalid email or password. Please try again.",
      });
    }
});
}