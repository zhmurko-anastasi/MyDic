import * as React from 'react';
import { Asset } from 'expo-asset';
import * as ImagePicker from 'expo-image-picker';
import { Alert, Pressable, StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';

import { Routes } from '../../constants/Routes';
import { Colors } from '../../constants/Colors';
import { RootStackScreenProps } from '../../constants/types';
import { Input, StyledLine, Switch } from '../../components';

const DEFAULT_URI_AVATAR = '../../../assets/images/avatar.png';
const DEFAULT_URI_BACKGROUD = '../../../assets/images/backgr.png';

const getPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Sorry, we need camera roll permissions to make this work!');
      return false;
    } else {
      return true;
    }
}

export const ProfileScreen = ({ navigation }: RootStackScreenProps<Routes.profile>) => {
  const [image, setImage] = React.useState('');
  const [bcground, setBcground] = React.useState('');
  const [name, setName] = React.useState('Anastasiia');
  const [lightTheme, setLightTheme] = React.useState(true);
  const [email, setEmail] = React.useState('email@gmail.com');
  const [nickName, setNickName] = React.useState('My NickName');
  const [pushNotification, setPushNotification] = React.useState(false);

  const pickImage = async () => {
    let isGranted = await getPermission();
    if (isGranted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };

  React.useEffect(() => {
    setImage(Asset.fromModule(require(DEFAULT_URI_AVATAR)).uri);
    setBcground(Asset.fromModule(require(DEFAULT_URI_BACKGROUD)).uri);
  }, [])

  return (
    <ScrollView style={styles.scroll}>
    <View style={styles.container}>
      <ImageBackground style={styles.imageContainer} source={{ uri: bcground }}>
        <Pressable onPress={pickImage} style={styles.imageWrape}>
          <Image
            style={styles.image}
            source={{ uri: image }}
          />
        </Pressable>

      </ImageBackground >

      <View style={styles.infoContainer}>

        <Text style={styles.title}> Profile </Text>
        <Input 
          icon={undefined} 
          value={nickName} 
          placeholder={'enter your nick'} 
          onChange={setNickName}
        />

        <StyledLine type={"direct"} color={'main'} />

        <Input 
          icon={undefined} 
          value={name} 
          placeholder={'enter your name'} 
          onChange={setName}
        />
        
        <StyledLine type={"reverse"} color={'secondary'} />

        <Input 
          icon={undefined} 
          value={email} 
          onChange={setEmail}
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchTitle}>Light theme on/off</Text>
        <Switch
          value={lightTheme}
          onChange={setLightTheme}
        />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchTitle}>Push Notifications on/off</Text>
          <Switch
            value={pushNotification}
            onChange={setPushNotification}
          /> 
        </View>
      </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
   flex: 1,
   backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 0.3,
    elevation: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    flex: 0.7,
    padding: 20,
    width: '90%',
  },
  imageWrape: {
    width: 150,
    height: 150,
    elevation: 4,
    borderWidth: 1,
    borderRadius: 70,
    backgroundColor: '#fff',
    borderColor: Colors.highlightMain,
    borderBottomColor: Colors.highlightSecondary,
  },
  image: {
    width: 149,
    height: 149,
    resizeMode: 'cover',
    borderRadius: 150,
  },
  switchContainer: {
    width: '100%',
    marginBottom: 10,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  switchTitle: {
    fontSize: 20,
    fontFamily: 'AmaticSC-Bold',
  },
  title: {
    fontSize: 26,
    color: Colors.mainBlack,
    fontFamily: 'AmaticSC-Bold',
  }
});
