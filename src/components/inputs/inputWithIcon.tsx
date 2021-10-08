import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import {mainBlack, mainGrey} from '../../constants/Colors';

export type Props = {
  icon: React.ReactElement;
  value: string;
  placeholder: string;
  onChange: Function;
};

const InputWithIcon: React.FC<Props> = ({
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
         style={styles.input}
         onChangeText={(e) => onChange(e)}
         value={value}
         placeholder={placeholder}
    />

    </View>
    )
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 0,
    marginVertical: 12,
    borderColor: mainGrey,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    flex: 1,
    paddingVertical: 10,
    paddingRight: 10,
    paddingLeft: 40,
    color: mainBlack,
    position: 'relative',
},
  inputIcon: {
    position: 'absolute',
    top: '37%',
    left: 10,
},
  inputSection: {
    height: 75,
},
});

export default InputWithIcon;
