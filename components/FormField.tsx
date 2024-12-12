import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import icons from "@/constants/icons";

type FormFieldProps = {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStlyes?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
};

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStlyes,
  keyboardType,
}: FormFieldProps) => {
  // Separate states for Password and Confirm Password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isPasswordField = title === "Password";
  const isConfirmPasswordField = title === "Confirm Password";

  return (
    <View className={`space-y-2 ${otherStlyes}`}>
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row mb-5">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={
            (isPasswordField && !showPassword) ||
            (isConfirmPasswordField && !showConfirmPassword)
          }
          keyboardType={keyboardType}
        />
        {(isPasswordField || isConfirmPasswordField) && (
          <TouchableOpacity
            onPress={() =>
              isPasswordField
                ? setShowPassword(!showPassword)
                : setShowConfirmPassword(!showConfirmPassword)
            }
          >
            <Image
              source={
                (isPasswordField && !showPassword) ||
                (isConfirmPasswordField && !showConfirmPassword)
                  ? icons.eye
                  : icons.eyeHide
              }
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
