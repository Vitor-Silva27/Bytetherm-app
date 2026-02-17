import { Text, View } from "react-native";
import { RoomCardProps } from "./types";
import { styles } from "./styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/shared/styles/colors";
import { LinkButton } from "../linkButton/LinkButton";

export function RoomCard({ humidity, name, temperature }: RoomCardProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.infosContainer}>
                <View style={styles.infoWrapper}>
                    <View style={[styles.iconWrapper, { backgroundColor: colors.primary }]}>
                        <MaterialCommunityIcons name="heat-wave" size={24} color={colors.white} />s
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.label}>Temperature</Text>
                        <Text style={[styles.value, { color: colors.primary }]}>{temperature.toFixed(0)}°C</Text>
                    </View>
                </View>
                <View style={styles.infoWrapper}>
                    <View style={[styles.iconWrapper, { backgroundColor: colors.cyan }]}>
                        <Ionicons name="water" size={24} color={colors.white} />
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.label}>Humidity</Text>
                        <Text style={[styles.value, { color: colors.cyan }]}>{humidity.toFixed(0)}%</Text>
                    </View>
                </View>
            </View>
            <LinkButton />
        </View>
    )
}