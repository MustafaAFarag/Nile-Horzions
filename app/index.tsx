import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  const handleTravelerPress = () => {
    router.push("/CreateFlight");
  };

  const handleSenderPress = () => {
    router.push("/Flights");
  };

  return (
    <SafeAreaView className="h-full bg-blue-300">
      <View className="w-full justify-center h-full p-6">
        {/* Traveler Button */}
        <CustomButton
          title="Traveler"
          handlePress={handleTravelerPress}
          className="bg-green-500 text-white rounded-lg py-3 px-6 mb-4"
        />

        {/* Sender Button */}
        <CustomButton
          title="Sender"
          handlePress={handleSenderPress}
          className="bg-blue-500 text-white rounded-lg py-3 px-6"
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Index;
