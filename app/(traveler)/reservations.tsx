import React from "react";
import { SafeAreaView, ScrollView, View, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import TableHeaderRow from "@/components/TableHeaderRow";
import TableDataRow from "@/components/TableDataRow";
import { router } from "expo-router";

const Reservations = () => {
  const handleEditPress = () => {
    router.push("/EditFlight");
  };

  const handleClosePress = () => {
    router.push("/ReservationsStatus");
  };

  const handleRowPress = () => router.push("/ReservationInfo");

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

  const total = ["Total", "25KG", "11", "2500EGP"];
  const available = ["Available", "10KG", "2", "800EGP"];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-500";
      case "Pending":
        return "bg-yellow-100 text-yellow-500";
      case "Cancelled":
        return "bg-red-100 text-red-500";
      default:
        return "";
    }
  };

  return (
    <SafeAreaView className="h-full bg-blue-300 pt-14 ">
      <ScrollView className="w-full px-4">
        <Text className="text-2xl font-pbold text-center text-red-500 mb-4">
          Reservations
        </Text>

        {/* Table Section */}
        <TableHeaderRow headers={headers} className="bg-blue-700 mb-3" />

        {/* Table Data */}
        {reservations.map((reservation, index) => (
          <Pressable
            key={index}
            onPress={handleRowPress}
            className={`flex-row justify-between items-center py-4 px-4 mb-3 rounded-lg ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <TableDataRow
              rowData={reservation}
              getStatusStyles={getStatusStyles}
            />
          </Pressable>
        ))}

        {/* Totals Section */}
        <TableHeaderRow headers={total} className="bg-blue-700 mb-3" />

        {/* Available Section */}
        <TableHeaderRow headers={available} className="bg-blue-700 mb-3" />

        {/* Action Buttons */}
        <View className="flex-row justify-between mt-6 gap-4">
          <CustomButton
            title="Edit"
            handlePress={handleEditPress}
            className="flex-1 bg-green-500 py-3 rounded-lg"
            textStyles="text-center text-white text-lg font-semibold"
          />
          <CustomButton
            title="Close Reservation"
            handlePress={handleClosePress}
            className="flex-1 bg-red-500 py-3 rounded-lg"
            textStyles="text-center text-white text-lg font-semibold"
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Reservations;
