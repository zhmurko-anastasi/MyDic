import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Routes } from '../../constants/Routes';
import { RootStackScreenProps } from '../../constants/types';

export function NotFoundScreen({ navigation }: RootStackScreenProps<Routes.notFound>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <Pressable onPress={() => navigation.replace(Routes.login)} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
