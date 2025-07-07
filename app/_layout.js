import { Stack } from "expo-router";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function StackLayout() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          color: colors.text,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Profile",
          headerRight: () => <ThemeToggle />,
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "About",
          headerRight: () => <ThemeToggle />,
        }}
      />
    </Stack>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <StackLayout />
    </ThemeProvider>
  );
}
