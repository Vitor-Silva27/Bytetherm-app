import { api } from "@/libs/axios/axios";
import { EditUserForm } from "@/shared/types/user";

export async function editUser(data: EditUserForm) {
    const response = await api.put(`/user/${data._id}`, {
        name: data.name,
        email: data.email,
        role: data.role,
    });
    return response.data;
}