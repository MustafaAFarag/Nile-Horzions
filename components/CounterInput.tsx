import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

type CounterInputProps = {
  title: string;
  minValue?: number;
  maxValue?: number;
};

const CounterInput = ({
  title,
  minValue = 0,
  maxValue = 100,
}: CounterInputProps) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > minValue) {
      setCount(count - 1);
    }
  };

  return (
    <View className="my-4 flex-row items-center gap-4">
      {/* Label */}
      <Text className="text-base font-medium text-gray-800 w-1/3">{title}</Text>

      {/* Counter Section */}
      <View className="flex-row items-center border border-gray-300 rounded-lg h-12 bg-white overflow-hidden">
        {/* Decrement Button */}
        <TouchableOpacity
          onPress={handleDecrement}
          className="w-12 h-full justify-center items-center bg-gray-100 active:bg-gray-200"
        >
          <Text className="text-lg text-gray-800 font-semibold">-</Text>
        </TouchableOpacity>

        <Text className="text-gray-800 text-lg font-medium px-10 ">
          {count} KG
        </Text>

        {/* Increment Button */}
        <TouchableOpacity
          onPress={handleIncrement}
          className="w-12 h-full justify-center items-center bg-gray-100 active:bg-gray-200"
        >
          <Text className="text-lg text-gray-800 font-semibold">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterInput;
