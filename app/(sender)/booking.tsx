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

const Booking = () => {
  const handleCheckoutPress = () => {
    router.push("/Checkout");
  };

  return (
    <SafeAreaView className="h-full bg-blue-300 pt-14">
      <ScrollView className="w-full h-full px-4">
        <Text className="text-2xl font-pbold text-center text-red-500 mb-6">
          Booking
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

        <CustomButton
          title="Checkout"
          handlePress={handleCheckoutPress}
          className="bg-green-500 text-white rounded-lg py-3 px-8 mt-6"
        />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Booking;
