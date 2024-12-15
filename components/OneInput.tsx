import { View, Text, TextInput } from "react-native";
import React from "react";

type OneInputProps = {
  title: string;
  placeholder: string;
};

const OneInput = ({ title, placeholder }: OneInputProps) => {
  return (
    <View className="my-4 flex-row items-center gap-4">
      <Text className="text-base font-pmedium text-gray-800 w-1/3">
        {title}
      </Text>
      <TextInput
        className="border border-gray-300  flex-1 px-4 h-12 rounded-lg bg-white text-gray-700 focus:border-blue-500"
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
      />
    </View>
  );
};

export default OneInput;
