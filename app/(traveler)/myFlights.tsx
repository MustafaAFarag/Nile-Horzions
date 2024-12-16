import { SafeAreaView, ScrollView, Text, Pressable, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import TableHeaderRow from "@/components/TableHeaderRow";
import TableDataRow from "@/components/TableDataRow";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";

const MyFlights = () => {
  const handleRowPress = () => {
    // Navigate to the /Reservations route
    router.push("/Reservations");
  };

  const flights = [
    { id: "1111", date: "15-12", weight: "5kg", status: "Open" },
    { id: "2222", date: "15-12", weight: "5kg", status: "Ready" },
    { id: "3333", date: "16-12", weight: "8kg", status: "Completed" },
    { id: "4444", date: "17-12", weight: "10kg", status: "Open" },
    { id: "5555", date: "18-12", weight: "3kg", status: "Ready" },
  ];

  const headers = ["ID", "Date", "Weight", "Status"];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-500";
      case "Ready":
        return "bg-yellow-100 text-yellow-500";
      case "Completed":
        return "bg-red-100 text-red-500";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <SafeAreaView className="h-full bg-blue-300 pt-14 ">
      <ScrollView className="w-full px-4">
        {/* Header Section */}
        <View className="flex-row items-center justify-between mb-8">
          <Text className="text-2xl font-pbold text-gray-800">My Flights</Text>
          <CustomButton
            title="Filter"
            handlePress={() => console.log("Filter button pressed")}
            className="w-32 bg-blue-500 rounded-lg py-3 text-white"
          />
        </View>

        {/* Table Header */}
        <TableHeaderRow headers={headers} className="mb-4 bg-blue-700" />

        {/* Table Data */}
        {flights.map((flight, index) => (
          <Pressable
            key={flight.id}
            onPress={handleRowPress}
            className={`flex-row justify-between items-center py-4 px-4 mb-3 rounded-lg ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <TableDataRow rowData={flight} getStatusStyles={getStatusStyles} />
          </Pressable>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default MyFlights;
