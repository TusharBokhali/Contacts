import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome';
import { NavigationContainer } from '@react-navigation/native';
import SingIn from '@/components/SingIn';
import LogIn from '@/components/LogIn';
import Home from './TabBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import TabBar from './TabBar';
import Loader from '@/components/Loader';
import NewContact from '@/components/NewContact';
export default function RootLayout() {
  const Stack = createStackNavigator();
  return (
    <>
        <StatusBar style='auto' />
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='SingIn' component={SingIn} />
        <Stack.Screen name='LogIn' component={LogIn} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='TabBar' component={TabBar} />
        <Stack.Screen name='NewContact' component={NewContact} />
      </Stack.Navigator>
    </>

  );
}
