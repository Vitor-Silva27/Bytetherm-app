import { useMutation } from "@tanstack/react-query";
import { signInService } from "../services/sigIn";

export function useSignIn() {
  return useMutation({
    mutationFn: signInService,
});
}