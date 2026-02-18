import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useMemo, useState } from "react";
import { useGetRoomDetails } from "@/modules/room/hooks/useGetRoomDetails";
import { formatDateLocal } from "@/shared/utils/formatDate";
import { MyLineChart } from "@/shared/components/myLineChart/MyLineChart";
import { Loading } from "@/shared/components/loading/loading";

export function RoomDetails() {
    const navigation = useNavigation();
    const route = useRoute();
    const { roomId } = route.params as { roomId: string };

    const { apiDate, displayDate } = useMemo(() => {
        const today = new Date();

        return {
            apiDate: formatDateLocal(today),
            displayDate: today.toLocaleDateString('pt-BR')
        };
    }, []);

    const { data, isLoading } = useGetRoomDetails(roomId, apiDate, apiDate);

    if (isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.goBackContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.goBackText}>Go back</Text>
                </View>
                <Text style={styles.name}>{data?.room.name}</Text>
            </View>

            <Text style={styles.sectionTitle}>Daily Readings</Text>
            <Text style={styles.dateRangeText}>{displayDate}</Text>

            <ScrollView
                contentContainerStyle={styles.chartsContainer}
                showsVerticalScrollIndicator={false}
            >
                <MyLineChart
                    title="Temperature"
                    data={data?.readings || []}
                    type="temperature"
                />

                <MyLineChart
                    title="Humidity"
                    data={data?.readings || []}
                    type="humidity"
                />
            </ScrollView>
        </View>
    );
}