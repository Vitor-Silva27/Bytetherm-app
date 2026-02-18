import { z } from "zod";

export const addRoomSchema = z.object({
    name: z.string().min(3, "The room name must be at least 3 characters long"),
    microcontrollerId: z.string().min(1, "The microcontroller ID is required"),
});

export type AddRoomForm = z.infer<typeof addRoomSchema>;