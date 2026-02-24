import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const CongratsScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Merah di Atas (Curve Effect) */}
      <View style={styles.redHeader}>
        <Image
          source={require("../assets/images/undraw_winners_re_wr1l 1.png")} // Gunakan aset perayaan kamu
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Congratulations!</Text>

        <Text style={styles.description}>
          Terima kasih sudah mengisi survei.{"\n"}
          Mulai belajar dan raih hadiah untuk berkembang lebih cepat!
        </Text>

        <View style={styles.footerContainer}>
          <Text style={styles.hintText}>
            Rekomendasi kelas untuk kamu sudah siap!
          </Text>

          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => router.replace("/(tabs)" as any)}
          >
            <Text style={styles.mainButtonText}>Belajar Sekarang!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  redHeader: {
    height: "45%",
    backgroundColor: "#B11B24",
    borderBottomLeftRadius: width * 0.2,
    borderBottomRightRadius: width * 0.2,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  illustration: {
    width: "80%",
    height: "70%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#B11B24",
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
    lineHeight: 24,
  },
  footerContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignItems: "center",
  },
  hintText: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  mainButton: {
    backgroundColor: "#B11B24",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  mainButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CongratsScreen;
