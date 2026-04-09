import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Page() {
  const router = useRouter(); // On place le router ICI, à l'intérieur du composant

  return (
    <View style={styles.container}>
      
      {/* 1. Contenu Texte (Bienvenue...) */}
      <View style={styles.textContainer}>
        <Text style={styles.bienvenue}>Bienvenue</Text>
        <Text style={styles.dans}>dans</Text>
        <Text style={styles.appli}>l'applioccation</Text>
      </View>

      {/* 2. Zone des Boutons */}
     <View style={styles.buttonContainer}>
  {/* BOUTON CRÉER UN COMPTE */}
  <Pressable 
    style={styles.outlineButton}
    onPress={() => router.push('/register')}
  >
    <Text style={styles.buttonText}>Créer un compte</Text>
  </Pressable>

  {/* BOUTON SE CONNECTER */}
  <Pressable 
    style={styles.outlineButton}
    onPress={() => router.push('/login')}
  >
    <Text style={styles.buttonText}>Se connecter</Text>
  </Pressable>
</View>

      {/* 3. Triangle Orange en bas à droite */}
      <View style={styles.triangleCorner} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  bienvenue: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#FFCC00', 
    fontFamily: 'sans-serif-condensed',
  },
  dans: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000',
    marginTop: -10,
  },
  appli: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20, // Espace entre les deux boutons
  },
  outlineButton: {
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
  triangleCorner: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 150,
    borderTopWidth: 150,
    borderRightColor: '#FF9933', 
    borderTopColor: 'transparent',
    transform: [{ rotate: '90deg' }],
  },
});