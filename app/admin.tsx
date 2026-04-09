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

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 1. Bandeau Orange Taxi Safe */}
      <View style={styles.header}>
        <Text style={styles.headerLogo}>Taxi Safe</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* 2. Titre et Avatar */}
        <View style={styles.adminHeader}>
          <Text style={styles.title}>Dashboard Admin</Text>
          <Image 
            source={{ uri: 'https://via.placeholder.com/100' }} 
            style={styles.adminAvatar} 
          />
        </View>

        {/* 3. Carte de Statistique (Beige) */}
        <View style={styles.mainCard}>
          <View style={styles.cardTopRow}>
            {/* Graphique Circulaire Progressif */}
            <View style={styles.circleContainer}>
              <View style={styles.progressCircle}>
                <Text style={styles.progressText}>30%</Text>
              </View>
            </View>
            
            <Pressable style={styles.infoBtn}>
              <Text style={styles.infoBtnText}>voir mes infos</Text>
            </Pressable>
          </View>
          
          <View style={styles.cardBottomRow}>
            <Text style={styles.timeText}>13h</Text>
            <Text style={styles.dateText}>20/11/2026</Text>
          </View>
        </View>

        {/* 4. Section Statistiques */}
        <Text style={styles.sectionTitle}>Statistiques de la communauté</Text>

        <View style={styles.gridContainer}>
          <View style={styles.row}>
            <StatBox label="Nombre total de chauffeurs" />
            <StatBox label="Chauffeurs validés" />
          </View>
          <View style={styles.row}>
            <StatBox label="Chauffeurs en attente" />
            <StatBox label="Chauffeurs suspendus" />
          </View>
          <View style={styles.row}>
            <StatBox label="Nombre de signalements reçus" />
            <View style={styles.emptyBox} />
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

// Composant pour les boîtes grises
const StatBox = ({ label }: { label: string }) => (
  <View style={styles.statBox}>
    <View style={styles.whiteBar} />
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

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
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  adminHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
  },
  adminAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  mainCard: {
    backgroundColor: '#FDF0D5',
    borderRadius: 30,
    padding: 20,
    height: 190,
    marginBottom: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  circleContainer: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: '#3498DB', // Couleur bleue du cercle
    borderTopColor: '#F39C12', // Couleur orange du cercle
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  infoBtn: {
    backgroundColor: '#FFF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#AAA',
  },
  infoBtnText: {
    fontSize: 11,
    fontWeight: '500',
  },
  cardBottomRow: {
    marginTop: 'auto',
  },
  timeText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#333',
    marginTop: -5,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 20,
    color: '#000',
  },
  gridContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statBox: {
    backgroundColor: '#7D7D7D', // Couleur grise des blocs
    width: (width - 55) / 2,
    height: 140,
    borderRadius: 20,
    padding: 15,
    justifyContent: 'flex-end',
  },
  whiteBar: {
    width: '70%',
    height: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    position: 'absolute',
    top: 20,
    left: 15,
  },
  statLabel: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  emptyBox: {
    width: (width - 55) / 2,
  }
});