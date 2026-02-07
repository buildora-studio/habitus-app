import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

const tabs = [
  {
    name: "index",
    title: "Dashboard",
    tabBarIcon: ({ color }: { color: string }) => (
      <Ionicons size={24} name="bar-chart-outline" color={color} />
    ),
  },
  {
    name: "habits",
    title: "Habits",
    tabBarIcon: ({ color }: { color: string }) => (
      <Ionicons size={24} name="list-outline" color={color} />
    ),
  },
  {
    name: "goals",
    title: "Goals",
    tabBarIcon: ({ color }: { color: string }) => (
      <Ionicons size={24} name="trophy-outline" color={color} />
    ),
  },
  {
    name: "profile",
    title: "Profile",
    tabBarIcon: ({ color }: { color: string }) => (
      <Ionicons size={24} name="person-outline" color={color} />
    ),
  },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      {tabs.map(({ name, title, tabBarIcon }) => (
        <Tabs.Screen key={name} name={name} options={{ title, tabBarIcon }} />
      ))}
    </Tabs>
  );
}
