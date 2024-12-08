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
import DetailsContacts from './users';
import DetailsContact from './users/DetailsContact';
import { MenuProvider } from 'react-native-popup-menu';
import Call from './Call';
export default function RootLayout() {
  const Stack = createStackNavigator();
  return (
    <>
    <MenuProvider>

      <StatusBar style='auto' />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='SingIn' component={SingIn} />
        <Stack.Screen name='LogIn' component={LogIn} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='TabBar' component={TabBar} />
        <Stack.Screen name='NewContact' component={NewContact} />
        <Stack.Screen name='Users' component={DetailsContacts} />
        <Stack.Screen name='DetailsContact' component={DetailsContact} />
        <Stack.Screen name='Call' component={Call} />
      </Stack.Navigator>
    </MenuProvider>
    </>

  );
}
