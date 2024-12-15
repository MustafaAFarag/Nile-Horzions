import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

type CalendarInputProps = {
  title: string;
  placeholder: string;
  onDateChange: (date: string) => void;
};

const CalendarInput = ({
  title,
  placeholder,
  onDateChange,
}: CalendarInputProps) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
    onDateChange(formattedDate);
    hideDatePicker();
  };

  return (
    <View className="my-4 flex-row items-center gap-4">
      <Text className="text-base font-medium text-gray-800 mb-2 w-1/3">
        {title}
      </Text>

      <TouchableOpacity
        onPress={showDatePicker}
        className="border border-gray-300 flex-1  justify-center px-4 h-12 rounded-lg bg-white text-gray-700 focus:border-blue-500"
      >
        <Text
          className={`text-gray-700 ${
            selectedDate ? "text-base" : "text-gray-400"
          }`}
        >
          {selectedDate || placeholder}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default CalendarInput;
