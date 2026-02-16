import { colors } from "@/shared/styles/colors";
import { fontFamily } from "@/shared/styles/fonts/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        gap: 4,
        width: "100%"
    },
    label: {
        fontSize: 20,
        fontFamily: fontFamily.regular
    },
    input: {
        backgroundColor: colors.gray_200,
        borderRadius: 50,
        padding: 16,
    },
    inputError: {
        borderWidth: 1,
        borderColor: colors.red
    },
    error: {
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.red
    },
    inputWrapper: {
        position: "relative",
        justifyContent: "center",
    },

    inputWithIcon: {
        paddingRight: 45,
    },

    icon: {
        position: "absolute",
        right: 16,
    },
})