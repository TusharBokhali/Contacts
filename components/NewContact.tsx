import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function NewContact() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [company, setCompany] = useState('')
    const [number, setNumber] = useState('91+ ')
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', width: '99%', justifyContent: 'space-between', alignItems: 'center', padding: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                    <Ionicons name="close-sharp" size={24} color="black" />
                    <Text style={{ fontWeight: '500', fontSize: 20 }}>Create contact</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>

                    <TouchableOpacity style={styles.BTN}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="more-vertical" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '99%', alignItems: 'center', gap: 15, marginTop: 20, backgroundColor: '#EBE2C5', paddingVertical: 10, padding: 15 }}>
                <Text style={{ color: 'black' }}>Save to</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderWidth: 0.5, borderRadius: 20, padding: 2 }}>
                    <Image source={require('@/assets/images/Google.png')} style={{ width: 25, height: 25 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                        <Text style={{ color: 'black' }}>reactNativeDevelopment@gmail.com</Text>
                        <Entypo name="chevron-small-down" size={22} color="black" style={{ marginTop: 2 }} />
                    </View>
                </View>
            </View>
            <ScrollView>

                <TouchableOpacity style={styles.ImageLogo}>
                    <Image source={require('@/assets/images/Add Image.png')} style={{ width: 70, height: 70, }} />
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', marginTop: 10, color: '#af8a44' }}>Add picture</Text>
                <View style={styles.MainInput}>
                    <TextInput
                        placeholder='First name'
                        value={name}
                        onChangeText={setName}
                        style={styles.Input}
                    />

                    <TextInput
                        placeholder='Surname'
                        value={surname}
                        onChangeText={setSurname}
                        style={styles.Input}
                    />

                    <TextInput
                        placeholder='Company'
                        value={company}
                        onChangeText={setCompany}
                        style={styles.Input}
                    />

                    <TextInput
                        placeholder='IN'
                        value={number}
                        keyboardType='numeric'
                        textContentType='telephoneNumber'
                        onChangeText={setNumber}
                        style={styles.Input}
                    />

                    <TouchableOpacity style={styles.MoreBTN}>
                        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
                        <Text>Add email</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.MoreBTN}>
                    <MaterialCommunityIcons name="cake-variant-outline" size={24} color="black" />
                        <Text>Add birthaday</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.MoreBTN}>
                    <Ionicons name="location-outline" size={24} color="black" />
                        <Text>Add address</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.MoreBTN}>
                    <MaterialIcons name="label-outline" size={24} color="black" />
                        <Text>Add to label</Text>
                    </TouchableOpacity>

                    <TextInput
                        placeholder='Notes'
                        style={[styles.Input,{height:80,}]}
                    />
                    <View style={{width:'70%',marginHorizontal:'auto'}}>
                    <TouchableOpacity style={styles.LastBTN}>
                        <Text>Add fields</Text>
                    </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    BTN: {
        backgroundColor: '#af8a44',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 20
    },
    ImageLogo: {
        width: 120,
        height: 120,
        backgroundColor: '#af8a44',
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30
    },
    Input: {
        borderWidth: 1,
        height: 50,
        width: '70%',
        borderRadius: 5,
        paddingLeft: 15,
        fontSize: 18,
        marginVertical: 10
    },
    MainInput: {
        width: '100%',
        padding: 15,
        alignItems: 'center'
    },
    MoreBTN: {
        flexDirection: 'row',
        width: '70%',
        paddingVertical: 10,
        backgroundColor: '#E7E5AC',
        alignItems:'center',
        gap:10,
        borderRadius:30,
        justifyContent:'center',
        marginVertical:10
    },
    LastBTN:{
        paddingHorizontal:15,
        paddingVertical:5,
        borderRadius:20,
        borderWidth:1,
        borderColor:'#E7E5AC',
        
    }
})