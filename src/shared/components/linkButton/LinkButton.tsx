import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LinkButtonProps } from "./types";

export function LinkButton({ to, text, options, icon }: LinkButtonProps) {
    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(to, options)} style={styles.container}>
            {icon && <View>{icon}</View>}
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}