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
        name="Reservations"
        options={{ title: "Reservations", headerShown: false }}
      />
      <Stack.Screen
        name="CreateFlight"
        options={{ title: "Create Flight", headerShown: false }}
      />

      <Stack.Screen
        name="MyFlights"
        options={{ title: "My Flights", headerShown: false }}
      />
    </Stack>
  );
};

export default StackLayout;
