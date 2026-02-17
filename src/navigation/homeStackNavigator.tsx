import { MainScreen } from "@/screens/app/main/Main";
import { RoomDetails } from "@/screens/app/roomDetails/RoomDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppTabsNavigator } from "./apptabsNavigator";

const Stack = createNativeStackNavigator();

export function AppStackNavigator() {
    return (
        <Stack.Navigator initialRouteName="tabs" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="tabs" component={AppTabsNavigator} />
            <Stack.Screen name="RoomDetails" component={RoomDetails} />
        </Stack.Navigator>
    );
}