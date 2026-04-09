import { Ionicons } from '@expo/vector-icons'; // Inclus par défaut dans Expo
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

export default function Identity() {
  const router = useRouter();

  // États pour stocker les informations saisies
  const [role, setRole] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [community, setCommunity] = useState('');

  const handleFinish = () => {
    // Logique finale (ex: envoyer à la base de données)
    console.log("Profil complété :", { role, plateNumber, vehicleType, community });
    alert("Identité enregistrée avec succès !");
    // router.push('/home'); // Redirection vers l'écran principal plus tard
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Bandeau Taxi Safe */}
        <View style={styles.header}>
          <Text style={styles.headerLogo}>Taxi Safe</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Inscrivez votre identité</Text>

          {/* Avatar / Icône de Profil */}
          <View style={styles.avatarContainer}>
            <View style={styles.circle}>
              <Ionicons name="person" size={80} color="#000" />
            </View>
          </View>

          {/* Formulaire */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Vous êtes conducteur (moto ou véhicule)</Text>
            <TextInput 
              style={styles.input} 
              value={role} 
              onChangeText={setRole} 
              placeholder="Ex: Conducteur moto"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Numéro de plaque</Text>
            <TextInput 
              style={styles.input} 
              value={plateNumber} 
              onChangeText={setPlateNumber} 
              placeholder="Ex: ABC-1234"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Type de véhicule</Text>
            <TextInput 
              style={styles.input} 
              value={vehicleType} 
              onChangeText={setVehicleType} 
              placeholder="Ex: Toyota / Yamaha"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nom de la communauté d’appartenance</Text>
            <TextInput 
              style={styles.input} 
              value={community} 
              onChangeText={setCommunity} 
              placeholder="Nom de votre groupe"
            />
          </View>

          {/* Bouton Valider */}
          <Pressable 
            style={({ pressed }) => [
              styles.btnValider,
              { backgroundColor: pressed ? '#E6B800' : '#FFCC33' }
            ]} 
            onPress={handleFinish}
          >
            <Text style={styles.btnText}>Valider</Text>
          </Pressable>
        </View>

        {/* Triangle décoratif orange */}
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
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 25,
    paddingTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 20,
    color: '#000',
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'sans-serif-condensed',
  },
  avatarContainer: {
    marginBottom: 25,
    alignItems: 'center',
  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 15,
    marginBottom: 6,
    color: '#000',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  btnValider: {
    width: width * 0.45,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
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