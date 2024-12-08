import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, EvilIcons, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetailsContact() {
  const route = useRoute();
  const { navigate, goBack } = useNavigation()
  const [fav,setFav] = useState([]);
  const [allId,setAllId] = useState([]);
  
  
  
  const Deletes = () =>{
    try {
      axios.delete(`https://generateapi.onrender.com/api/Contact/${route.params.data._id}`,{
        'headers':{
          'Authorization':'s98qiTaKGOSaOpzM',
        }
      }).then((res)=>{
        Alert.alert('Successfully Delete');
        goBack();
      })
    } catch (error) {
      console.log(error);
      
    }
  }
  const Data = async ()=>{
    let data = await AsyncStorage.getItem('bookmark')
    let final = JSON.parse(data)
    setFav(final)
    let datas = final.map((el,inx)=>{
      return el._id 
     })
     setAllId(datas)
  }
  useEffect(()=>{
    Data()
  },[])

  const Favourites = async(el:any) =>{
   let save: any[] = [];   
    
   if(fav!=="" && fav!==null){
     save  = [...fav]
   }
    
   if(!allId.includes(route.params.data._id)){
      save.push(el)
      await AsyncStorage.setItem('bookmark',JSON.stringify(save))
     Data()
    }else{
      let index = save.findIndex((el) => el._id === route.params.data._id);
      save.splice(index,1);
      await AsyncStorage.setItem('bookmark',JSON.stringify(save))
      Data()
    }
  }

  

  return (
    <SafeAreaView style={styles.Container}>
      <View>
        <View style={{ flexDirection: 'row', width: '99%', alignItems: 'center', justifyContent: 'space-between' }}>
          <View>
            <TouchableOpacity onPress={() => goBack()}>

              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <TouchableOpacity onPress={()=>navigate(`NewContact`,{data:route.params.data})}>

              <MaterialIcons name="edit" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Favourites(route.params.data)}>

              <Ionicons name={allId.includes(route.params.data._id) ? "star" :"star-outline"} size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>

              <SimpleLineIcons name="settings" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.UserImage}>
          <Image />
        </View>
        <Text style={styles.UserName}>{`${route.params.data.Name} ${route.params.data.UserName}`}</Text>
        <View style={{ flexDirection: 'row', width: '99%', justifyContent: 'space-around', marginTop: 30 }}>
          <TouchableOpacity onPress={()=>navigate(`Call`, {call:route.params})}>
            <Feather name="phone" size={24} color="black" style={styles.Logo} />
            <Text style={{ textAlign: 'center', marginTop: 5 }}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="message-text-outline" size={24} color="black" style={styles.Logo} />
            <Text style={{ textAlign: 'center', marginTop: 5 }}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="video" size={24} color="black" style={styles.Logo} />
            <Text style={{ textAlign: 'center', marginTop: 5 }}>Set up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons name="location-pin" size={24} color="black" style={[styles.Logo,]} />
            <Text style={{ textAlign: 'center', marginTop: 5, }}>Location</Text>
            <Text>Sharing</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ContactInfo}>
          <Text>Contact info</Text>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center',width:'99%',justifyContent:'space-between',marginTop:30}} onPress={()=>navigate(`Call`, {call:route.params})}>
            <View style={{flexDirection:'row',alignItems:'center'}}>

            <Feather name="phone" size={24} color="black" style={styles.Logo} />
            <View>
              <Text>{route.params.data.Number}</Text>
              <Text>Mobile via SIM1</Text>
            </View>
            </View>
            <MaterialCommunityIcons name="message-text-outline" size={24} color="black" style={styles.Logo} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{flexDirection:'row',width:'99%',alignItems:'center',gap:15,marginVertical:20}}>
        <MaterialIcons name="block-flipped" size={24} color="red" />
        <Text style={{color:'red'}}>Block number</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',width:'99%',alignItems:'center',gap:15,marginVertical:10}} onPress={()=>Deletes()}>
        <AntDesign name="delete" size={24} color="red" />
        <Text style={{color:'red'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container: {
    padding: 15
  },
  UserImage: {
    width: 200,
    height: 200,
    borderRadius: '100%',
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop: 50
  },
  UserName: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20
  },
  Logo: {
    backgroundColor: '#E7E5AB',
    padding: 10,
    borderRadius: 30,
    width: 50,
  },
  ContactInfo: {
    height: 150,
    backgroundColor: '#E7E5AB',
    marginTop: 20,
    borderRadius: 10,
    padding: 15
  }
})