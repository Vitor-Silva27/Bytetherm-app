import { colors } from "@/shared/styles/colors";
import { fontFamily } from "@/shared/styles/fonts/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 16,
        marginBottom: 12,
        borderRadius: 30,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },
    title: {
        fontFamily: fontFamily.bold,
        fontSize: 16,
        lineHeight: 24,
    },
    infoList: {
        gap: 4
    },
    infoItem: {},
    infoText: {
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: colors.gray_500,
    },
    infoValue: {
        fontFamily: fontFamily.medium,
        color: colors.gray_700,
    },
    actions: {
        flexDirection: "row",
        gap: 12,
    },
    actionText: {
        fontFamily: fontFamily.medium,
        textDecorationLine: "underline",
        fontSize: 16,
        lineHeight: 24,
    },
});