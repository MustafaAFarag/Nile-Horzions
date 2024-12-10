import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  return (
    <View className="flex-1 bg-blue-300 items-center justify-center">
      <Text className="text-2xl text-red-500">Nile Horizons</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="text-red-500">
        Go to Profile
      </Link>
    </View>
  );
};

export default Index;
