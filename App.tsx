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

SplashScreen.preventAutoHideAsync();

export default function App() {
   const [fontsLoaded] = useFonts(poppinsFonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1, backgroundColor: colors.gray_100 }} onLayout={onLayoutRootView}>
     <RootNavigator />
     <StatusBar style="auto" />
    </View>
  );
}