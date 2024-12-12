import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";

const Flights = () => {
  const flights = [
    { from: "Cairo", date: "15-12", weight: "5kg", to: "Damascus" },
    { from: "Cairo", date: "15-12", weight: "5kg", to: "Alexandria" },
    { from: "Dubai", date: "16-12", weight: "8kg", to: "Doha" },
    { from: "London", date: "17-12", weight: "10kg", to: "New York" },
    { from: "Paris", date: "18-12", weight: "3kg", to: "Berlin" },
    { from: "Tokyo", date: "19-12", weight: "6kg", to: "Seoul" },
    { from: "Sydney", date: "20-12", weight: "12kg", to: "Melbourne" },
    { from: "Toronto", date: "21-12", weight: "7kg", to: "Vancouver" },
  ];

  return (
    <SafeAreaView className="h-full bg-blue-300">
      <View className="w-full h-full p-6">
        {/* Header Section */}
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-lg font-pmedium text-gray-800">Flights</Text>
          <CustomButton
            title="Find"
            height="40px"
            className="w-1/3 bg-white"
            textStyles="text-blue-500"
          />
        </View>

        {/* Table Header */}
        <View className="flex-row justify-between border-b-2 border-gray-400 p-2 mb-4 bg-red-800 rounded-lg">
          <Text className="flex-1 text-base font-psemibold text-white">
            From
          </Text>
          <Text className="flex-1 text-base font-psemibold text-white text-center">
            Date
          </Text>
          <Text className="flex-1 text-base font-psemibold text-white text-center">
            T/W
          </Text>
          <Text className="flex-1 text-base font-psemibold text-white text-right">
            To
          </Text>
        </View>

        {/* Table Rows */}
        {flights.map((flight, index) => (
          <View
            key={index}
            className={`flex-row justify-between items-center py-3 px-2 mb-4 rounded-lg ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <Text className="flex-1 text-base text-gray-800">
              {flight.from}
            </Text>
            <Text className="flex-1 text-base text-gray-800 text-center">
              {flight.date}
            </Text>
            <Text className="flex-1 text-base text-gray-800 text-center">
              {flight.weight}
            </Text>
            <Text className="flex-1 text-base text-gray-800 text-right">
              {flight.to}
            </Text>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Flights;
