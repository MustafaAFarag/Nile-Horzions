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
        name="home"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="sender"
        options={{ title: "Sender", headerShown: false }}
      />
      <Stack.Screen
        name="create"
        options={{ title: "Create Flight", headerShown: false }}
      />
      <Stack.Screen
        name="flights"
        options={{ title: "Flights", headerShown: false }}
      />
      <Stack.Screen
        name="myFlights"
        options={{ title: "My Flights", headerShown: false }}
      />
      <Stack.Screen
        name="MyReservations"
        options={{ title: "My Reservations", headerShown: false }}
      />
      <Stack.Screen
        name="settings"
        options={{ title: "Settings", headerShown: false }}
      />
      <Stack.Screen
        name="account"
        options={{ title: "Account", headerShown: false }}
      />
    </Stack>
  );
};

export default StackLayout;
