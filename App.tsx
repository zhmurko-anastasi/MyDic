import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ApolloProvider } from '@apollo/client';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './navigation';
import { apolloClient } from './src/config/apollo';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={apolloClient}>
       <SafeAreaProvider>
         <Navigation colorScheme={colorScheme} />
         <StatusBar />
       </SafeAreaProvider>
     </ApolloProvider>
    );
  }
}
