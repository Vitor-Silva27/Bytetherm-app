import { RoomDetails } from "@/screens/app/roomDetails/RoomDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppTabsNavigator } from "./apptabsNavigator";
import { AddRoom } from "@/screens/app/addRoom/AddRoom";
import { AppStackParamList } from "./types";
import { AddUser } from "@/screens/app/addUser/AddUser";
import { EditUser } from "@/screens/app/EditUser/EditUser";

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStackNavigator() {
    return (
        <Stack.Navigator initialRouteName="tabs" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="tabs" component={AppTabsNavigator} />
            <Stack.Screen name="RoomDetails" component={RoomDetails} />
            <Stack.Screen name="addRoom" component={AddRoom} options={{
                presentation: "modal",
            }} />
            <Stack.Screen name="addUser" component={AddUser} options={{
                presentation: "modal",
            }} />
            <Stack.Screen name="editUser" component={EditUser} options={{
                presentation: "modal",
            }} />
        </Stack.Navigator>
    );
}