import { colors } from "@/shared/styles/colors";
import { fontFamily } from "@/shared/styles/fonts/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    name: {
        fontFamily: fontFamily.bold,
        fontSize: 18,
        marginBottom: 5,
    },
    infoWrapper: {
        flexDirection: "row",
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
    },
    textWrapper: {
        justifyContent: "center",
    },
    label: {
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: colors.black,
        lineHeight: 18
    },
    value: {
        fontFamily: fontFamily.regular,
        fontSize: 20,
        lineHeight: 24
    },
    infosContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 10
    }
});