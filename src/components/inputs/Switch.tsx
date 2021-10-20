import * as React from 'react';
import { Switch } from 'react-native';
import {Colors} from '../../constants/Colors';

 type Props = {
    value: boolean;
    placeholder?: string;
    icon?: React.ReactElement;
    onChange: (value: boolean) => void | Promise<void>;
  };
  
  export const SwitchCustom: React.FC<Props> = ({
      icon,
      value,
      placeholder,
      onChange,
      ...rest
  }) => {
      return (
        <Switch
        {...rest}  
        value={value}
        onValueChange={onChange}
        thumbColor={value ? Colors.highlightMain : Colors.mainGrey}
        trackColor={{ false: Colors.secondaryGrey, true: Colors.highlightSecondary }}
        />  
      )
  };
  
 
  
  
