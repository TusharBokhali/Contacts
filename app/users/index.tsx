import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function DetailsContacts() {
  const { id } = useLocalSearchParams();
  console.log(id);

  return (
    <View>
      <Text>hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})