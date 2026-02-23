import { Ionicons } from "@expo/vector-icons"; // Library icon bawaan Expo
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

const SignInScreen = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.content}>
          {/* Logo */}
          <View style={styles.logoCircle}>
            <Image
              source={require("../assets/images/Saraya.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>Masuk ke akun Anda</Text>

          {/* Form Input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.passwordWrapper}>
            <TextInput
              placeholder="Password"
              style={[styles.inputpass, { flex: 1, marginBottom: 0 }]}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={passwordVisible ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#C4C4C4"
              />
            </TouchableOpacity>
          </View>
          {/* Remember Me & Forgot Password */}
          <View style={styles.rowJustify}>
            <TouchableOpacity style={styles.checkboxRow}>
              <View style={styles.checkbox} />
              <Text style={styles.grayText}>Ingat saya</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.blueTextBold}>Lupa password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => router.replace("/(tabs)")}
          >
            <Text style={styles.mainButtonText}>Masuk</Text>
          </TouchableOpacity>

          <Text style={[styles.grayText, { marginVertical: 20 }]}>atau</Text>

          {/* Social Buttons */}
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/000000/google-logo.png",
              }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>Masuk dengan Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/000000/facebook-new.png",
              }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>Masuk dengan Facebook</Text>
          </TouchableOpacity>

          {/* Footer */}
          <View
            style={[
              styles.rowJustify,
              { justifyContent: "center", marginTop: 30 },
            ]}
          >
            <Text style={styles.grayText}>Belum punya akun? </Text>
            <TouchableOpacity onPress={() => router.push("/register")}>
              <Text style={styles.blueTextBold}>Daftar</Text>
            </TouchableOpacity>
          </View>
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
    paddingTop: 50,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#B11B24",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    elevation: 5,
    shadowOpacity: 0.2,
  },
  logoImage: { width: 50, height: 50, tintColor: "#FFF" },
  title: { fontSize: 32, fontWeight: "500", color: "#555", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#888", marginBottom: 30 },
  inputContainer: { width: "100%" },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },
  inputpass: {
    width: "100%",
    height: 50,
    borderColor: "#DDD",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    marginBottom: 15,
  },
  eyeIcon: { paddingRight: 15 },
  rowJustify: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  checkboxRow: { flexDirection: "row", alignItems: "center" },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#DDD",
    marginRight: 8,
    borderRadius: 4,
  },
  grayText: { color: "#888", fontSize: 14 },
  blueTextBold: { color: "#2E5AAC", fontWeight: "bold", fontSize: 14 },
  mainButton: {
    backgroundColor: "#C12026",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    elevation: 3,
  },
  mainButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
  socialButton: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  socialIcon: { width: 24, height: 24, marginRight: 10 },
  socialText: { color: "#666", fontSize: 14, fontWeight: "500" },
});

export default SignInScreen;
