import CustomButton from "@/components/CustomButton";
import Table from "@/components/Table";
import { images } from "@/constants";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ReservationsInfo = () => {
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
      type: "Weight",
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
  ];

  const handleRejectPress = () => {
    router.push("/reservations");
  };

  const handleAcceptPress = () => {
    router.push("/reservations");
  };

  return (
    <SafeAreaView className="h-full bg-blue-300">
      <ScrollView className="w-full h-full p-6">
        {/* Table Component */}
        <Table data={data} onRowPress={(row) => console.log(row)} />

        {/* Thumbnail Image */}
        <View className="mt-6 mb-4 justify-center items-center">
          <Image
            source={images.thumbnail}
            className="w-full h-48"
            resizeMode="contain"
          />
        </View>

        {/* Total Section */}
        <Pressable className="flex-row justify-between items-center py-4 px-4 mb-6 rounded-lg bg-gray-100 mt-4 shadow-md">
          <Text className="text-sm text-gray-800 font-medium">Total</Text>
          <Text className="text-sm text-gray-800 font-semibold text-center">
            450 EGP
          </Text>
          <View className="px-2 py-1 rounded-lg bg-green-500">
            <Text className="text-sm font-semibold text-white">Paid</Text>
          </View>
        </Pressable>

        <View className="flex-row justify-between mt-6 gap-4">
          <CustomButton
            title="Reject"
            handlePress={handleRejectPress}
            className="flex-1 "
            textStyles="text-white"
          />
          <CustomButton
            title="Accept"
            handlePress={handleAcceptPress}
            className="flex-1 "
            textStyles="text-white"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReservationsInfo;
