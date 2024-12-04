import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '@/components/SearchBar'
import { FontAwesome6 } from '@expo/vector-icons'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginHorizontal: 10, alignItems: 'center' }}>
            <FontAwesome6 name="user" size={18} color={'black'} />
          </View>
          <Text style={{ marginRight: 5 }}>reactNativeDevelopment@gmail.com</Text>
          <Entypo name="chevron-small-down" size={22} color="black" style={{ marginTop: 2 }} />
        </View>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="label-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 15 }}>

            <Ionicons name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection:'row',width:'25%',gap:5,marginTop:25,alignItems:'center'}}>
          <Entypo name="star" size={15} color="black" />
           <Text>Favourites</Text>
      </View>
      <View style={styles.Fix}>
        <TouchableOpacity style={styles.AddContact} onPress={()=>navigation.navigate('NewContact')}>
          <Feather name="plus" size={24} color="black" style={{textAlign:'center'}}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  Fix:{
    width:'100%',
    height:'75%',
    justifyContent:'flex-end',
    alignItems:'flex-end',
  },
  AddContact:{
    width:50,
    height:50,
    backgroundColor:'#ffd900',
    borderRadius:10,
    justifyContent:'center',
    marginBottom:20
  }
})