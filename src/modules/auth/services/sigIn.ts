import { api } from "@/libs/axios/axios";
import { SignInRequest, SignInResponse } from "@/shared/types/signIn";

export async function signInService(data: SignInRequest): Promise<SignInResponse> {
    const response = await api.post("/login", data);
    return response.data;
}