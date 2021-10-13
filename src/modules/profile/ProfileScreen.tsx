import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Routes } from '../../constants/Routes';
import { RootStackScreenProps } from '../../constants/types';

export function ProfileScreen({ navigation }: RootStackScreenProps<Routes.profile>) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.replace(Routes.login)} style={styles.link}>
        <Text style={styles.linkText}>Profile screen!</Text>
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
