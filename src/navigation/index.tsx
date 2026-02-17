import { useAuth } from '@/modules/auth/hooks/useAuth';
import { AuthNavigator } from '@/navigation/authNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './appNavigator';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '@/shared/styles/colors';
import { Loading } from '@/shared/components/loading/loading';

export const RootNavigator: React.FC = () => {

  const { isAuthenticated, loading } = useAuth();


  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
