import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Menu } from './src/components/Menu';
import { Compte } from './src/pages/Compte';

export default function App() {
  return (
    <View style={styles.main}>
      <Compte />
      {/* <Menu /> */}
      {/* <Text style='container'>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    border: '3px solid red',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
