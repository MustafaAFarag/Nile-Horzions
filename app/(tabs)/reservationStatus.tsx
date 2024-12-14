import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import Table from "@/components/Table"; // Import the reusable Table component
import { router } from "expo-router";

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

  const headers = ["ID", "Receive Date", "W", "Paper Count", "Status"];

  return (
    <SafeAreaView className="h-full bg-blue-100">
      <ScrollView className="w-full h-full p-6">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-xl font-bold text-blue-800">
            Reservations Status
          </Text>
        </View>

        <Table
          headers={headers}
          data={reservations}
          onRowPress={() => router.push("/reservationsInfo")}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default ReservationStatus;
