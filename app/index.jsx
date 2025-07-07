import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { useTheme } from "./context/ThemeContext";

const Home = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={require("../assets/images/profile.png")}
        style={styles.profile}
      />
      <Text style={[styles.title, { color: colors.text }]}>
        Tanapattara Wongkhamchan
      </Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        Computer and Information Science
      </Text>
      <Text style={[styles.text, { color: colors.text, marginTop: 10 }]}>
        Khon Kaen University
      </Text>
      <Link
        href="/about"
        style={[styles.button, { backgroundColor: colors.primary }]}
      >
        <Text style={styles.buttonText}>Go to About Page</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up all available space
    alignItems: "center", // Centers content horizontally
    justifyContent: "flex-start", // Centers content vertically
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
  },
  text: {
    fontSize: 18,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Home;
