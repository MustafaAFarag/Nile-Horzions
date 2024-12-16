import CustomButton from "@/components/CustomButton";
import Table from "@/components/Table";
import TableDataRow from "@/components/TableDataRow";
import { images } from "@/constants";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const infoFlight = () => {
  const data = [
    {
      type: "From",
      city: "Cairo",
      address: "Nasr City",
      weight: "", // Ensure all fields exist
      typeOfWeight: "",
    },
    {
      type: "To",
      city: "Damascus",
      address: "Rekneddine",
      weight: "",
      typeOfWeight: "",
    },
    {
      type: "Weight",
      city: "",
      address: "",
      weight: "10kg",
      typeOfWeight: "",
    },
    {
      type: "Type of Weight",
      city: "",
      address: "",
      weight: "",
      typeOfWeight: "Any,Paper",
    },
  ];

  const handleBookPress = () => {
    router.push("/Booking");
  };

  return (
    <SafeAreaView className="h-full bg-blue-300 pt-14">
      <ScrollView className="w-full h-full px-4">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-2xl font-pbold text-blue-800">Flight Info</Text>
          <Text className="text-center text-xl font-pbold ">
            15 December Saturday
          </Text>
        </View>

        {/* Table Data */}
        {data.map((info, index) => (
          <View
            key={index}
            className={`flex-row justify-between items-center py-4 px-4 mb-3 rounded-lg ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <TableDataRow rowData={info} hideEmptyValues />
          </View>
        ))}

        <View className="flex-row justify-between mt-6 gap-4">
          <CustomButton
            title="Book"
            handlePress={handleBookPress}
            className="flex-1 bg-green-500 py-3 rounded-lg"
            textStyles="text-center text-white text-lg font-semibold"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default infoFlight;
