import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import { images } from "../../constants";
import CustomButton from "@/components/CustomButton";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleSubmit() {
    if (form.password !== form.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    // Proceed with submission
    router.replace("/sign-in");
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
            Sign up to Nile Horizons
          </Text>

          <FormField
            title="Email"
            placeholder="Email"
            value={form.email}
            handleChangeText={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            placeholder="Password"
            value={form.password}
            handleChangeText={(e) =>
              setForm({
                ...form,
                password: e,
              })
            }
          />
          <FormField
            title="Confirm Password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            handleChangeText={(e) =>
              setForm({
                ...form,
                confirmPassword: e,
              })
            }
          />

          <CustomButton
            title="Sign Up"
            handlePress={handleSubmit}
            className="mt-7"
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Link
              href="/sign-in"
              className="text-lg text-red-500 font-pregular"
            >
              Have an account Already?{" "}
              <Text className="text-lg font-psemibold text-red-800">
                Sign In
              </Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
