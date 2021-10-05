import * as React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import {highlightColor} from '../../constants/Colors';

export type Props = {
  title: string,
  extraStyle?: object,
  onPress: () => void;
};

export const TextButton: React.FC<Props> = ({
    title,
    extraStyle,
    onPress,
}) => {
    return (
    <Pressable 
        onPress={onPress}
        style={styles.linkContainer}
     >
       {({ pressed }) =>
        <Text style={pressed ? [styles.link, styles.linkPressed, extraStyle] : [styles.link, extraStyle]}>
           {title}
        </Text>
       }
      </Pressable>
    )
};

const styles = StyleSheet.create({
     linkContainer: {
      alignItems: 'flex-end',
      width: '100%',
     }, 
     link: {
       fontFamily: 'NanumMyeongjo-Bold',
       color: highlightColor,
       fontSize: 12,
     },
     linkPressed: {
      opacity: 0.8
     }
  });

