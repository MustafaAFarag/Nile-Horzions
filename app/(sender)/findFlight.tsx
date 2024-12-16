import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TravelerDropdown from "@/components/TwoInput";
import TravelerOptions from "@/components/OneInput";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import TwoInput from "@/components/TwoInput";
import OneInput from "@/components/OneInput";
import CounterInput from "@/components/CounterInput";
import CalendarInput from "@/components/CalendarInput";

const FindFlights = () => {
  const handleFindPress = () => {
    router.push("/Flights");
  };

  return (
    <SafeAreaView className="h-full bg-blue-300 pt-14">
      <ScrollView className="w-full h-full px-4">
        <Text className="text-2xl font-pbold text-center text-red-500 ">
          Find Flight
        </Text>

        <TwoInput title="From" placeholder={["Country", "Government"]} />
        <TwoInput title="To" placeholder={["Country", "Government"]} />
        <OneInput title="Type of Weight" placeholder="Clothes,Paper" />
        <CounterInput title="Weight" minValue={0} maxValue={50} />
        <CounterInput title="Paper Count" minValue={0} maxValue={100} />
        <CalendarInput
          title="Flight Date"
          placeholder="Select flight date"
          onDateChange={(date) => console.log("Selected Date:", date)}
        />

        <View className="flex-row justify-between mt-6 gap-4">
          <CustomButton
            title="Find"
            handlePress={handleFindPress}
            className="flex-1 bg-green-500 py-3 rounded-lg"
            textStyles="text-center text-white text-lg font-semibold"
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default FindFlights;
