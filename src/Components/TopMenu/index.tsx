import React from "react";
import { MenuBar, LogoutButton, Text, Logo, Title, SubTitle } from "./styles";
import { Feather as Icon } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const TopMenu = () => {
  const navigator = useNavigation();

  function handleLogout() {
    navigator.navigate("Login");
  }

  return (
    <MenuBar>
      <LogoutButton onPress={handleLogout}>
        <Icon style={{ color: "white" }} name="log-out" size={20} />
        <Text>Logout</Text>
      </LogoutButton>
      <Logo>
        <Title>Notepad</Title>
        <SubTitle>Multiplatform</SubTitle>
      </Logo>
    </MenuBar>
  );
};

export default TopMenu;
