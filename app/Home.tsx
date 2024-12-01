import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '@/components/SearchBar'

export default function Home() {
  return (
   <SafeAreaView style={styles.container}>
      <SearchBar />
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:15,
  }
})