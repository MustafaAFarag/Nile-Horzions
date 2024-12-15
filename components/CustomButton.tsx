import { Text, TouchableOpacity, View } from "react-native";

type CustomButtonProps = {
  title: string;
  handlePress?: () => void | Promise<void>;
  className?: string;
  textStyles?: string;
  icon?: React.ReactNode;
};

const CustomButton = ({
  title,
  handlePress,
  className = "",
  textStyles = "",
  icon,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`flex flex-row justify-center items-center ${className}`}
    >
      {/* Add icon if provided */}
      <Text>{icon && <View className="mr-2">{icon}</View>}</Text>
      <Text className={`text-center text-lg font-psemibold ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
