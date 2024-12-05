import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useRoute } from '@react-navigation/native';

export default function DetailsContact() {
  const { id } = useLocalSearchParams();
  const route = useRoute()
  console.log(route.params);

  return (
    <View>
      <Text>hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})