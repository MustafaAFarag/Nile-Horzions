import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  const handleTravelerPress = () => {
    router.push("/create");
  };

  const handleSenderPress = () => {
    router.push("/flights");
  };
  return (
    <SafeAreaView className="h-full bg-blue-300">
      <View className="w-full justify-center h-full p-4">
        <CustomButton
          title="Traveler"
          handlePress={handleTravelerPress}
          className="m-2"
        />
        <CustomButton
          title="Sender"
          handlePress={handleSenderPress}
          className="m-2"
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Index;
