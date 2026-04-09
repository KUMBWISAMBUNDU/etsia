import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

export default function Register() {
  const router = useRouter();
  
  // États pour stocker les données du formulaire
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  // Fonction de validation modifiée pour amener vers identity.tsx
  const handleRegister = () => {
    // 1. Vérifie si les champs sont vides
    if (!phone || !password) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }
    
    // 2. Vérifie si les conditions sont acceptées
    if (!isAgreed) {
      Alert.alert("Attention", "Vous devez accepter les conditions.");
      return;
    }
    
    // 3. Navigation vers la page identity.tsx
    // On utilise router.push pour changer de page
    router.push('/identity'); 
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* En-tête Orange */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Taxi Safe</Text>
        </View>

        <View style={styles.mainContent}>
          <Text style={styles.pageTitle}>Je Crée mon compte</Text>

          {/* Champ Téléphone */}
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Saisie du numéro de téléphone</Text>
            <TextInput 
              style={styles.textInput}
              placeholder="00 00 00 00 00"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          {/* Champ Mot de passe */}
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Réception & saisie Mot de passe</Text>
            <TextInput 
              style={styles.textInput}
              placeholder="••••••••"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Bouton de validation */}
          <Pressable 
            style={({ pressed }) => [
              styles.submitBtn,
              { backgroundColor: pressed ? '#E6B800' : '#FFCC33' }
            ]}
            onPress={handleRegister}
          >
            <Text style={styles.submitBtnText}>valider&creer mon profil</Text>
          </Pressable>
        </View>

        {/* Footer avec Checkbox et Triangle */}
        <View style={styles.footerSection}>
          <View style={styles.termsContainer}>
            <Pressable 
              style={[styles.checkbox, isAgreed && styles.checkboxActive]} 
              onPress={() => setIsAgreed(!isAgreed)}
            />
            <Text style={styles.termsText}>Acceptation des conditions</Text>
          </View>
        </View>

        {/* Le triangle orange décoratif */}
        <View style={styles.orangeTriangle} />

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#F39C12',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  headerText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  mainContent: {
    paddingHorizontal: 30,
    paddingTop: 40,
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 45,
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif-condensed',
  },
  inputBox: {
    width: '100%',
    marginBottom: 25,
  },
  inputLabel: {
    fontSize: 15,
    color: '#333',
    marginBottom: 8,
    paddingLeft: 10,
  },
  textInput: {
    width: '100%',
    height: 55,
    borderWidth: 1.5,
    borderColor: '#AAAAAA',
    borderRadius: 28,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
  submitBtn: {
    width: width * 0.8,
    paddingVertical: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    marginTop: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  submitBtnText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
  },
  footerSection: {
    marginTop: 'auto',
    paddingLeft: 30,
    paddingBottom: 60,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 12,
    backgroundColor: '#FFF',
  },
  checkboxActive: {
    backgroundColor: '#F39C12',
  },
  termsText: {
    fontSize: 14,
    color: '#444',
  },
  orangeTriangle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    borderRightWidth: 130,
    borderTopWidth: 130,
    borderRightColor: '#F39C12',
    borderTopColor: 'transparent',
    transform: [{ rotate: '90deg' }],
  },
});