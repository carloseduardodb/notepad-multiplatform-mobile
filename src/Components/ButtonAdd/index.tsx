import React from "react";
import { Button } from "./styles";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const ButtonAdd = () => {
  const route = useRoute();
  const navigator = useNavigation();

  function handleClickButton() {
    navigator.navigate("Editor", { id: "", text: "", title: "" });
  }

  return (
    <Button
      activeOpacity={0.8}
      onPress={() => {
        handleClickButton();
      }}
    >
      <Icon name="plus" style={{ color: "#F3F8F2" }} size={50} />
    </Button>
  );
};

export default ButtonAdd;
