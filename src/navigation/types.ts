import { Room } from "@/shared/types/room";
import { User } from "@/shared/types/user";

export type AppStackParamList = {
    tabs: undefined;
    RoomDetails: { roomId: string }; 
    addRoom: { roomToEdit?: Room };
    addUser: undefined;
    editUser: { userToEdit: User };
};