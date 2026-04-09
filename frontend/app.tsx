import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; // Correction : StyleSheet (S majuscule) et react-native sans espace

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Correction : backgroundColor (C majuscule) et #fff (blanc) au lieu de #tff
    alignItems: 'center',    // Correction : alignItems (I majuscule)
    justifyContent: 'center',
  },
}); 