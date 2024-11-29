import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import {useNavigation} from '@react-navigation/native'
import LogIn from '@/components/LogIn'
import Animated, { FadeInDown, FadeInLeft, FadeInUp } from 'react-native-reanimated'


export default function Welcome() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Animated.Text style={styles.Title} entering={FadeInUp.delay(300).duration(600)}>Welcome</Animated.Text>
                <Animated.View entering={FadeInLeft.delay(200).duration(600)}>
                    <Image source={require('@/assets/images/Welcome_Logo.png')} />
                </Animated.View>
            </View>
            <Animated.View entering={FadeInDown.delay(200).duration(800)}>
                <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('LogIn')}>
                    <Text style={{color:'white',fontSize:18,fontWeight:'600',textAlign:'center',}}>Get Started</Text>
                </TouchableOpacity>
            </Animated.View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4580ee',
        justifyContent:'space-around',
        padding:15,
    },
    Title: {
        fontSize: 38,
        textAlign: 'center',
        fontWeight: '600',
        color: 'white',
    },
    Button:{
        backgroundColor:'#0344f5',
        padding:10,
        borderRadius:10,
        marginHorizontal:15,
    }
})