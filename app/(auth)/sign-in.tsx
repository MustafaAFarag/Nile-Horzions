import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import { images } from "../../constants";
import CustomButton from "@/components/CustomButton";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleSubmit() {
    // if (!form.email || !form.password) {
    //   Alert.alert("Error", "Please fill in all fields.");
    //   return;
    // }

    router.replace("/home"); // why can't go index
  }

  return (
    <SafeAreaView className="h-full bg-blue-300">
      <ScrollView>
        <View className="w-full justify-center h-full p-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px] self-center"
            resizeMode="contain"
          />
          <Text className="text-red-500 text-center text-lg font-pmedium my-4">
            Welcome Back to Nile Horizons
          </Text>

          <FormField
            title="Email"
            placeholder="Enter your email"
            value={form.email}
            handleChangeText={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            keyboardType="email-address"
          />

          {/* Password Field */}
          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleChangeText={(e) =>
              setForm({
                ...form,
                password: e,
              })
            }
          />

          {/* Submit Button */}
          <CustomButton
            title="Sign In"
            handlePress={handleSubmit}
            containerStyles="mt-7"
          />

          {/* Link to Sign Up */}
          <View className="justify-center pt-5 flex-row gap-2">
            <Link
              href="/sign-up"
              className="text-lg text-red-500 font-pregular"
            >
              Don't have an account?{" "}
              <Text className="text-lg font-psemibold text-red-800">
                Sign Up
              </Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
