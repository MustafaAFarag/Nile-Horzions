import CustomButton from "@/components/CustomButton";
import Table from "@/components/Table";
import { images } from "@/constants";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const infoFlight = () => {
  const data = [
    {
      type: "From",
      w: "Cairo",
      paper: "",
      fees: "Nasr City",
      status: "",
    },
    {
      type: "To",
      w: "Damascus",
      paper: "",
      fees: "Rekneddine",
      status: "",
    },
    {
      type: "Available Weight",
      w: "",
      paper: "10kg",
      fees: "",
      status: "",
    },
    {
      type: "Type of Weight",
      w: "",
      paper: "Any,Paper",
      fees: "",
      status: "",
    },
    {
      type: "Last Day of Delievery",
      w: "",
      paper: "14-12-2024",
      fees: "",
      status: "",
    },
    {
      type: "Price per KG",
      w: "",
      paper: "150 EGP",
      fees: "",
      status: "",
    },
    {
      type: "Price per Paper",
      w: "",
      paper: "50 EGP",
      fees: "",
      status: "",
    },
  ];

  const handleBookPress = () => {
    router.push("/booking");
  };

  return (
    <SafeAreaView className="h-full bg-blue-300">
      <ScrollView className="w-full h-full p-6">
        <Text className="text-xl font-bold text-blue-800">My Reservations</Text>
        <Text className="text-center text-xl font-pbold ">
          15 December Saturday
        </Text>
        {/* Table Component */}
        <Table data={data} onRowPress={(row) => console.log(row)} />

        <View className="flex-row justify-between mt-6 gap-4">
          <CustomButton
            title="Book"
            handlePress={handleBookPress}
            className="flex-1 "
            textStyles="text-white"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default infoFlight;
