import { Text, View, ScrollView } from "react-native";
import { useRoute } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useMemo, useState } from "react";
import { useGetRoomDetails } from "@/modules/room/hooks/useGetRoomDetails";
import { formatDateLocal } from "@/shared/utils/formatDate";
import { MyLineChart } from "@/shared/components/myLineChart/MyLineChart";
import { Loading } from "@/shared/components/loading/loading";
import { GoBack } from "@/shared/components/goBack/GoBack";

export function RoomDetails() {
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
                <GoBack />
                <Text style={styles.name}>{data?.room.name}</Text>
            </View>

            <Text style={styles.sectionTitle}>Daily Readings</Text>
            <Text style={styles.dateRangeText}>{displayDate}</Text>

            {
                data?.readings.length === 0 ? (
                    <View style={styles.noDataContainer}>
                        <Ionicons name="sad" size={48} color="#888" />
                        <Text style={styles.noDataText}>No readings available for this date.</Text>
                    </View>
                ) : <ScrollView
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
            }


        </View>
    );
}