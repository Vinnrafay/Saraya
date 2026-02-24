import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Image
              source={require("../assets/images/Saraya.png")} // Pastikan path benar
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.brandName}>SARAYA</Text>
        </View>

        {/* Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.welcomeTitle}>Selamat datang di Saraya</Text>
          <Text style={styles.subtitle}>
            Mari kita mulai untuk mempersiapkan konten pilihan sesuai dengan
            kebutuhan kamu!
          </Text>
        </View>

        {/* Button Section */}
        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => router.push("/survey")}
        >
          <Text style={styles.buttonText}>Mulai Sekarang!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 60,
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#B11B24",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    // Shadow untuk iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    // Shadow untuk Android
    elevation: 8,
  },
  logoImage: {
    width: 60,
    height: 60,
    tintColor: "#FFF",
  },
  brandName: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 4,
    color: "#333",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    lineHeight: 30,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#888",
    lineHeight: 22,
  },
  mainButton: {
    backgroundColor: "#C12026",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
