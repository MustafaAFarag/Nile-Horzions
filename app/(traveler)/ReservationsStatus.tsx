import React from "react";
import { SafeAreaView, ScrollView, View, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import Table from "@/components/Table"; // Import the reusable Table component
import { router } from "expo-router";
import TableHeaderRow from "@/components/TableHeaderRow";
import TableDataRow from "@/components/TableDataRow";

const ReservationStatus = () => {
  const reservations = [
    {
      type: "124",
      w: "12-12",
      paper: "5kg",
      fees: "3",
      status: "Deliver", // Changed status
    },
    {
      type: "145",
      w: "12-12",
      paper: "",
      fees: "1",
      status: "Deliver", // Changed status
    },
    {
      type: "146",
      w: "12-12",
      paper: "10kg",
      fees: "2",
      status: "Deliver", // Changed status
    },
    {
      type: "147",
      w: "12-12",
      paper: "7kg",
      fees: "4",
      status: "Deliver", // Changed status
    },
    {
      type: "148",
      w: "12-12",
      paper: "4kg",
      fees: "5",
      status: "Deliver", // Changed status
    },
    {
      type: "149",
      w: "12-12",
      paper: "6kg",
      fees: "6",
      status: "Deliver", // Changed status
    },
    {
      type: "150",
      w: "12-12",
      paper: "8kg",
      fees: "7",
      status: "Deliver", // Changed status
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Deliver":
        return "bg-green-300 text-green-500";
      case "Pending":
        return "bg-yellow-100 text-yellow-500";
      case "Cancelled":
        return "bg-red-100 text-red-500";
      default:
        return "";
    }
  };

  const headers = ["ID", "Receive Date", "W", "Paper Count", "Status"];

  const handleRowPress = () => {
    router.push("/Reservations");
  };

  return (
    <SafeAreaView className="h-full bg-blue-300 pt-14 ">
      <ScrollView className="w-full px-4">
        <Text className="text-2xl font-pbold text-center text-red-500 mb-4 ">
          Reservations Status
        </Text>

        <TableHeaderRow headers={headers} className="bg-blue-700 mb-3" />

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
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default ReservationStatus;
