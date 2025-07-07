import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "./context/ThemeContext";

const About = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>About Page</Text>
      <Text style={[styles.description, { color: colors.textSecondary }]}>
        This is a profile app built with React Native and Expo Router.
      </Text>
      <Text style={[styles.description, { color: colors.textSecondary }]}>
        It features a theme toggle functionality that allows switching between
        light and dark modes.
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up all available space
    alignItems: "center", // Centers content horizontally
    justifyContent: "flex-start", // Centers content vertically
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
    lineHeight: 24,
  },
});
