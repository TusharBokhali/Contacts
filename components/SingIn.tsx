import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';

export default function SingIn() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [username,setUserName] = useState('');

  const navigation = useNavigation();

const create = () =>{
  if(password!=="" || email!=="" || username!==""){
    if(email!==""){
      if(password!==""){
        if(username!==""){
          try {
            axios.post('https://interviewhub-3ro7.onrender.com/admin/signup',{
              "username": username,
              "email": email,
              "password": password
            }).then((res)=>{
              if(res.data){
              Alert.alert('Account Successfully Create!');
              setUserName('')
              setEmail('')
              setPassword('');
              navigation.navigate('LogIn');
            }
          }).catch((e)=>{
            Alert.alert('Account Already Create!');
            setUserName('')
            setEmail('')
            setPassword('');
          })
        } catch (error) {
          console.log(error);
        }
      }else{
        Alert.alert('Please Enter Username!')
      }
    }else{
      Alert.alert('Please Enter Password!')
    }
  }else{
    Alert.alert('Please Enter Email!')
  }
}else{
  Alert.alert('Please Enter The All field!');

}
}
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View entering={FadeInLeft.delay(200).duration(500)}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      </Animated.View>
    <Animated.View entering={FadeInRight.delay(200).duration(400)}>
      <Image source={require('@/assets/images/Phone Logo.png')} style={{width:200,height:200,margin:'auto',}}/>
      <View>
            <Text style={{fontWeight:'600',fontSize:18,marginBottom:20,}}>Create your Account</Text>
            <TextInput
            placeholder='Email'
            textContentType='emailAddress'
            value={email}
            onChangeText={setEmail}
            style={styles.Input}
            />

            <TextInput 
            placeholder='Password'
            textContentType='password'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.Input}
            />

            <TextInput 
            placeholder='Username'
            textContentType='username'
            value={username}
            onChangeText={setUserName}
            style={styles.Input}
            />
      </View>
      <TouchableOpacity style={styles.Btn} onPress={()=>create()}>
        <Text style={{color:'white',textAlign:'center',fontWeight:'600',}}>Sing in</Text>
      </TouchableOpacity>
      <Text style={{marginTop:20,textAlign:'center',fontWeight:'600',}}>- Or Sing in with -</Text>
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
      <View style={{flexDirection:'row',marginTop:10,alignItems:'center',padding:15,justifyContent:'center',}}>
        <Text>Already an have account</Text>
        <TouchableOpacity style={{marginHorizontal:5,}} onPress={()=>navigation.navigate('LogIn')}>
          <Text style={{fontWeight:'600',}}>Log In</Text>
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