import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '@/screens/auth/sign-in';

const Stack = createNativeStackNavigator();

export const AuthNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="SignInScreen" screenOptions={{ headerShown: false }}>
    <Stack.Screen component={SignInScreen} name="SignInScreen" />
  </Stack.Navigator>
);
