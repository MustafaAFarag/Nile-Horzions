import CustomButton from "@/components/CustomButton";
import TableDataRow from "@/components/TableDataRow";
import TableHeaderRow from "@/components/TableHeaderRow";
import { images } from "@/constants";
import { router } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ReservationsInfo = () => {
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

  const handleRejectPress = () => {
    router.push("/Reservations");
  };

  const handleAcceptPress = () => {
    router.push("/Reservations");
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Paid":
        return "rounded-lg bg-green-500";

      default:
        return "";
    }
  };

  const total = ["Total", "450 EGP", "Paid"];

  return (
    <SafeAreaView className="h-full bg-blue-300 pt-14">
      <ScrollView className="w-full px-4">
        {/* Page Header */}
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-xl font-bold text-blue-800">
            Reservation Info
          </Text>
        </View>

        {/* Table Data */}
        {data.map((reservation, index) => (
          <View
            key={index}
            className={`flex-row justify-between items-center py-4 px-4 mb-3 rounded-lg ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <TableDataRow rowData={reservation} hideEmptyValues />
          </View>
        ))}

        {/* Thumbnail Image */}
        <View className="mt-6 mb-4 justify-center items-center">
          <Image
            source={images.thumbnail}
            className="w-full h-48"
            resizeMode="contain"
          />
        </View>

        {/* Total Section */}

        <TableHeaderRow
          headers={total}
          className="bg-blue-700 mb-3"
          getStatusStyles={getStatusStyles}
        />

        {/* Action Buttons */}
        <View className="flex-row justify-between mt-6 gap-4">
          <CustomButton
            title="Reject"
            handlePress={handleRejectPress}
            className="flex-1 bg-red-500 py-3 rounded-lg"
            textStyles="text-center text-white text-lg font-semibold"
          />
          <CustomButton
            title="Accept"
            handlePress={handleAcceptPress}
            className="flex-1 bg-green-500 py-3 rounded-lg"
            textStyles="text-center text-white text-lg font-semibold"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReservationsInfo;
