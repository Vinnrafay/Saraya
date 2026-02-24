import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const BusinessNameScreen = () => {
  const router = useRouter();
  const [businessName, setBusinessName] = useState("");

  // Tombol aktif kalau nama bisnis sudah diisi
  const canContinue = businessName.trim().length > 0;

  const handleContinue = () => {
    if (canContinue) {
      // Langsung gas ke tabs
      router.push("/survey2");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.content}>
          {/* Logo Tengah (Besar) */}
          <View style={styles.centerSection}>
            <View style={styles.logoCircleLarge}>
              <Image
                source={require("../assets/images/Saraya.png")}
                style={styles.logoImageLarge}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.questionText}>Nama bisnis kamu apa?</Text>
          </View>

          {/* Input Section */}
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Nama Bisnis"
              style={styles.input}
              value={businessName}
              onChangeText={setBusinessName}
              autoFocus={true}
            />
          </View>

          {/* Spacer biar tombol di bawah */}
          <View style={{ flex: 1 }} />

          {/* Button Lanjut */}
          <TouchableOpacity
            style={[
              styles.mainButton,
              { backgroundColor: canContinue ? "#C12026" : "#E0E0E0" },
            ]}
            onPress={handleContinue}
            disabled={!canContinue}
          >
            <Text style={styles.buttonText}>Lanjut</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 40,
  },
  centerSection: { alignItems: "center", marginBottom: 40 },
  logoCircleLarge: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#B11B24",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  logoImageLarge: { width: 70, height: 70, tintColor: "#FFF" },
  questionText: { fontSize: 20, color: "#666", fontWeight: "500" },
  inputWrapper: { width: "100%", marginTop: 20 },
  input: {
    width: "100%",
    height: 55,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 15,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  mainButton: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    elevation: 5,
  },
  buttonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});

export default BusinessNameScreen;
