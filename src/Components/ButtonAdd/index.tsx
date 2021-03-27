import React from "react";
import { Text } from "react-native";
import { Button } from "./styles";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ButtonAdd = () => {
  const navigator = useNavigation();

  function handleAddNote() {
    navigator.navigate("Add");
  }

  return (
    <Button activeOpacity={0.8}>
      <Icon name="plus" style={{ color: "#F3F8F2" }} size={50} />
    </Button>
  );
};
export default ButtonAdd;
