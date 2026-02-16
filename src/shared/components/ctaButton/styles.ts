import { colors } from "@/shared/styles/colors";
import { fontFamily } from "@/shared/styles/fonts/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        padding: 16,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    text: {
        color: colors.white,
        fontSize: 20,
        fontFamily: fontFamily.regular
    }
})