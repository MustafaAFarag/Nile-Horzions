import { View, Text } from "react-native";
import React from "react";

type TableDataRowProps = {
  rowData: {
    id: string;
    date: string;
    weight: string;
    status: string;
  };
  getStatusStyles: (status: string) => string;
};

const TableDataRow = ({ rowData, getStatusStyles }: TableDataRowProps) => {
  return (
    <View className="flex-row justify-between items-center py-3 px-2">
      {/* Data Fields */}
      <Text className="flex-1 text-base text-gray-800">{rowData.id}</Text>
      <Text className="flex-1 text-base text-gray-800 text-center">
        {rowData.date}
      </Text>
      <Text className="flex-1 text-base text-gray-800 text-center">
        {rowData.weight}
      </Text>
      <View
        className={`flex-1 text-center px-2 py-1 rounded-lg items-center justify-center ${getStatusStyles(
          rowData.status
        )}`}
      >
        <Text className="text-base font-psemibold">{rowData.status}</Text>
      </View>
    </View>
  );
};

export default TableDataRow;
