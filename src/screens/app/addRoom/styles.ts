import { StyleSheet } from "react-native";
import { colors } from "@/shared/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray_100,
        paddingTop: 60,
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black,
    },
    scrollContent: {
        padding: 20,
    },
    formWrapper: {
        gap: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.gray_500,
        marginBottom: 8,
    },
    advancedButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        marginTop: 10,
    },
    advancedButtonText: {
        color: colors.primary,
        fontWeight: '600',
    },
    advancedContainer: {
        backgroundColor: '#f9f9f9',
        padding: 16,
        borderRadius: 8,
        gap: 12,
    },
    subLabel: {
        fontSize: 14,
        color: colors.gray_500,
        marginTop: 4,
    },
    row: {
        flexDirection: 'row',
        gap: 12,
    },
    halfInput: {
        flex: 1,
    },
    footer: {
        marginTop: 20,
    }
});