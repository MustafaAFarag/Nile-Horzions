import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import TwoInput from "@/components/TwoInput";
import OneInput from "@/components/OneInput";
import CounterInput from "@/components/CounterInput";
import CalendarInput from "@/components/CalendarInput";

const CreateFlight = () => {
  const handleCreatePress = () => {
    router.push("/MyFlights");
  };

  return (
    <SafeAreaView className="h-full bg-blue-300 pt-14 ">
      <ScrollView className="w-full h-full p-6">
        <Text className="text-2xl font-pbold text-center text-red-500 ">
          Create Flight
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
        <CalendarInput
          title="Last Day for Delivery"
          placeholder="Select delivery date"
          onDateChange={(date) => console.log("Delivery Date:", date)}
        />

        {/* Styled Create Button */}
        <CustomButton
          title="Create Flight"
          handlePress={handleCreatePress}
          className="bg-green-500 text-white rounded-lg py-3 px-8 mt-6"
        />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default CreateFlight;
