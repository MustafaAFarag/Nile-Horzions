import { Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  title: string;
  handlePress?: () => void | Promise<void>;
  className?: string;
  textStyles?: string;
  height?: string;
};

const CustomButton = ({
  title,
  handlePress,
  className = "",
  textStyles = "",
  height,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl ${
        height ? height : "min-h-[60px]"
      } flex flex-row justify-center items-center ${className}`}
    >
      <Text
        className={`text-center text-primary text-lg font-psemibold ${textStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
