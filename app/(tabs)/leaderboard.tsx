import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Info, Medal, Crown } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function Leaderboard() {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER SECTION (NAVY) */}
      <View style={styles.headerContainer}>
        <View style={styles.topBar}>
          <View style={{ width: 24 }} /> {/* Spacer kiri */}
          <Text style={styles.headerTitle}>Leaderboard</Text>
          <TouchableOpacity>
            <Info color="white" size={24} />
          </TouchableOpacity>
        </View>

        {/* CROWN SECTION */}
        <View style={styles.crownContainer}>
          <View style={styles.crownBox}>
            <Crown color="white" size={48} fill="white" />
          </View>
          <Text style={styles.monthText}>Desember</Text>
          <Text style={styles.subHeaderText}>Masuk 3 besar dan dapatkan hadiah!</Text>
          <Text style={styles.timerText}>30:00:00</Text>
        </View>
      </View>

      {/* LIST SECTION */}
      <ScrollView 
        style={styles.listContainer} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* RANK 1 - GOLD */}
        <View style={[styles.rankItem, styles.rankOneBg]}>
          <View style={styles.rankBadgeContainer}>
             <Medal color="#FFD700" size={32} fill="#FFD700" />
             <Text style={styles.overlayRankText}>1</Text>
          </View>
          <View style={styles.avatarPlaceholder} />
          <Text style={styles.nameText}>Gloria Mairani</Text>
          <Text style={styles.xpText}>1875 XP</Text>
        </View>

        {/* RANK 2 - SILVER */}
        <View style={styles.rankItem}>
          <View style={styles.rankBadgeContainer}>
             <Medal color="#C0C0C0" size={32} fill="#C0C0C0" />
             <Text style={styles.overlayRankText}>2</Text>
          </View>
          <View style={styles.avatarPlaceholder} />
          <Text style={styles.nameText}>Gloria Mairani</Text>
          <Text style={styles.xpText}>1875 XP</Text>
        </View>

        {/* RANK 3 - BRONZE */}
        <View style={[styles.rankItem, styles.rankThreeBg]}>
          <View style={styles.rankBadgeContainer}>
             <Medal color="#CD7F32" size={32} fill="#CD7F32" />
             <Text style={styles.overlayRankText}>3</Text>
          </View>
          <View style={styles.avatarPlaceholder} />
          <Text style={styles.nameText}>Gloria Mairani</Text>
          <Text style={styles.xpText}>1875 XP</Text>
        </View>

        {/* RANK 4-7 (TANPA ICON) */}
        <View style={styles.rankItem}>
          <Text style={styles.rankNumberText}>4</Text>
          <View style={styles.avatarPlaceholder} />
          <Text style={styles.nameText}>Gloria Mairani</Text>
          <Text style={styles.xpText}>1875 XP</Text>
        </View>

        <View style={styles.rankItem}>
          <Text style={styles.rankNumberText}>5</Text>
          <View style={styles.avatarPlaceholder} />
          <Text style={styles.nameText}>Gloria Mairani</Text>
          <Text style={styles.xpText}>1875 XP</Text>
        </View>

        <View style={styles.rankItem}>
          <Text style={styles.rankNumberText}>6</Text>
          <View style={styles.avatarPlaceholder} />
          <Text style={styles.nameText}>Gloria Mairani</Text>
          <Text style={styles.xpText}>1875 XP</Text>
        </View>

        <View style={styles.rankItem}>
          <Text style={styles.rankNumberText}>7</Text>
          <View style={[styles.avatarPlaceholder, { backgroundColor: 'black' }]} />
          <Text style={styles.nameText}>Gloria Mairani</Text>
          <Text style={styles.xpText}>1875 XP</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F5F9' },
  headerContainer: {
    backgroundColor: '#041E42',
    height: height * 0.42,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingHorizontal: 25,
    paddingTop: 20,
    alignItems: 'center',
  },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginTop: 10 },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: 'bold', flex: 1, textAlign: 'center' },
  crownContainer: { alignItems: 'center', marginTop: 25 },
  crownBox: { backgroundColor: '#FFB129', padding: 20, borderRadius: 25, marginBottom: 15, elevation: 5 },
  monthText: { color: 'white', fontSize: 32, fontWeight: 'bold' },
  subHeaderText: { color: 'white', fontSize: 14, marginTop: 5, opacity: 0.8 },
  timerText: { color: 'white', fontSize: 16, marginTop: 10, fontWeight: '500' },
  listContainer: { flex: 1, marginTop: 30, paddingHorizontal: 20, marginBottom: 90 },
  rankItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  rankOneBg: { backgroundColor: '#FFF9E6', borderWidth: 1, borderColor: '#FFECC0' },
  rankThreeBg: { backgroundColor: '#FFF4E6' },
  rankBadgeContainer: { width: 45, alignItems: 'center', justifyContent: 'center' },
  overlayRankText: { position: 'absolute', fontSize: 10, fontWeight: 'bold', color: 'white', top: 11 }, // Sedikit penyesuaian posisi top agar pas di tengah medal
  rankNumberText: { width: 45, textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: '#444' },
  avatarPlaceholder: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#777', marginHorizontal: 15 },
  nameText: { flex: 1, fontSize: 16, fontWeight: '600', color: '#333' },
  xpText: { fontSize: 15, fontWeight: 'bold', color: '#444' },
});