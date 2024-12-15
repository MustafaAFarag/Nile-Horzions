import { View, Text, TextInput } from "react-native";
import React from "react";

type TwoInputProps = {
  title: string;
  placeholder: string[];
};

const TwoInput = ({ title, placeholder }: TwoInputProps) => {
  return (
    <View className="my-4">
      <Text className="text-base font-pmedium text-gray-800 mb-2">{title}</Text>
      <View className="flex-row gap-4">
        <TextInput
          className="border border-gray-300 flex-1 px-4 h-12 rounded-lg bg-white text-gray-700 focus:border-blue-500"
          placeholder={placeholder[0]}
          placeholderTextColor="#7b7b8b"
        />
        <TextInput
          className="border border-gray-300 flex-1 px-4 h-12 rounded-lg bg-white text-gray-700 focus:border-blue-500"
          placeholder={placeholder[1]}
          placeholderTextColor="#7b7b8b"
        />
      </View>
    </View>
  );
};

export default TwoInput;
