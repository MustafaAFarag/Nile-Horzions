import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";

const Home = () => {
  const handleTravelerPress = () => {};

  const handleSenderPress = () => {};
  return (
    <SafeAreaView className="h-full bg-blue-300">
      <View className="w-full justify-center h-full p-4">
        <CustomButton
          title="Traveler"
          handlePress={handleTravelerPress}
          containerStyles="m-2"
        />
        <CustomButton
          title="Sender"
          handlePress={handleTravelerPress}
          containerStyles="m-2"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
