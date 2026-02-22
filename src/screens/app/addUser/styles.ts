import { StyleSheet } from "react-native";
import { colors } from "@/shared/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray_100,
        paddingVertical: 60,
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
    },
    roleContainer: {
        marginBottom: 16,
    },
    roleLabel: {
        fontSize: 14,
        color: colors.gray_700,
        marginBottom: 8,
        fontWeight: '500',
    },
    roleOptions: {
        flexDirection: 'row',
        gap: 12,
    },
    roleButton: {
        flex: 1,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: colors.gray_500,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    roleButtonActive: {
        borderColor: colors.primary,
        backgroundColor: colors.primary + '10',
    },
    roleText: {
        color: colors.gray_500,
        fontWeight: '600',
    },
    roleTextActive: {
        color: colors.primary,
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    },
});