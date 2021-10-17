import * as React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import {Colors} from '../../constants/Colors';

export type Props = {
  title: string,
  extraStyle?: object,
  onPress: () => void;
};

 const TextButton: React.FC<Props> = ({
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
       width: '100%',
       alignItems: 'flex-end',
     }, 
     link: {
       fontSize: 12,
       color: Colors.highlightMain,
       fontFamily: 'NanumMyeongjo-Bold',
     },
     linkPressed: {
      opacity: 0.8
     }
  });

  export default TextButton;
