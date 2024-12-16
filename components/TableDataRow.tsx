import { View, Text } from "react-native";
import React from "react";

type TableDataRowProps = {
  rowData: Record<string, string | number | undefined | null>; // Flexible row data
  getStatusStyles?: (status: string) => string; // Optional: for styling specific columns (e.g., status)
  hideEmptyValues?: boolean; // Optional: control rendering of empty values
};

const TableDataRow = ({
  rowData,
  getStatusStyles,
  hideEmptyValues = false,
}: TableDataRowProps) => {
  return (
    <View className="flex-row justify-between items-center py-2 px-1">
      {Object.entries(rowData).map(([key, value], index) => {
        // Skip rendering if the feature is enabled and value is null/undefined/empty
        if (hideEmptyValues && (value == null || value === "")) return null;

        return (
          <View
            key={index}
            className={`flex-1 ${
              key === "status" && typeof value === "string" && getStatusStyles
                ? getStatusStyles(value)
                : ""
            } px-1 py-0.5 items-center justify-center ${
              key === "status" ? "rounded-lg" : ""
            }`}
          >
            <Text
              className={`text-sm ${
                key === "status" && typeof value === "string"
                  ? "font-pmedium text-[0.750rem]"
                  : "text-gray-700"
              } ${
                key === "status" && typeof value === "string"
                  ? "text-center "
                  : ""
              }`}
            >
              {value || "" /* Render empty string if value is null/undefined */}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default TableDataRow;
