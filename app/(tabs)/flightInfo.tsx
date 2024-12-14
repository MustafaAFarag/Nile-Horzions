import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TravelerDropdown from "@/components/TravelerDropdown";
import TravelerOptions from "@/components/TravelerOptions";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const Create = () => {
  const handleCancelPress = () => {
    router.push("/reservations");
  };

  const handleUpdatePress = () => {
    router.push("/reservations");
  };

  return (
    <SafeAreaView className="h-full bg-blue-300">
      <View className="w-full h-full p-6">
        <Text className="text-2xl font-pbold text-center text-red-500 mb-6">
          Edit Flight
        </Text>

        <TravelerDropdown
          title="From"
          placeholder={["Country", "Government"]}
        />
        <TravelerDropdown title="To" placeholder={["Country", "Government"]} />
        <TravelerOptions title="Type of Weight" placeholder="Clothes,Paper" />
        <TravelerOptions title="Weight" placeholder="- 7KG +" />
        <TravelerOptions title="Paper Count" placeholder="- 10 +" />
        <TravelerOptions title="Flight Date" placeholder="16-12-2024" />
        <TravelerOptions
          title="Last day for delivery"
          placeholder="14-12-2024"
        />
        <View className="flex-row justify-between mt-6 gap-4">
          <CustomButton
            title="Cancel"
            handlePress={handleCancelPress}
            className="flex-1 "
            textStyles="text-white"
          />
          <CustomButton
            title="Update"
            handlePress={handleUpdatePress}
            className="flex-1 "
            textStyles="text-white"
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Create;
