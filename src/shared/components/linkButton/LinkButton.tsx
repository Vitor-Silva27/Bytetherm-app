import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LinkButtonProps } from "./types";

export function LinkButton({ to, text, options }: LinkButtonProps) {
    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(to, options)}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}