import { z } from "zod";

export const addUserSchema = z.object({
    name: z.string().min(3, "The user name must be at least 3 characters long"),
    email: z.email("Invalid email address").min(1, "The email is required"),
    role: z.enum(["admin", "user"], "The role is required"),
    password: z.string()
            .min(8, "The password must be at least 8 characters long")
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/, "The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
            confirmPassword: z.string().min(8, "The confirm password must be at least 8 characters long"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export type AddUserForm = z.infer<typeof addUserSchema>;