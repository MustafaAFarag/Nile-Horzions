import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="reservations"
        options={{ title: "Reservations", headerShown: false }}
      />
      <Stack.Screen
        name="createFlight"
        options={{ title: "Create Flight", headerShown: false }}
      />

      <Stack.Screen
        name="myFlights"
        options={{ title: "My Flights", headerShown: false }}
      />
    </Stack>
  );
};

export default StackLayout;
