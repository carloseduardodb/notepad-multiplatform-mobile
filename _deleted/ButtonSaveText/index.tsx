import React from "react";
import { Button } from "./styles";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const ButtonSaveText = () => {
  const route = useRoute();
  const navigator = useNavigation();

  function handleClickButton() {
    navigator.navigate("Editor");
  }

  return (
    <Button
      activeOpacity={0.8}
      onPress={() => {
        handleClickButton();
      }}
    >
      <Icon name="save" style={{ color: "#F3F8F2" }} size={50} />
    </Button>
  );
};

export default ButtonSaveText;
