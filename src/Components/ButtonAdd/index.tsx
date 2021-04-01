import React, { useState, useReducer } from "react";
import { Button } from "./styles";
import { Alert } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const ButtonAdd = () => {
  const [location, setLocation] = useState(true);
  const route = useRoute();
  const navigator = useNavigation();

  function handleClickButton() {
    if (location) {
      setLocation(false);
      console.log("Foi pro editor");
      navigator.navigate("Editor");
    } else if (location == false) {
      console.log("Esta no editor e vai salvar");
      setLocation(true);
      Alert.alert("Salvou redireciona para home");
      navigator.navigate("Home");
    }
  }

  return (
    <Button
      activeOpacity={0.8}
      onPress={() => {
        handleClickButton();
      }}
      style={{ backgroundColor: "#FFD35E" }}
    >
      <Icon name="plus" style={{ color: "#F3F8F2" }} size={50} />
    </Button>
  );
};

export default ButtonAdd;
