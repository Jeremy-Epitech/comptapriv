import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Menu } from './src/components/Menu';

export default function App() {
  return (
    <View>
      <Menu />
      {/* <Text style='container'>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}
