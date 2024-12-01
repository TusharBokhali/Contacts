import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';

export default function SearchBar() {
  return (
    <View style={styles.SearchMain}>
      <View style={{flexDirection:'row',alignItems:'center',}}>
        <Fontisto name="search" size={18} color="white" style={{marginRight:10}}/>
        <TextInput placeholder='Search Contacts'
        placeholderTextColor={'white'}
        />
      </View>
        <Image source={require('@/assets/images/Google.png')} style={{width: 35,height:35}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  SearchMain:{
    borderWidth:1,
    paddingVertical:5,
    borderRadius:25,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:15,
    backgroundColor:'#3b3939',
  }
})