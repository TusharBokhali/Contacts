import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
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

export default function Home() {
  const { navigate } = useNavigation();
  const [contact, setContact] = useState([])
  const [search, setSearch] = useState('')
  const isfocused = useIsFocused();

  useEffect(() => {
    GetContacts();
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
            <Text style={{ marginRight: 5 }}>reactNative@gmail.com</Text>
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
        <View style={{ flexDirection: 'row', width: '25%', gap: 5, marginTop: 25, alignItems: 'center', marginBottom: 20 }}>
          <Entypo name="star" size={15} color="black" />
          <Text>Favourites</Text>
        </View>

        {
          contact.length ? (
            <TouchableOpacity style={styles.MainContact}>
              <View style={styles.ContactImage}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>{contact[0].Name[0]}</Text>
              </View>
              <Text style={styles.ContactName}>{`${contact[0].Name} ${contact[0].UserName}`}</Text>
            </TouchableOpacity>
          ) : ('')
        }
        <View style={{ marginTop: 20 }}>
          <Text>A</Text>
          {
            contact.sort((a, b) => {
              return a.Name.toLowerCase() - b.Name.toLowerCase()
            }).filter((el, inx) => {

              return el.Name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            }).map((el, inx) => {

              return (
                <View key={inx}>
                  <TouchableOpacity style={styles.MainContact} onPress={() => navigate(`Test`, { data: el })}>
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
        <View style={styles.Fix}>
          <TouchableOpacity style={styles.AddContact} onPress={() => navigate('NewContact')}>
            <Feather name="plus" size={24} color="black" style={{ textAlign: 'center' }} />
          </TouchableOpacity>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  Fix: {
    width: '100%',
    height: '65%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'fixed',
    bottom: 0,
    right: 0,
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
    backgroundColor: '#f06e83',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ContactName: {
    color: '#423C2E',
    fontSize: 16
  }
})