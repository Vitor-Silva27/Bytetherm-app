import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";
import { useGetRoomsConditions } from "@/modules/temperature/hooks/useGetCurrentConditions";
import { Loading } from "@/shared/components/loading/loading";
import { RoomCard } from "@/shared/components/roomcard/RoomCard";

export function MainScreen() {
    const { data: roomsConditions, isLoading, isFetching, refetch, error } = useGetRoomsConditions();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <View style={styles.container}>
            <Image source={require("@assets/logo.png")} style={styles.image} />
            <View style={styles.readingsContainer}>
                <Text style={styles.text}>Current Conditions</Text>
                <FlatList
                    data={roomsConditions}
                    keyExtractor={(item) => item._id}
                    refreshing={isFetching}
                    onRefresh={refetch}
                    renderItem={({ item }) => (
                        <RoomCard
                            id={item._id}
                            name={item.name}
                            temperature={item.temperature}
                            humidity={item.humidity}
                            timestamp={item.timestamp}
                        />
                    )}
                />
            </View>
        </View>
    )
}