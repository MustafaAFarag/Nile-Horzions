import { Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  title: string;
  handlePress: () => void | Promise<void>;
  containerStyles?: string;
  textStyles?: string;
};

const CustomButton = ({
  title,
  handlePress,
  containerStyles = "",
  textStyles = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[60px] flex flex-row justify-center items-center ${containerStyles}`}
    >
      <Text className={`text-primary text-lg font-psemibold ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
