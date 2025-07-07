// Import Stack component from expo-router for navigation
import { Stack } from "expo-router";

/**
 * Root layout component that defines the navigation structure
 * This component wraps all screens in the app and configures navigation options
 */
export default function Layout() {
  return (
    // Stack navigator provides a stack-based navigation pattern
    // Each screen is pushed onto a stack, allowing back navigation
    <Stack>
      {/* Configure the index screen (profile page) with custom title */}
      <Stack.Screen
        name="index"
        options={{
          title: "Profile", // Sets the title shown in the navigation header
        }}
      />
    </Stack>
  );
}
