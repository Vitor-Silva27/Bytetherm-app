import { colors } from "@/shared/styles/colors";
import { fontFamily } from "@/shared/styles/fonts/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray_100,
        flex: 1,
        paddingTop: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 24,
        fontFamily: fontFamily.light
    },
    image: {
        width: "80%",
        resizeMode: "contain",
        marginBottom: 42,
    },
    formWrapper: {
        width: "90%",
        padding: 20,
        backgroundColor: colors.white,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    keyboardAvoidingView: {
        width: "100%",
        alignItems: "center",
    },
    formTitle: {
        fontSize: 32,
        fontFamily: fontFamily.bold,
        color: colors.black
    },
    formSubtitle: {
        fontSize: 20,
        fontFamily: fontFamily.light,
        color: colors.gray_700
    },
    fieldsWrapper: {
        width: "100%",
        marginVertical: 48,
        gap: 16
    }
})