import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.glowBackground} />

      <View style={styles.card}>
        <View style={styles.photoContainer}>
          <Image
            source={require("../../assets/images/Marcos.png")}
            style={styles.photo}
          />
        </View>

        <Text style={styles.name}>Marcos Dalyson</Text>

        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>🎓 Ciência da Computação</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>💻 5º Período</Text>
          </View>
        </View>

        <Text style={styles.bio}>
          Sou Marcos Dalyson, estudante de Ciência da Computação,
          atualmente no 5º período. Gosto de tecnologia e estou em busca do meu
          primeiro estágio na área. No meu tempo livre, gosto de assistir séries,
          acompanhar futebol e praticar musculação.
        </Text>

        <View style={styles.divider} />
        <Text style={styles.footerText}>Em busca de oportunidades 🚀</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0b1329",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    position: "relative",
  },

  glowBackground: {
    position: "absolute",
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "#38bdf8",
    opacity: 0.12,
    top: "30%",
  },

  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#1e293b",
    borderRadius: 28,
    padding: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(56, 189, 248, 0.2)",
    shadowColor: "#38bdf8",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 12,
  },

  photoContainer: {
    padding: 4,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: "#38bdf8",
    marginBottom: 20,
    shadowColor: "#38bdf8",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },

  photo: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },

  name: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },

  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginBottom: 20,
  },

  badge: {
    backgroundColor: "rgba(56, 189, 248, 0.12)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(56, 189, 248, 0.3)",
  },

  badgeText: {
    color: "#38bdf8",
    fontSize: 13,
    fontWeight: "600",
  },

  bio: {
    color: "#94a3b8",
    fontSize: 15,
    lineHeight: 25,
    textAlign: "center",
  },

  divider: {
    width: "60%",
    height: 1,
    backgroundColor: "rgba(148, 163, 184, 0.15)",
    marginVertical: 22,
  },

  footerText: {
    color: "#64748b",
    fontSize: 13,
    fontWeight: "500",
  },
});