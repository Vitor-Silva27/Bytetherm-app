import { Text, TouchableOpacity } from "react-native";
import { CtaButtonProps } from "./types";
import { styles } from "./styles";

export function CtaButton({ title, onPress, icon }: CtaButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            {icon}
        </TouchableOpacity>
    )
}