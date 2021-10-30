import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useMutation } from '@apollo/client';
import { Ionicons, Entypo } from '@expo/vector-icons'; 
import { RootStackScreenProps } from '../../constants/types';

import { Colors } from '../../constants/Colors';
import { Routes } from '../../constants/Routes';
import { CREATE_USER } from '../login/graphql';
import { Input, MainButton, TextButton  } from '../../components';

export function LoginScreen({ navigation }: RootStackScreenProps<Routes.login>) {
  const [pass, setPass] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [createUser, {data, error}] = useMutation(CREATE_USER);

  const onChange = (value: string, callBack: Function) => {
     callBack(() => value)
  }

  const handlerForgotButtonClick = () => {
    console.log('Forgot Password');
  }

  const storeData = async (key: string, data: any) => {
    try {
      await AsyncStorage.setItem(`@${key}`, data[key])
    } catch (e) {
      console.error('Error async storage:', e)
    }
  }

  const handlerLoginButtonClick = async() => {
    await createUser({variables: {email: email, password: pass}});
    if (data) {
      storeData('userId', data['createUser']) 
    }
    navigation.navigate(Routes.root);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
         My Dictionary
      </Text>
      <View style={styles.inputsContainer}>

      <Input 
        value={email} 
        placeholder=''
        onChange={(value: string) => onChange(value, setEmail)}
        icon = {<Ionicons name="md-mail-outline" size={15} color={Colors.mainGrey}  />}
      /> 

      <Input 
        value={pass} 
        placeholder=''
        onChange={(value: string) => onChange(value, setPass)}
        icon = {<Ionicons name="key-outline" size={15} color={Colors.mainGrey}  />}
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
            <Entypo name="facebook-with-circle" size={30} color={pressed ? Colors.mainGrey: Colors.mainBlack} />
          }
        </Pressable>
        
        <Pressable style={styles.socialIcon}>
          {({pressed}) =>
            <Entypo name="google--with-circle"size={30} color={pressed ? Colors.mainGrey: Colors.mainBlack} />
          }
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  inputsContainer: {
    width: '100%',
    marginBottom: '15%',
  },
  titleText: {
    fontSize: 36,
    fontWeight: '200',
    marginBottom: '10%',
    color: Colors.mainBlack,
    fontFamily: 'AmaticSC-Bold',
  },
   button: {
     width: '60%',
     height: 50,
   },
   socialContainer: {
     flex: 0.1,
     marginTop: 40,
     flexDirection: 'row',
     alignItems: 'flex-end',
   },
   socialIcon: {
     elevation: 3,
     marginHorizontal: 10,
   }
});
