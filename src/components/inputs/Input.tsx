import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import {Colors} from '../../constants/Colors';

export type Props = {
  value: string;
  onChange: Function;
  placeholder?: string;
  icon?: React.ReactElement;
};

const Input: React.FC<Props> = ({
    icon,
    value,
    placeholder,
    onChange,
    ...rest
}) => {
    return (
    <View style={styles.inputSection}>

    <View style={styles.inputIcon}>
       {icon}
    </View>
    
    <TextInput
         {...rest}
         value={value}
         placeholder={placeholder}
         onChangeText={(e) => onChange(e)}
         style={[styles.input, icon && styles.withIcon]}
    />

    </View>
    )
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 12,
    position: 'relative',
    marginHorizontal: 0,
    paddingHorizontal: 10,
    color: Colors.mainBlack,
    fontFamily: 'NanumMyeongjo',
    borderColor: Colors.mainGrey,
},
  inputIcon: {
    left: 10,
    top: '37%',
    position: 'absolute',
},
  inputSection: {
    height: 75,
},
withIcon: {
  paddingLeft: 40,
},
});

export default Input;

