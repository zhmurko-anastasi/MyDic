import * as React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { ColorSchemeName} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import  { Colors } from '../src/constants/Colors';
import { RootStackParamList, RootTabParamList } from '../src/constants/types';
import {
   HomeScreen, 
   ListScreen,
   LoginScreen,
   CreateScreen,
   ProfileScreen,
   DetailsScreen,
   SettingsScreen,
   NotFoundScreen, 
  }from '../src/modules';
import { Routes } from '../src/constants/Routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName={Routes.root}>
      <Stack.Screen name={Routes.login} component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name={Routes.details} component={DetailsScreen} options={{ headerShown: true }} />
      <Stack.Screen name={Routes.notFound} component={NotFoundScreen} options={{headerShown: false  }} />
      <Stack.Screen name={Routes.root} component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator initialRouteName={Routes.profile} screenOptions={{tabBarActiveTintColor: Colors.mainBlack, tabBarInactiveTintColor: Colors.mainGrey,}} >
      <BottomTab.Screen
        name={Routes.home}
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }: { color: string }) => <Ionicons color={color}  size={30} name="home" />,
        }}
      />
      <BottomTab.Screen
        name={Routes.profile}
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color}: { color: string }) => <Ionicons color={color}  size={30} name="person-circle-outline" />,
        }}
      />
      <BottomTab.Screen
        name={Routes.create}
        component={CreateScreen}
        options={{
          title: 'Create',
          tabBarIcon: ({ color }: { color: string }) => <Ionicons color={color}  size={30} name="add-circle-outline" />,

        }}
      />
      <BottomTab.Screen
        name={Routes.list}
        component={ListScreen}
        options={{
          title: 'List',
          tabBarIcon: ({ color }: { color: string }) => <Ionicons color={color} size={30} name="list" />,
        }}
      />
    </BottomTab.Navigator>
   );
}
