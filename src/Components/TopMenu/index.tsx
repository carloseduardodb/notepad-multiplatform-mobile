import React from "react";
import { Alert } from "react-native";
import {
  MenuBar,
  AboutButton,
  Text,
  Logo,
  Title,
  SubTitle,
  ButtonSend,
  ButtonSendText,
} from "./styles";
import { Feather as Icon } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const TopMenu = () => {
  const navigator = useNavigation();

  function handleAbout() {
    Alert.alert(
      "Alerta!",
      "Esteja ciente que ao fazer atualizações no sistema é necessário clicar nos botões de atualizar para visualiza-las."
    );
  }

  return (
    <MenuBar>
      <AboutButton onPress={handleAbout}>
        <Icon style={{ color: "white" }} name="info" size={20} />
      </AboutButton>
      <Logo>
        <Title>Notepad</Title>
        <SubTitle>Multiplatform</SubTitle>
      </Logo>
    </MenuBar>
  );
};
export default TopMenu;
