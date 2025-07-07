import { StyleSheet, View, Text } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
    </View>
  );
};

export default About;

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
});
