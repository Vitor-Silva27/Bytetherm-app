import { colors } from "@/shared/styles/colors";
import { fontFamily } from "@/shared/styles/fonts/fontFamily";
import { StyleSheet } from "react-native";
import { date } from "zod";
import { no } from "zod/v4/locales";

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
    noDataContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noDataText: {
        fontSize: 24,
        fontFamily: fontFamily.regular,
        color: colors.gray_500,
        textAlign: 'center',
        marginTop: 10,
    },
})