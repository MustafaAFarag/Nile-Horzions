import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TravelerDropdown from "@/components/TwoInput";
import TravelerOptions from "@/components/OneInput";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const FindFlights = () => {
  const handleFindlPress = () => {
    router.push("/flights");
  };

  return (
    <SafeAreaView className="h-full bg-blue-300">
      <ScrollView className="w-full h-full p-6">
        <Text className="text-2xl font-pbold text-center text-red-500 ">
          Find Flight
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
            title="Find"
            handlePress={handleFindlPress}
            className="flex-1 "
            textStyles="text-white"
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default FindFlights;
