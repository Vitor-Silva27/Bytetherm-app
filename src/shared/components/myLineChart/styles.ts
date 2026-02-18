import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loadingContentContainer: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 16
    },
    container: {
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 20,
        padding: 16,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        overflow: 'hidden'
    },
    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        gap: 4,
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    unitText: {
        fontSize: 14,
        color: 'gray',
        fontWeight: 'normal',
    },
    legendContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    legendDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    legendText: {
        fontSize: 12,
        color: 'gray',
    },
})