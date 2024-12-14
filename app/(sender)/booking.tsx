import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TravelerOptions from "@/components/TravelerOptions";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { icons } from "@/constants";

const Booking = () => {
  const handleCheckoutPress = () => {
    router.push("/checkout");
  };

  return (
    <SafeAreaView className="h-full bg-blue-300">
      <ScrollView className="w-full h-full p-6">
        <Text className="text-2xl font-pbold text-center text-red-500 mb-6">
          Booking
        </Text>

        <TravelerOptions title="Weight" placeholder="- 2 KG +" />
        <TravelerOptions title="Type of Weight" placeholder="Any" />
        <TravelerOptions title="Paper Count" placeholder="- 3 +" />
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

        <TravelerOptions title="Delivery Fees" placeholder="45 EGP" />
        <TravelerOptions title="Total" placeholder="450 EGP" />
        <View className="flex-row justify-between mt-6 gap-4">
          <CustomButton
            title="Checkout"
            handlePress={handleCheckoutPress}
            className="flex-1 "
            textStyles="text-white"
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Booking;
