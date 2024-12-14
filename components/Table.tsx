import React from "react";
import { View, Text, Pressable } from "react-native";

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Confirmed":
      return "bg-green-100 text-green-500";
    case "Pending":
      return "bg-yellow-100 text-yellow-500";
    case "Cancelled":
      return "bg-red-100 text-red-500";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

interface TableProps {
  headers: string[];
  data: any[];
  onRowPress?: (row: any) => void;
}

const Table = ({ headers, data, onRowPress }: TableProps) => {
  return (
    <View>
      {/* Table Header */}
      <View className="flex-row justify-between border-b-2 border-gray-300 p-2 bg-blue-600 rounded-lg">
        {headers.map((header, index) => (
          <Text
            key={index}
            className={`flex-1 text-sm font-bold text-white text-center`}
          >
            {header}
          </Text>
        ))}
      </View>

      {/* Table Rows */}
      {data.map((row, index) => (
        <TableRow
          key={index}
          row={row}
          onPress={() => onRowPress?.(row)}
          isEven={index % 2 === 0}
        />
      ))}
    </View>
  );
};

interface TableRowProps {
  row: any;
  onPress?: () => void;
  isEven: boolean;
}

const TableRow = ({ row, onPress, isEven }: TableRowProps) => (
  <Pressable
    onPress={onPress}
    className={`flex-row justify-between items-center py-3 px-2 mb-2 rounded-lg ${
      isEven ? "bg-gray-100" : "bg-white"
    }`}
  >
    <Text className="flex-1 text-sm text-gray-800">{row.type}</Text>
    <Text className="flex-1 text-sm text-gray-800 text-center">{row.w}</Text>
    <Text className="flex-1 text-sm text-gray-800 text-center">
      {row.paper}
    </Text>
    <Text className="flex-1 text-sm text-gray-800 text-right">{row.fees}</Text>
    <View
      className={`flex-1 text-center px-2 py-1 rounded-lg ${getStatusStyles(
        row.status
      )}`}
    >
      <Text className="text-sm font-semibold">{row.status}</Text>
    </View>
  </Pressable>
);

export default Table;
