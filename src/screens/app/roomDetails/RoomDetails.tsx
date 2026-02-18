import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useMemo, useState } from "react";
import { useGetRoomDetails } from "@/modules/room/hooks/useGetRoomDetails";
import { formatDateLocal } from "@/shared/utils/formatDate";

export function RoomDetails() {
    const navigation = useNavigation();
    const route = useRoute();
    const { roomId } = route.params as { roomId: string };

    const [days, setDays] = useState(1);
    const { startDate, endDate } = useMemo(() => {
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - (days - 1));

        return {
            startDate: formatDateLocal(start),
            endDate: formatDateLocal(end),
        };
    }, [days]);

    const { data, isLoading } = useGetRoomDetails(roomId, startDate, endDate);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <Text>Go Back</Text>
            </TouchableOpacity>
            <Text>Room Details: {roomId}</Text>
            {isLoading ? (
                <Text>Loading...</Text>
            ) : (
                <Text>Data: {JSON.stringify(data)}</Text>
            )}
        </View>
    )
}