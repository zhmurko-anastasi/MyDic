import * as React from 'react';
import { View, StyleSheet, ActivityIndicator, } from 'react-native';
import { Colors } from '../../constants/Colors';

type PROP = {
    color: string,
    size: 'large' | 'small',
}

export const LoadingIndicator = ({ color, size}: PROP) => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={size} color={color} />
      </View>
    )}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.mainWhite,
    }
});
