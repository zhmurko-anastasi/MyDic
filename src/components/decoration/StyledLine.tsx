import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import {Colors} from '../../constants/Colors';

 interface Props {
    type?: string;
    color?: string;
  };
  
  export const StyledLine: React.FC<Props> = ({
       type = 'direct',
       color = 'main',
  }) => {
     /* array's length may change due to designer's reasons =)  */
    const widthsArray = [30];
    const colorStyle = color === 'main' ? styles.main : styles.secondary;

    return (
    <View style={[styles.container, type === 'reverse' && styles.reverse]}>
        {widthsArray.map((size, index) => {
            return <View style={[colorStyle, {width: size + '%'}]} key={Date.now() + index}/>
        })}
    </View>
    )
  }
  
  const styles = StyleSheet.create({
  container: {
    height: 1.5,
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
  },
  main: {
    height: '100%',
    marginRight: 5,
    backgroundColor: Colors.highlightMain,
  },
  secondary: {
    height: '100%',
    marginRight: 5,
    backgroundColor: Colors.highlightSecondary,
  },
  reverse: {
   justifyContent: 'flex-end'
  },
  });


  
  
