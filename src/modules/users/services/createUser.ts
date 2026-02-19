import { api } from "@/libs/axios/axios";
import { CreateUserForm } from "@/shared/types/user";

export async function createUser(data: CreateUserForm) {
    const response = await api.post("/user", data);
    return response.data;
}