import { useRouter } from 'expo-router';
import React from 'react';
import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

// Données fictives pour l'affichage (à remplacer par des données réelles plus tard)
const driverData = {
  profilePicture: 'https://via.placeholder.com/150', // URL de l'image de profil
  role: 'Moto',
  plate: 'BC235/23',
  vehicleType: 'Toyota RV4',
  community: '243Heurbourder'
};

export default function DriverPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* 1. Bandeau orange Taxi Safe */}
      <View style={styles.header}>
        <Text style={styles.headerLogo}>Taxi Safe</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* 2. Titre */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Voici votre identity</Text>
        </View>

        {/* 3. Photo de profil (circulaire) */}
        <View style={styles.profileContainer}>
          <Image 
            source={{ uri: driverData.profilePicture }} 
            style={styles.profilePicture} 
          />
        </View>

        {/* 4. Informations (Texte souligné) */}
        <View style={styles.infoSection}>
          <InfoItem label="Vous êtes conducteur (moto ou véhicule)" value={driverData.role} />
          <InfoItem label="Numéro de plaque" value={driverData.plate} />
          <InfoItem label="Type de véhicule" value={driverData.vehicleType} />
          <InfoItem label="Nom de la communauté d’appartenance" value={driverData.community} />
        </View>

        {/* 5. Les deux boutons jaunes en bas */}
        <View style={styles.buttonRow}>
          <Pressable style={styles.yellowButton} onPress={() => alert('Modifier')}>
            <Text style={styles.buttonText}>Modifier mes infos</Text>
          </Pressable>
          
          <Pressable style={styles.yellowButton} onPress={() => alert('Voir QR')}>
            <Text style={styles.buttonText}>voir mon code QR</Text>
          </Pressable>
        </View>

      </ScrollView>
    </View>
  );
}

// Composant réutilisable pour afficher une information soulignée
const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoItemContainer}>
    <Text style={styles.infoValue}>{value}</Text>
    <View style={styles.underline} />
    <Text style={styles.infoLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#F39C12', // Orange du bandeau
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    width: '100%',
  },
  headerLogo: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  titleContainer: {
    paddingHorizontal: 25,
    paddingTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'sans-serif-condensed', // Approche de la police cursive
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePicture: {
    width: 140,
    height: 140,
    borderRadius: 70, // Circulaire
    borderWidth: 1,
    borderColor: '#AAA',
  },
  infoSection: {
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  infoItemContainer: {
    marginBottom: 20,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    paddingBottom: 2,
    marginLeft: 5,
  },
  underline: {
    height: 1,
    backgroundColor: '#333', // Ligne de soulignement noire
    width: '100%',
  },
  infoLabel: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
    marginLeft: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  yellowButton: {
    backgroundColor: '#FFCC33', // Jaune doré
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    // Ombre
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Assurer une largeur minimale
    minWidth: width * 0.42,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});