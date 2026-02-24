import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const Survey2 = () => {
  const router = useRouter();
  const [category, setCategory] = useState("");

  const options = [
    "Makanan/Minuman",
    "Pakaian",
    "Kerajinan",
    "Retail",
    "Jasa",
    "Lainnya",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoCircle}>
          <Image
            source={require("../assets/images/Saraya.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.questionText}>Bisnis kamu di bidang apa?</Text>

        <View style={styles.optionsWrapper}>
          {options.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.optionButton,
                category === item && styles.optionSelected,
              ]}
              onPress={() => setCategory(item)}
            >
              <Text
                style={[
                  styles.optionText,
                  category === item && styles.optionTextSelected,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            styles.mainButton,
            { backgroundColor: category ? "#C12026" : "#E0E0E0" },
          ]}
          onPress={() => category && router.push("/survey3")}
          disabled={!category}
        >
          <Text style={styles.mainButtonText}>Lanjut</Text>
        </TouchableOpacity>
      </View>
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
    paddingBottom: 40,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#B11B24",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    elevation: 5,
  },
  logoImage: { width: 45, height: 45, tintColor: "#FFF" },
  questionText: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "500",
  },
  optionsWrapper: { width: "100%" },
  optionButton: {
    width: "100%",
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#FFF",
    elevation: 2,
  },
  optionSelected: { backgroundColor: "#C12026", borderColor: "#C12026" },
  optionText: { color: "#666", fontSize: 15 },
  optionTextSelected: { color: "#FFF", fontWeight: "bold" },
  mainButton: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    elevation: 3,
  },
  mainButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});

export default Survey2;
