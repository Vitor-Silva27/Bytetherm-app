import { useAuth } from '@/modules/auth/hooks/useAuth';
import { AuthNavigator } from '@/navigation/authNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './appNavigator';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '@/shared/styles/colors';

export const RootNavigator: React.FC = () => {

  const { isAuthenticated, loading } = useAuth();


  if (loading) {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
