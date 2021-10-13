/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';

import { Routes } from './Routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  [Routes.root]: NavigatorScreenParams<RootTabParamList> | undefined;
  [Routes.login]: NavigatorScreenParams<RootTabParamList> | undefined;
  [Routes.home]: NavigatorScreenParams<RootTabParamList> | undefined;
  [Routes.details]: NavigatorScreenParams<RootTabParamList> | undefined;
  [Routes.list]: NavigatorScreenParams<RootTabParamList> | undefined;
  [Routes.create]: NavigatorScreenParams<RootTabParamList> | undefined;
  [Routes.notFound]: NavigatorScreenParams<RootTabParamList> | undefined;
  [Routes.profile]: NavigatorScreenParams<RootTabParamList> | undefined;
  [Routes.settings]: NavigatorScreenParams<RootTabParamList> | undefined;
  [Routes.logOut]: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  [Routes.login]: undefined;
  [Routes.home]: undefined;
  [Routes.details]: undefined;
  [Routes.list]: undefined;
  [Routes.create]: undefined;
  [Routes.profile]: undefined;
  [Routes.settings]: undefined;
  [Routes.logOut]:  undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
