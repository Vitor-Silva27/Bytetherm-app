import 'react-native-gesture-handler';
import 'react-native-screens';
import { poppinsFonts } from '@/shared/styles/fonts/poppins';
import { useFonts } from '@expo-google-fonts/poppins';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { RootNavigator } from '@/navigation';
import { colors } from '@/shared/styles/colors';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/libs/reactQuery/reactQuery';
import Toast from 'react-native-toast-message';
import toastConfig from '@/shared/components/toast/toastConfig';
import { AuthProvider } from '@/providers/authProvider';
import { Loading } from '@/shared/components/loading/loading';

export default function App() {
   const [fontsLoaded] = useFonts(poppinsFonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <RootNavigator />
        <Toast position='top' autoHide={true} visibilityTime={3000} config={toastConfig} />
        <StatusBar style="dark" />
      </View>
      </AuthProvider>
    </QueryClientProvider>
  );
}