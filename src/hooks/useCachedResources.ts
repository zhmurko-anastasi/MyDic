import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default async function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  Font.useFonts({
    'AmaticSC': require('../../assets/fonts/AmaticSC-Regular.ttf'),
    'AmaticSC-Bold': require('../../assets/fonts/AmaticSC-Bold.ttf'),
    'NanumMyeongjo': require('../../assets/fonts/NanumMyeongjo-Regular.ttf'),
    'NanumMyeongjo-Bold': require('../../assets/fonts/NanumMyeongjo-Bold.ttf'),
  });
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
      
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
