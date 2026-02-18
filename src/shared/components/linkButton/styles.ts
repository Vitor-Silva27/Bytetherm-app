import { colors } from "@/shared/styles/colors";
import { fontFamily } from "@/shared/styles/fonts/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        lineHeight: 24,
        textDecorationLine: "underline",
        color: colors.primary
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    }
})