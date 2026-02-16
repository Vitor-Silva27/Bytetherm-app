import { colors } from "@/shared/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    error: {
        backgroundColor: colors.red,
        borderRadius: 8,
        padding: 16,
        width: "90%",
        alignSelf: "center",
        marginBottom: 16,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "bold",
    },
    success: {
        backgroundColor: colors.green,
        borderRadius: 8,
        padding: 16,
        width: "90%",
        alignSelf: "center",
        marginBottom: 16,
    },
    delete: {
        borderRadius: 8,
        padding: 16,
        width: "90%",
        alignSelf: "center",
        marginBottom: 16,
    }
})