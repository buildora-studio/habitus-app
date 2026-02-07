import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function AuthScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>Auth Screen</Text>

      <Link
        href="/(tabs)"
        style={{
          backgroundColor: "green",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Go Dashboard
        </Text>
      </Link>
    </View>
  );
}
