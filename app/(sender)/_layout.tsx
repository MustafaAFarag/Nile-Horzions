import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="flights"
        options={{ title: "Flights", headerShown: false }}
      />
    </Stack>
  );
};

export default StackLayout;
