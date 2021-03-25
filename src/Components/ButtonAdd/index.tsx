import React from "react";
import { Text } from "react-native";
import { Button } from "./styles";
import { Feather as Icon } from "@expo/vector-icons";

const ButtonAdd = () => {
  return (
    <Button activeOpacity={0.8}>
      <Icon name="plus" style={{ color: "#F3F8F2" }} size={50} />
    </Button>
  );
};
export default ButtonAdd;
