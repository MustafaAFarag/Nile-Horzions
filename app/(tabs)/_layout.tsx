import { View, Text, Image, ImageSourcePropType } from "react-native";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";

type TabIconProps = {
  icon: ImageSourcePropType;
  name: string;
  color: string;
  focused: boolean;
};

const TabIcon = ({ icon, name, color, focused }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6 mt-4"
      />
      <Text
        className={`${
          focused ? "font-psemibold" : "font-pregular"
        } text-[0.66rem] w-20 text-center`}
        numberOfLines={1}
        style={{ color: color }} // color of text of inactive
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: "tomato", Default is Blue
        // tabBarInactiveTintColor: "gray", Default us Gray
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "purple", // color for the background
          borderTopWidth: 1,
          borderTopColor: "blue",
          height: 50,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="sender"
        options={{
          title: "Sender",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Sender"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Create"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="flights"
        options={{
          title: "Flights",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Flights"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="myFlights"
        options={{
          title: "My Flights",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="My Flights"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="MyReservations"
        options={{
          title: "My Reservation",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="My Reservations"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.search}
              color={color}
              name="Settings"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.search}
              color={color}
              name="Account"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
