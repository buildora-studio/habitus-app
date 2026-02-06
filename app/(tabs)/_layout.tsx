import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

const ProfileIcon = ({ color }: { color: string }) => (
  <Ionicons size={24} name="person-outline" color={color} />
);
const HabitsIcon = ({ color }: { color: string }) => (
  <Ionicons size={24} name="list-outline" color={color} />
);
const DashboardIcon = ({ color }: { color: string }) => (
  <Ionicons size={24} name="bar-chart-outline" color={color} />
);
const GoalsIcon = ({ color }: { color: string }) => (
  <Ionicons size={24} name="trophy-outline" color={color} />
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: DashboardIcon,
        }}
      />

      <Tabs.Screen
        name="habits"
        options={{
          title: "Habits",
          tabBarIcon: HabitsIcon,
        }}
      />

      <Tabs.Screen
        name="goals"
        options={{
          title: "Goals",
          tabBarIcon: GoalsIcon,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tabs>
  );
}
