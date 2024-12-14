import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const Checkout = () => {
  const handleSubmitPress = () => {
    router.push("/myReservations");
  };
  return (
    <SafeAreaView className="h-full bg-blue-300">
      <ScrollView className="w-full h-full p-6">
        {/* Box 1 */}

        <View className="bg-red-100 m-2 flex-col gap-6">
          <View className="flex-row justify-between">
            <Text>From</Text>
            <Text>Cairo</Text>
            <Text>Nasr City</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>To</Text>
            <Text>Damascus</Text>
            <Text>Rukneddine</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Date</Text>
            <Text>15 December </Text>
            <Text>Saturday</Text>
          </View>
          <View className="flex-row justify-around">
            <Text>5 KG </Text>
            <Text>Paper </Text>
          </View>
        </View>

        {/* Box 2 */}

        <View className="bg-red-100 m-2 gap-6">
          <View className="flex-row justify-around">
            <Text>Delivery </Text>
            <Text>50 EGP </Text>
          </View>
          <View className="flex-row justify-around">
            <Text>Total</Text>
            <Text>450 EGP </Text>
          </View>
        </View>

        {/* Box 3*/}

        <Text>Payment</Text>
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
          className="flex-1 "
          textStyles="text-white"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;
