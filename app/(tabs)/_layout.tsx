import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Home, Trophy, Gift, User, BookOpen } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 8,
        },
        tabBarStyle: {
          backgroundColor: '#041E42',
          borderTopWidth: 0,
          height: 75, // Tinggi bar kita buat proporsional
          position: 'absolute',
      
          left: 15,
          right: 15,
          borderRadius: 15,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        },
      }}>
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home color={color} size={22} />,
        }}
      />

      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Leaderboard',
          tabBarIcon: ({ color }) => <Trophy color={color} size={22} />,
        }}
      />

      {/* MENU TENGAH (LESSON) */}
      <Tabs.Screen
        name="lesson"
        options={{
          title: 'Lesson',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 10, // Menyesuaikan teks dengan lingkaran
            color: 'white'
          },
          tabBarIcon: () => (
            <View style={styles.fabWrapper}>
              <View style={styles.whiteRing}>
                <View style={styles.blueBall}>
                  <BookOpen color="white" size={28} fill="white" />
                </View>
              </View>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="reward"
        options={{
          title: 'Reward',
          tabBarIcon: ({ color }) => <Gift color={color} size={22} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <User color={color} size={22} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  fabWrapper: {
    position: 'absolute',
    top: -30, // Lingkaran menonjol keluar sedikit ke atas
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteRing: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white', // Border putih tebal di desain
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBall: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6D96D2', // Biru muda sesuai image_229678.png
    justifyContent: 'center',
    alignItems: 'center',
  },
});