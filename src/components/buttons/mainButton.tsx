import * as React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import { Colors } from '../../constants/Colors';

export type Props = {
  title: string,
  onPress: () => void;
};

const MainButton: React.FC<Props> = ({
    title,
    onPress,
    ...rest
}) => {
    return (
    <Pressable 
      {...rest}
      onPress={onPress}
      android_ripple={{
          color: Colors.mainGrey,
          borderless: false,
          radius: 100,
      }}
      style={({pressed}) => pressed ? buttonPressed : buttonUnPressed}
    >
        <Text 
          style={styles.text}>
            {title}
        </Text>

    </Pressable>
    )
};

const styles = StyleSheet.create({
   container: {
       elevation: 3,
       height: '100%',
       borderRadius: 15,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: Colors.mainBlack,
   },
    pressed: {
       backgroundColor: Colors.mainGrey
    },
    unPressed: {
       backgroundColor: Colors.mainBlack
    },
   
   text: {
       color: '#fff',
       fontFamily: 'AmaticSC-Bold',
       fontSize: 20,
   }
});

const buttonPressed = StyleSheet.compose(styles.container, styles.pressed);
const buttonUnPressed = StyleSheet.compose(styles.container, styles.unPressed);


export default MainButton;