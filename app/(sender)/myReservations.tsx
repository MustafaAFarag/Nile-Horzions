import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import Table from "@/components/Table"; // Import the reusable Table component
import { router } from "expo-router";

const MyReservations = () => {
  const handleEditPress = () => {
    router.push("/editFlight");
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

  const headers = ["ID", "Reservation Date", "Weight", "Paper Count", "Status"];

  const handleRowPress = () => {
    router.push("/bookingEdit");
  };

  return (
    <SafeAreaView className="h-full bg-blue-300">
      <ScrollView className="w-full h-full p-6">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-xl font-bold text-blue-800">
            My Reservations
          </Text>
        </View>

        <Table
          headers={headers}
          data={reservations}
          onRowPress={handleRowPress}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default MyReservations;
