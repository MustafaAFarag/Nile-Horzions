import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";

const myFlights = () => {
  const router = useRouter();

  const flights = [
    { id: "1111", date: "15-12", weight: "5kg", status: "Confirmed" },
    { id: "2222", date: "15-12", weight: "5kg", status: "Pending" },
    { id: "3333", date: "16-12", weight: "8kg", status: "Cancelled" },
    { id: "4444", date: "17-12", weight: "10kg", status: "Confirmed" },
    { id: "5555", date: "18-12", weight: "3kg", status: "Pending" },
    { id: "6666", date: "19-12", weight: "6kg", status: "Confirmed" },
    { id: "7777", date: "20-12", weight: "12kg", status: "Confirmed" },
    { id: "8888", date: "21-12", weight: "7kg", status: "Cancelled" },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-500";
      case "Pending":
        return "bg-yellow-100 text-yellow-500";
      case "Cancelled":
        return "bg-red-100 text-red-500";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <SafeAreaView className="h-full bg-blue-300">
      <ScrollView className="w-full h-full p-6">
        {/* Header Section */}
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-lg font-pmedium text-gray-800">My Flights</Text>
          <CustomButton
            title="Filter"
            height="40px"
            className="w-1/3 bg-white"
            textStyles="text-blue-500"
          />
        </View>

        {/* Table Header */}
        <View className="flex-row justify-between border-b-2 border-gray-400 p-2 mb-4 bg-red-800 rounded-lg">
          <Text className="flex-1 text-base font-psemibold text-white">ID</Text>
          <Text className="flex-1 text-base font-psemibold text-white text-center">
            Date
          </Text>
          <Text className="flex-1 text-base font-psemibold text-white text-center">
            Weight
          </Text>
          <Text className="flex-1 text-base font-psemibold text-white text-right">
            Status
          </Text>
        </View>

        {/* Table Rows */}
        {flights.map((flight, index) => (
          <Pressable
            key={index}
            onPress={() => router.push("/reservations")}
            className={`flex-row justify-between items-center py-3 px-2 mb-4 rounded-lg ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <Text className="flex-1 text-base text-gray-800">{flight.id}</Text>
            <Text className="flex-1 text-base text-gray-800 text-center">
              {flight.date}
            </Text>
            <Text className="flex-1 text-base text-gray-800 text-center">
              {flight.weight}
            </Text>
            <View
              className={`flex-1 text-center px-2 py-1 rounded-lg items-center justify-center ${getStatusStyles(
                flight.status
              )}`}
            >
              <Text className="text-base font-psemibold">{flight.status}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default myFlights;
