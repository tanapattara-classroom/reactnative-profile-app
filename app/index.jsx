import { StyleSheet, Text, View, Image } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/profile.png")}
        style={styles.profile}
      />
      <Text style={styles.title}>Tanapattara Wongkhamchan</Text>
      <Text style={styles.subtitle}>Computer and Information Science</Text>
      <Text style={[styles.text, { marginTop: 10 }]}>Khon Kaen University</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up all available space
    backgroundColor: "#fff", // White background color
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
    color: "#666",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default Home;
