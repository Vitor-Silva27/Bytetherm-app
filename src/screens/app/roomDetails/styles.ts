import { colors } from "@/shared/styles/colors";
import { fontFamily } from "@/shared/styles/fonts/fontFamily";
import { StyleSheet } from "react-native";
import { date } from "zod";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 30,
        backgroundColor: colors.gray_100
    },
    name: {
        fontSize: 18,
        fontFamily: fontFamily.bold,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    chartsContainer: {
        paddingBottom: 40,
    },
    sectionTitle: {
        fontSize: 24,
        fontFamily: fontFamily.regular,
        textAlign: 'center',
    },
    dateRangeText: {
        fontSize: 14,
        fontFamily: fontFamily.regular,
        textAlign: 'center',
        marginBottom: 20,
    },
})