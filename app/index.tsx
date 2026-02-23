import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const GetStartedScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Background Merah Melengkung */}
      <View style={styles.topCurve} />

      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            {/* Ganti source dengan path logo kamu */}
            <Image
              source={require("../assets/images/Saraya.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.brandName}>SARAYA</Text>
        </View>

        {/* Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.tagline}>
            Master Finance, Earn Rewards,{"\n"}Grow Faster!
          </Text>
        </View>

        {/* Button Section */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.buttonText}>Mulai Sekarang!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topCurve: {
    position: "absolute",
    top: -250, // Sesuaikan untuk mengatur kedalaman lengkungan
    left: -50,
    right: -50,
    height: 650,
    backgroundColor: "#B11B24", // Warna merah maroon
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    marginTop: 100,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#B11B24",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10, // Shadow untuk Android
    shadowColor: "#000", // Shadow untuk iOS
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    top: 50, // Mengangkat logo sedikit ke atas untuk efek melayang
  },
  logoImage: {
    width: 100,
    height: 100,
    tintColor: "#FFF", // Jika logo berbentuk line art putih
  },
  brandName: {
    fontSize: 32,
    fontWeight: "400",
    color: "#1A1A1A",
    marginTop: 50,
    letterSpacing: 4,
    fontFamily: "serif", // Gunakan font custom jika ada
  },
  textContainer: {
    marginBottom: 80,
  },
  tagline: {
    fontSize: 18,
    textAlign: "center",
    color: "#333",
    lineHeight: 26,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#C12026",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GetStartedScreen;
