import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Animated, { FadeIn, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function LogIn() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const navigation = useNavigation();
  const Log = () =>{
    try {
      axios.post('https://interviewhub-3ro7.onrender.com/admin/login',{
         "email" : email,
         "password" : password
      }).then(async(res)=>{
        if(res.data){
          Alert.alert('Successfully Login')
          await AsyncStorage.setItem('User',JSON.stringify(res.data))
          navigation.navigate('TabBar')
        }
      }).catch((e)=>{
        Alert.alert('Please Create The Account!')
      })
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View entering={FadeInLeft.delay(200).duration(600)}>
      <TouchableOpacity onPress={()=>navigation.navigate('Welcome')}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      </Animated.View>
    <Animated.View entering={FadeInRight.delay(400).duration(800)}>
      <Image source={require('@/assets/images/Phone Logo.png')} style={{width:200,height:200,margin:'auto',}}/>
      <Animated.View entering={FadeIn.delay(200).duration(500)}>
            <Text style={{fontWeight:'600',fontSize:18,marginBottom:20,}}>Login to your Account</Text>
            <TextInput 
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            style={styles.Input}
            />

            <TextInput 
            placeholder='Password'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.Input}
            />
      </Animated.View>
      <TouchableOpacity style={styles.Btn} onPress={()=>Log()}>
        <Text style={{color:'white',textAlign:'center',fontWeight:'600',}}>Sing in</Text>
      </TouchableOpacity>
      <Text style={{marginTop:30,textAlign:'center',fontWeight:'600',}}>- Or Sing in with -</Text>
      <View style={styles.Social}>
        <TouchableOpacity>
            <Image source={require('@/assets/images/Google.png')} style={{width: 50,height:50,}}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('@/assets/images/Facebook.png')} style={{width: 50,height:50,}}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('@/assets/images/Twitter.png')} style={{width: 50,height:50,}}/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',marginTop:30,alignItems:'center',padding:15,justifyContent:'center',}}>
        <Text>Dont't have an account?</Text>
        <TouchableOpacity style={{marginHorizontal:5,}} onPress={()=>navigation.navigate('SingIn')}>
          <Text style={{fontWeight:'600',}}>Sing up</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
    },
    Input:{
        marginVertical:15,
        marginHorizontal:20,
    },
    Btn:{
        backgroundColor:'#171772',
        marginHorizontal:20,
        paddingVertical:12,
        borderRadius:8,
        marginVertical:10,
    },
    Social:{
      flexDirection:'row',
      justifyContent:'space-around',
      paddingHorizontal:20,
      marginTop:40,
    }
})