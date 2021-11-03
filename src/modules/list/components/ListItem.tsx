import * as React from 'react';
import { Animated, Pressable, Text, StyleSheet } from 'react-native';
import {Colors} from '../../../constants/Colors';

type PROP = {
  item:
  {
    id: string,
    title: string,
    description: string
  }
}

const ListItem: React.FC<PROP> = ({item} : PROP) =>{ 
    const rotateAnimation = React.useRef(new Animated.Value(0)).current;
    const [isTranslated, setIsTranslated] = React.useState(false);
  
    const interpolateRotating = rotateAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
  
    const handleAnimation = () => {
      Animated.spring(rotateAnimation, {
        toValue: 1,
        damping: 14,
        stiffness: 70,
        useNativeDriver: false,
      }).start(() => {
        rotateAnimation.setValue(0);
      });
    };
  
    const animatedStyle = {
      transform: [
        {
          rotate: interpolateRotating,
        },
      ],
    };
  
    const handleTranslatStatus = () => {
      handleAnimation();
      setIsTranslated((prev) => !prev)
    }
  
    return (
      <Animated.View
        key={item.id}
        style={[
          styles.item,
          isTranslated && styles.translated,
          animatedStyle
          ]}>
  
        <Pressable onPress={handleTranslatStatus}>
          <Text
            style={[
              styles.title,
              isTranslated && styles.translated,
            ]}>
            {isTranslated ? item.description : item.title}
  
          </Text>
        </Pressable>
      </Animated.View>
    )
  };
  
  const styles = StyleSheet.create({
    title: {
      fontSize: 21,
      color: Colors.mainBlack,
      fontFamily: 'AmaticSC-Bold',
   
    },
    translated: {
      fontFamily: 'AmaticSC',
      color: Colors.mainWhite,
      backgroundColor: Colors.highlightMain,
    },
    item: {
      padding: 20,
      elevation: 1,
      borderRadius: 15,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: Colors.mainWhite,
      borderColor: Colors.secondaryGrey,
    },
  });

  export default ListItem;