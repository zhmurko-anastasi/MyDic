import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Ionicons, Entypo } from '@expo/vector-icons'; 
import { RootStackScreenProps } from '../../constants/types';

import { mainBlack, mainGrey } from '../../constants/Colors';
import { InputWithIcon, MainButton, TextButton  } from '../../components';
import { Routes } from '../../constants/Routes';


export function LoginScreen({ navigation }: RootStackScreenProps<Routes.login>) {
  const [pass, setPass] = React.useState('');
  const [email, setEmail] = React.useState('');

  const onChange = (value: string, callBack: Function) => {
     callBack(() => value)
  }

  const handlerForgotButtonClick = () => {
    console.log('Forgot Password');
  }

  const handlerLoginButtonClick = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
         My Dictionary
      </Text>
      <View style={styles.inputsContainer}>

      <InputWithIcon 
        value={email} 
        placeholder=''
        onChange={(value: string) => onChange(value, setEmail)}
        icon = {<Ionicons name="md-mail-outline" size={15} color={mainGrey}  />}
      /> 

      <InputWithIcon 
        value={pass} 
        placeholder=''
        onChange={(value: string) => onChange(value, setPass)}
        icon = {<Ionicons name="key-outline" size={15} color={mainGrey}  />}
      /> 

      <TextButton 
        extraStyle={{
          fontSize: 12,
          textDecorationLine: 'underline',
        }}
        onPress={handlerForgotButtonClick}
        title={'Forgot password'}
      />

      </View>

      <View style={styles.button}>
        <MainButton
          title={'Login'}
          onPress={handlerLoginButtonClick}
        />

      </View>    

      <View>
       <TextButton  
        extraStyle={{
          marginVertical: 15,
          fontSize: 13,
          textDecorationLine: 'underline',
        }}
        onPress={handlerForgotButtonClick}
        title={'Sign Up'}
      /> 
      </View> 

      <View style={styles.socialContainer}>
        <Pressable style={styles.socialIcon}>
          {({pressed}) =>
            <Entypo name="facebook-with-circle" size={30} color={pressed ? mainGrey: mainBlack} />
          }
        </Pressable>
        
        <Pressable style={styles.socialIcon}>
          {({pressed}) =>
            <Entypo name="google--with-circle"size={30} color={pressed ? mainGrey: mainBlack} />
          }
        </Pressable>
      </View>
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
  inputsContainer: {
    width: '100%',
    marginBottom: '15%',
  },
  titleText: {
    fontFamily: 'AmaticSC-Bold',
    fontSize: 36,
    color: mainBlack,
    fontWeight: '200',
    marginBottom: '10%',
  },
   button: {
     width: '60%',
     height: 50,
   },
   socialContainer: {
     flex: 0.1,
     flexDirection: 'row',
     marginTop: 40,
     alignItems: 'flex-end',
   },
   socialIcon: {
     elevation: 3,
     marginHorizontal: 10,
    
   }
});