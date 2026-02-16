import { MainScreen } from '@/screens/app/main/Main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AppNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="MainScreen" screenOptions={{ headerShown: false }}>
    <Stack.Screen component={MainScreen} name="MainScreen" />
  </Stack.Navigator>
);
