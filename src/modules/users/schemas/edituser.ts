import { z } from "zod";

export const editUserSchema = z.object({
    name: z.string().min(3, "The user name must be at least 3 characters long"),
    email: z.email("Invalid email address").min(1, "The email is required"),
    role: z.enum(["admin", "user"], "The role is required"),
});

export type EditUserForm = z.infer<typeof editUserSchema>;