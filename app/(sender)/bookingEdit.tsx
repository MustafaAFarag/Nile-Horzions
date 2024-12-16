import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TravelerOptions from "@/components/OneInput";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { icons } from "@/constants";
import OneInput from "@/components/OneInput";
import CounterInput from "@/components/CounterInput";

const BookingEdit = () => {
  const handleCancelPress = () => {
    router.push("/MyReservations");
  };

  const handleUpdatePress = () => {
    router.push("/MyReservations");
  };

  return (
    <SafeAreaView className="h-full bg-blue-300 pt-14">
      <ScrollView className="w-full h-full px-4">
        <Text className="text-2xl font-pbold text-center text-red-500 mb-6">
          Edit Booking
        </Text>

        <CounterInput title="Weight" minValue={0} maxValue={50} />

        <OneInput title="Type of Weight" placeholder="Clothes,Paper" />

        <CounterInput title="Paper Count" minValue={0} maxValue={50} />

        <View className="flex-row gap-10">
          <Text className="text-base font-pmedium text-gray-800 w-1/3">
            Upload Picture
          </Text>
          <Image
            source={icons.upload}
            className="w-8 h-8"
            resizeMode="contain"
          />
        </View>
        <View className="flex-row gap-10 mt-8">
          <Text className="text-base font-pmedium text-gray-800 w-1/3 ">
            Deliver to the Travelier
          </Text>
          <Image
            source={icons.rightArrow}
            className="w-8 h-8"
            resizeMode="contain"
          />
        </View>

        <OneInput title="Delivery Fees" placeholder="45 EGP" />
        <OneInput title="Total" placeholder="450 EGP" />

        <View className="flex-row justify-between mt-6 gap-4">
          <CustomButton
            title="Cancel"
            handlePress={handleCancelPress}
            className="flex-1 bg-red-500 py-3 rounded-lg"
            textStyles="text-center text-white text-lg font-semibold"
          />
          <CustomButton
            title="Update"
            handlePress={handleUpdatePress}
            className="flex-1 bg-green-500 py-3 rounded-lg"
            textStyles="text-center text-white text-lg font-semibold"
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default BookingEdit;
