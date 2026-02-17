import { MainScreen } from '@/screens/app/main/Main';
import { ProfileScreen } from '@/screens/app/profile/Profile';
import { RoomsScreen } from '@/screens/app/rooms/Rooms';
import { UsersScreen } from '@/screens/app/users/Users';
import { MyTabBar } from '@/shared/components/tabBar/TabBar';
import { colors } from '@/shared/styles/colors';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const AppTabsNavigator: React.FC = () => (
  <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} tabBar={props => <MyTabBar {...props} />}>
    <Tab.Screen component={MainScreen} name="Home" options={{
      tabBarIcon: ({ focused}) => (
        <Ionicons name="home" size={24} color={focused ? colors.white : colors.gray_500} />
      ),
    }}/>
    <Tab.Screen component={RoomsScreen} name="Rooms" options={{
      tabBarIcon: ({ focused}) => (
        <Ionicons name="business" size={24} color={focused ? colors.white : colors.gray_500} />
      ),
    }}/>
    <Tab.Screen component={UsersScreen} name="Users" options={{
      tabBarIcon: ({ focused}) => (
        <Ionicons name="people" size={24} color={focused ? colors.white : colors.gray_500} />
      ),
    }}/>
    <Tab.Screen component={ProfileScreen} name="Profile" options={{
      tabBarIcon: ({ focused}) => (
        <Ionicons name="person" size={24} color={focused ? colors.white : colors.gray_500} />
      ),
    }}/>
  </Tab.Navigator>
);