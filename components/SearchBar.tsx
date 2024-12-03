import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';

export default function SearchBar() {
  return (
    <View style={styles.SearchMain}>
      <View style={{flexDirection:'row',alignItems:'center',width:'90%'}}>
        <Fontisto name="search" size={18} color="black" style={{marginRight:10}}/>
        <TextInput placeholder='Search Contacts'
        placeholderTextColor={'#5a5b5c'}
        
        style={{color:'#A2A6AA',letterSpacing:0.5,width:'100%',paddingVertical:6,fontWeight:'600',}}
        />
      </View>
        <Image source={require('@/assets/images/Google.png')} style={{width: 35,height:35}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  SearchMain:{
    paddingVertical:5,
    borderRadius:25,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:15,
    backgroundColor:'#E6E7F9',
    width:'100%',
  }
})