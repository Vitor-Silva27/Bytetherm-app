import { useAuth } from '@/modules/auth/hooks/useAuth';
import { AuthNavigator } from '@/navigation/authNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Loading } from '@/shared/components/loading/loading';
import { AppStackNavigator } from './homeStackNavigator';

export const RootNavigator: React.FC = () => {

  const { isAuthenticated, loading } = useAuth();


  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStackNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
