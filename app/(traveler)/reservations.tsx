import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import Table from "@/components/Table"; // Import the reusable Table component
import { router } from "expo-router";

const Reservations = () => {
  const handleEditPress = () => {
    router.push("/flightInfo");
  };

  const handleClosePress = () => {
    router.push("/reservationStatus");
  };

  const reservations = [
    {
      type: "Paper",
      w: "5kg",
      paper: 10,
      fees: "500 EGP",
      status: "Confirmed",
    },
    {
      type: "Clothes",
      w: "3kg",
      paper: "",
      fees: "300 EGP",
      status: "Pending",
    },
    {
      type: "Paper",
      w: "10kg",
      paper: 20,
      fees: "1000 EGP",
      status: "Cancelled",
    },
    {
      type: "Clothes",
      w: "7kg",
      paper: "",
      fees: "700 EGP",
      status: "Confirmed",
    },
    { type: "Paper", w: "4kg", paper: 15, fees: "400 EGP", status: "Pending" },
    {
      type: "Clothes",
      w: "6kg",
      paper: "",
      fees: "600 EGP",
      status: "Confirmed",
    },
    {
      type: "Paper",
      w: "8kg",
      paper: 25,
      fees: "800 EGP",
      status: "Cancelled",
    },
  ];

  const headers = ["Type", "Weight", "Paper", "Fees", "Status"];

  return (
    <SafeAreaView className="h-full bg-blue-300">
      <ScrollView className="w-full h-full p-6">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-xl font-bold text-blue-800">Reservations</Text>
        </View>

        <Table
          headers={headers}
          data={reservations}
          onRowPress={() => router.push("/reservationsInfo")}
        />

        {/* Totals Section */}
        <View className="flex-row justify-between border-t-2 border-gray-300 p-3 mt-6 bg-blue-600 rounded-lg">
          <Text className="flex-1 text-sm font-bold text-white">Total</Text>
          <Text className="flex-1 text-sm font-bold text-white text-center">
            25kg
          </Text>
          <Text className="flex-1 text-sm font-bold text-white text-center">
            Yes
          </Text>
          <Text className="flex-1 text-sm font-bold text-white text-right">
            2500 EGP
          </Text>
        </View>

        {/* Available Section */}
        <View className="flex-row justify-between border-t-2 border-gray-300 p-3 mt-2 bg-blue-500 rounded-lg">
          <Text className="flex-1 text-sm font-bold text-white">Available</Text>
          <Text className="flex-1 text-sm font-bold text-white text-center">
            10kg
          </Text>
          <Text className="flex-1 text-sm font-bold text-white text-center">
            No
          </Text>
          <Text className="flex-1 text-sm font-bold text-white text-right">
            800 EGP
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row justify-between mt-6 gap-4">
          <CustomButton
            title="Edit"
            handlePress={handleEditPress}
            className="flex-1 bg-green-500"
            textStyles="text-white"
          />
          <CustomButton
            title="Close Reservation"
            handlePress={handleClosePress}
            className="flex-1 bg-red-500"
            textStyles="text-white"
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Reservations;
