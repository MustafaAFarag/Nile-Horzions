import { View, Text } from "react-native";
import React from "react";

type TableHeaderRowProps = {
  headers: string[];
  className?: string;
};

const TableHeaderRow = ({ headers, className = "" }: TableHeaderRowProps) => {
  return (
    <View
      className={`flex-row justify-between border-b-2 border-gray-400 p-2 ${className}`}
    >
      {headers.map((header, index) => (
        <Text
          key={index}
          className={`flex-1 text-base font-semibold text-white text-center ${
            index === 0 ? "" : "text-center"
          }`}
        >
          {header}
        </Text>
      ))}
    </View>
  );
};

export default TableHeaderRow;
