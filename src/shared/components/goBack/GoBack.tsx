import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function GoBack() {
    const navigation = useNavigation();

    return (
        <View style={styles.goBackContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.goBackText}>Go back</Text>
        </View>
    )

}