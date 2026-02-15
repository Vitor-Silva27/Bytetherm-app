import { AuthNavigator } from '@/navigation/authNavigator';
import { NavigationContainer } from '@react-navigation/native';

export const RootNavigator: React.FC = () => {

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};
