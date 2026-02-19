import { colors } from "@/shared/styles/colors";
import { fontFamily } from "@/shared/styles/fonts/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.gray_100,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    text: {
        fontSize: 24,
        fontFamily: fontFamily.light,
    },
    image: {
        resizeMode: "contain",
        width: 160,
    },
    usersContainer: {
        flex: 1,
        width: "100%"
    },
})