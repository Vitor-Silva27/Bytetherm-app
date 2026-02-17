import { colors } from "@/shared/styles/colors";
import { fontFamily } from "@/shared/styles/fonts/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        textDecorationLine: "underline",
        color: colors.primary
    },
})