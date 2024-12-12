import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-blue-300 items-center justify-center">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View
          className=" 
        h-full px-4 justify-center items-center"
        >
          <Text className="text-2xl text-red-500 font-pblack">Index</Text>
          <StatusBar style="auto" />
          <Link href="/home" className="text-red-500">
            Go to Home
          </Link>
          <Link href="/sign-up" className="text-red-500">
            Go to Sign Up
          </Link>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Index;
