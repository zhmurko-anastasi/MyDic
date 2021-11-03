import * as React from 'react';
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar';
import { ApolloProvider } from '@apollo/client';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './navigation';
import { apolloClient } from './src/config/apollo';
import { store } from './src/config/redux';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
      <ApolloProvider client={apolloClient}>
       <SafeAreaProvider>
         <Navigation colorScheme={colorScheme} />
         <StatusBar />
       </SafeAreaProvider>
     </ApolloProvider>
     </Provider>
    );
  }
}
