import { Room } from "@/shared/types/room";

export type AppStackParamList = {
    tabs: undefined;
    RoomDetails: { roomId: string }; 
    addRoom: { roomToEdit?: Room }; 
};