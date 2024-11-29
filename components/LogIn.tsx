import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LogIn() {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Image source={require('@/assets/images/Phone Logo.png')} style={{width:200,height:200,margin:'auto',}}/>
      <View>
            <Text style={{fontWeight:'600',fontSize:18,marginBottom:20,}}>Login to your Account</Text>
            <TextInput 
            placeholder='Email'
            value=''
            onChangeText={()=>{}}
            style={styles.Input}
            />

            <TextInput 
            placeholder='Password'
            value=''
            onChangeText={()=>{}}
            style={styles.Input}
            />
      </View>
      <TouchableOpacity style={styles.Btn}>
        <Text style={{color:'white',textAlign:'center',fontWeight:'600',}}>Sing in</Text>
      </TouchableOpacity>
      <Text style={{marginTop:25,textAlign:'center',fontWeight:'600',}}>- Or Sing in with -</Text>
      <View style={styles.Social}>
            <Image source={require('@/assets/images/Google.png')} style={{width: 50,height:50,}}/>
      </View>
    </View>
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

    }
})