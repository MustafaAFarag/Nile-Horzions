import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import TableHeaderRow from "@/components/TableHeaderRow";
import TableDataRow from "@/components/TableDataRow";

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

  const handleFindPress = () => {
    router.push("/FindFlight");
  };

  const handleRowPress = () => {
    router.push("/InfoFlight");
  };

  const headers = ["From", "Date", "T/W", "To"];

  return (
    <SafeAreaView className="h-full bg-blue-300 pt-14">
      <ScrollView className="w-full h-full p-4">
        {/* Header Section */}
        <View className="flex-row items-center justify-between mb-8">
          <Text className="text-2xl font-pbold text-gray-800">Flights</Text>
          <CustomButton
            title="Find"
            className="w-32 bg-blue-500 rounded-lg py-3 "
            textStyles="text-white"
            handlePress={handleFindPress}
          />
        </View>

        <TableHeaderRow headers={headers} className="mb-4 bg-blue-700" />

        {/* Table Rows */}
        {flights.map((flight, index) => (
          <Pressable
            key={index}
            onPress={handleRowPress}
            className={`flex-row justify-between items-center py-3 px-2 mb-4 rounded-lg ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <TableDataRow rowData={flight} />
          </Pressable>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Flights;
