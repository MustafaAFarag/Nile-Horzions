import React from "react";
import { SafeAreaView, ScrollView, View, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import Table from "@/components/Table"; // Import the reusable Table component
import { router } from "expo-router";
import TableHeaderRow from "@/components/TableHeaderRow";
import TableDataRow from "@/components/TableDataRow";

const MyReservations = () => {
  const handleRowPress = () => {
    router.push("/BookingEdit");
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
    <SafeAreaView className="h-full bg-blue-300 pt-14">
      <ScrollView className="w-full h-full px-4">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-xl font-bold text-blue-800">
            My Reservations
          </Text>
        </View>

        <TableHeaderRow headers={headers} className="mb-4 bg-blue-700" />

        {reservations.map((reservation, index) => (
          <Pressable
            key={index}
            className={`flex-row justify-between items-center py-4 px-4 mb-3 rounded-lg ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
            onPress={handleRowPress}
          >
            <TableDataRow
              rowData={reservation}
              getStatusStyles={getStatusStyles}
            />
          </Pressable>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default MyReservations;
