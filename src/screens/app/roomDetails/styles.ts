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
    goBackContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16
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
    name: {
        fontSize: 18,
        fontFamily: fontFamily.bold,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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