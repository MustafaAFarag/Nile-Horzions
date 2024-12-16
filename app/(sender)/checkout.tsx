import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import TableDataRow from "@/components/TableDataRow";
import TableHeaderRow from "@/components/TableHeaderRow";

const Checkout = () => {
  const handleSubmitPress = () => {
    router.push("/MyReservations");
  };

  const box1 = [
    {
      type: "From",
      city: "Cairo",
      address: "Nasr City",
      weight: "",
      typeOfWeight: "",
    },
    {
      type: "To",
      city: "Damascus",
      address: "Rekneddine",
      weight: "",
      typeOfWeight: "",
    },
    {
      type: "Date",
      city: "",
      address: "15 December",
      weight: "Saturday",
      typeOfWeight: "",
    },
    {
      type: "",
      city: "",
      address: "",
      weight: "5 KG",
      typeOfWeight: "Any,Paper",
    },
  ];

  const total = ["Total", "450 EGP"];
  const delivery = ["Delivery", "50 EGP"];

  return (
    <SafeAreaView className="h-full bg-blue-300 pt-14">
      <ScrollView className="w-full h-full px-4">
        <Text className="text-2xl font-pbold text-blue-800">Checkout Info</Text>

        {box1.map((info, index) => (
          <View
            key={index}
            className={`flex-row justify-between items-center py-4 px-4 border-b bg-white`}
          >
            <TableDataRow rowData={info} hideEmptyValues />
          </View>
        ))}

        {/* Box 2 */}

        <View className="mt-4">
          <TableHeaderRow headers={delivery} className="bg-blue-700 " />
          <TableHeaderRow headers={total} className="bg-blue-700 " />
        </View>
        {/* Box 3*/}

        <Text className="text-2xl mt-4 font-pbold text-blue-800">Payment</Text>
        <View className="bg-red-100 m-2 flex-row  items-center gap-6">
          <Image
            source={icons.bookmark}
            className="w-12 h-12"
            resizeMode="contain"
          />
          <Text>Card</Text>
        </View>
        <View className="bg-red-100 m-2 flex-row  items-center gap-6">
          <Image
            source={icons.bookmark}
            className="w-12 h-12"
            resizeMode="contain"
          />
          <Text>Cash on Delivery</Text>
        </View>

        <CustomButton
          title="Submit"
          handlePress={handleSubmitPress}
          className="flex-1 bg-green-500 py-3 rounded-lg"
          textStyles="text-center text-white text-lg font-semibold"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;
