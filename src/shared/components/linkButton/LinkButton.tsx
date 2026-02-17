import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function LinkButton() {
    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("RoomDetails")}>
            <Text style={styles.text}>Link Button</Text>
        </TouchableOpacity>
    );
}