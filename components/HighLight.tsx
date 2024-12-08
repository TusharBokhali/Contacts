import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import SearchBar from './SearchBar';

export default function HighLight() {
  const [data, setData] = useState([]);
  const {navigate,goBack} = useNavigation();3
  const [search,setSearch] = useState('')
  const Focused = useIsFocused();

  useEffect(() => {
    const getData = async () => {
      const fav = await AsyncStorage.getItem('bookmark');
      const save = JSON.parse(fav);

      if (save) {
        setData(save)
      }
    }
    getData();
  }, [Focused])
  
  return (
    <SafeAreaView style={styles.Container}>
      <SearchBar setSerch = {setSearch}/>
      <View style={{ flexDirection: 'row', width: '25%', gap: 5, marginTop: 25, alignItems: 'center', marginBottom: 20 }}>
        <Entypo name="star" size={15} color="black" />
        <Text>Favourites</Text>
      </View>
      <View>
        {
          data.length ? (
            data.filter((el)=>{
              return el.Name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            }).map((el,inx)=>{
              return(
            <View key={inx} >
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',gap:15,marginVertical:10}} onPress={() => navigate(`DetailsContact`, { data: el })} onLongPress={() => setpopup(true)}>
              <View style={styles.ContactImage}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>{el.Name[0]}</Text>
              </View>
              <Text style={styles.ContactName}>{`${el.Name} ${el.UserName}`}</Text>
            </TouchableOpacity>
          </View>
              ) 
            })

          ):('')
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 15
  },
  ContactImage: {
    width: 50,
    height: 50,
    backgroundColor: getRandomColor(),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}