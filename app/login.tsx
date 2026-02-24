import { Ionicons } from "@expo/vector-icons";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // --- LOGIKA VALIDASI ---
  const isGmail =
    email.length > 0 && email.toLowerCase().endsWith("@gmail.com");
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const isPasswordValid = password.length >= 8 && hasUppercase && hasNumber;

  // Satpam Tombol
  const canSubmit = isGmail && isPasswordValid;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.content}>
          {/* Logo Section */}
          <View style={styles.logoCircle}>
            <Image
              source={require("../assets/images/Saraya.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>Masuk ke akun Anda</Text>

          {/* Email Input Section */}
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Email"
              style={[
                styles.input,
                email.length > 0 && !isGmail && styles.inputError,
              ]}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            {email.length > 0 && !isGmail && (
              <Text style={styles.errorHint}>
                * Harus menggunakan @gmail.com
              </Text>
            )}
          </View>

          {/* Password Input Section */}
          <View style={styles.inputWrapper}>
            <View
              style={[
                styles.passwordWrapper,
                password.length > 0 && !isPasswordValid && styles.inputError,
              ]}
            >
              <TextInput
                placeholder="Password"
                style={styles.inputpass}
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
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
            {password.length > 0 && !isPasswordValid && (
              <Text style={styles.errorHint}>
                * Min. 8 karakter, ada huruf kapital & angka
              </Text>
            )}
          </View>

          <View style={styles.rowJustify}>
            <TouchableOpacity style={styles.checkboxRow}>
              <View style={styles.checkbox} />
              <Text style={styles.grayText}>Ingat saya</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.blueTextBold}>Lupa password?</Text>
            </TouchableOpacity>
          </View>

          {/* Main Login Button */}
          <TouchableOpacity
            style={[
              styles.mainButton,
              { backgroundColor: canSubmit ? "#C12026" : "#E0E0E0" },
            ]}
            onPress={() => router.push("/welcome")}
            disabled={!canSubmit}
          >
            <Text style={styles.mainButtonText}>Masuk</Text>
          </TouchableOpacity>

          <Text style={styles.dividerText}>atau</Text>

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
          <View style={styles.footer}>
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
    paddingTop: 40,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#B11B24",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    elevation: 4,
    shadowOpacity: 0.15,
  },
  logoImage: { width: 45, height: 45, tintColor: "#FFF" },
  title: { fontSize: 28, fontWeight: "bold", color: "#333", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#888", marginBottom: 25 },
  inputWrapper: { width: "100%", marginBottom: 15 },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: "#F9F9F9",
  },
  inputError: { borderColor: "#FF4D4D" },
  errorHint: { color: "#FF4D4D", fontSize: 11, marginTop: 5, marginLeft: 5 },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    backgroundColor: "#F9F9F9",
  },
  inputpass: { flex: 1, height: 50, paddingHorizontal: 15 },
  eyeIcon: { paddingRight: 15 },
  rowJustify: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 25,
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
  grayText: { color: "#888", fontSize: 13 },
  blueTextBold: { color: "#2E5AAC", fontWeight: "bold", fontSize: 13 },
  mainButton: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  mainButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
  dividerText: { color: "#BBB", marginVertical: 15, fontSize: 12 },
  socialButton: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  socialIcon: { width: 22, height: 22, marginRight: 10 },
  socialText: { color: "#555", fontSize: 14, fontWeight: "500" },
  footer: { flexDirection: "row", marginTop: 20, marginBottom: 20 },
});

export default SignInScreen;
