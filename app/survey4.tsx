import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Survey4 = () => {
  const router = useRouter();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  // Daftar topik yang sudah disesuaikan persis dengan nama file di screenshot assets kamu
  const topics = [
    {
      id: 1,
      name: "Kelola Keuangan",
      img: require("../assets/images/undraw_books_re_8gea 1.png"),
    },
    {
      id: 2,
      name: "Akses Modal",
      img: require("../assets/images/undraw_pitching_re_fpgk 1.png"),
    },
    {
      id: 3,
      name: "Investasi",
      img: require("../assets/images/undraw_investment_re_rpk5 1.png"),
    },
    {
      id: 4,
      name: "Tabungan",
      img: require("../assets/images/undraw_vault_re_s4my 1.png"),
    },
    {
      id: 5,
      name: "Kelola Arus Kas",
      img: require("../assets/images/undraw_receipt_re_fre3 (1) 1.png"),
    },
    {
      id: 6,
      name: "Perencanaan Pajak",
      img: require("../assets/images/undraw_predictive_analytics_re_wxt8 1.png"),
    },
    {
      id: 7,
      name: "Asuransi Bisnis",
      img: require("../assets/images/undraw_security_on_re_e491 1.png"),
    },
    {
      id: 8,
      name: "Menyusun anggaran Bisnis",
      img: require("../assets/images/undraw_progress_data_re_rv4p 1.png"),
    },
    {
      id: 9,
      name: "Perencanaan Ekspansi",
      img: require("../assets/images/undraw_growth_chart_r99m 1.png"),
    },
    {
      id: 10,
      name: "Pemasaran Konten",
      img: require("../assets/images/undraw_social_media_re_sulg 1.png"),
    },
    {
      id: 11,
      name: "Strategi KOL",
      img: require("../assets/images/undraw_mobile_marketing_re_p77p 2.png"),
    },
    {
      id: 12,
      name: "Pemasaran Digital",
      img: require("../assets/images/undraw_marketing_re_7f1g 2.png"),
    },
  ];

  const toggleTopic = (name: string) => {
    if (selectedTopics.includes(name)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== name));
    } else {
      setSelectedTopics([...selectedTopics, name]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.content}>
          {/* Logo Saraya */}
          <View style={styles.logoCircle}>
            <Image
              source={require("../assets/images/Saraya.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.questionText}>
            Apa jenis topik edukasi yang paling Anda butuhkan?
          </Text>
          <Text style={styles.subHint}>Pilih 3</Text>

          {/* Grid Layout */}
          <View style={styles.gridContainer}>
            {topics.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                style={[
                  styles.card,
                  selectedTopics.includes(item.name) && styles.cardSelected,
                ]}
                onPress={() => toggleTopic(item.name)}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={item.img}
                    style={styles.topicImage}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.cardText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Tombol Lanjut dengan Type Cast 'as any' untuk fix TS Error */}
          <TouchableOpacity
            style={styles.mainButton}
            onPress={() =>
              selectedTopics.length === 3 && router.push("/survey5")
            }
          >
            <Text style={styles.mainButtonText}>Lanjut</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  scrollContent: { flexGrow: 1 },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  logoCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#B11B24",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
  },
  logoImage: { width: 40, height: 40, tintColor: "#FFF" },
  questionText: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 24,
  },
  subHint: {
    color: "#888",
    fontSize: 14,
    marginTop: 15,
    marginBottom: 20,
    alignSelf: "flex-start",
    marginLeft: 5,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  card: {
    width: "48%",
    height: 140,
    backgroundColor: "#8B1A1E",
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  cardSelected: {
    backgroundColor: "#C12026",
    borderWidth: 2,
    borderColor: "#FFF",
  },
  imageContainer: {
    width: "100%",
    height: 70,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.05)", // Sedikit overlay agar gambar undraw lebih pop
    borderRadius: 10,
  },
  topicImage: { width: "85%", height: "85%" },
  cardText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  mainButton: {
    backgroundColor: "#C12026",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 25,
    elevation: 5,
    marginBottom: 20,
  },
  mainButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});

export default Survey4;
