import { fontFamily } from "@/shared/styles/fonts/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    goBackContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    goBackButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    goBackText: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        marginLeft: 10,
    },

})