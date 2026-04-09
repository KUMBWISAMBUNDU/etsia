import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
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

export default function Login() {
  const router = useRouter();
  
  // États pour stocker les saisies
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
        {/* Bandeau orange Taxi Safe */}
        <View style={styles.header}>
          <Text style={styles.headerLogo}>Taxi Safe</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Je me Connecte</Text>

          {/* Champ Téléphone */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Saisie du numéro de téléphone</Text>
            <TextInput 
              style={styles.input} 
              placeholder="00 00 00 00 00"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </View>

          {/* Champ Mot de passe */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>saisie du Mot de passe</Text>
            <TextInput 
              style={styles.input} 
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>

          {/* Bouton Valider */}
          <Pressable 
            style={({ pressed }) => [
              styles.btnValider,
              { opacity: pressed ? 0.8 : 1 }
            ]} 
            onPress={() => console.log('Connexion avec :', phone)}
          >
            <Text style={styles.btnText}>valider</Text>
          </Pressable>
        </View>

        {/* Pied de page : Case à cocher et Triangle */}
        <View style={styles.footer}>
          <View style={styles.footerRow}>
            <Pressable 
              style={[styles.checkbox, agreed && styles.checkboxChecked]} 
              onPress={() => setAgreed(!agreed)} 
            />
            <Text style={styles.footerText}>Acceptation des conditions</Text>
          </View>
        </View>

        {/* Triangle décoratif */}
        <View style={styles.triangleCorner} />

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#F39C12',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  headerLogo: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    marginLeft: 10,
  },
  input: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
  btnValider: {
    backgroundColor: '#FFCC33',
    width: width * 0.6,
    paddingVertical: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    marginTop: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  btnText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textTransform: 'lowercase',
  },
  footer: {
    paddingLeft: 30,
    paddingBottom: 40,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#F39C12',
  },
  footerText: {
    fontSize: 14,
    color: '#333',
  },
  triangleCorner: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    borderRightWidth: 120,
    borderTopWidth: 120,
    borderRightColor: '#F39C12',
    borderTopColor: 'transparent',
    transform: [{ rotate: '90deg' }],
  },
});