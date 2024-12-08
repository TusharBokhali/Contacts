import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '@/components/SearchBar'
import { FontAwesome6 } from '@expo/vector-icons'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import { useIsFocused } from '@react-navigation/native'
import axios from 'axios'
import { Link } from 'expo-router'
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from 'react-native-popup-menu';
import AsyncStorage from '@react-native-async-storage/async-storage'
import DialogContainer from 'react-native-dialog/lib/Container'
import Dialog from "react-native-dialog";

export default function Home() {
  const { navigate, goBack } = useNavigation();
  const [contact, setContact] = useState([])
  const [search, setSearch] = useState('')
  const [popup, setpopup] = useState(false)
  const [id, setId] = useState(null)
  const [email, setemail] = useState('')
  const isfocused = useIsFocused();
  const [Favourites, setFavourites] = useState([]);
  const [open,setOpen] = useState(false)

  useEffect(() => {
    GetContacts();
  }, [isfocused])

  useEffect(() => {
    const GetData = async () => {
      const data = await AsyncStorage.getItem('User');
      const fav = await AsyncStorage.getItem('bookmark');
      const save = JSON.parse(fav);
      if (save) {
        setFavourites(save)
      }
      const user = JSON.parse(data);
      if (user) {
        setemail(user.data.email)
      }
    }
    GetData();
  }, [isfocused])




  const GetContacts = () => {
    try {
      axios.get('https://generateapi.onrender.com/api/Contact', {
        'headers': {
          'Authorization': 's98qiTaKGOSaOpzM'
        }
      }).then((res) => {
        if (res.data) {
          setContact(res.data.Data)
        }
      })
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <SearchBar setSerch={setSearch} />
        <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginHorizontal: 10, alignItems: 'center' }}>
              <FontAwesome6 name="user" size={18} color={'black'} />
            </View>
            <Text style={{ marginRight: 5 }}>{email}</Text>
            <Entypo name="chevron-small-down" size={22} color="black" style={{ marginTop: 2 }} />
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity onPress={()=>setOpen(true)}>
              <MaterialCommunityIcons name="label-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 15 }}>

              <Ionicons name="filter" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', width: '25%', gap: 5, marginTop: 25, alignItems: 'center', marginBottom: 20 }}>
          <Entypo name="star" size={15} color="black" />
          <Text>Favourites</Text>
        </View>

        {
          Favourites.length ? (
            <TouchableOpacity style={styles.MainContact}>
              <View style={{ flexDirection: 'column' }}>
              {
                Favourites.filter((el)=>{
                  return el.Name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                }).map((el, inx) => {
                  return (
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
              }
              </View>
            </TouchableOpacity>
          ) : ('')
        }
        <View style={{ marginTop: 20 }}>
          <Text>A</Text>
          {
            contact.sort((a, b) => {
              return a.Name[0].localeCompare(b.Name[0]);
            }).filter((el, inx) => {

              return el.Name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            }).map((el, inx) => {

              return (
                <View key={inx}>
                  <TouchableOpacity style={styles.MainContact} onPress={() => navigate(`DetailsContact`, { data: el })} onLongPress={() => setpopup(true)}>
                    <View style={styles.ContactImage}>
                      <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>{el.Name[0]}</Text>
                    </View>
                    <Text style={styles.ContactName}>{`${el.Name} ${el.UserName}`}</Text>
                  </TouchableOpacity>
                  {
                    popup ? (
                      <Menu>
                        <MenuTrigger text='Select action' children />
                        <MenuOptions>
                          <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                          <MenuOption onSelect={() => alert(`Delete`)} >
                            <Text style={{ color: 'red' }}>Delete</Text>
                          </MenuOption>
                          <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
                        </MenuOptions>
                      </Menu>
                    ) : ('')
                  }
                </View>
              )
            })
          }

        </View>
      </ScrollView>
      <View style={styles.Fix}>
        <TouchableOpacity style={styles.AddContact} onPress={() => navigate(`NewContact`, { mail: email })}>
          <Feather name="plus" size={24} color="black" style={{ textAlign: 'center' }} />
        </TouchableOpacity>
      </View>
      <Dialog.Container visible={open} contentStyle={{borderRadius:20,}}>
      <Dialog.Title>Create label</Dialog.Title>
      <TextInput 
      placeholder=''
      style={{borderWidth:1,borderRadius:5,height:50,fontSize:22,marginVertical:20,paddingLeft:10}}
      />
      <Dialog.Button label="Cancel" onPress={()=>setOpen(false)} />
      <Dialog.Button label="Ok" onPress={()=>setOpen(false)} />
    </Dialog.Container>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  Fix: {
    position: 'absolute',
    bottom: 100,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  AddContact: {
    width: 50,
    height: 50,
    backgroundColor: '#ffd900',
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 20
  },
  MainContact: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
    marginVertical: 10
  },
  ContactImage: {
    width: 50,
    height: 50,
    backgroundColor: getRandomColor(),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ContactName: {
    color: '#423C2E',
    fontSize: 16
  },
  Input:{
    borderWidth:0.5
  }
})

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
