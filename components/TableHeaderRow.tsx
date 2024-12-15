import { View, Text } from "react-native";
import React from "react";

type TableHeaderRowProps = {
  headers: string[];
  className?: string;
  getStatusStyles?: (header: string) => string; // Function to style specific headers
};

const TableHeaderRow = ({
  headers,
  className = "",
  getStatusStyles,
}: TableHeaderRowProps) => {
  return (
    <View
      className={`flex-row justify-between border-b-2 border-gray-400 p-2 ${className}`}
    >
      {headers.map((header, index) => (
        <Text
          key={index}
          className={`flex-1 text-base font-semibold text-white text-center ${
            index === 0 ? "" : "text-center"
          } ${
            getStatusStyles ? getStatusStyles(header) : "" // Apply styles if getStatusStyles is provided
          }`}
        >
          {header}
        </Text>
      ))}
    </View>
  );
};

export default TableHeaderRow;
