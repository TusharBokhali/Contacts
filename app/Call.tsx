import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Call() {
    const route = useRoute();
    const {navigate,goBack} = useNavigation();
    // console.log(route.params.call.data);
    
  return (
    <SafeAreaView style={styles.Container}>
        <View style={{width: '100%',alignItems:'center',padding:15}}>
            <Image style={styles.Images}/>
            <Text style={{marginTop:5,color:'white'}}>SIM1</Text>
            <Text style={{marginTop:5,color:'white',fontSize:22,fontWeight:'600'}}>{`${route.params.call.data.Name} ${route.params.call.data.UserName}`}</Text>
            <Text style={{color:'white',marginTop:5}}>{route.params.call.data.Number}</Text>
            <Text style={{color:'white',marginTop:5}}>Ringing...</Text>
        </View>
        <View style={styles.Handling}>
            <View style={{padding:15,flexDirection:'row',width:'99%',justifyContent:'space-around',marginTop:20}}>
                <TouchableOpacity>
                    <View style={styles.Back}><Ionicons name="keypad" size={24} color="white" style={{textAlign:'center'}}/></View>
                    <Text style={{color:'white',marginTop:5,textAlign:'center'}}>Keypad</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.Back}><MaterialCommunityIcons name="microphone-off" size={24} color="white" style={{textAlign:'center'}}/></View>
                    <Text style={{color:'white',marginTop:5,textAlign:'center'}}>Mute</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.Back}><MaterialCommunityIcons name="volume-high" size={24} color="white" style={{textAlign:'center'}}/></View>
                    <Text style={{color:'white',marginTop:5,textAlign:'center'}}>Speaker</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.Back}><Feather name="more-vertical" size={24} color="white" style={{textAlign:'center'}}/></View>
                    <Text style={{color:'white',marginTop:5,textAlign:'center'}}>More</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.Cut} onPress={()=>goBack()}>
            <MaterialCommunityIcons name="phone-hangup-outline" size={34} color="white" style={{textAlign:'center'}}/>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#4d4545',
        justifyContent:'space-between'
    },
    Images:{
        width: 100,
        height:100,
        backgroundColor:'black',
        borderRadius:50,
    },
    Handling:{
        width:'100%',
        height:300,
        backgroundColor:'#584a4a',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
    },
    Back:{
        width:50,
        height:50,
        backgroundColor:'#4d4545',
        borderRadius:50,
        justifyContent:'center',
    },
    Cut:{
        width:70,
        height:70,
        backgroundColor:'#e74040',
        borderRadius:50,
        justifyContent:'center',
        alignSelf:'center',
        marginVertical:50
    }

})