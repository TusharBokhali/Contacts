import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome';
import { NavigationContainer } from '@react-navigation/native';
import SingIn from '@/components/SingIn';
import LogIn from '@/components/LogIn';
export default function RootLayout() {

  const Stack = createStackNavigator();
  return (
    <>
      <StatusBar style='auto' />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='LogIn'>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='SingIn' component={SingIn} />
        <Stack.Screen name='LogIn' component={LogIn} />
      </Stack.Navigator>
    </>

  );
}
