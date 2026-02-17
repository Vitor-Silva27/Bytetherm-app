import { colors } from "@/shared/styles/colors";
import { ActivityIndicator, View } from "react-native";

export function Loading() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.gray_100 }}>
         <ActivityIndicator size="large" color={colors.primary} />
        </View>
    )
}