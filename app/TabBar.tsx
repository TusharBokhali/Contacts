import { View, Text, Dimensions, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import HighLight from '@/components/HighLight';
import Organise from '@/components/Organise';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlatformPressable } from '@react-navigation/elements';

// 
export default function TabBar() {
  const Tab = createBottomTabNavigator();
  const offseValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 80,
          paddingTop: 15,
          backgroundColor: '#CAB46C',
        },

      }}
      // tabBar={(props) => <MyTabBar {...props} />}
      >

        <Tab.Screen name="Contacts" component={Home}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <FontAwesome6 name="user" size={22} color={focused ? 'black' : 'gray'} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{
                fontWeight: '700',
                fontSize: 12,
                marginTop: 5,
                color: focused ? 'black' : 'gray', // Label color based on focus state
              }}>
                Contacts
              </Text>
            ),

          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(offseValue, {
                toValue: 0,
                useNativeDriver: true
              }).start();
            }
          })} />
        <Tab.Screen name="HighLight" component={HighLight}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons name="bookmark-plus" size={22} color={focused ? 'black' : 'gray'} style={{ fontWeight: focused ? '600' : '500' }} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{
                fontWeight:'700',
                fontSize: 12,
                marginTop: 5,
                color:focused ? 'black' : 'gray'
              }}>
                Highlight
              </Text>
            ),
          
          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(offseValue, {
                toValue: GetWidth() * 2,
                useNativeDriver: true
              }).start();
            }
          })}
        />
        <Tab.Screen name="Organise" component={Organise} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Octicons name="organization" size={22} color={focused ? 'black' : 'gray'} />
          ),
           tabBarLabel: ({ focused }) => (
              <Text style={{
                fontWeight:'700',
                fontSize: 12,
                marginTop: 5,
                color:focused ? 'black' : 'gray'
              }}>
                Organise
              </Text>
            ),
        }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(offseValue, {
                toValue: GetWidth() * 4,
                useNativeDriver: true
              }).start();
            }
          })}
        />
      </Tab.Navigator>
      <Animated.View style={{
        width: GetWidth()-5,
        height: 30,
        backgroundColor: '#8198A8',
        position: 'absolute',
        bottom: 30,
        borderRadius: 20,
        zIndex: 1,
        left: 35,
        opacity: 0.5,
        transform: [
          { translateX: offseValue }
        ]
      }}>

      </Animated.View>
    </>
  )
}

function GetWidth() {
  let width = Dimensions.get('screen').width;

  width = width / 2
  return width / 3;
}