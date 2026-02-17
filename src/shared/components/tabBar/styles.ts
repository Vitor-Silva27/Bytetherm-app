import { colors } from "@/shared/styles/colors";
import { fontFamily } from "@/shared/styles/fonts/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 30,
        backgroundColor: colors.gray_100,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label: {
        color: colors.white,
        fontFamily: fontFamily.regular,
        fontSize: 16,
        lineHeight: 16
    },
    labelWrapper: {
        alignItems: 'center',
        backgroundColor: colors.white,
        justifyContent: 'center',
        borderRadius: 30,
        width: 60,
        height: 60
    },
    selectedLabelWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        height: 60,
    }
})