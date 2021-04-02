import React from "react";
import { Alert, ToastAndroid } from "react-native";
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
import { View } from "react-native";
import api from "../../services/api";
import UserData from "../../Class/UserData";
import NoteData from "../../Class/NoteData";

import { useNavigation } from "@react-navigation/native";

const TopMenu = () => {
  const navigator = useNavigation();

  function handleLogout() {
    navigator.navigate("Login");
  }

  return (
    <MenuBar>
      <AboutButton onPress={handleLogout}>
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
