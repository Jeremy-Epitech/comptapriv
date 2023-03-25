import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Menu } from './src/components/Menu';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Menu />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
