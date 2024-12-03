import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
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
export default function RootLayout() {

  const navigation = useNavigation();
  useEffect(() => {
    const GetData = async () => {
      const data = await AsyncStorage.getItem('User');
      const user = JSON.parse(data)
      if (user) {
        navigation.navigate('Home')
      }
    }
    GetData();
  }, [])

  const Stack = createStackNavigator();
  return (
    <>
      <StatusBar style='auto' />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='SingIn' component={SingIn} />
        <Stack.Screen name='LogIn' component={LogIn} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='TabBar' component={TabBar} />
        
      </Stack.Navigator>
    </>

  );
}
